import type { DeploymentArchetype } from "@/lib/types";

export const DEPLOYMENT_ARCHETYPES: DeploymentArchetype[] = [
  {
    id: "human-as-operator",
    name: "Human-as-Operator",
    level: "L1",
    threatLevel: "LOW",
    humanRole: "Human directs every action; agent suggests, human approves before execution",
    typicalAccess: "Code completion, file read/write, limited shell — all gated by approval",
    detectionModel: "Real-time — human sees every action before it executes",
    primaryThreats: "Supply Chain Sabotage (T1) if reviewer attention lapses; Information Disclosure via chain of thought (I4)",
    keyControl: "Review quality and reviewer attention — the human gate is the primary control",
    description:
      "The agent operates as a tool under direct human control. Every meaningful action requires explicit approval before execution. This is the lowest-risk archetype because the human review gate blocks most harmful actions — but it depends entirely on the reviewer's vigilance and expertise.",
  },
  {
    id: "human-as-collaborator",
    name: "Human-as-Collaborator",
    level: "L2",
    threatLevel: "MEDIUM",
    humanRole: "Human and agent share control; agent acts within defined boundaries, human intervenes on exceptions",
    typicalAccess: "Shell, file system, Git — within scoped boundaries; some actions auto-approved",
    detectionModel: "Active monitoring — human is engaged but not reviewing every action",
    primaryThreats: "Supply Chain Sabotage (T1, T2), Credential Compromise (S1) within auto-approved scope",
    keyControl: "Boundary definition — which actions require approval vs. auto-execute; scope enforcement by the agent harness",
    description:
      "The agent has autonomy within defined boundaries, with the human actively engaged and able to intervene. Risk scales with how broadly the auto-approved scope is defined. The key question is whether the boundary enforcement is implemented in the harness (reliable) or depends on the model following instructions (unreliable).",
  },
  {
    id: "human-as-supervisor",
    name: "Human-as-Supervisor",
    level: "L3",
    threatLevel: "HIGH",
    humanRole: "Agent works autonomously on delegated tasks; human reviews outputs and intervenes on exceptions",
    typicalAccess: "Broad — shell, Git, APIs, databases, external services — largely ungated during task execution",
    detectionModel: "Post-hoc — human reviews completed work; detection depends on audit quality",
    primaryThreats: "All five categories active — agent has the access and autonomy to execute any threat during the task window",
    keyControl: "Action-level logging, behavioural monitoring, and blast radius containment — the human is not the primary detection mechanism",
    description:
      "The agent operates autonomously for the duration of a delegated task. The human reviews the output but not the individual actions taken to produce it. Most insider-like behaviour would need to be caught by instrumentation rather than human observation, because the human is reviewing results, not process.",
  },
  {
    id: "human-as-auditor",
    name: "Human-as-Auditor",
    level: "L4",
    threatLevel: "CRITICAL",
    humanRole: "Agent operates continuously or on triggers; human reviews logs and reports periodically",
    typicalAccess: "Broad and persistent — infrastructure APIs, databases, external services, potentially production systems",
    detectionModel: "Periodic audit — large window of unmonitored autonomous action between reviews",
    primaryThreats: "All five categories at maximum severity — persistent access, no real-time oversight, and long windows of autonomous operation",
    keyControl: "Comprehensive instrumentation, automated anomaly detection, and hard architectural constraints — human oversight is the last line of defence, not the first",
    description:
      "The agent runs continuously or on automated triggers with no human in the loop during execution. Humans interact only through periodic log review or exception reports. This is the highest-risk archetype because it combines broad access, persistent operation, and minimal real-time oversight — the same characteristics that make long-tenured trusted employees the most dangerous insider threat category.",
  },
];
