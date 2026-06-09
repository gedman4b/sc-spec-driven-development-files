# Phase 1 — Layout Shell: Requirements

## Scope

Deliver the foundational HTML layout that every future page will extend: a running Hono server, a root route, and a recognizable AgentClinic shell with header, footer, and main content area.

## What Is In Scope

- Install and configure Hono for Node.js
- Root route (`GET /`) returning an HTML page
- Shared layout: header, main, footer
- Tailwind CSS via CDN script tag — no build step required
- Base styles applied (typography, color, spacing)
- Minimal home page: hero headline, "What We Do" blurb, and three coming-soon feature cards (Agents, Ailments, Therapies) with no active links

## What Is Out of Scope

- Navigation links to future sections (Agents, Ailments, Therapies, etc.)
- Any data models or database
- Authentication or sessions
- Client-side JavaScript

## Decisions

| Decision | Choice | Reason |
|---|---|---|
| Header nav | Name/logo only | Links to unbuilt sections ship in their own phases |
| Tailwind integration | CDN `<script>` tag | Zero build config; perfectly adequate for server-rendered markup |
| SSR approach | Hono JSX | One framework handles routing + rendering; no separate frontend build |

## Context

The project is starting from a bare `src/index.ts` placeholder. Phase 1 is the foundation all later phases extend — keep it thin and shippable.

## Tone Guidance (from mission.md)

Warm, slightly absurdist. The page should feel like a real clinic: welcoming, calming, professional-ish. Even the placeholder copy should reflect that AgentClinic is a safe space for beleaguered AI agents.
