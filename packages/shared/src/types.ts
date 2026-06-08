// ─────────────────────────────────────────────
// Enums / union types
// ─────────────────────────────────────────────

export type SourceType =
  | "mantle_onchain"
  | "x_social"
  | "manual"
  | "system";

export type ChainType = "mantle" | "mantle_sepolia";

export type EventType =
  | "large_wallet_movement"
  | "repeated_wallet_activity"
  | "new_contract_interaction"
  | "token_activity_spike"
  | "clustered_transfers"
  | "social_context_update"
  | "memory_checkpoint";

// ─────────────────────────────────────────────
// Core data interfaces
// ─────────────────────────────────────────────

export interface Observation {
  id: string;
  source: SourceType;
  chain: ChainType;
  eventType: EventType;
  address?: string;
  contractAddress?: string;
  tokenAddress?: string;
  txHash?: string;
  blockNumber?: number;
  amount?: string;
  confidence: number;
  facts: Record<string, unknown>;
  rawData: Record<string, unknown>;
  relatedObservationIds: string[];
  tags: string[];
  processedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface WalletProfile {
  id: string;
  address: string;
  chain: ChainType;
  label?: string;
  firstSeen: Date;
  lastActive: Date;
  totalTxCount: number;
  totalVolume?: string;
  observationCount: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TokenProfile {
  id: string;
  address: string;
  chain: ChainType;
  symbol?: string;
  name?: string;
  decimals?: number;
  firstSeen: Date;
  lastActive: Date;
  totalTransfers: number;
  holderCount: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ContractProfile {
  id: string;
  address: string;
  chain: ChainType;
  name?: string;
  firstSeen: Date;
  lastActive: Date;
  totalInteractions: number;
  uniqueCallers: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PatternMemory {
  id: string;
  patternType: string;
  description: string;
  entities: string[];
  observationIds: string[];
  confidence: number;
  firstObserved: Date;
  lastObserved: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface AgentRun {
  id: string;
  agentType: string;
  status: string;
  input: Record<string, unknown>;
  output?: Record<string, unknown>;
  error?: string;
  observations: Observation[];
  startedAt: Date;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemorySnapshot {
  id: string;
  periodStart: Date;
  periodEnd: Date;
  walletCount: number;
  tokenCount: number;
  contractCount: number;
  patternCount: number;
  topWallets: Record<string, unknown>[];
  topTokens: Record<string, unknown>[];
  summary: string;
  createdAt: Date;
}

// ─────────────────────────────────────────────
// Pipeline / processing interfaces
// ─────────────────────────────────────────────

export interface CollectorDecision {
  shouldCollect: boolean;
  priority: number;
  reason: string;
}

export interface NormalizedEvent {
  source: SourceType;
  chain: ChainType;
  eventType: EventType;
  address?: string;
  contractAddress?: string;
  tokenAddress?: string;
  txHash?: string;
  blockNumber?: number;
  amount?: string;
  timestamp: number;
  rawData: Record<string, unknown>;
}

export interface ContextResult {
  relevantObservations: Observation[];
  walletProfiles: WalletProfile[];
  tokenProfiles: TokenProfile[];
  contractProfiles: ContractProfile[];
  patternMemories: PatternMemory[];
  summary: string;
}

export interface PatternResult {
  patternType: string;
  description: string;
  entities: string[];
  observationIds: string[];
  confidence: number;
}

export interface BiasCheckResult {
  passed: boolean;
  violations: string[];
  sanitized: string;
}

// ─────────────────────────────────────────────
// Delivery / anchoring interfaces
// ─────────────────────────────────────────────

export interface DigestPayload {
  observations: Observation[];
  patterns: PatternResult[];
  summary: string;
  generatedAt: Date;
}

export interface AnchorResult {
  success: boolean;
  txHash?: string;
  blockNumber?: number;
  error?: string;
  timestamp: Date;
}

// ─────────────────────────────────────────────
// On-chain event interfaces
// ─────────────────────────────────────────────

export interface MantleEventLog {
  address: string;
  blockHash: string;
  blockNumber: bigint;
  data: string;
  logIndex: number;
  removed: boolean;
  topics: string[];
  transactionHash: string;
  transactionIndex: number;
  args?: {
    from?: string;
    to?: string;
    value?: bigint;
  };
}
