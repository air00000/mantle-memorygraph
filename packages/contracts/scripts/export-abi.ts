import * as fs from "fs";
import * as path from "path";

const ARTIFACTS_DIR = "./artifacts/contracts";
const OUTPUT_DIR = "./abi";

const CONTRACTS = [
  "ObservationRegistry.sol/ObservationRegistry.json",
  "MemoryAnchor.sol/MemoryAnchor.json",
  "AgentRegistry.sol/AgentRegistry.json",
];

function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const contractPath of CONTRACTS) {
    const src = path.join(ARTIFACTS_DIR, contractPath);
    if (!fs.existsSync(src)) {
      console.warn(`Artifact not found: ${src}. Run 'pnpm build' first.`);
      continue;
    }

    const artifact = JSON.parse(fs.readFileSync(src, "utf-8"));
    const abi = artifact.abi;

    const contractName = path.basename(contractPath, ".json");
    const outPath = path.join(OUTPUT_DIR, `${contractName}.json`);

    fs.writeFileSync(outPath, JSON.stringify(abi, null, 2));
    console.log(`Exported ABI: ${outPath}`);
  }
}

main();
