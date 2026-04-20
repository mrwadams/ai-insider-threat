"use client";

import { useState } from "react";

interface NistFunction {
  name: string;
  color: string;
  controls: string[];
}

interface NistCsfAccordionProps {
  functions: NistFunction[];
}

export default function NistCsfAccordion({ functions }: NistCsfAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {functions.map((fn, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={fn.name}
            className="glass-card overflow-hidden transition-all duration-300"
            style={{
              borderColor: isOpen ? `${fn.color}40` : undefined,
            }}
          >
            {/* Trigger */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 accordion-trigger"
            >
              <span className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded font-mono text-sm font-bold"
                  style={{
                    color: fn.color,
                    background: `${fn.color}15`,
                    border: `1px solid ${fn.color}30`,
                  }}
                >
                  {fn.name.charAt(0)}
                </span>
                <span className="font-mono text-sm font-medium text-text-primary">
                  {fn.name}
                </span>
                <span className="text-sm font-mono text-text-muted">
                  {fn.controls.length} controls
                </span>
              </span>
              <span
                className={`text-text-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            {/* Content */}
            <div
              className="accordion-content"
              style={{
                maxHeight: isOpen ? `${fn.controls.length * 100 + 32}px` : "0",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="px-5 pb-4">
                <ul className="space-y-2">
                  {fn.controls.map((control, ci) => (
                    <li
                      key={ci}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: fn.color }}
                      />
                      {control}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
