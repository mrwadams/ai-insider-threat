interface StatCardProps {
  value: string;
  label: string;
  color: string;
}

export default function StatCard({ value, label, color }: StatCardProps) {
  return (
    <div className="glass-card corner-brackets p-4 text-center">
      <div
        className="font-mono text-2xl sm:text-3xl font-bold mb-1"
        style={{ color }}
      >
        {value}
      </div>
      <div className="font-mono text-xs uppercase tracking-wider text-text-secondary">
        {label}
      </div>
    </div>
  );
}
