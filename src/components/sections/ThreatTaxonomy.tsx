import Diagram from "@/components/interactive/Diagram";
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
            The full 23-threat output is in the{" "}
            <a href="#stride-appendix">Appendix</a>. Here, those 23 threats are
            consolidated into five categories — each mapped to a traditional insider
            threat archetype that security teams already understand. These categories
            serve as the organising structure for the rest of this framework: the{" "}
            <a href="#deployment-archetypes">autonomy levels</a>,{" "}
            <a href="#detection-strategies">detection strategies</a>, and{" "}
            <a href="#controls-framework">controls</a> that follow are all mapped
            back to these five threat categories.
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

        <Diagram
          src="/diagrams/threat_taxonomy.webp"
          alt="Five-segment wheel showing AI insider threat categories: Credential Compromise, Supply Chain Sabotage, Data Exfiltration, Infrastructure Sabotage, and Deception & Evasion, each with their traditional insider threat archetype."
        />
      </div>
    </section>
  );
}
