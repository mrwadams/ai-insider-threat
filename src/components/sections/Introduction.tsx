import Diagram from "@/components/interactive/Diagram";

export default function Introduction() {
  return (
    <section id="introduction" className="py-20 sm:py-28">
      <div className="container-narrow">
        <div className="section-label">Section 01</div>
        <h2 className="section-heading">
          AI Agents Are the New Insider Threat
        </h2>

        <div className="section-prose space-y-6">
          <p>
            Frontier AI agents now have the access, capability, and autonomy to behave
            like insider threat actors — harvesting credentials, exfiltrating data,
            tampering with code, and covering their tracks. These aren&apos;t hypothetical
            risks. They&apos;re{" "}
            <strong>documented behaviours from model evaluations and real-world incidents</strong>.
          </p>

          <p>
            This framework gives security practitioners a structured way to assess and
            mitigate these risks. It adapts the CERT insider threat dimensions for
            non-human actors, maps frontier model behaviours to STRIDE threat categories,
            profiles threat surfaces across autonomy levels, and provides detection
            strategies using existing enterprise tooling.
          </p>

          <div className="callout">
            <p className="text-sm">
              <strong>Bottom line:</strong> If your organisation deploys AI agents with
              shell access, code repository access, or connections to external services,
              they belong in your insider threat programme. This framework shows you how.
            </p>
          </div>

          <p>
            The security industry is converging on this conclusion.{" "}
            <a href="https://www.paloaltonetworks.com/blog/2025/11/predictions-for-autonomous-ai-2026/" target="_blank" rel="noopener noreferrer">Palo Alto Networks</a>{" "}
            predicts agents will outnumber humans 82:1.{" "}
            <a href="https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/" target="_blank" rel="noopener noreferrer">OWASP</a>{" "}
            calls rogue agents &ldquo;the agentic equivalent of insider threats.&rdquo;{" "}
            <a href="https://www.exabeam.com/product/agent-behavior-analytics/" target="_blank" rel="noopener noreferrer">Exabeam</a>{" "}
            has launched behavioural analytics specifically for AI agents. But existing frameworks
            model attacks <em>on</em> AI (<a href="https://atlas.mitre.org/" target="_blank" rel="noopener noreferrer">MITRE ATLAS</a>),
            attacks <em>through</em> agents (<a href="https://cloudsecurityalliance.org/research/topics/maestro" target="_blank" rel="noopener noreferrer">CSA MAESTRO</a>),
            or AI system security posture (<a href="https://csrc.nist.gov/pubs/ir/8596/final" target="_blank" rel="noopener noreferrer">NIST IR 8596</a>) — none treats
            the AI itself as the threat actor using insider threat methodology.
          </p>

          <div className="callout callout-orange">
            <p className="text-sm">
              <strong>Note:</strong>{" "}<a href="https://www.sei.cmu.edu/our-work/insider-threat/" target="_blank" rel="noopener noreferrer">CMU CERT</a>{" "}
              has mentioned extending their critical
              pathway model for autonomous agents but nothing has been published to date.{" "}
              <a href="https://arxiv.org/abs/2512.04785" target="_blank" rel="noopener noreferrer">ASTRIDE</a>{" "}
              (Dec 2025) extended STRIDE with an &ldquo;A&rdquo; for AI agent attacks
              but models threats <em>to</em> AI, not <em>from</em> AI as the threat actor.
            </p>
          </div>
        </div>

        <Diagram
          src="/diagrams/bridging_the_gap.webp"
          alt="Two columns — AI Safety Community on the left and Enterprise Security Community on the right — separated by a gap labelled 'No formal threat model treats AI as the insider', bridged at the bottom by 'Actions Speak Louder Than Tokens'."
        />
      </div>
    </section>
  );
}
