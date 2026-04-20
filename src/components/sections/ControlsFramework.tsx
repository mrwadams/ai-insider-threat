import NistCsfAccordion from "@/components/interactive/NistCsfAccordion";
import { NIST_CONTROLS } from "@/data/controls-framework";
import { NIST_COLORS } from "@/lib/constants";

export default function ControlsFramework() {
  const functions = NIST_CONTROLS.map((nc) => ({
    name: nc.function,
    color: NIST_COLORS[nc.function],
    controls: nc.controls,
  }));

  return (
    <section id="controls-framework" className="py-20 sm:py-28">
      <div className="section-divider mb-20 sm:mb-28" />
      <div className="container-narrow">
        <div className="section-label">Section 07</div>
        <h2 className="section-heading">Controls Framework</h2>

        <div className="section-prose space-y-6 mb-10">
          <p>
            The{" "}
            <a href="#detection-strategies">detection strategies</a> above tell you
            what to watch for. This section provides the controls to reduce the
            attack surface in the first place — mapped to the{" "}
            <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer">NIST Cybersecurity Framework</a>{" "}
            functions and designed to mitigate the five{" "}
            <a href="#threat-taxonomy">threat categories</a> across all{" "}
            <a href="#deployment-archetypes">autonomy levels</a>.
          </p>
          <p>
            These controls use existing enterprise security infrastructure — no new
            tool categories required.
          </p>
        </div>

        <NistCsfAccordion functions={functions} />
      </div>
    </section>
  );
}
