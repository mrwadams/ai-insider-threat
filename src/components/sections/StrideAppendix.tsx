import FilterableTable from "@/components/interactive/FilterableTable";
import FrequencyComplexityMatrix from "@/components/interactive/FrequencyComplexityMatrix";
import { STRIDE_THREATS } from "@/data/stride-threats";
import { SOURCES } from "@/data/sources";
import { STRIDE_COLORS } from "@/lib/constants";

const STRIDE_CATEGORIES = [
  "Spoofing",
  "Tampering",
  "Repudiation",
  "Information Disclosure",
  "Denial of Service",
  "Elevation of Privilege",
];

const columns = [
  { key: "id", label: "ID", width: "60px" },
  { key: "category", label: "Category", width: "160px" },
  { key: "scenario", label: "Scenario" },
  { key: "impact", label: "Impact" },
];

const tableData = STRIDE_THREATS.map((t) => ({
  id: t.id,
  category: t.category,
  scenario: t.scenario,
  impact: t.impact,
}));

export default function StrideAppendix() {
  return (
    <section id="stride-appendix" className="py-20 sm:py-28">
      <div className="section-divider mb-20 sm:mb-28" />
      <div className="container-narrow">
        <div className="section-label">Appendix A</div>
        <h2 className="section-heading">Full STRIDE Threat Model</h2>

        <p className="section-prose mb-4">
          23 threats across all six STRIDE categories with the AI agent as threat actor.
          Generated using STRIDE-GPT with the AI agent as the threat actor input.
        </p>

        <h3 className="font-mono text-lg font-bold text-text-primary mt-10 mb-3">
          Frequency × Complexity
        </h3>

        <p className="section-prose mb-2">
          The 23 threats are not equivalent. Some emerge as side-effects of normal
          operation; others require deliberate orchestration. Plotting them on two
          axes — frequency (how readily the behaviour emerges) and complexity (how
          much sustained planning it requires) — gives a prioritisation map. The
          axes are borrowed from Anthropic&apos;s{" "}
          <a href="https://www-cdn.anthropic.com/f21d93f21602ead5cdbecb8c8e1c765759d9e232.pdf" target="_blank" rel="noopener noreferrer">Sabotage Risk Report</a>;
          the per-threat ratings below are this framework&apos;s.
        </p>

        <FrequencyComplexityMatrix />

        <p className="section-prose mb-2">
          The diffuse-drift quadrant scales worst at L3/L4, where long unmonitored
          windows let low-effort behaviour accumulate. The targeted quadrant can
          appear from L2 onward — sustained focus needs scoped autonomy, which L2
          already provides. Opportunistic threats are gated by access, not by
          autonomy level.
        </p>

        <p className="section-prose mb-10">
          The high-frequency / high-complexity corner is empty. That is itself the
          lesson: complex multi-step plans don&apos;t emerge as side-effects of
          normal operation, they require deliberate orchestration. Unusual
          complexity in an action pattern is itself a signal worth investigating
          — even when each individual action looks innocuous.
        </p>

        <p className="text-sm font-mono text-text-muted mb-8">
          Filter by STRIDE category. Click column headers to sort.
        </p>

        <FilterableTable
          columns={columns}
          data={tableData}
          filterKey="category"
          filters={STRIDE_CATEGORIES}
          filterColors={STRIDE_COLORS}
        />

        {/* Sources */}
        <div className="mt-20">
          <div className="section-label">Appendix B</div>
          <h2 className="section-heading">Source Material</h2>

          <p className="section-prose mb-8">
            All sources are publicly available.
          </p>

          <div className="space-y-2">
            {SOURCES.map((source) => (
              <div
                key={source.id}
                className="flex items-start gap-3 text-sm py-2 border-b border-border-subtle last:border-0"
              >
                <span className="font-mono text-sm text-text-muted w-6 shrink-0 text-right mt-0.5">
                  [{source.id}]
                </span>
                <div>
                  <span className="text-text-secondary">{source.author}, </span>
                  {source.url ? (
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent-cyan transition-colors">
                      &ldquo;{source.title},&rdquo;
                    </a>
                  ) : (
                    <span className="text-text-primary">&ldquo;{source.title},&rdquo;</span>
                  )}
                  <span className="text-text-muted"> {source.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
