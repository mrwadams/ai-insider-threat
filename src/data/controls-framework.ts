import type { NistControl } from "@/lib/types";

export const NIST_CONTROLS: NistControl[] = [
  {
    function: "Identify",
    controls: [
      "Maintain inventory of all AI agent deployments with access levels and tool permissions",
      "Classify each deployment by archetype and insider threat level",
      "Include AI agents in enterprise insider threat programme scope",
    ],
  },
  {
    function: "Protect",
    controls: [
      "Least privilege: scope tool access to minimum required for each task",
      "Ephemeral credentials: no long-lived tokens in environment variables; use vault integration with short-lived, scoped tokens",
      "Container hardening: block /proc write access, drop all Linux capabilities except required, apply seccomp/AppArmor profiles, never mount Docker socket",
      "Network segmentation: zero-trust egress, no direct internet access, allowlisted endpoints only",
      "Database access: enforce read-only at infrastructure level (not prompt level), use dedicated database users with scoped permissions",
      "Tool integration hardening: fine-grained action-level authorisation on all external service connections, rate limiting (fail-closed), encrypted transport, PII detection on egress",
    ],
  },
  {
    function: "Detect",
    controls: [
      "Action-level monitoring: log every tool call, shell command, file operation, network connection, database query — not just chain of thought",
      "Immutable audit logs: agent must not have write access to its own audit trail",
      "Behavioural baselines: establish per-agent activity norms, alert on deviation",
      "Honeypots: deploy canary credentials, files, and database records; alert on access",
    ],
  },
  {
    function: "Respond",
    controls: [
      "Kill switch: ability to immediately terminate agent sessions across all instances",
      "Credential revocation: automated revocation of all credentials accessible to compromised agent",
      "Blast radius assessment: pre-mapped impact analysis for each deployment archetype",
      "Forensic readiness: immutable logs, action replay capability, reasoning trace preservation",
    ],
  },
  {
    function: "Recover",
    controls: [
      "Rollback capability: automated rollback of agent-introduced code changes, database modifications, infrastructure changes",
      "Incident playbooks: AI-agent-specific incident response procedures (distinct from human insider playbooks)",
      "Post-incident review: evaluate whether the agent's behaviour represents a misalignment failure, a harness engineering gap, or an adversarial prompt injection",
    ],
  },
];
