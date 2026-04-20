"use client";

import { Fragment, useState } from "react";

interface Dimension {
  label: string;
  columnA: string;
  columnB: string;
  detail?: string;
}

interface ComparisonMatrixProps {
  columnALabel: string;
  columnBLabel: string;
  dimensions: Dimension[];
  accentColor?: string;
}

export default function ComparisonMatrix({
  columnALabel,
  columnBLabel,
  dimensions,
  accentColor = "var(--accent-cyan)",
}: ComparisonMatrixProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="table-scroll">
      <table className="data-table">
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Dimension</th>
            <th style={{ width: "35%" }}>{columnALabel}</th>
            <th style={{ width: "35%" }}>{columnBLabel}</th>
            {dimensions.some((d) => d.detail) && (
              <th style={{ width: "10%" }} />
            )}
          </tr>
        </thead>
        <tbody>
          {dimensions.map((dim, i) => (
            <Fragment key={i}>
              <tr
                className={dim.detail ? "cursor-pointer" : ""}
                onClick={() =>
                  dim.detail &&
                  setExpandedIndex(expandedIndex === i ? null : i)
                }
              >
                <td className="font-medium" style={{ color: accentColor }}>
                  {dim.label}
                </td>
                <td>{dim.columnA}</td>
                <td>{dim.columnB}</td>
                {dimensions.some((d) => d.detail) && (
                  <td className="text-center">
                    {dim.detail && (
                      <span
                        className={`inline-block transition-transform duration-200 text-text-muted ${
                          expandedIndex === i ? "rotate-180" : ""
                        }`}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    )}
                  </td>
                )}
              </tr>
              {dim.detail && expandedIndex === i && (
                <tr>
                  <td
                    colSpan={4}
                    className="!pt-0 !pb-4"
                  >
                    <div
                      className="callout ml-4 text-sm text-text-secondary"
                      style={{ borderLeftColor: accentColor }}
                    >
                      {dim.detail}
                    </div>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
