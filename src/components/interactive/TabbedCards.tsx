"use client";

import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  badge?: string;
  badgeColor?: string;
  content: React.ReactNode;
}

interface TabbedCardsProps {
  tabs: Tab[];
}

export default function TabbedCards({ tabs }: TabbedCardsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-1 overflow-x-auto pb-1 mb-6 border-b border-border-subtle">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`shrink-0 px-4 py-2.5 font-mono text-sm tracking-wide transition-all duration-200 border-b-2 -mb-px ${
              activeTab === tab.id
                ? "text-accent-cyan border-accent-cyan"
                : "text-text-muted border-transparent hover:text-text-secondary hover:border-border"
            }`}
          >
            <span className="flex items-center gap-2">
              {tab.label}
              {tab.badge && (
                <span
                  className="badge"
                  style={
                    tab.badgeColor
                      ? {
                          color: tab.badgeColor,
                          background: `${tab.badgeColor}18`,
                          borderColor: `${tab.badgeColor}40`,
                        }
                      : undefined
                  }
                >
                  {tab.badge}
                </span>
              )}
            </span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="animate-fade-in" key={activeTab}>
        {activeContent}
      </div>
    </div>
  );
}
