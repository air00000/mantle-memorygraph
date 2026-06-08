// ─────────────────────────────────────────────
// Bias policy for sanitizing AI-generated output
// ─────────────────────────────────────────────

export const BIAS_POLICY = {
  prohibitedPhrases: [
    "guaranteed",
    "risk-free",
    "moon",
    "100% safe",
    "cant lose",
    "no risk",
    "financial advice",
    "investment advice",
    "buy now",
    "sell now",
    "pump",
    "dump",
    "insider",
  ],
  allowedPhrases: [
    "historically",
    "observed pattern",
    "on-chain data shows",
    "correlation detected",
    "unusual activity",
  ],
  disclaimer:
    "This analysis is based solely on on-chain data and does not constitute financial advice.",
};

// ─────────────────────────────────────────────
// Known contract name mappings (Mantle mainnet)
// ─────────────────────────────────────────────

export const CONTRACT_NAMES: Record<string, string> = {
  "0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8": "Mantle WETH",
  "0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE": "Mantle USDC",
  "0xcda86a272531e8640cd7f1a92c01839911b59bbd": "Mantle mETH",
  "0xdeaddeaddeaddeaddeaddeaddeaddeaddead1111": "Mantle WMT",
};

// ─────────────────────────────────────────────
// Explorer URLs
// ─────────────────────────────────────────────

export const MANTLE_EXPLORER_SEPOLIA = "https://sepolia.mantlescan.xyz";
export const MANTLE_EXPLORER_MAINNET = "https://mantlescan.xyz";
