import { createWalletClient, createPublicClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { mantleSepoliaTestnet } from "viem/chains";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: "../../.env" });

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC = process.env.ALPHACOUNCIL_SEPOLIA_RPC || "https://rpc.sepolia.mantle.xyz";

if (!PRIVATE_KEY) {
  console.error("PRIVATE_KEY not set in .env");
  process.exit(1);
}

const account = privateKeyToAccount(
  PRIVATE_KEY.startsWith("0x") ? PRIVATE_KEY : `0x${PRIVATE_KEY}`
);

const walletClient = createWalletClient({
  account,
  chain: mantleSepoliaTestnet,
  transport: http(RPC),
});

const publicClient = createPublicClient({
  chain: mantleSepoliaTestnet,
  transport: http(RPC),
});

async function deployContract(name) {
  const bytecode = `0x${fs.readFileSync(path.join(__dirname, "../out", `${name}.bin`), "utf8")}`;
  const hash = await walletClient.deployContract({
    abi: [],
    bytecode,
  });
  console.log(`[${name}] deploy tx: ${hash}`);

  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  const address = receipt.contractAddress;
  if (!address) {
    throw new Error(`[${name}] deployment failed — no contract address in receipt`);
  }
  console.log(`[${name}] deployed to: ${address}`);
  return address;
}

async function main() {
  console.log("Deploying with account:", account.address);
  console.log("RPC:", RPC);
  console.log("");

  const observationAddress = await deployContract("ObservationRegistry");
  const memoryAddress = await deployContract("MemoryAnchor");
  const agentAddress = await deployContract("AgentRegistry");

  console.log("\n=== Deployment Summary ===");
  console.log(`OBSERVATION_REGISTRY_ADDRESS=${observationAddress}`);
  console.log(`MEMORY_ANCHOR_ADDRESS=${memoryAddress}`);
  console.log(`AGENT_REGISTRY_ADDRESS=${agentAddress}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
