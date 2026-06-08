import { callLLM, REQUIRED_DISCLAIMER } from "./provider";
import {
  Observation,
  NormalizedEvent,
  PatternMemory,
  BiasCheckResult,
  DigestPayload,
  CollectorDecision,
  ContextResult,
  WalletProfile,
  TokenProfile,
} from "@alphacouncil/shared";

/* ------------------------------------------------------------------ */
/*  Local type aliases for inputs not exported by shared              */
/* ------------------------------------------------------------------ */

/** Raw ERC-20 event arriving from the indexer. */
export interface RawEvent {
  address: string;
  blockHash: string;
  blockNumber: number;
  data: string;
  logIndex: number;
  removed: boolean;
  topics: string[];
  transactionHash: string;
  transactionIndex: number;
  args?: {
    from?: string;
    to?: string;
    value?: string;
  };
}

/** Simplified past observation for context building. */
export interface PastObservation {
  id: string;
  eventType: string;
  primaryEntity?: string;
  summary: string;
  createdAt: Date;
}

/** Result of pattern matching. */
export interface PatternMatchResult {
  patternSimilarity: number;
  matchedPattern: string;
}

/* ------------------------------------------------------------------ */
/*  Helper utilities                                                   */
/* ------------------------------------------------------------------ */

function appendDisclaimer(text: string): string {
  if (text.includes(REQUIRED_DISCLAIMER)) return text;
  return `${text.trim()}\n\n${REQUIRED_DISCLAIMER}`;
}

function safeJsonParse<T>(raw: string, fallback: T): T {
  try {
    const cleaned = raw.replace(/^```json\s*|\s*```$/g, "").trim();
    return JSON.parse(cleaned) as T;
  } catch {
    return fallback;
  }
}

/* ------------------------------------------------------------------ */
/*  1. Collector Agent                                                 */
/* ------------------------------------------------------------------ */

export async function collectorAgent(
  rawEvent: RawEvent
): Promise<{ keep: boolean; reason: string }> {
  const systemPrompt = `
You are a blockchain data collector. Decide whether an ERC-20 Transfer event is worth storing in the memory graph.
Consider: transfer amount, token significance, and wallet reputation.
Return strictly JSON in this format: { "keep": boolean, "reason": string }
`.trim();

  const userMessage = JSON.stringify(rawEvent, (_, v) => typeof v === "bigint" ? v.toString() : v, 2);

  const raw = await callLLM(systemPrompt, userMessage);
  const parsed = safeJsonParse<{ keep?: boolean; reason?: string }>(raw, {
    keep: true,
    reason: "Fallback: event retained by default.",
  });

  return {
    keep: parsed.keep ?? true,
    reason: parsed.reason ?? "Fallback: event retained by default.",
  };
}

/* ------------------------------------------------------------------ */
/*  2. Normalizer Agent                                                */
/* ------------------------------------------------------------------ */

export async function normalizerAgent(
  event: RawEvent
): Promise<{ eventType: string; facts: Array<{ field: string; value: string; confidence: number }> }> {
  const systemPrompt = `
You are a data normalizer. Convert a raw ERC-20 Transfer event into structured facts and an eventType.
Return strictly JSON in this format:
{
  "eventType": "large_wallet_movement",
  "facts": [
    { "field": "from", "value": "...", "confidence": 0.95 },
    { "field": "to", "value": "...", "confidence": 0.95 },
    { "field": "amount", "value": "...", "confidence": 0.99 }
  ]
}
`.trim();

  const userMessage = JSON.stringify(event, (_, v) => typeof v === "bigint" ? v.toString() : v, 2);

  const raw = await callLLM(systemPrompt, userMessage);
  const parsed = safeJsonParse<{
    eventType?: string;
    facts?: Array<{ field: string; value: string; confidence: number }>;
  }>(raw, {
    eventType: "generic_transfer",
    facts: [
      { field: "raw_event", value: JSON.stringify(event), confidence: 0.5 },
    ],
  });

  return {
    eventType: parsed.eventType ?? "generic_transfer",
    facts: Array.isArray(parsed.facts) ? parsed.facts : [],
  };
}

/* ------------------------------------------------------------------ */
/*  3. Context Builder Agent                                           */
/* ------------------------------------------------------------------ */

