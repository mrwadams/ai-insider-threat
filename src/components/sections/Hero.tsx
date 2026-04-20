import StatCard from "@/components/interactive/StatCard";

const STATS = [
  { value: "23", label: "STRIDE Threats", color: "var(--accent-cyan)" },
  { value: "5", label: "Threat Categories", color: "var(--accent-orange)" },
  { value: "4", label: "Autonomy Levels", color: "var(--accent-green)" },
  { value: "5", label: "CERT Dimensions Adapted", color: "var(--accent-purple)" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center dot-grid">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-narrow relative z-10 py-24">
        <div className="animate-fade-up">
          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-[1.15] mb-6 tracking-tight">
            Actions Speak Louder
            <br />
            Than Tokens
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary font-light leading-relaxed mb-4">
            An Insider Threat Model for
            <br className="hidden sm:inline" />{" "}
            Frontier AI Agents
          </p>
          <p className="text-sm text-text-muted font-mono mb-10">by <a href="https://www.linkedin.com/in/matthewrwadams" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-cyan transition-colors">Matt Adams</a></p>
        </div>

        <div className="animate-fade-up delay-2">
          <p className="section-prose max-w-2xl mb-10">
            A structured threat model that treats frontier AI agents as insider
            threat actors within enterprise security architecture — using the same
            methodology applied to human insiders for decades.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up delay-3">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="mt-16 flex justify-center animate-fade-in delay-5">
          <a
            href="#introduction"
            className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors"
          >
            <span className="text-sm font-mono tracking-wider uppercase">
              Read the framework
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-bounce">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
