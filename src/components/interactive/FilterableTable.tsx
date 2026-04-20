"use client";

import { useState, useMemo } from "react";

interface Column {
  key: string;
  label: string;
  width?: string;
}

interface FilterableTableProps {
  columns: Column[];
  data: Record<string, string>[];
  filterKey?: string;
  filters?: string[];
  filterColors?: Record<string, string>;
}

export default function FilterableTable({
  columns,
  data,
  filterKey,
  filters,
  filterColors,
}: FilterableTableProps) {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(filter)) {
        next.delete(filter);
      } else {
        next.add(filter);
      }
      return next;
    });
  };

  const clearFilters = () => setActiveFilters(new Set());

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const filteredData = useMemo(() => {
    let result = data;
    if (filterKey && activeFilters.size > 0) {
      result = result.filter((row) => activeFilters.has(row[filterKey]));
    }
    if (sortKey) {
      result = [...result].sort((a, b) => {
        const aVal = a[sortKey] || "";
        const bVal = b[sortKey] || "";
        const cmp = aVal.localeCompare(bVal);
        return sortDir === "asc" ? cmp : -cmp;
      });
    }
    return result;
  }, [data, filterKey, activeFilters, sortKey, sortDir]);

  return (
    <div>
      {/* Filter pills */}
      {filters && filters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {activeFilters.size > 0 && (
            <button onClick={clearFilters} className="pill pill-clear">
              Clear all
            </button>
          )}
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`pill ${activeFilters.has(filter) ? "active" : ""}`}
              style={
                activeFilters.has(filter) && filterColors?.[filter]
                  ? {
                      borderColor: filterColors[filter],
                      color: filterColors[filter],
                      background: `${filterColors[filter]}15`,
                      boxShadow: `0 0 12px ${filterColors[filter]}25`,
                    }
                  : undefined
              }
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      {/* Table */}
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className="cursor-pointer hover:text-text-secondary transition-colors"
                  style={col.width ? { width: col.width } : undefined}
                >
                  <span className="inline-flex items-center gap-1">
                    {col.label}
                    {sortKey === col.key && (
                      <span className="text-accent-cyan">
                        {sortDir === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, i) => (
              <tr key={i}>
                {columns.map((col) => (
                  <td key={col.key}>{row[col.key]}</td>
                ))}
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center text-text-muted py-8"
                >
                  No matching items
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Count */}
      <div className="mt-3 text-sm font-mono text-text-muted">
        {filteredData.length} of {data.length} items
      </div>
    </div>
  );
}
