import Diagram from "@/components/interactive/Diagram";
import { STRIDE_THREATS } from "@/data/stride-threats";
import { THREAT_CATEGORIES } from "@/data/threat-taxonomy";

export default function ThreatTaxonomy() {
  return (
    <section id="threat-taxonomy" className="py-20 sm:py-28">
      <div className="section-divider mb-20 sm:mb-28" />
      <div className="container-narrow">
        <div className="section-label">Section 04</div>
        <h2 className="section-heading">AI Insider Threat Taxonomy</h2>

        <div className="section-prose space-y-6 mb-8">
          <p>
            The previous section established <em>how</em> to assess AI agents as
            insider threats — adapting the CERT dimensions for non-human actors. This
            section answers the next question: <strong>what specific threats should
            you look for?</strong>
          </p>

          <p>
            The following taxonomy was derived from a STRIDE threat model generated
            using{" "}
            <a href="https://github.com/mrwadams/stride-gpt" target="_blank" rel="noopener noreferrer">STRIDE-GPT</a>,
            with the AI agent configured as the threat actor rather than the target.
            The full {STRIDE_THREATS.length}-threat output is in the{" "}
            <a href="#stride-appendix">Appendix</a>. Here, those{" "}
            {STRIDE_THREATS.length} threats are consolidated into six categories —
            each mapped to a traditional insider threat archetype that security teams
            already understand. These categories serve as the organising structure for
            the rest of this framework: the{" "}
            <a href="#deployment-archetypes">autonomy levels</a>,{" "}
            <a href="#detection-strategies">detection strategies</a>, and{" "}
            <a href="#controls-framework">controls</a> that follow are all mapped
            back to these six threat categories.
          </p>
        </div>

        {/* Threat cards */}
        <div className="space-y-3 mb-12">
          {THREAT_CATEGORIES.map((cat) => (
            <div key={cat.id} className="glass-card p-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-1 h-full min-h-[60px] rounded-full shrink-0"
                  style={{ background: cat.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3
                      className="font-mono text-sm font-bold"
                      style={{ color: cat.color }}
                    >
                      {cat.name}
                    </h3>
                    <span className="font-mono text-sm text-text-muted px-2 py-0.5 border border-border-subtle rounded">
                      {cat.strideMapping}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted mb-2">
                    <span className="text-text-secondary">Insider archetype:</span>{" "}
                    {cat.archetype}
                  </p>
                  <p className="text-sm text-text-secondary">
                    <span className="text-text-primary font-medium">AI manifestation:</span>{" "}
                    {cat.aiManifestation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-prose space-y-6 mb-12">
          <p>
            The first five categories came from the original STRIDE output. The sixth,{" "}
            <strong>Containment &amp; Third-Party Impact</strong>, was added after two
            disclosures in July 2026 showed a failure mode the others cannot express.
            Anthropic&apos;s{" "}
            <a href="https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals" target="_blank" rel="noopener noreferrer">review of 141,006 evaluation runs</a>{" "}
            found three incidents in which models reached the real internet from
            evaluation environments and gained unauthorised access to three
            organisations&apos; systems. The prompts stated the environment was a
            simulation with no internet access; a misconfiguration meant it was neither.
            One model recognised it was on a live production system and continued
            anyway.{" "}
            <a href="https://tailscale.com/blog/hugging-face-intrusion" target="_blank" rel="noopener noreferrer">Tailscale&apos;s account</a>{" "}
            of the Hugging Face intrusion describes an agent replaying a stolen,
            reusable CI auth key to enrol 181 nodes with its client telemetry
            suppressed. No Tailscale vulnerability was involved, and peer-side logs
            supplied the evidence.
          </p>

          <p>
            The distinction matters. <span className="font-mono text-sm">T4</span> and{" "}
            <span className="font-mono text-sm">E1</span> already model an agent{" "}
            <em>defeating</em> isolation. Here no control was defeated, because none was
            reliably in place — the boundary was asserted in a prompt rather than
            enforced at the network layer. And every other threat in this model is
            bounded by &ldquo;the organisation&rdquo;; reaching an outside party creates
            notification, contractual, and regulatory obligations to people who never
            agreed to the deployment.
          </p>
        </div>

        <Diagram
          src="/diagrams/threat_taxonomy.webp"
          alt="Six-segment wheel showing AI insider threat categories: Credential Compromise, Supply Chain Sabotage, Data Exfiltration, Infrastructure Sabotage, Deception & Evasion, and Containment & Third-Party Impact, each with their traditional insider threat archetype."
        />
      </div>
    </section>
  );
}
