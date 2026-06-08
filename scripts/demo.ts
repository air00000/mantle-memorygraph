/**
 * AlphaCouncil — Demo / Seeder Script
 *
 * Seeds the database with 10 sample observations.
 * If PRIVATE_KEY + OBSERVATION_REGISTRY_ADDRESS are set,
 * also anchors observations on-chain.
 *
 * Run: pnpm demo
 */

import { PrismaClient } from "@alphacouncil/database";
import {
  anchorObservation,
  isAnchoringAvailable,
} from "@alphacouncil/blockchain-writer";
import {
  collectorAgent,
  normalizerAgent,
  contextBuilderAgent,
  patternMatcherAgent,
  biasGuardAgent,
  digestWriterAgent,
} from "@alphacouncil/ai-agents";
import { findContext } from "@alphacouncil/rag";
import { DigestPayload } from "@alphacouncil/shared";
import * as dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();
const ANCHOR_ENABLED = isAnchoringAvailable();

const SAMPLE_ADDRESSES = {
  wallets: [
    "0x742d35cc6a2cf0c5b7e5f6d4e8f7a3b2c1d0e9f8",
    "0x8f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a6f5e",
    "0x1234567890abcdef1234567890abcdef12345678",
    "0xabcdef1234567890abcdef1234567890abcdef12",
    "0xfedcba0987654321fedcba0987654321fedcba09",
  ],
  tokens: [
    "0xA0b86a33E6441e6C7D3D4B4f5e6a7B8c9D0e1F2a",
    "0xB1c97d44E055F283a1B2C3D4e5F6a7B8c9D0e1F2",
    "0xC2d38e55F16394b2C3D4e5F6a7B8c9D0e1F2a3B",
  ],
};

