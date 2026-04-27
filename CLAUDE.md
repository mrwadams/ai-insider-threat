# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page Next.js 16 (App Router) + React 19 + Tailwind v4 microsite that publishes the "AI Insider Threat Model" framework. The site is deployed to Vercel at https://ai-insider-threat.matt-adams.co.uk. Content is essentially a long-form structured article — there is no backend, no database, and no tests.

## Commands

```bash
npm run dev      # next dev (Turbopack)
npm run build    # next build
npm run start    # serve the production build
npm run lint     # eslint (eslint-config-next)
```

There is no test suite. After changes, run `npm run lint` and `npm run build` to catch type/lint errors — `tsconfig.json` has `strict: true`.

## Architecture

### Page composition
The whole site is one route. `src/app/page.tsx` renders the section components from `src/components/sections/` in fixed order. The order and IDs in `page.tsx` MUST match `src/data/sections.ts` — that array is the single source of truth for both:
- the visible "Section NN" labels and `id` anchors on each section, and
- the desktop/mobile nav in `src/components/layout/SiteHeader.tsx` (which imports `SECTIONS` directly).

Adding, removing, renaming, or reordering a section means updating `sections.ts` AND `page.tsx` together. The header derives nav from `sections.ts`; the page does not — they can drift.

### Content vs. presentation
Section components are mostly thin: they import a typed dataset from `src/data/*.ts` and render it via shared interactive components in `src/components/interactive/` (`FilterableTable`, `ComparisonMatrix`, `NistCsfAccordion`, `TabbedCards`, `StatCard`, `Diagram`). When changing copy in tables/matrices, edit the corresponding `src/data/*.ts` file rather than the section component. Types for these datasets live in `src/lib/types.ts`.

### Server vs. client components
Section components are React Server Components by default. Anything under `src/components/interactive/` and the header/theme-toggle is `"use client"` because it relies on state, effects, or DOM access. Keep new interactive widgets client-side and keep section wrappers as server components unless they genuinely need state.

### Theming
Two themes (dark default, light) implemented entirely with CSS custom properties in `src/app/globals.css`. `[data-theme="light"]` on `<html>` swaps the token values. `src/app/layout.tsx` injects an inline `<script>` that reads `localStorage('theme')` and sets `data-theme` BEFORE hydration — this is the no-flash mechanism, do not remove it. `ThemeToggle.tsx` is the only place that writes the value.

Tailwind v4 is used via `@tailwindcss/postcss`. The `@theme inline { ... }` block in `globals.css` exposes the CSS-var palette as Tailwind utilities (e.g. `bg-accent-cyan`, `text-text-primary`). Prefer those utilities over hardcoded hex; for inline `style` use `var(--accent-cyan)` etc. Colour-name → hex mappings for chart-style usage (STRIDE, NIST, threat levels) live in `src/lib/constants.ts`.

### Static assets
Diagrams are pre-rendered `.webp` files in `public/diagrams/` and embedded via the `<Diagram>` wrapper around `next/image`. The favicon is `src/app/icon.svg` (Next.js auto-route).

### Path alias
`@/*` → `src/*` (configured in `tsconfig.json`). Use it for all internal imports.

## Conventions

- Copy is British English (e.g. "behaviours", "programmes", "organisation").
- Section IDs are kebab-case and used as URL anchors — do not change them casually; they're linkable.
- Commit messages follow short imperative style ("Add X", "Fix Y") — see `git log`.
