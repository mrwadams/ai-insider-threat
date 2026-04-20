const LIMITATIONS = [
  {
    title: "White-box interpretability gap",
    description:
      "Enterprise defenders have only black-box API access. Detection of activation-level deception (e.g., Anthropic's SAE features for \"strategic manipulation\") requires interpretability tools that only model providers currently possess. This is a structural asymmetry that the security community needs to address.",
  },
  {
    title: "Multi-agent collusion",
    description:
      "This framework treats individual agents as threat actors. Multi-agent deployments introduce collusion risk that is not yet well understood.",
  },
  {
    title: "Model versioning",
    description:
      "Threat profiles change with each model version. The controls framework needs to be re-evaluated with each significant model update.",
  },
  {
    title: "Adversarial prompt injection",
    description:
      "This framework models the AI as an autonomous threat actor. The intersection with adversarial prompt injection (external attacker weaponising the agent) is a related but distinct threat model.",
  },
  {
    title: "Empirical validation",
    description:
      "The behavioural indicators and detection strategies proposed here are derived from documented system card findings and the ROME incident. They need empirical validation in enterprise deployment environments.",
  },
];

export default function Limitations() {
  return (
    <section id="limitations" className="py-20 sm:py-28">
      <div className="section-divider mb-20 sm:mb-28" />
      <div className="container-narrow">
        <div className="section-label">Section 09</div>
        <h2 className="section-heading">Limitations and Future Work</h2>

        <div className="space-y-4">
          {LIMITATIONS.map((item, i) => (
            <div key={i} className="glass-card p-5">
              <h3 className="font-mono text-sm font-bold text-accent-orange mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
