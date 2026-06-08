import {
  createWalletClient,
  http,
  keccak256,
  stringToHex,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { simulateContract, writeContract } from "viem/actions";
import { mantleSepoliaTestnet } from "viem/chains";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

// ─── Config ───────────────────────────────────────────────

const ALPHACOUNCIL_SEPOLIA_RPC =
  process.env.ALPHACOUNCIL_SEPOLIA_RPC || "https://rpc.sepolia.mantle.xyz";

const PRIVATE_KEY = process.env.PRIVATE_KEY;

function getWalletClient() {
  if (!PRIVATE_KEY) {
    throw new Error(
      "PRIVATE_KEY not set in .env — required for on-chain anchoring. " +
        "Set it to enable blockchain writes, or skip anchoring."
    );
  }
  const account = privateKeyToAccount(
    PRIVATE_KEY.startsWith("0x")
      ? (PRIVATE_KEY as `0x${string}`)
      : (`0x${PRIVATE_KEY}` as `0x${string}`)
  );
  return createWalletClient({
    account,
    chain: mantleSepoliaTestnet,
    transport: http(ALPHACOUNCIL_SEPOLIA_RPC),
  });
}

// ─── ABI ──────────────────────────────────────────────────

export const observationRegistryABI = [
  {
    name: "registerObservation",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "observationHash", type: "bytes32" },
      { name: "observationType", type: "string" },
      { name: "primaryEntity", type: "address" },
      { name: "relevanceScore", type: "uint8" },
      { name: "noveltyScore", type: "uint8" },
      { name: "patternSimilarity", type: "uint8" },
      { name: "contextCoverage", type: "uint8" },
    ],
    outputs: [{ name: "observationId", type: "uint256" }],
  },
] as const;

// ─── Helpers ──────────────────────────────────────────────

function computeHash(payload: object): `0x${string}` {
  const sortedKeys = Object.keys(payload).sort();
  const canonical = sortedKeys.reduce<Record<string, unknown>>(
    (acc, key) => {
      acc[key] = (payload as Record<string, unknown>)[key];
      return acc;
    },
    {}
  );
  return keccak256(stringToHex(JSON.stringify(canonical)));
}

function getContractAddress(
  envVar: string,
  name: string
): `0x${string}` {
  const addr = process.env[envVar];
  if (!addr) {
    throw new Error(
      `${envVar} not set in .env — deploy ${name} first and add its address.`
    );
  }
  return addr as `0x${string}`;
}

// ─── Public: check if anchoring is available ──────────────

export function isAnchoringAvailable(): boolean {
  return !!PRIVATE_KEY && !!process.env.OBSERVATION_REGISTRY_ADDRESS;
}

// ─── Input types ──────────────────────────────────────────

export interface AnchorObservationInput {
  id: string;
  eventType: string;
  primaryEntity: string;
  relevanceScore: number;
  noveltyScore: number;
  patternSimilarity: number;
  contextCoverage: number;
  facts: Record<string, unknown>;
  summary: string | null;
}

export interface AnchorMemorySnapshotInput {
  id: string;
  memoryType: string;
  periodStart: Date | string;
  periodEnd: Date | string;
  summary: string;
}

// ─── Main: anchor observation ─────────────────────────────

export async function anchorObservation(
  observation: AnchorObservationInput
): Promise<{ hash: `0x${string}`; txHash: `0x${string}` }> {
  const canonical = {
    id: observation.id,
    facts: observation.facts,
    summary: observation.summary,
    timestamp: new Date().toISOString(),
  };
  const hash = computeHash(canonical);

  const address = getContractAddress(
    "OBSERVATION_REGISTRY_ADDRESS",
    "ObservationRegistry"
  );

  const client = getWalletClient();

  const { request } = await simulateContract(client, {
    address,
    abi: observationRegistryABI,
    functionName: "registerObservation",
    args: [
      hash,
      observation.eventType,
      observation.primaryEntity as `0x${string}`,
      Math.min(observation.relevanceScore, 100) as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100,
      Math.min(observation.noveltyScore, 100) as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100,
      Math.min(observation.patternSimilarity, 100) as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100,
      Math.min(observation.contextCoverage, 100) as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100,
    ],
  });

  const txHash = await writeContract(client, request);
  return { hash, txHash };
}

// ─── Main: anchor memory snapshot ─────────────────────────

export async function anchorMemorySnapshot(
  snapshot: AnchorMemorySnapshotInput
): Promise<{ hash: `0x${string}`; txHash: `0x${string}` }> {
  const canonical = {
    id: snapshot.id,
    memoryType: snapshot.memoryType,
    periodStart: snapshot.periodStart,
    periodEnd: snapshot.periodEnd,
    summary: snapshot.summary,
  };
  const hash = computeHash(canonical);

  const address = getContractAddress(
    "MEMORY_ANCHOR_ADDRESS",
    "MemoryAnchor"
  );

  const client = getWalletClient();

  // MemoryAnchor ABI inline (simplified for MVP)
  const abi = [
    {
      name: "anchorMemory",
      type: "function",
      stateMutability: "nonpayable",
      inputs: [
        { name: "memoryHash", type: "bytes32" },
        { name: "memoryType", type: "string" },
        { name: "summary", type: "string" },
      ],
      outputs: [{ name: "anchorId", type: "uint256" }],
    },
  ] as const;

  const { request } = await simulateContract(client, {
    address,
    abi,
    functionName: "anchorMemory",
    args: [hash, snapshot.memoryType, snapshot.summary],
  });

  const txHash = await writeContract(client, request);
  return { hash, txHash };
}
