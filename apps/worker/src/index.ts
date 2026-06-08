import { startIndexer } from "@alphacouncil/mantle-indexer";
import { PrismaClient } from "@alphacouncil/database";
import { findContext } from "@alphacouncil/rag";
import {
  collectorAgent,
  normalizerAgent,
  contextBuilderAgent,
  patternMatcherAgent,
  biasGuardAgent,
  digestWriterAgent,
} from "@alphacouncil/ai-agents";
import {
  anchorObservation,
  isAnchoringAvailable,
} from "@alphacouncil/blockchain-writer";
import { MantleEventLog } from "@alphacouncil/shared";
import * as dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const prisma = new PrismaClient();

// ─── Config ───────────────────────────────────────────────

const ANCHOR_ENABLED = isAnchoringAvailable();
const ANCHOR_RELEVANCE_THRESHOLD = 50;

console.log(
  `[Worker] On-chain anchoring: ${ANCHOR_ENABLED ? "ENABLED" : "DISABLED (set PRIVATE_KEY + OBSERVATION_REGISTRY_ADDRESS to enable)"}`
);

// ─── Pipeline ─────────────────────────────────────────────

async function onNewEvent(events: MantleEventLog[]) {
  for (const log of events) {
    try {
      console.log(
        `[Worker] New event: tx=${log.transactionHash} block=${log.blockNumber}`
      );

      // Step 1: Collector decides if event is worth keeping
      const decision = await collectorAgent(log as any);
    if (!decision.keep) {
      console.log(`[Worker] Event discarded: ${decision.reason}`);
      return;
    }
    console.log(`[Worker] Event kept: ${decision.reason}`);

    // Step 2: Normalizer converts to structured facts
    const normalized = await normalizerAgent({
      rawData: log,
      source: "mantle_onchain",
      chain: "mantle_sepolia",
    } as any);
    console.log(`[Worker] Normalized: ${normalized.eventType}`);

    // Extract entities from log
    const from = log.args?.from?.toLowerCase() || "";
    const to = log.args?.to?.toLowerCase() || "";
    const tokenAddress = log.address.toLowerCase();
    const primaryEntity = to || tokenAddress;
    const relatedWallets = [from, to].filter((a) => a.length > 0);
    const relatedTokens = [tokenAddress];

    // Step 3: Create observation in DB
    const observation = await prisma.observation.create({
      data: {
        source: "mantle_onchain",
        chain: "mantle_sepolia",
        eventType: normalized.eventType,
        primaryEntity,
        relatedWallets,
        relatedTokens,
        relatedContracts: [],
        txHash: log.transactionHash,
        blockNumber: Number(log.blockNumber),
        facts: normalized.facts,
        rawData: log as any,
        relevanceScore: 70,
        noveltyScore: 50,
        patternSimilarity: 0,
        contextCoverage: 0,
        summary: null,
        limitations: [],
      },
    });
    console.log(`[Worker] Observation created: ${observation.id}`);

    // Step 4: RAG context search
    const context = await findContext({
      primaryEntity,
      relatedWallets,
      relatedTokens,
      eventType: normalized.eventType,
    });
    console.log(
      `[Worker] Context: ${context.pastObservations.length} past, ${context.patterns.length} patterns`
    );

    // Step 5: Context Builder
    const contextResult = await contextBuilderAgent(
      observation as any,
      context.pastObservations as any
    );
    const contextCoverage = Math.min(contextResult.contextCoverage || 30, 100);

    // Step 6: Pattern Matcher
    const patternResult = await patternMatcherAgent(
      observation as any,
      context.patterns as any
    );
    const patternSimilarity = Math.min(
      patternResult.patternSimilarity || 30,
      100
    );

    // Update scores
    const updatedObs = await prisma.observation.update({
      where: { id: observation.id },
      data: {
        contextCoverage,
        patternSimilarity,
        relevanceScore: Math.min(70 + contextCoverage * 0.2, 100),
        noveltyScore: Math.min(50 + (100 - patternSimilarity) * 0.4, 100),
      },
    });

    // Step 7: Digest Writer
    const digestPayload = {
      observation: updatedObs as any,
      connections: contextResult.connections,
      pattern: patternResult.matchedPattern || "",
      patternSimilarity,
      contextCoverage,
    };
    let digest = await digestWriterAgent(digestPayload as any);

    // Step 8: Bias Guard
    const biasCheck = await biasGuardAgent(digest);
    if (biasCheck.clean && biasCheck.text) {
      digest = biasCheck.text;
    }

    // Save final summary
    await prisma.observation.update({
      where: { id: observation.id },
      data: {
        summary: digest,
        limitations: [
          "This is a neutral observation, not a trading recommendation.",
        ],
      },
    });
    console.log(`[Worker] Digest generated for ${observation.id}`);

    // Step 9: Anchor to blockchain (optional)
    if (ANCHOR_ENABLED && updatedObs.relevanceScore > ANCHOR_RELEVANCE_THRESHOLD) {
      try {
        const { hash, txHash } = await anchorObservation(updatedObs as any);
        await prisma.observation.update({
          where: { id: observation.id },
          data: { observationHash: hash, onchainTxHash: txHash },
        });
        console.log(`[Worker] Anchored: ${txHash}`);
      } catch (anchorErr: any) {
        console.error(`[Worker] Anchor failed: ${anchorErr.message}`);
      }
    } else if (!ANCHOR_ENABLED) {
      console.log(`[Worker] Anchor skipped (anchoring not configured)`);
    }

    // Upsert wallet profiles
    for (const addr of relatedWallets) {
      await prisma.walletProfile.upsert({
        where: { address: addr },
        update: {
          observations: { increment: 1 },
          lastSeenAt: new Date(),
        },
        create: {
          address: addr,
          observations: 1,
          lastSeenAt: new Date(),
          tags: [],
        },
      });
    }

    // Upsert token profile
    await prisma.tokenProfile.upsert({
      where: { address: tokenAddress },
      update: {
        observations: { increment: 1 },
        lastSeenAt: new Date(),
      },
      create: {
        address: tokenAddress,
        observations: 1,
        lastSeenAt: new Date(),
      },
    });

    console.log(`[Worker] ✅ Completed processing ${observation.id}`);
    } catch (err) {
      console.error("[Worker] Pipeline error:", err);
    }
  }
}

// ─── Graceful shutdown ────────────────────────────────────

let stopIndexer: (() => void) | null = null;

async function main() {
  console.log("[Worker] Starting AlphaCouncil pipeline...");
  console.log("[Worker] Connecting to Mantle Sepolia RPC...");

  stopIndexer = await startIndexer(onNewEvent, {
    pollIntervalMs: 15000,
    startBlockOffset: 10n,
  });

  console.log("[Worker] ✅ Pipeline running. Reading live events from Mantle Sepolia.");
  console.log("[Worker] Press Ctrl+C to stop.");
}

process.on("SIGINT", async () => {
  console.log("\n[Worker] Shutting down gracefully...");
  if (stopIndexer) stopIndexer();
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  if (stopIndexer) stopIndexer();
  await prisma.$disconnect();
  process.exit(0);
});

main().catch(console.error);
