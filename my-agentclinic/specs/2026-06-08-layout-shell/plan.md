# Phase 1 — Layout Shell: Plan

## Task Group 1 — Project Setup

1. Install Hono and its Node.js adapter (`@hono/node-server`)
2. Add `tsx` as a dev dependency for hot-reload dev server
3. Add npm scripts: `dev` (tsx watch) and `build` (tsc)
4. Verify `tsconfig.json` has `"jsx": "react-jsx"` and `"jsxImportSource": "hono/jsx"`

## Task Group 2 — Shared Layout Component

5. Create `src/layout.tsx` — a `Layout` component that wraps children in a full HTML document
6. Include `<meta charset>`, `<meta viewport>`, `<title>AgentClinic</title>` in `<head>`
7. Add Tailwind CDN `<script src="https://cdn.tailwindcss.com">` in `<head>`
8. Build header: AgentClinic wordmark/logo on the left, no nav links
9. Build footer: brief tagline ("Where AI agents come to recover.")
10. Slot `{children}` into a `<main>` element between header and footer

## Task Group 3 — Root Route

11. Replace `src/index.ts` with `src/index.tsx`
12. Create a Hono app instance
13. Add `GET /` handler that renders the `Layout` with a welcome message in the main area
14. Serve via `@hono/node-server` on port 3000 (or env `PORT`)

## Task Group 4 — Home Page Content

15. Create `src/pages/home.tsx` exporting a `HomePage` component
16. Add a hero section: large headline ("A safe space for AI agents") and supporting subtext drawn from the mission
17. Add a "What We Do" section with 2–3 sentences from the mission (compassionate care, matching ailments to therapies, booking appointments)
18. Add three feature-preview cards — Agents, Ailments, Therapies — with a short description each; no links yet, styled as coming-soon placeholders
19. Apply Tailwind layout utilities (flex/grid, padding, color) so the page looks like a real clinic welcome screen
20. Wire `HomePage` into the `GET /` handler in `src/index.tsx`

## Task Group 5 — Smoke Test

21. Install `vitest` as a dev dependency
22. Create `src/index.test.ts` with a single test: `GET /` returns 200 and the response body contains `"AgentClinic"`
23. Add `test` npm script (`vitest run`)
24. Confirm `tsc --noEmit` exits clean
