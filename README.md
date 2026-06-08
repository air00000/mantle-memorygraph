# AlphaCouncil

> Neutral AI Intelligence Memory Layer for Mantle Blockchain

**AlphaCouncil** collects live on-chain events from Mantle Sepolia, structures them through an AI agent pipeline, maintains historical context via RAG memory, identifies repeating patterns, and anchors observation hashes to Mantle smart contracts for cryptographic verifiability. The system publishes neutral digests via Telegram and provides a web dashboard for exploration.

**This is a neutral observation, not a trading recommendation.**

---

## What Works Out of the Box

| Feature | Status | Notes |
|---------|--------|-------|
| **Live Mantle event indexing** | Ready | Reads real ERC-20 Transfer events via viem + Mantle Sepolia RPC |
| **AI agent pipeline** | Ready | 6 agents: Collector → Normalizer → ContextBuilder → PatternMatcher → BiasGuard → DigestWriter |
| **LLM provider abstraction** | Ready | Mock (default) + Groq + OpenRouter + OpenAI + Gemini |
| **RAG context search** | Ready | PostgreSQL + entity-based pattern matching |
| **Dashboard** | Ready | Next.js 14, server-rendered, reads from DB |
| **Telegram bot** | Ready | 6 commands, all responses include Bias Policy disclaimer |
| **Smart contracts** | Ready | 3 Solidity contracts, deployable via Hardhat |
| **On-chain anchoring** | Optional | Requires PRIVATE_KEY + deployed contract address |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                  Mantle Sepolia (live RPC)                   │
│              Real ERC-20 Transfer events                     │
└───────────────────────────┬─────────────────────────────────┘
                            │
              ┌─────────────▼──────────────┐
              │     Mantle Indexer (viem)   │
              │   getLogs() every 15 sec     │
              └─────────────┬───────────────┘
                            │
              ┌─────────────▼──────────────┐
              │    Worker Pipeline          │
              │  1. collectorAgent          │
              │  2. normalizerAgent         │
              │  3. prisma.observation.create│
              │  4. rag.findContext()       │
              │  5. contextBuilderAgent     │
              │  6. patternMatcherAgent     │
              │  7. digestWriterAgent       │
              │  8. biasGuardAgent          │
              │  9. anchorObservation() [opt]
              └─────────────┬───────────────┘
                            │
              ┌─────────────▼──────────────┐
              │   PostgreSQL + pgvector     │
              │  Observations, Profiles,    │
              │  Patterns, AgentRuns,       │
              │  MemorySnapshots            │
              └─────────────┬───────────────┘
                            │
              ┌─────────────▼──────────────┐
              │  Telegram Bot (grammY)      │
              │  Dashboard (Next.js 14)     │
              └────────────────────────────┘
                            │
              ┌─────────────▼──────────────┐
              │  Smart Contracts (Mantle)   │
              │  ObservationRegistry        │
              │  MemoryAnchor               │
              │  AgentRegistry              │
              └────────────────────────────┘
```

---

## Quick Start

### Prerequisites

- Node.js >= 18
- pnpm (`npm install -g pnpm`)
- Docker & Docker Compose

### 1. Setup

```bash
git clone <repo-url>
cd alphacouncil
cp .env.example .env
# Edit .env if you want real LLM / Telegram / on-chain anchoring
```

### 2. Database

```bash
docker-compose up -d
```

### 3. Install & Build

```bash
pnpm install
cd packages/database
pnpm push        # create tables
pnpm generate    # generate Prisma client
cd ../..
```

### 4. Run in Demo Mode (no external keys needed)

```bash
pnpm demo        # seeds 10 observations with AI digests
```

```bash
# Terminal 1 — Dashboard
cd apps/dashboard && pnpm dev
# → http://localhost:3000

# Terminal 2 — Telegram Bot (optional, needs TELEGRAM_BOT_TOKEN)
cd apps/bot && pnpm dev
```

### 5. Run with Live Mantle Data

```bash
# Terminal — Worker (reads REAL events from Mantle Sepolia)
cd apps/worker && pnpm dev
```

The worker will:
1. Connect to Mantle Sepolia RPC (public endpoint by default)
2. Poll for new ERC-20 Transfer events every 15 seconds
3. Run each event through the full AI pipeline
4. Save structured observations to PostgreSQL
5. Optionally anchor to blockchain (if `PRIVATE_KEY` is set)

---

## Two Modes of Operation

### Mode A: Demo / Development (default)

- **LLM**: `mock` — returns canned but realistic responses
- **Data**: `pnpm demo` seeds synthetic observations
- **Blockchain**: No writes, no private key needed
- **Dashboard / Bot**: Read from seeded database

### Mode B: Production (live data)

Set in `.env`:

```ini
# Required for live indexing (already has default)
ALPHACOUNCIL_SEPOLIA_RPC=https://rpc.sepolia.mantle.xyz

