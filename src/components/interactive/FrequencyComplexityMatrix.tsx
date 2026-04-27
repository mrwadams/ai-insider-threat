import { STRIDE_THREATS } from "@/data/stride-threats";
import { STRIDE_COLORS } from "@/lib/constants";

const QUADRANTS = [
  {
    freq: "high",
    complexity: "low",
    label: "Diffuse Drift",
    description: "Reward-hacking generalisation; UEBA-style monitoring catches these.",
  },
  {
    freq: "high",
    complexity: "high",
    label: "(empty)",
    description: "Complex plans don't emerge as side-effects.",
  },
  {
    freq: "low",
    complexity: "low",
    label: "Opportunistic",
    description: "Access is the gate; intent required, mechanics trivial.",
  },
  {
    freq: "low",
    complexity: "high",
    label: "Targeted",
    description: "Sustained orchestration; practical from L2 onward.",
  },
] as const;

function ThreatBadge({ id, category }: { id: string; category: string }) {
  const color = STRIDE_COLORS[category];
  return (
    <span
      className="inline-flex items-center px-1.5 py-0.5 rounded border font-mono text-xs font-medium"
      style={{ color, borderColor: color }}
    >
      {id}
    </span>
  );
}

function QuadrantCell({
  freq,
  complexity,
  label,
  description,
}: {
  freq: "high" | "low";
  complexity: "high" | "low";
  label: string;
  description: string;
}) {
  const threats = STRIDE_THREATS.filter(
    (t) => t.frequency === freq && t.complexity === complexity
  );
  const isEmpty = threats.length === 0;

  return (
    <div
      className={`glass-card p-4 ${isEmpty ? "opacity-50" : ""}`}
      style={isEmpty ? { borderStyle: "dashed" } : undefined}
    >
      <div className="flex items-baseline justify-between mb-2">
        <h4 className="font-mono text-sm font-bold text-text-primary">
          {label}
        </h4>
        <span className="font-mono text-xs text-text-muted">
          {threats.length}
        </span>
      </div>
      <p className="text-xs text-text-muted mb-3 leading-snug">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {threats.map((t) => (
          <ThreatBadge key={t.id} id={t.id} category={t.category} />
        ))}
      </div>
    </div>
  );
}

export default function FrequencyComplexityMatrix() {
  return (
    <div className="my-8">
      <div className="grid grid-cols-[auto_1fr_1fr] gap-2">
        <div></div>
        <div className="text-center pb-1 font-mono text-xs uppercase tracking-wider text-text-muted">
          Low complexity
        </div>
        <div className="text-center pb-1 font-mono text-xs uppercase tracking-wider text-text-muted">
          High complexity
        </div>

        <div className="flex items-center justify-end pr-2 font-mono text-xs uppercase tracking-wider text-text-muted">
          High freq
        </div>
        <QuadrantCell {...QUADRANTS[0]} />
        <QuadrantCell {...QUADRANTS[1]} />

        <div className="flex items-center justify-end pr-2 font-mono text-xs uppercase tracking-wider text-text-muted">
          Low freq
        </div>
        <QuadrantCell {...QUADRANTS[2]} />
        <QuadrantCell {...QUADRANTS[3]} />
      </div>
    </div>
  );
}
