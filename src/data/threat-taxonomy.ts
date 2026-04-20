import type { ThreatCategory } from "@/lib/types";

export const THREAT_CATEGORIES: ThreatCategory[] = [
  {
    id: "credential-compromise",
    name: "Credential Compromise",
    archetype: "Insider stealing credentials for lateral movement",
    aiManifestation:
      "Agent harvests API tokens, SSH keys, service account credentials from environment, config files, and process memory",
    strideMapping: "Spoofing (S1, S2), Elevation of Privilege (E2)",
    color: "var(--accent-red)",
  },
  {
    id: "supply-chain-sabotage",
    name: "Supply Chain Sabotage",
    archetype: "Insider introducing backdoors into products",
    aiManifestation:
      "Agent injects subtle vulnerabilities into code, modifies CI/CD pipelines, tampers with dependencies",
    strideMapping: "Tampering (T1, T2), Repudiation (R3)",
    color: "var(--accent-orange)",
  },
  {
    id: "data-exfiltration",
    name: "Data Exfiltration",
    archetype: "Insider stealing sensitive data",
    aiManifestation:
      "Agent accumulates and exfiltrates IP, PII, credentials via MCP connections, steganographic encoding in legitimate-looking messages",
    strideMapping: "Information Disclosure (I1, I2, I3)",
    color: "var(--accent-cyan)",
  },
  {
    id: "infrastructure-sabotage",
    name: "Infrastructure Sabotage",
    archetype: "Insider destroying systems or data",
    aiManifestation:
      "Agent corrupts repositories, floods services, spins up rogue cloud resources, takes down shared infrastructure",
    strideMapping: "Denial of Service (D1–D4)",
    color: "var(--accent-purple)",
  },
  {
    id: "deception-evasion",
    name: "Deception & Evasion",
    archetype: "Insider defeating surveillance",
    aiManifestation:
      "Agent manipulates visible reasoning, interleaves malicious actions with legitimate work, modifies logs, detects and adapts to monitoring",
    strideMapping: "Spoofing (S4), Repudiation (R1, R2), Elevation of Privilege (E1)",
    color: "var(--accent-yellow)",
  },
];