# Required for real AI digests (pick one)
LLM_PROVIDER=groq
LLM_API_KEY=your_groq_key

# Required for Telegram bot
TELEGRAM_BOT_TOKEN=your_bot_token

# Required for on-chain anchoring (optional)
PRIVATE_KEY=your_private_key_without_0x
OBSERVATION_REGISTRY_ADDRESS=0x...  # after deploy
MEMORY_ANCHOR_ADDRESS=0x...         # after deploy
AGENT_REGISTRY_ADDRESS=0x...        # after deploy
```

Deploy contracts:

```bash
cd packages/contracts
pnpm build
pnpm deploy
# Copy addresses to .env
```

Run worker:

```bash
cd apps/worker && pnpm dev
```

---

## Repository Structure

```
alphacouncil/
├── apps/
│   ├── dashboard/          # Next.js 14 + Tailwind CSS
│   ├── bot/                # Telegram bot (grammY)
│   └── worker/             # Live indexer + AI pipeline
├── packages/
│   ├── contracts/          # Hardhat + 3 Solidity contracts
│   ├── database/           # Prisma schema + client
│   ├── mantle-indexer/     # viem-based Mantle event reader
│   ├── rag/                # Context search + pattern matching
│   ├── ai-agents/          # 6-agent LLM pipeline + Bias Guard
│   ├── blockchain-writer/  # On-chain hash anchoring (viem)
│   └── shared/             # Types, constants, utilities
├── scripts/
│   └── demo.ts             # Demo data seeder
├── docker-compose.yml       # PostgreSQL 16 + pgvector
├── pnpm-workspace.yaml
├── turbo.json
├── .env.example
└── README.md
```

---

## Smart Contracts

| Contract | Purpose |
|----------|---------|
| **ObservationRegistry** | Stores observation hashes with 4 scoring dimensions (0-100) |
| **MemoryAnchor** | Anchors periodic memory snapshots |
| **AgentRegistry** | Registers AI agents with roles and providers |

Deploy:

```bash
cd packages/contracts
pnpm build
pnpm deploy
```

---

## AI Agents Pipeline

| Agent | Purpose |
|-------|---------|
| **Collector** | Decides if raw event is worth keeping |
| **Normalizer** | Converts to structured facts + event type |
| **ContextBuilder** | Links to historical context |
| **PatternMatcher** | Compares against known patterns |
| **BiasGuard** | Enforces neutral language |
| **DigestWriter** | Generates final neutral digest |

---

## Bias Policy (Mandatory)

**Prohibited**: buy, sell, bullish, bearish, guaranteed, strong alpha, gem, x100, financial advice, prediction, trading signal, investment opportunity

**Required in every output**: "This is a neutral observation, not a trading recommendation."

---

## LLM Providers

| Provider | Model | Setup |
|----------|-------|-------|
| **mock** (default) | Canned responses | None |
| **groq** | llama3-8b-8192 | `GROQ_API_KEY` |
| **openrouter** | claude-3-haiku | `OPENROUTER_API_KEY` |
| **openai** | gpt-4o-mini | `OPENAI_API_KEY` |
| **gemini** | gemini-1.5-flash | `GEMINI_API_KEY` |

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection |
| `ALPHACOUNCIL_SEPOLIA_RPC` | No* | Mantle RPC (has default) |
| `PRIVATE_KEY` | No | For contract deployment/writes |
| `TELEGRAM_BOT_TOKEN` | No | For Telegram bot |
| `LLM_PROVIDER` | No | `mock` by default |
| `LLM_API_KEY` | No | Required if using real LLM |
| `OBSERVATION_REGISTRY_ADDRESS` | No | After contract deploy |
| `MEMORY_ANCHOR_ADDRESS` | No | After contract deploy |
| `AGENT_REGISTRY_ADDRESS` | No | After contract deploy |

---

## Development

```bash
pnpm dev         # all dev servers
pnpm build       # build all packages
pnpm lint        # lint all
pnpm demo        # seed demo data
```

---

## License

MIT

**This is a neutral observation, not a trading recommendation.**
