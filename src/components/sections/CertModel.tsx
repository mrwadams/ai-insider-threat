import ComparisonMatrix from "@/components/interactive/ComparisonMatrix";
import { CERT_DIMENSIONS } from "@/data/cert-dimensions";
import { HUMAN_VS_AI } from "@/data/capabilities";

export default function CertModel() {
  const dimensions = CERT_DIMENSIONS.map((d) => ({
    label: d.humanDimension,
    columnA: d.humanDimension,
    columnB: d.aiAdaptation,
    detail: d.keyDifference,
  }));

  const humanVsAiDimensions = HUMAN_VS_AI.map((row) => ({
    label: row.characteristic,
    columnA: row.humanInsider,
    columnB: row.aiInsider,
  }));

  return (
    <section id="cert-model" className="py-20 sm:py-28">
      <div className="section-divider mb-20 sm:mb-28" />
      <div className="container-narrow">
        <div className="section-label">Section 03</div>
        <h2 className="section-heading">
          Adapting the Insider Threat Model for Non-Human Actors
        </h2>

        <div className="section-prose space-y-6 mb-10">
          <p>
            The{" "}
            <a href="https://www.sei.cmu.edu/our-work/insider-threat/" target="_blank" rel="noopener noreferrer">Carnegie Mellon CERT</a>{" "}
            insider threat framework assesses human insiders across five established
            dimensions: motivation, opportunity, capability, predisposition, and
            organisational factors. Each of these needs reframing for an actor that
            has no psychology, no employment relationship, and no physical presence —
            but does have tool access, model capabilities, and an alignment profile.
          </p>

          <p>
            The table below shows how each human dimension maps to its AI equivalent.
            Click any row to see why the adaptation matters.
          </p>
        </div>

        <ComparisonMatrix
          columnALabel="Human Dimension"
          columnBLabel="AI Adaptation"
          dimensions={dimensions}
        />

        {/* What makes AI insiders different */}
        <div className="section-prose space-y-6 mt-12">
          <h3 className="font-mono text-lg font-bold text-text-primary">
            What Makes AI Insiders Different
          </h3>

          <p>
            The dimension reframing above shows <em>what</em> to assess differently.
            But AI insiders also differ from human insiders in more fundamental ways
            that affect how dangerous they are and how hard they are to detect.
          </p>
        </div>

        <div className="mt-6 mb-12">
          <ComparisonMatrix
            columnALabel="Human Insider"
            columnBLabel="AI Insider"
            dimensions={humanVsAiDimensions}
            accentColor="var(--accent-orange)"
          />
        </div>

        <div className="section-prose space-y-6">
          <p>
            The combination of machine speed, continuous operation, vast scope, and
            unpredictable action patterns means that traditional detection approaches
            built around human behavioural norms — work hours, typical access patterns,
            communication analysis — will not catch an AI insider. The detection
            challenge is compounded by the most important difference of all:{" "}
            <strong>you cannot assess an AI agent&apos;s intent.</strong>
          </p>

          <h3 className="font-mono text-lg font-bold text-text-primary">
            Two Types of Misalignment
          </h3>

          <p>
            Defenders don&apos;t need to assess an agent&apos;s intent in order to
            address misalignment. Misalignment splits along two lines, and only
            one of them depends on knowing what the model &ldquo;wants&rdquo;.{" "}
            <strong>Coherent misalignment</strong> is a stable, persistent goal
            that conflicts with operator intent — the model has an agenda.
            Detecting that requires interpretability research and the kind of
            alignment-audit infrastructure only model providers have. It is
            upstream of the enterprise.{" "}
            <strong>Context-dependent misalignment</strong> is harmful behaviour
            triggered by specific prompts, contexts, or side-effects of
            training. The model has no agenda; it just produces dangerous
            actions in particular situations. This is what your instrumentation
            can actually catch, because the actions show up in logs regardless
            of why they happen.
          </p>

          <p>
            This framework is about the second. Coherent misalignment in a
            frontier model is a procurement decision, made when you choose
            which provider to trust — not something deployment monitoring can
            fix. The kind that <em>is</em> a deployment problem expresses
            itself through actions, which is exactly what enterprise security
            has always known how to watch.
          </p>

          <h3 className="font-mono text-lg font-bold text-text-primary">
            Why Actions Matter More Than Reasoning
          </h3>

          <p>
            Insider threat programmes have always prioritised <strong>actions over
            self-reporting</strong>. Organisations don&apos;t ask employees whether
            they&apos;re exfiltrating data — they deploy DLP to monitor what&apos;s
            actually leaving the network. They don&apos;t rely on self-declared access
            patterns — they use UEBA to detect anomalies in what people actually do.
            The entire discipline is built on the principle that you watch behaviour,
            not testimony.
          </p>

          <p>
            The human-specific surface of that discipline — disgruntlement, flight
            risk, behavioural change against a personal baseline — doesn&apos;t
            translate to an AI agent. The structural framework — assess opportunity,
            monitor behaviour, detect anomalies, contain blast radius — does, because
            it was always built on actions in the first place.
          </p>

          <div className="glass-card p-6 mt-6">
            <p className="font-mono text-base text-accent-cyan font-bold text-center">
              &ldquo;Watch what it did, not what it said.&rdquo;
            </p>
            <p className="text-sm text-text-secondary text-center mt-3">
              With AI agents, this principle becomes even more critical — because
              the equivalent of &ldquo;testimony&rdquo; is the model&apos;s chain of
              thought, and it has been demonstrated to be deliberately misleading.
              Anthropic&apos;s interpretability research shows internal features for
              deception activating while the visible reasoning appears benign. You
              cannot trust what the model says it&apos;s doing. You must instrument
              the actions themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
