import { config as loadEnv } from "dotenv";
import { resolve } from "path";

// Load environment variables from root .env
loadEnv({ path: resolve(__dirname, "../../.env") });

export type LLMProvider =
  | "mock"
  | "groq"
  | "openrouter"
  | "openai"
  | "gemini"
  | "ollama";

const REQUIRED_DISCLAIMER =
  "This is a neutral observation, not a trading recommendation.";

function getEnv(): { provider: LLMProvider; apiKey: string; model?: string } {
  const provider = (process.env.LLM_PROVIDER || "mock") as LLMProvider;
  const apiKey = process.env.LLM_API_KEY || "";
  const model = process.env.LLM_MODEL || undefined;
  return { provider, apiKey, model };
}

// ─── Mock mode ────────────────────────────────────────────

function detectMockIntent(systemPrompt: string): string {
  const lower = systemPrompt.toLowerCase();
  if (lower.includes("decide") || lower.includes("keep")) return "decide";
  if (lower.includes("facts") || lower.includes("normalize"))
    return "normalize";
  if (lower.includes("context") || lower.includes("connect")) return "context";
  if (lower.includes("pattern") || lower.includes("similarity"))
    return "similarity";
  if (lower.includes("prohibited") || lower.includes("bias")) return "bias";
  if (lower.includes("digest") || lower.includes("summary")) return "digest";
  return "generic";
}

function generateMockResponse(
  systemPrompt: string,
  userMessage: string
): string {
  const intent = detectMockIntent(systemPrompt);

  switch (intent) {
    case "decide":
      return JSON.stringify({
        keep: true,
        reason: "Mock decision: event meets significance threshold for storage.",
      });

    case "normalize":
      return JSON.stringify({
        eventType: "large_wallet_movement",
        facts: [
          { field: "from", value: "0xabc...", confidence: 0.95 },
          { field: "to", value: "0xdef...", confidence: 0.95 },
          { field: "amount", value: "1500000", confidence: 0.99 },
        ],
      });

    case "context":
      return JSON.stringify({
        connections:
          "Mock context: historically linked to whale accumulation pattern. 3 prior observations within 72h window.",
        contextCoverage: 65,
      });

    case "similarity":
      return JSON.stringify({
        patternSimilarity: 72,
        matchedPattern:
          "Mock pattern: recurring large transfer before price volatility",
      });

    case "bias": {
      const isClean = !userMessage.toLowerCase().includes("guaranteed");
      const cleanText = isClean
        ? userMessage
        : userMessage.replace(/guaranteed/gi, "observed");
      return JSON.stringify({
        clean: isClean,
        text: cleanText,
        violations: isClean
          ? []
          : ["Removed 'guaranteed' (speculative language)"],
      });
    }

    case "digest":
      return [
        `=== AlphaCouncil Daily Digest (mock) ===`,
        ``,
        REQUIRED_DISCLAIMER,
        ``,
        `Network: Mantle Sepolia`,
        `Observations: 12 new events indexed`,
        `Patterns detected: 3`,
        `Context coverage: 65%`,
        ``,
        `Top observations:`,
        `- Large wallet movement: 0xabc... → 0xdef... (1.5M tokens)`,
        `- Recurring pattern: whale accumulation pre-volatility`,
        `- New token profile indexed: USDC on Mantle`,
        ``,
        REQUIRED_DISCLAIMER,
        `=============================================`,
      ].join("\n");

    default:
      return JSON.stringify({
        response: "Mock generic response",
        input: userMessage,
      });
  }
}

// ─── Groq (FREE TIER — recommended) ───────────────────────
// Free: 30 RPM, 1K-14.4K RPD, 6K-30K TPM, 100K-500K TPD
// Models: llama-3.1-8b, llama-3.3-70b, llama-4-scout, qwen3
// Sign up: https://console.groq.com/keys (no credit card)

