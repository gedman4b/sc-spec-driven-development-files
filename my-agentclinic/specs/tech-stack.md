# AgentClinic — Tech Stack

## Language

**TypeScript** — server-side, strict mode. All source lives under `src/`.

## Runtime

**Node.js** (v18+)

## Framework

**[Hono](https://hono.dev/)** — recommended for this project.

Hono is a small, fast, TypeScript-native web framework. It supports JSX for server-side rendering, has an excellent middleware ecosystem, and runs on Node.js, Bun, Deno, and edge runtimes without changes. It keeps the stack simple: one framework handles routing, middleware, and HTML rendering without a separate frontend build step.

## Styling

**Tailwind CSS** — utility-first CSS, applied directly in server-rendered markup. No separate stylesheet to maintain.

## Tooling

| Tool | Purpose |
|------|---------|
| `tsc` | TypeScript compilation |
| `tsx` | Dev server with hot reload |
| `npm` | Package management |

## Guiding Principles

- Server-rendered HTML by default — no client-side JS framework
- Minimal dependencies; add only what a feature explicitly requires
- Keep build steps simple enough that any agent (or human) can run the project in one command
