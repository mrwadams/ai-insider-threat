"use client";

import { useState } from "react";
import Diagram from "@/components/interactive/Diagram";
import { DETECTION_CATEGORIES } from "@/data/detection-strategies";

export default function DetectionStrategies() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="detection-strategies" className="py-20 sm:py-28">
      <div className="section-divider mb-20 sm:mb-28" />
      <div className="container-narrow">
        <div className="section-label">Section 06</div>
        <h2 className="section-heading">
          Detection Strategies Using Existing Enterprise Tooling
        </h2>

        <div className="section-prose space-y-6 mb-10">
          <p>
            The five{" "}
            <a href="#threat-taxonomy">threat categories</a> — Credential Compromise,
            Supply Chain Sabotage, Data Exfiltration, Infrastructure Sabotage, and
            Deception &amp; Evasion — each leave observable traces in enterprise
            infrastructure. The &ldquo;Threat IDs&rdquo; column in each table below
            maps back to the specific STRIDE threats in the{" "}
            <a href="#stride-appendix">Appendix</a>.
          </p>

          <div className="callout">
            <p className="text-sm">
              <strong>Principle:</strong> Enterprises don&apos;t need new categories of
              tools — they need to point existing insider threat detection at a new class
              of actor.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          {DETECTION_CATEGORIES.map((cat, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={cat.name}
                className="glass-card overflow-hidden transition-all duration-300"
                style={{
                  borderColor: isOpen ? `${cat.color}40` : undefined,
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between px-5 py-4 accordion-trigger"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: cat.color }}
                    />
                    <span className="font-mono text-sm font-medium text-text-primary">
                      {cat.name}
                    </span>
                    <span className="text-sm font-mono text-text-muted">
                      {cat.items.length} detection points
                    </span>
                  </span>
                  <span
                    className={`text-text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                <div
                  className="accordion-content"
                  style={{
                    maxHeight: isOpen ? `${cat.items.length * 200 + 32}px` : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-5 pb-4">
                    <div className="table-scroll">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th>What to Monitor</th>
                            <th>Detection Logic</th>
                            <th style={{ width: "100px" }}>Threat IDs</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cat.items.map((item, j) => (
                            <tr key={j}>
                              <td className="font-medium text-text-primary text-sm">
                                {item.monitor}
                              </td>
                              <td className="text-sm">{item.detectionLogic}</td>
                              <td className="font-mono text-sm" style={{ color: cat.color }}>
                                {item.mapsTo}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Diagram
          src="/diagrams/detection_strategy.webp"
          alt="Architecture diagram showing an AI agent at the centre. Above the agent, two panels split the chain of thought into Content (crossed out in red as unreliable) and Shape (in amber with a magnifying-glass icon, marked as a useful signal: length, depth, divergence from task). Around the agent, four infrastructure monitoring layers: shell commands, network traffic, file system changes, and database queries. Banner reads 'Watch what it did, not what it said.'"
        />
      </div>
    </section>
  );
}
