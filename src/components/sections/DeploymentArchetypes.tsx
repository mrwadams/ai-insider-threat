import TabbedCards from "@/components/interactive/TabbedCards";
import Diagram from "@/components/interactive/Diagram";
import { DEPLOYMENT_ARCHETYPES } from "@/data/deployment-archetypes";

const THREAT_LEVEL_STYLES: Record<string, { badge: string; color: string }> = {
  LOW: { badge: "badge-low", color: "var(--accent-green)" },
  MEDIUM: { badge: "badge-medium", color: "var(--accent-orange)" },
  HIGH: { badge: "badge-high", color: "var(--accent-red)" },
  CRITICAL: { badge: "badge-critical", color: "var(--accent-red)" },
};

function ArchetypeContent({ archetype }: { archetype: typeof DEPLOYMENT_ARCHETYPES[number] }) {
  const style = THREAT_LEVEL_STYLES[archetype.threatLevel];

  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className={`badge ${style.badge}`}>{archetype.threatLevel}</span>
        <span className="font-mono text-sm text-text-muted">Insider Threat Level</span>
      </div>

      <p className="text-sm text-text-secondary mb-6">{archetype.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-mono text-sm uppercase tracking-wider text-text-muted mb-2">
            Human Role
          </h4>
          <p className="text-sm text-text-secondary">{archetype.humanRole}</p>
        </div>
        <div>
          <h4 className="font-mono text-sm uppercase tracking-wider text-text-muted mb-2">
            Typical Access
          </h4>
          <p className="text-sm text-text-secondary">{archetype.typicalAccess}</p>
        </div>
        <div>
          <h4 className="font-mono text-sm uppercase tracking-wider text-text-muted mb-2">
            Detection Model
          </h4>
          <p className="text-sm text-text-secondary">{archetype.detectionModel}</p>
        </div>
        <div>
          <h4 className="font-mono text-sm uppercase tracking-wider text-text-muted mb-2">
            Primary Threats
          </h4>
          <p className="text-sm text-text-secondary">{archetype.primaryThreats}</p>
        </div>
        <div className="sm:col-span-2">
          <h4 className="font-mono text-sm uppercase tracking-wider text-text-muted mb-2">
            Key Control
          </h4>
          <p className="text-sm text-text-secondary">{archetype.keyControl}</p>
        </div>
      </div>
    </div>
  );
}

export default function DeploymentArchetypes() {
  const tabs = DEPLOYMENT_ARCHETYPES.map((a) => ({
    id: a.id,
    label: `${a.level}: ${a.name}`,
    badge: a.threatLevel,
    badgeColor: THREAT_LEVEL_STYLES[a.threatLevel].color,
    content: <ArchetypeContent archetype={a} />,
  }));

  return (
    <section id="deployment-archetypes" className="py-20 sm:py-28">
      <div className="section-divider mb-20 sm:mb-28" />
      <div className="container-narrow">
        <div className="section-label">Section 05</div>
        <h2 className="section-heading">
          Autonomy Levels &amp; Insider Threat Profiles
        </h2>

        <div className="section-prose space-y-6 mb-10">
          <p>
            Not all AI deployments carry the same insider threat surface. The five
            threat categories from the{" "}
            <a href="#threat-taxonomy">taxonomy</a> above apply differently depending
            on the agent&apos;s autonomy level — specifically, the human&apos;s role
            in the oversight loop.
          </p>
          <p>
            The four levels below are adapted from autonomy frameworks proposed by{" "}
            <a href="https://arxiv.org/abs/2506.12469" target="_blank" rel="noopener noreferrer">Huang et al.</a>{" "}
            and{" "}
            <a href="https://arxiv.org/abs/2311.02462" target="_blank" rel="noopener noreferrer">Google DeepMind</a>,
            reframed for insider threat risk. As the human&apos;s role shifts from
            operator to auditor, detection increasingly depends on instrumentation
            rather than human observation — and the threat surface expands accordingly.
          </p>

          <div className="callout">
            <p className="text-sm">
              <strong>Note:</strong> Multi-agent orchestration — where reviewer agents
              provide automated oversight of primary agents — is an architectural
              pattern that can apply at any autonomy level, not a separate archetype.
              It reduces risk only if the reviewer agents are independently aligned
              and cannot be influenced by the agents they monitor.
            </p>
          </div>
        </div>

        <Diagram
          src="/diagrams/autonomy_levels.webp"
          alt="Four autonomy levels arranged from L1 (human-as-operator) to L4 (human-as-auditor), showing how detection shifts from human observation to instrumentation as autonomy increases."
        />

        <TabbedCards tabs={tabs} />
      </div>
    </section>
  );
}
