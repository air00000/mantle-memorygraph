import "dotenv/config";
import { Bot } from "grammy";
import { PrismaClient } from "@alphacouncil/database";
import { truncateAddress } from "@alphacouncil/shared";

const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN!);
const prisma = new PrismaClient();

const DISCLAIMER = "This is a neutral observation, not a trading recommendation.";

// ─── /start ───────────────────────────────────────────────

bot.command("start", async (ctx) => {
  const text = [
    "🧠 AlphaCouncil",
    "Neutral AI Intelligence Memory Layer for Mantle",
    "",
    "Available commands:",
    "/latest — Last 5 observations",
    "/wallet 0x... — Wallet profile",
    "/token 0x... — Token profile",
    "/patterns — Pattern memories",
    "/memory — Latest memory snapshot",
    "",
    DISCLAIMER,
  ].join("\n");

  await ctx.reply(text);
});

// ─── /latest ──────────────────────────────────────────────

bot.command("latest", async (ctx) => {
  try {
    const observations = await prisma.observation.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    });

    if (observations.length === 0) {
      await ctx.reply(`No observations recorded yet.\n\n${DISCLAIMER}`);
      return;
    }

    const lines = observations.map((obs) => {
      const entity = truncateAddress(obs.primaryEntity, 6);
      const rel = obs.relevanceScore;
      return `#${obs.id.slice(-6)} | ${obs.eventType} | ${entity}… | rel:${rel}`;
    });

    await ctx.reply([...lines, "", DISCLAIMER].join("\n"));
  } catch (err) {
    console.error("[Bot] /latest error:", err);
    await ctx.reply(`Error fetching observations.\n\n${DISCLAIMER}`);
  }
});

// ─── /wallet ──────────────────────────────────────────────

bot.command("wallet", async (ctx) => {
  try {
    const address = ctx.match?.trim().toLowerCase();
    if (!address) {
      await ctx.reply(`Usage: /wallet 0x...\n\n${DISCLAIMER}`);
      return;
    }

    const profile = await prisma.walletProfile.findUnique({ where: { address } });
    const observations = await prisma.observation.findMany({
      where: { relatedWallets: { has: address } },
      orderBy: { createdAt: "desc" },
      take: 5,
    });

    const parts = [
      `🔍 Wallet ${truncateAddress(address, 8)}`,
      profile ? `Observations: ${profile.observations}` : "Not yet profiled",
      observations.length > 0
        ? "\nRecent:\n" +
          observations
            .map((o) => `- ${o.eventType} (rel:${o.relevanceScore})`)
            .join("\n")
        : "No recent activity.",
      "",
      DISCLAIMER,
    ];

    await ctx.reply(parts.join("\n"));
  } catch (err) {
    console.error("[Bot] /wallet error:", err);
    await ctx.reply(`Error fetching wallet.\n\n${DISCLAIMER}`);
  }
});

// ─── /token ──────────────────────────────────────────────

bot.command("token", async (ctx) => {
  try {
    const address = ctx.match?.trim().toLowerCase();
    if (!address) {
      await ctx.reply(`Usage: /token 0x...\n\n${DISCLAIMER}`);
      return;
    }

    const profile = await prisma.tokenProfile.findUnique({ where: { address } });
    const observations = await prisma.observation.findMany({
      where: { relatedTokens: { has: address } },
      orderBy: { createdAt: "desc" },
      take: 5,
    });

    const parts = [
      `🪙 Token ${truncateAddress(address, 8)}`,
      profile?.symbol ? `Symbol: ${profile.symbol}` : "",
      profile ? `Observations: ${profile.observations}` : "Not yet profiled",
      observations.length > 0
        ? "\nRecent:\n" +
          observations
            .map((o) => `- ${o.eventType} (rel:${o.relevanceScore})`)
            .join("\n")
        : "No recent activity.",
      "",
      DISCLAIMER,
    ];

    await ctx.reply(parts.filter(Boolean).join("\n"));
  } catch (err) {
    console.error("[Bot] /token error:", err);
    await ctx.reply(`Error fetching token.\n\n${DISCLAIMER}`);
  }
});

// ─── /patterns ────────────────────────────────────────────

bot.command("patterns", async (ctx) => {
  try {
    const patterns = await prisma.patternMemory.findMany({
      orderBy: { confidence: "desc" },
      take: 10,
    });

    if (patterns.length === 0) {
      await ctx.reply(`No patterns recorded yet.\n\n${DISCLAIMER}`);
      return;
    }

    const lines = patterns.map(
      (p) =>
        `• ${p.name}\n  ${p.description.slice(0, 100)}…\n  Confidence: ${p.confidence}/100`
    );

    await ctx.reply([...lines, "", DISCLAIMER].join("\n"));
  } catch (err) {
    console.error("[Bot] /patterns error:", err);
    await ctx.reply(`Error fetching patterns.\n\n${DISCLAIMER}`);
  }
});

// ─── /memory ──────────────────────────────────────────────

bot.command("memory", async (ctx) => {
  try {
    const snapshot = await prisma.memorySnapshot.findFirst({
      orderBy: { createdAt: "desc" },
    });

    if (!snapshot) {
      await ctx.reply(`No memory snapshots yet.\n\n${DISCLAIMER}`);
      return;
    }

    const text = [
      `🧠 Memory Snapshot`,
      `Type: ${snapshot.memoryType}`,
      `Period: ${snapshot.periodStart.toLocaleDateString()} – ${snapshot.periodEnd.toLocaleDateString()}`,
      ``,
      snapshot.summary,
      "",
      DISCLAIMER,
    ].join("\n");

    await ctx.reply(text);
  } catch (err) {
    console.error("[Bot] /memory error:", err);
    await ctx.reply(`Error fetching memory.\n\n${DISCLAIMER}`);
  }
});

// ─── Start ────────────────────────────────────────────────

bot.catch((err) => {
  console.error("[Bot] Unhandled error:", err);
});

console.log("[Bot] Starting AlphaCouncil Telegram bot...");
bot.start();
