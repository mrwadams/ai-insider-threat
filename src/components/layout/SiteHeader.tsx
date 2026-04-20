"use client";

import { useState, useEffect, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";
import { SECTIONS } from "@/data/sections";

const NAV_ITEMS = SECTIONS.map((s) => ({ id: s.id, label: s.shortTitle }));

export default function SiteHeader() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setScrollProgress(progress);
    setScrolled(scrollTop > 20);

    // Find active section
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean);

    let current = "";
    for (const section of sections) {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120) {
          current = section.id;
        }
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      {/* Main header */}
      <header
        className={`site-header sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-base/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-14">
            {/* Title */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 group shrink-0"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-accent-cyan/10 border border-accent-cyan/20 font-mono text-xs font-bold text-accent-cyan group-hover:bg-accent-cyan/20 transition-colors">
                AI
              </span>
              <span className="font-mono text-sm font-bold text-text-primary tracking-tight hidden sm:inline">
                Insider Threat Model
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Section navigation">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded text-sm font-mono tracking-wide whitespace-nowrap transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-accent-cyan bg-accent-cyan/8"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1 p-2 -mr-2"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`block w-4 h-px bg-text-secondary transition-all duration-200 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[3px]" : ""
                }`}
              />
              <span
                className={`block w-4 h-px bg-text-secondary transition-opacity duration-200 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-4 h-px bg-text-secondary transition-all duration-200 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`lg:hidden border-t border-border-subtle bg-bg-base/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="container py-3 flex flex-col gap-0.5" aria-label="Section navigation (mobile)">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 rounded text-sm font-mono tracking-wide transition-colors ${
                  activeSection === item.id
                    ? "text-accent-cyan bg-accent-cyan/8"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
