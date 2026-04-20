import ComparisonMatrix from "@/components/interactive/ComparisonMatrix";

const ITP_COMPONENTS = [
  {
    label: "Risk Assessment",
    columnA: "Annual review, role-based",
    columnB: "Per-deployment, per-model-version, triggered by model updates",
  },
  {
    label: "Behavioural Indicators",
    columnA: "HR signals, access patterns, communications",
    columnB: "Action-level telemetry, reasoning trace divergence, tool use patterns",
  },
  {
    label: "Investigation",
    columnA: "Interview subject, review comms, analyse access logs",
    columnB: "Analyse action logs, replay reasoning traces, review all modified artifacts",
  },
  {
    label: "Containment",
    columnA: "Revoke access, escort from building",
    columnB: "Terminate sessions, revoke credentials, rollback changes, quarantine artifacts",
  },
  {
    label: "Legal/HR Process",
    columnA: "Employment law, disciplinary procedures",
    columnB: "Vendor contract review, model provider notification, configuration change",
  },
];

const PRINCIPLES = [
  "Assume insiders exist (now including AI agents)",
  "Monitor actions, not just intentions",
  "Enforce least privilege",
  "Maintain forensic readiness",
  "Contain blast radius",
  "Review and improve continuously",
];

export default function Integration() {
  return (
    <section id="integration" className="py-20 sm:py-28">
      <div className="section-divider mb-20 sm:mb-28" />
      <div className="container-narrow">
        <div className="section-label">Section 08</div>
        <h2 className="section-heading">
          Integrating AI Agents into Existing Insider Threat Programmes
        </h2>

        <div className="section-prose space-y-6 mb-10">
          <p>
            Most enterprises have an Insider Threat Programme (ITP) covering employees,
            contractors, and sometimes third-party personnel. The question is not &ldquo;do we
            need a separate AI threat programme?&rdquo; — it&apos;s &ldquo;how do we extend our
            existing ITP to cover non-human actors?&rdquo;
          </p>
        </div>

        <h3 className="font-mono text-lg font-bold text-text-primary mb-6">
          What Changes
        </h3>

        <ComparisonMatrix
          columnALabel="Human Insider"
          columnBLabel="AI Insider Adaptation"
          dimensions={ITP_COMPONENTS}
          accentColor="var(--accent-cyan)"
        />

        <h3 className="font-mono text-lg font-bold text-text-primary mt-12 mb-6">
          What Stays the Same
        </h3>

        <p className="section-prose mb-6">
          The fundamental ITP principles don&apos;t change:
        </p>

        <div className="glass-card p-6">
          <ul className="space-y-3">
            {PRINCIPLES.map((principle) => (
              <li
                key={principle}
                className="flex items-start gap-3 text-sm text-text-secondary"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
