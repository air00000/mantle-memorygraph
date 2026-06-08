import {
  createPublicClient,
  http,
  parseAbiItem,
} from "viem";
import { mantleSepoliaTestnet } from "viem/chains";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

import type { MantleEventLog } from "@alphacouncil/shared";

const ALPHACOUNCIL_SEPOLIA_RPC =
  process.env.ALPHACOUNCIL_SEPOLIA_RPC || "https://rpc.sepolia.mantle.xyz";

export const client = createPublicClient({
  chain: mantleSepoliaTestnet,
  transport: http(ALPHACOUNCIL_SEPOLIA_RPC),
});

export const transferEventAbi = parseAbiItem(
  "event Transfer(address indexed from, address indexed to, uint256 value)"
);

export async function getCurrentBlock(): Promise<bigint> {
  return client.getBlockNumber();
}

export async function getTransferLogs(
  fromBlock: bigint,
  toBlock: bigint
): Promise<MantleEventLog[]> {
  const logs = await client.getLogs({
    event: transferEventAbi,
    fromBlock,
    toBlock,
  });

  return logs.map((log) => ({
    address: log.address,
    blockHash: log.blockHash,
    blockNumber: log.blockNumber,
    data: log.data,
    logIndex: log.logIndex,
    removed: log.removed,
    topics: log.topics,
    transactionHash: log.transactionHash,
    transactionIndex: log.transactionIndex,
    args: {
      from: log.args.from as `0x${string}`,
      to: log.args.to as `0x${string}`,
      value: log.args.value as bigint,
    },
  }));
}

export interface IndexerOptions {
  pollIntervalMs?: number;
  startBlockOffset?: bigint;
}

export async function startIndexer(
  onEvent: (events: MantleEventLog[]) => void | Promise<void>,
  options: IndexerOptions = {}
): Promise<() => void> {
  const pollIntervalMs = options.pollIntervalMs ?? 15000;
  const startBlockOffset = options.startBlockOffset ?? 10n;
  const BLOCK_RANGE = 50n;

  let fromBlock = (await getCurrentBlock()) - startBlockOffset;
  let running = true;

  async function poll() {
    while (running) {
      try {
        const currentBlock = await getCurrentBlock();
        const targetToBlock = currentBlock;

        if (fromBlock > targetToBlock) {
          await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
          continue;
        }

        const toBlock =
          targetToBlock - fromBlock > BLOCK_RANGE
            ? fromBlock + BLOCK_RANGE
            : targetToBlock;

        console.log(
          `[Indexer] Scanning blocks ${fromBlock} to ${toBlock} (latest: ${currentBlock})`
        );

        const events = await getTransferLogs(fromBlock, toBlock);

        if (events.length > 0) {
          console.log(`[Indexer] Found ${events.length} Transfer events`);
          await onEvent(events);
        }

        fromBlock = toBlock + 1n;
      } catch (error) {
        console.error("[Indexer] Error during poll:", error);
      }

      await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
    }
  }

  poll();

  return () => {
    running = false;
    console.log("[Indexer] Stopping indexer...");
  };
}
