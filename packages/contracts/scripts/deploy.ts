import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const ObservationRegistry = await ethers.getContractFactory("ObservationRegistry");
  const observation = await ObservationRegistry.deploy();
  await observation.waitForDeployment();
  const observationAddress = await observation.getAddress();
  console.log("ObservationRegistry deployed to:", observationAddress);

  const MemoryAnchor = await ethers.getContractFactory("MemoryAnchor");
  const memory = await MemoryAnchor.deploy();
  await memory.waitForDeployment();
  const memoryAddress = await memory.getAddress();
  console.log("MemoryAnchor deployed to:", memoryAddress);

  const AgentRegistry = await ethers.getContractFactory("AgentRegistry");
  const agents = await AgentRegistry.deploy();
  await agents.waitForDeployment();
  const agentsAddress = await agents.getAddress();
  console.log("AgentRegistry deployed to:", agentsAddress);

  console.log("\n=== Deployment Summary ===");
  console.log(`OBSERVATION_REGISTRY_ADDRESS=${observationAddress}`);
  console.log(`MEMORY_ANCHOR_ADDRESS=${memoryAddress}`);
  console.log(`AGENT_REGISTRY_ADDRESS=${agentsAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
