export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-surface">
      {/* Citation block */}
      <div className="container-narrow py-12">
        <div className="glass-card p-6 mb-10">
          <div className="section-label mb-3">Cite as</div>
          <p className="font-mono text-sm text-text-secondary leading-relaxed">
            Adams, M. (2026). &ldquo;Actions Speak Louder Than Tokens: An Insider
            Threat Model for Frontier AI Agents.&rdquo;{" "}
            <span className="text-text-muted italic">
              ai-insider-threat.matt-adams.co.uk
            </span>
          </p>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          {/* Author */}
          <div>
            <h3 className="font-mono text-sm tracking-widest uppercase text-text-muted mb-3">
              Author
            </h3>
            <p className="text-text-primary font-medium"><a href="https://www.linkedin.com/in/matthewrwadams" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">Matt Adams</a></p>
            <p className="text-text-secondary mt-1">
              AI Security &amp; Governance
            </p>
          </div>

          {/* License */}
          <div>
            <h3 className="font-mono text-sm tracking-widest uppercase text-text-muted mb-3">
              License
            </h3>
            <p className="text-text-secondary">
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-cyan hover:text-accent-cyan/80 transition-colors"
              >
                CC BY 4.0
              </a>{" "}
              — share and adapt with attribution.
            </p>
          </div>

          {/* Source */}
          <div>
            <h3 className="font-mono text-sm tracking-widest uppercase text-text-muted mb-3">
              Source
            </h3>
            <p className="text-text-secondary">
              <a
                href="https://github.com/mrwadams/ai-insider-threat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-cyan hover:text-accent-cyan/80 transition-colors inline-flex items-center gap-1.5"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-subtle">
        <div className="container py-4 flex items-center justify-between text-sm text-text-muted font-mono">
          <span>&copy; {new Date().getFullYear()} Matt Adams</span>
          <span className="opacity-50">
            v1.0 — Last updated April 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