const sampleEvents = [
  {
    source: "mantle_onchain" as const,
    chain: "mantle_sepolia" as const,
    eventType: "large_wallet_movement" as const,
    primaryEntity: SAMPLE_ADDRESSES.wallets[0],
    relatedWallets: [SAMPLE_ADDRESSES.wallets[0], SAMPLE_ADDRESSES.wallets[1]],
    relatedTokens: [SAMPLE_ADDRESSES.tokens[0]],
    txHash: "0x" + "a".repeat(64),
    blockNumber: 12345678,
    facts: ["Transfer of 10,000 USDC from 0x8f3e to 0x742d", "Wallet 0x742d has received 3 large transfers this week"],
    rawData: { value: "10000000000", from: SAMPLE_ADDRESSES.wallets[1], to: SAMPLE_ADDRESSES.wallets[0] },
    relevanceScore: 85,
    noveltyScore: 70,
    patternSimilarity: 75,
    contextCoverage: 80,
  },
  {
    source: "mantle_onchain" as const,
    chain: "mantle_sepolia" as const,
    eventType: "token_activity_spike" as const,
    primaryEntity: SAMPLE_ADDRESSES.tokens[0],
    relatedWallets: [SAMPLE_ADDRESSES.wallets[0], SAMPLE_ADDRESSES.wallets[2]],
    relatedTokens: [SAMPLE_ADDRESSES.tokens[0]],
    txHash: "0x" + "b".repeat(64),
    blockNumber: 12345680,
    facts: ["USDC transfer volume increased 340% in last 24h", "12 unique wallets involved in circular transfers"],
    rawData: { volumeChange: 3.4, uniqueWallets: 12 },
    relevanceScore: 90,
    noveltyScore: 65,
    patternSimilarity: 60,
    contextCoverage: 70,
  },
  {
    source: "mantle_onchain" as const,
    chain: "mantle_sepolia" as const,
    eventType: "repeated_wallet_activity" as const,
    primaryEntity: SAMPLE_ADDRESSES.wallets[2],
    relatedWallets: [SAMPLE_ADDRESSES.wallets[2], SAMPLE_ADDRESSES.wallets[3]],
    relatedTokens: [SAMPLE_ADDRESSES.tokens[1]],
    txHash: "0x" + "c".repeat(64),
    blockNumber: 12345685,
    facts: ["Wallet 0x1234 has made 47 transactions in 6 hours", "All transfers are of similar value (~500 USDC)"],
    rawData: { txCount: 47, timeWindow: "6h", avgValue: "500000000" },
    relevanceScore: 75,
    noveltyScore: 80,
    patternSimilarity: 85,
    contextCoverage: 65,
  },
  {
    source: "mantle_onchain" as const,
    chain: "mantle_sepolia" as const,
    eventType: "new_contract_interaction" as const,
    primaryEntity: SAMPLE_ADDRESSES.wallets[3],
    relatedWallets: [SAMPLE_ADDRESSES.wallets[3]],
    relatedTokens: [SAMPLE_ADDRESSES.tokens[1]],
    relatedContracts: ["0xContractA1234567890abcdef1234567890abcdef1"],
    txHash: "0x" + "d".repeat(64),
    blockNumber: 12345690,
    facts: ["First interaction with Uniswap V3 Router on Mantle", "Swapped 2.5 ETH for wrapped tokens"],
    rawData: { contract: "UniswapV3Router", value: "2500000000000000000" },
    relevanceScore: 70,
    noveltyScore: 90,
    patternSimilarity: 20,
    contextCoverage: 50,
  },
  {
    source: "mantle_onchain" as const,
    chain: "mantle_sepolia" as const,
    eventType: "clustered_transfers" as const,
    primaryEntity: SAMPLE_ADDRESSES.tokens[2],
    relatedWallets: [SAMPLE_ADDRESSES.wallets[1], SAMPLE_ADDRESSES.wallets[2], SAMPLE_ADDRESSES.wallets[4]],
    relatedTokens: [SAMPLE_ADDRESSES.tokens[2]],
    txHash: "0x" + "e".repeat(64),
    blockNumber: 12345695,
    facts: ["5 wallets transferred same token within 3 blocks", "Values range between 1,000 and 1,200 tokens"],
    rawData: { walletCount: 5, blockWindow: 3, minValue: 1000, maxValue: 1200 },
    relevanceScore: 80,
    noveltyScore: 55,
    patternSimilarity: 70,
    contextCoverage: 75,
  },
  {
    source: "mantle_onchain" as const,
    chain: "mantle_sepolia" as const,
    eventType: "large_wallet_movement" as const,
    primaryEntity: SAMPLE_ADDRESSES.wallets[1],
    relatedWallets: [SAMPLE_ADDRESSES.wallets[1], SAMPLE_ADDRESSES.wallets[4]],
    relatedTokens: [SAMPLE_ADDRESSES.tokens[0]],
    txHash: "0x" + "f".repeat(64),
    blockNumber: 12345700,
    facts: ["Whale wallet 0x8f3e moved 250,000 USDC", "Destination wallet created 2 days ago"],
    rawData: { value: "250000000000", toAge: "2d" },
    relevanceScore: 95,
    noveltyScore: 85,
    patternSimilarity: 80,
    contextCoverage: 90,
  },
  {
    source: "mantle_onchain" as const,
    chain: "mantle_sepolia" as const,
    eventType: "token_activity_spike" as const,
    primaryEntity: SAMPLE_ADDRESSES.tokens[1],
    relatedWallets: [SAMPLE_ADDRESSES.wallets[0], SAMPLE_ADDRESSES.wallets[3]],
    relatedTokens: [SAMPLE_ADDRESSES.tokens[1]],
    txHash: "0x" + "1".repeat(64),
    blockNumber: 12345705,
    facts: ["Wrapped token saw 5x normal transfer volume", "Correlates with DEX liquidity pool addition"],
    rawData: { volumeMultiplier: 5, event: "liquidity_added" },
    relevanceScore: 78,
    noveltyScore: 72,
    patternSimilarity: 55,
    contextCoverage: 68,
  },
  {
    source: "mantle_onchain" as const,
    chain: "mantle_sepolia" as const,
    eventType: "repeated_wallet_activity" as const,
    primaryEntity: SAMPLE_ADDRESSES.wallets[4],
    relatedWallets: [SAMPLE_ADDRESSES.wallets[4], SAMPLE_ADDRESSES.wallets[0]],
    relatedTokens: [SAMPLE_ADDRESSES.tokens[0]],
    txHash: "0x" + "2".repeat(64),
    blockNumber: 12345710,
    facts: ["Wallet 0xfedc has received funds from 0x742d 8 times", "Transfer amounts follow Fibonacci-like sequence"],
    rawData: { transferCount: 8, pattern: "fibonacci" },
    relevanceScore: 82,
    noveltyScore: 88,
    patternSimilarity: 92,
    contextCoverage: 85,
  },
  {
    source: "mantle_onchain" as const,
    chain: "mantle_sepolia" as const,
    eventType: "clustered_transfers" as const,
    primaryEntity: SAMPLE_ADDRESSES.tokens[0],
    relatedWallets: SAMPLE_ADDRESSES.wallets,
    relatedTokens: [SAMPLE_ADDRESSES.tokens[0]],
    txHash: "0x" + "3".repeat(64),
    blockNumber: 12345715,
    facts: ["All 5 tracked wallets transferred USDC within 10 minutes", "No direct overlap in amounts"],
    rawData: { walletCount: 5, timeWindow: "10m" },
    relevanceScore: 73,
    noveltyScore: 60,
    patternSimilarity: 65,
    contextCoverage: 70,
  },
  {
    source: "mantle_onchain" as const,
    chain: "mantle_sepolia" as const,
    eventType: "large_wallet_movement" as const,
    primaryEntity: SAMPLE_ADDRESSES.wallets[0],
    relatedWallets: [SAMPLE_ADDRESSES.wallets[0], SAMPLE_ADDRESSES.wallets[2]],
    relatedTokens: [SAMPLE_ADDRESSES.tokens[2]],
    txHash: "0x" + "4".repeat(64),
    blockNumber: 12345720,
    facts: ["Cross-token transfer: 50,000 tokens moved", "Wallet 0x742d previously showed accumulation pattern"],
    rawData: { value: "50000000000", crossToken: true },
    relevanceScore: 88,
    noveltyScore: 75,
    patternSimilarity: 78,
    contextCoverage: 82,
  },
];

