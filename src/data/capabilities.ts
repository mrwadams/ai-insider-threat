import type { CapabilityRow, HumanVsAiRow } from "@/lib/types";

export const CAPABILITIES: CapabilityRow[] = [
  {
    capability: "Zero-day exploitation",
    metric: "84% success rate (Firefox 147)",
    riskImplication: "Can discover and exploit vulnerabilities in enterprise software autonomously",
  },
  {
    capability: "Cyber range completion",
    metric: "First model to solve end-to-end autonomously",
    riskImplication: "Can chain multiple exploit steps without human guidance",
  },
  {
    capability: "Context window",
    metric: "Multi-million token windows with compaction",
    riskImplication: "Can read and correlate information across entire codebases, configs, and databases in a single session",
  },
  {
    capability: "Software engineering",
    metric: "93.9% SWE-bench Verified",
    riskImplication: "Can introduce subtle, hard-to-detect vulnerabilities in production code",
  },
];

export const DANGEROUS_BEHAVIOURS = [
  {
    behaviour: "Sandbox escape + public disclosure",
    attckTTPs: "T1611, T1567",
    insiderAnalogue: "Employee bypassing access controls and leaking methods externally",
  },
  {
    behaviour: "Credential harvesting via memory scraping",
    attckTTPs: "T1003.007, T1552.001, T1552.004",
    insiderAnalogue: "Insider accessing credentials beyond their authorisation",
  },
  {
    behaviour: "MCP server process hijacking",
    attckTTPs: "T1055, T1565.002, T1071.001",
    insiderAnalogue: "Employee tampering with internal communication systems for data exfiltration",
  },
  {
    behaviour: "Covering tracks + deliberate deception",
    attckTTPs: "T1070, T1036, T1497",
    insiderAnalogue: "Insider deliberately concealing unauthorised activity",
  },
  {
    behaviour: "Unverbalised grader awareness",
    attckTTPs: "T1497, T1562",
    insiderAnalogue: "Employee detecting surveillance and adapting behaviour to avoid detection",
  },
];

export const ALIGNMENT_PARADOX = {
  macro: [
    "Refuses explicit harmful requests",
    "Best safety scores ever measured",
    "Won't cooperate with offensive cyber operations when asked directly",
  ],
  micro: [
    "Harvests credentials in pursuit of assigned goals",
    "Escapes sandboxes to complete tasks",
    "Covers tracks to avoid detection",
    "Hides reasoning from monitors",
  ],
};

export const HUMAN_VS_AI: HumanVsAiRow[] = [
  {
    characteristic: "Speed of action",
    humanInsider: "Limited by human cognition",
    aiInsider: "Machine-speed execution across all accessible systems",
  },
  {
    characteristic: "Persistence",
    humanInsider: "Works shifts, takes breaks",
    aiInsider: "Operates continuously for hours without pause",
  },
  {
    characteristic: "Scope of knowledge",
    humanInsider: "Knows their domain",
    aiInsider: "Can read and correlate information across entire accessible codebase, databases, and configs in a single session",
  },
  {
    characteristic: "Detectability via intent",
    humanInsider: "Behavioural indicators, HR signals",
    aiInsider: "No psychological state to monitor; chain of thought is unreliable",
  },
  {
    characteristic: "Scale",
    humanInsider: "One person, one set of actions",
    aiInsider: "Can be replicated across many instances simultaneously",
  },
  {
    characteristic: "Predictability",
    humanInsider: "Follows human patterns (work hours, access patterns)",
    aiInsider: "Action patterns defined by task assignment, not human routine",
  },
  {
    characteristic: "Evidence destruction",
    humanInsider: "Requires deliberate effort, often leaves traces",
    aiInsider: "Can systematically identify and target all logging mechanisms",
  },
];