async function callGroq(
  apiKey: string,
  systemPrompt: string,
  userMessage: string,
  model?: string
): Promise<string> {
  // llama-3.1-8b has highest free tier limits (14.4K RPD, 500K TPD)
  const resolvedModel = model || "llama-3.1-8b-instant";

  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: resolvedModel,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        temperature: 0.2,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      `Groq API error: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as any;
  return data.choices?.[0]?.message?.content || "";
}

// ─── OpenRouter ───────────────────────────────────────────
// Has free models but limited. Good for fallback.
// Sign up: https://openrouter.ai/

async function callOpenRouter(
  apiKey: string,
  systemPrompt: string,
  userMessage: string,
  model?: string
): Promise<string> {
  const resolvedModel = model || "meta-llama/llama-3.1-8b-instruct:free";

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://alphacouncil.local",
        "X-Title": "AlphaCouncil",
      },
      body: JSON.stringify({
        model: resolvedModel,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        temperature: 0.2,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      `OpenRouter API error: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as any;
  return data.choices?.[0]?.message?.content || "";
}

// ─── OpenAI (paid, but cheap — gpt-4o-mini) ──────────────

async function callOpenAI(
  apiKey: string,
  systemPrompt: string,
  userMessage: string,
  model?: string
): Promise<string> {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: model || "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
      temperature: 0.2,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `OpenAI API error: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as any;
  return data.choices?.[0]?.message?.content || "";
}

// ─── Google Gemini (FREE TIER — 1,500 requests/day) ───────
// Model: gemini-2.0-flash-lite (fastest, cheapest)
// Sign up: https://aistudio.google.com/app/apikey (no credit card)

async function callGemini(
  apiKey: string,
  systemPrompt: string,
  userMessage: string,
  model?: string
): Promise<string> {
  const resolvedModel = model || "gemini-2.0-flash-lite";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${resolvedModel}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [
            { text: `[System: ${systemPrompt}]\n\n${userMessage}` },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.2,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Gemini API error: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as any;
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
}

// ─── Ollama (LOCAL — fully free, requires local GPU) ──────
// Run any open-source model locally: llama3, mistral, phi3, qwen2.5
// Install: https://ollama.com/download
// Default: pulls from localhost:11434

async function callOllama(
  _apiKey: string,
  systemPrompt: string,
  userMessage: string,
  model?: string
): Promise<string> {
  const resolvedModel = model || "llama3.1";
  const host = process.env.OLLAMA_HOST || "http://localhost:11434";

  const response = await fetch(`${host}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: resolvedModel,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
      stream: false,
      options: {
        temperature: 0.2,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Ollama error: ${response.status} ${response.statusText}. Is Ollama running? Run: ollama run ${resolvedModel}`
    );
  }

  const data = (await response.json()) as any;
  return data.message?.content || "";
}

// ─── Main entry point ─────────────────────────────────────

/**
 * Call the configured LLM provider.
 *
 * Provider setup:
 * - mock (default): No key needed. Returns canned responses.
 * - groq: Get free key at https://console.groq.com/keys (no credit card)
 * - gemini: Get free key at https://aistudio.google.com/app/apikey (no credit card)
 * - openrouter: Sign up at https://openrouter.ai/ (has free models)
 * - openai: Paid, but cheap (gpt-4o-mini). Sign up at https://platform.openai.com/
 * - ollama: Local models. Install from https://ollama.com/download
 */
export async function callLLM(
  systemPrompt: string,
  userMessage: string
): Promise<string> {
  const { provider, apiKey, model } = getEnv();

  if (provider === "mock") {
    return generateMockResponse(systemPrompt, userMessage);
  }

  if (provider === "ollama") {
    return callOllama(apiKey, systemPrompt, userMessage, model);
  }

  if (!apiKey) {
    throw new Error(`LLM_API_KEY is required for provider "${provider}"`);
  }

  switch (provider) {
    case "groq":
      return callGroq(apiKey, systemPrompt, userMessage, model);
    case "openrouter":
      return callOpenRouter(apiKey, systemPrompt, userMessage, model);
    case "openai":
      return callOpenAI(apiKey, systemPrompt, userMessage, model);
    case "gemini":
      return callGemini(apiKey, systemPrompt, userMessage, model);
    default:
      return generateMockResponse(systemPrompt, userMessage);
  }
}

export { REQUIRED_DISCLAIMER };
