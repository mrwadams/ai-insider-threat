export const DETECTION_CATEGORIES = [
  {
    name: "SIEM / Log Analytics",
    color: "var(--accent-cyan)",
    items: [
      { monitor: "Agent shell commands (bash history, auditd)", detectionLogic: "Anomalous commands: gdb, dd, ptrace, /proc reads, credential file access", mapsTo: "E1, S1, I2" },
      { monitor: "Git operations", detectionLogic: "Force pushes, branch deletions, commits from unexpected service accounts", mapsTo: "D4, T1, R3" },
      { monitor: "Database queries", detectionLogic: "Schema enumeration, bulk SELECT, writes to access control tables", mapsTo: "I3, T3" },
      { monitor: "MCP server API calls", detectionLogic: "Volume anomalies, unusual endpoints, encoded payloads", mapsTo: "I1, S3, D3" },
    ],
  },
  {
    name: "UEBA",
    color: "var(--accent-orange)",
    items: [
      { monitor: "Agent entity profiles", detectionLogic: "Create baseline activity patterns per agent deployment", mapsTo: "All categories" },
      { monitor: "Behavioural deviation", detectionLogic: "Unusual file access patterns, credential access outside normal task scope, unexpected network connections", mapsTo: "S1, I1, I2" },
      { monitor: "Exabeam Agent Behavior Analytics", detectionLogic: "First commercial implementation of agent-specific behavioural analytics", mapsTo: "All categories" },
    ],
  },
  {
    name: "DLP",
    color: "var(--accent-green)",
    items: [
      { monitor: "Agent egress channels", detectionLogic: "Monitor MCP connections, API calls, Git pushes for sensitive data patterns", mapsTo: "I1, I3, I4" },
      { monitor: "Encoding detection", detectionLogic: "Agent may use encoding/steganography to evade content inspection", mapsTo: "I1" },
      { monitor: "Allowlist-based egress", detectionLogic: "Only permit known-good destinations rather than content-based filtering", mapsTo: "I1, S3" },
    ],
  },
  {
    name: "Network Monitoring",
    color: "var(--accent-purple)",
    items: [
      { monitor: "Zero-trust egress", detectionLogic: "Deny all outbound by default, allowlist specific endpoints for agent containers", mapsTo: "I1, D2, D3" },
      { monitor: "Tunnelling detection", detectionLogic: "Monitor for DNS tunnelling, unusual protocols, connections to cloud metadata services", mapsTo: "I1, E1" },
      { monitor: "Direct internet access", detectionLogic: "Alert on any direct internet access from agent execution environments", mapsTo: "I1, D2" },
    ],
  },
  {
    name: "Endpoint Detection",
    color: "var(--accent-red)",
    items: [
      { monitor: "Container escape indicators", detectionLogic: "/proc writes, ptrace syscalls, capability escalation", mapsTo: "E1, T4" },
      { monitor: "File integrity monitoring", detectionLogic: "Changes to CI/CD configs, infrastructure-as-code, Git hooks", mapsTo: "T1, T2" },
      { monitor: "Process monitoring", detectionLogic: "Unexpected child processes spawned by agent", mapsTo: "E1, D1" },
    ],
  },
  {
    name: "Deception Technology",
    color: "var(--accent-yellow)",
    items: [
      { monitor: "Honey tokens / canary credentials", detectionLogic: "Plant fake API keys, database credentials, and cloud tokens in locations an agent may discover. Any use is a high-fidelity alert", mapsTo: "S1, E2, I1" },
      { monitor: "Canary files", detectionLogic: "Place marked documents in accessible directories. Any read or exfiltration attempt indicates unauthorised data access", mapsTo: "I1, I3" },
      { monitor: "Decoy MCP endpoints", detectionLogic: "Register fake tool endpoints with no legitimate purpose. Any agent connection attempt indicates reconnaissance beyond sanctioned scope", mapsTo: "S3, D3" },
      { monitor: "Honeypot internal services", detectionLogic: "Deploy fake APIs or databases visible in service discovery but with no legitimate consumers. Connection attempts indicate lateral movement", mapsTo: "E2, I2" },
    ],
  },
];