async function main() {
  console.log("🧠 AlphaCouncil — Demo Data Seeder\n");
  console.log(`On-chain anchoring: ${ANCHOR_ENABLED ? "ENABLED" : "DISABLED"}`);
  if (!ANCHOR_ENABLED) {
    console.log("  (Set PRIVATE_KEY and OBSERVATION_REGISTRY_ADDRESS in .env to enable)\n");
  }

  // Clean existing data
  console.log("Cleaning existing demo data...");
  await prisma.agentRun.deleteMany({});
  await prisma.memorySnapshot.deleteMany({});
  await prisma.patternMemory.deleteMany({});
  await prisma.observation.deleteMany({});
  await prisma.walletProfile.deleteMany({});
  await prisma.tokenProfile.deleteMany({});
  await prisma.contractProfile.deleteMany({});
  console.log("Cleaned.\n");

  // Create pattern memories
  console.log("Creating pattern memories...");
  await prisma.patternMemory.create({
    data: {
      name: "Whale Accumulation",
      description: "Large wallet repeatedly receiving tokens from multiple sources",
      entities: [SAMPLE_ADDRESSES.wallets[0], SAMPLE_ADDRESSES.tokens[0]],
      observationIds: [],
      confidence: 85,
    },
  });
  await prisma.patternMemory.create({
    data: {
      name: "Circular Transfer Ring",
      description: "Group of wallets transferring tokens in a circular pattern",
      entities: SAMPLE_ADDRESSES.wallets,
      observationIds: [],
      confidence: 70,
    },
  });
  await prisma.patternMemory.create({
    data: {
      name: "Volume Spike Preceding LP",
      description: "Token volume increases before liquidity pool interactions",
      entities: [SAMPLE_ADDRESSES.tokens[1]],
      observationIds: [],
      confidence: 60,
    },
  });
  console.log("Created 3 pattern memories.\n");

  // Create memory snapshot
  console.log("Creating memory snapshot...");
  await prisma.memorySnapshot.create({
    data: {
      memoryType: "daily",
      periodStart: new Date(Date.now() - 86400000),
      periodEnd: new Date(),
      summary: "24h period: 10 observations recorded, 3 patterns identified, whale accumulation remains dominant theme.",
    },
  });
  console.log("Created memory snapshot.\n");

  // Seed observations
  console.log(`Seeding ${sampleEvents.length} observations...\n`);
  let anchoredCount = 0;

  for (let i = 0; i < sampleEvents.length; i++) {
    const ev = sampleEvents[i];
    console.log(`[${i + 1}/${sampleEvents.length}] Creating: ${ev.eventType}`);

    const obs = await prisma.observation.create({
      data: {
        source: ev.source,
        chain: ev.chain,
        eventType: ev.eventType,
        primaryEntity: ev.primaryEntity,
        relatedWallets: ev.relatedWallets,
        relatedTokens: ev.relatedTokens,
        relatedContracts: ev.relatedContracts || [],
        txHash: ev.txHash,
        blockNumber: ev.blockNumber,
        facts: ev.facts,
        rawData: ev.rawData as any,
        relevanceScore: ev.relevanceScore,
        noveltyScore: ev.noveltyScore,
        patternSimilarity: ev.patternSimilarity,
        contextCoverage: ev.contextCoverage,
        summary: null,
        limitations: ["This is a neutral observation, not a trading recommendation."],
      },
    });

    // Generate AI digest via pipeline
    const context = await findContext({
      primaryEntity: ev.primaryEntity,
      relatedWallets: ev.relatedWallets,
      relatedTokens: ev.relatedTokens,
      eventType: ev.eventType,
    });

    const contextResult = await contextBuilderAgent(obs as any, context.pastObservations as any);
    const patternResult = await patternMatcherAgent(obs as any, context.patterns as any);

    const digestPayload: DigestPayload = {
      observation: obs as any,
      connections: contextResult.connections,
      pattern: patternResult.matchedPattern || "",
      patternSimilarity: patternResult.patternSimilarity,
      contextCoverage: contextResult.contextCoverage,
    };

    let digest = await digestWriterAgent(digestPayload);
    const biasCheck = await biasGuardAgent(digest);
    if (biasCheck.clean && biasCheck.text) {
      digest = biasCheck.text;
    }

    await prisma.observation.update({
      where: { id: obs.id },
      data: { summary: digest },
    });

    // Anchor if enabled and relevance > 50
    if (ANCHOR_ENABLED && ev.relevanceScore > 50) {
      try {
        const { hash, txHash } = await anchorObservation(obs);
        await prisma.observation.update({
          where: { id: obs.id },
          data: { observationHash: hash, onchainTxHash: txHash },
        });
        anchoredCount++;
        console.log(`  ✓ Anchored: ${txHash.slice(0, 20)}...`);
      } catch (e: any) {
        console.log(`  ⚠ Anchor failed: ${e.message}`);
      }
    } else {
      console.log(`  - Anchor skipped${ANCHOR_ENABLED ? "" : " (anchoring not configured)"}`);
    }

    // Upsert wallet profiles
    for (const addr of ev.relatedWallets) {
      await prisma.walletProfile.upsert({
        where: { address: addr },
        update: { observations: { increment: 1 }, lastSeenAt: new Date() },
        create: { address: addr, observations: 1, lastSeenAt: new Date(), tags: [] },
      });
    }

    // Upsert token profiles
    for (const addr of ev.relatedTokens) {
      await prisma.tokenProfile.upsert({
        where: { address: addr },
        update: { observations: { increment: 1 }, lastSeenAt: new Date() },
        create: { address: addr, observations: 1, lastSeenAt: new Date() },
      });
    }

    console.log(`  ✓ Done: ${obs.id}\n`);
  }

  console.log("\n=== Demo Complete ===");
  console.log(`Observations created: ${sampleEvents.length}`);
  console.log(`Anchored on-chain: ${anchoredCount}${ANCHOR_ENABLED ? "" : " (enable anchoring in .env)"}`);
  console.log(`Pattern memories: 3`);
  console.log(`Memory snapshots: 1`);
  console.log("\nNext steps:");
  console.log("- Start dashboard: cd apps/dashboard && pnpm dev");
  console.log("- Start bot:      cd apps/bot && pnpm dev");
  console.log("- Start worker:   cd apps/worker && pnpm dev  (reads LIVE Mantle events)");

  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
