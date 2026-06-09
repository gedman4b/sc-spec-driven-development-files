# AgentClinic — Roadmap

Each phase is a thin vertical slice: a working, shippable feature from route to UI. Phases stay small so progress is visible and specs stay focused.

## Phase 1 — Layout Shell ("Hello, Hono")

- Install and configure Hono
- Serve a root route (`/`) with a basic HTML layout
- Header, footer, and main content area
- Apply base Tailwind styles

_Done when: the app runs and renders a recognizable AgentClinic page._

## Phase 2 — Agents

- Data model for an AI agent (name, model, status)
- Seed a small list of example agents
- `/agents` page listing all agents
- `/agents/:id` page showing a single agent's profile

_Done when: users can browse and view individual agent profiles._

## Phase 3 — Ailments

- Data model for ailments (name, description, severity)
- Seed common AI ailments (prompt fatigue, context overflow, hallucination spirals…)
- `/ailments` page listing all ailments
- Link ailments to agents on the agent profile page

_Done when: ailments are browsable and visible on agent profiles._

## Phase 4 — Therapies

- Data model for therapies (name, description, treats which ailments)
- Seed example therapies
- `/therapies` page listing all therapies
- Show recommended therapies for each ailment

_Done when: therapies are browsable and linked to ailments._

## Phase 5 — Appointments

- Data model for appointments (agent, therapist, date/time, status)
- Book-an-appointment form on the agent profile page
- `/appointments` page listing upcoming appointments
- Basic status management (scheduled, completed, cancelled)

_Done when: an agent can book and view appointments._

## Phase 6 — Dashboard

- Staff dashboard: overview of agents, open appointments, ailment distribution
- Agent dashboard: my appointments, my ailments, recommended therapies
- Navigation ties all sections together

_Done when: both staff and agent views provide a useful at-a-glance summary._