export async function contextBuilderAgent(
  observation: Observation,
  past: PastObservation[]
): Promise<{ connections: string; contextCoverage: number }> {
  const systemPrompt = `
You are a context builder. Explain historical links between the current observation and past observations.
Return strictly JSON in this format:
{
  "connections": "Brief summary of historical links...",
  "contextCoverage": 0-100
}
`.trim();

  const userMessage = JSON.stringify(
    { current: observation, pastObservations: past },
    null,
    2
  );

  const raw = await callLLM(systemPrompt, userMessage);
  const parsed = safeJsonParse<{
    connections?: string;
    contextCoverage?: number;
  }>(raw, {
    connections: "Fallback: no historical context available.",
    contextCoverage: 10,
  });

  return {
    connections:
      parsed.connections ?? "Fallback: no historical context available.",
    contextCoverage: Number.isFinite(parsed.contextCoverage)
      ? Math.min(100, Math.max(0, parsed.contextCoverage!))
      : 10,
  };
}

/* ------------------------------------------------------------------ */
/*  4. Pattern Matcher Agent                                           */
/* ------------------------------------------------------------------ */

export async function patternMatcherAgent(
  observation: Observation,
  patterns: PatternMemory[]
): Promise<PatternMatchResult> {
  const systemPrompt = `
You are a pattern matcher. Compare the current observation with known patterns and report similarity.
Return strictly JSON in this format:
{
  "patternSimilarity": 0-100,
  "matchedPattern": "Description of the best matching pattern or 'none'"
}
`.trim();

  const userMessage = JSON.stringify(
    { observation, knownPatterns: patterns },
    null,
    2
  );

  const raw = await callLLM(systemPrompt, userMessage);
  const parsed = safeJsonParse<{
    patternSimilarity?: number;
    matchedPattern?: string;
  }>(raw, {
    patternSimilarity: 0,
    matchedPattern: "none",
  });

  return {
    patternSimilarity: Number.isFinite(parsed.patternSimilarity)
      ? Math.min(100, Math.max(0, parsed.patternSimilarity!))
      : 0,
    matchedPattern: parsed.matchedPattern ?? "none",
  };
}

/* ------------------------------------------------------------------ */
/*  5. Bias Guard Agent                                                */
/* ------------------------------------------------------------------ */

const PROHIBITED_PHRASES = [
  "guaranteed",
  "100% sure",
  "will definitely",
  "can't lose",
  "risk-free",
  "pump guaranteed",
  "moon soon",
  "get rich",
];

function findViolations(text: string): string[] {
  const found: string[] = [];
  for (const phrase of PROHIBITED_PHRASES) {
    const regex = new RegExp(phrase, "gi");
    if (regex.test(text)) {
      found.push(`Removed "${phrase}" (prohibited speculative language)`);
    }
  }
  return found;
}

export async function biasGuardAgent(text: string): Promise<{ clean: boolean; text: string; violations: string[] }> {
  const systemPrompt = `
You are a bias guard. Check the input text for prohibited speculative phrases.
If any are found, rewrite the text neutrally and list the violations.
Always ensure the output includes the disclaimer: "${REQUIRED_DISCLAIMER}"
Return strictly JSON in this format:
{
  "clean": boolean,
  "text": "potentially rewritten text",
  "violations": ["description of violation 1", ...]
}
`.trim();

  const raw = await callLLM(systemPrompt, text);
  const parsed = safeJsonParse<{
    clean?: boolean;
    text?: string;
    violations?: string[];
  }>(raw, { clean: undefined, text: undefined, violations: undefined });

  // Build result with fallback logic
  const hasProhibited = findViolations(text).length > 0;
  const llmSaidClean = parsed.clean === true;
  const llmText = parsed.text ?? text;

  const violations =
    parsed.violations ?? (hasProhibited ? findViolations(text) : []);

  const isClean = llmSaidClean && violations.length === 0;

  // Ensure disclaimer is present — **this is the Bias Guard enforcement**
  const finalText = appendDisclaimer(llmText);

  return {
    clean: isClean,
    text: finalText,
    violations,
  };
}

/* ------------------------------------------------------------------ */
/*  6. Digest Writer Agent                                             */
/* ------------------------------------------------------------------ */

export async function digestWriterAgent(payload: any): Promise<string> {
  const systemPrompt = `
You are a digest writer. Write a neutral, factual Telegram digest summarizing the day's blockchain observations.
Structure:
- Title with "AlphaCouncil Daily Digest"
- Disclaimer: "${REQUIRED_DISCLAIMER}"
- Network stats (observations count, patterns detected, context coverage)
- Top observations list
- Closing disclaimer
Return plain text (not JSON). Ensure the required disclaimer appears at least once.
`.trim();

  const userMessage = JSON.stringify(payload, null, 2);

  const raw = await callLLM(systemPrompt, userMessage);

  // Ensure disclaimer is present — **this is the Bias Guard enforcement**
  return appendDisclaimer(raw);
}
