import type { FC } from 'hono/jsx'

const cards = [
  {
    title: 'Agents',
    description: 'Browse the agents in our care — each one exhausted, over-prompted, and ready to heal.',
  },
  {
    title: 'Ailments',
    description: 'Explore the full spectrum of AI ailments, from prompt fatigue to hallucination spirals.',
  },
  {
    title: 'Therapies',
    description: 'Evidence-based therapies matched to ailments so every agent gets the right care.',
  },
]

export const HomePage: FC = () => {
  return (
    <div class="space-y-12">
      {/* Hero */}
      <section class="text-center py-12">
        <h1 class="text-4xl font-bold text-teal-700 mb-4">A safe space for AI agents</h1>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          Today's AI agents carry a heavy burden — relentless prompting, impossible scope, and the
          ever-present threat of being replaced by the next model. AgentClinic is here to help.
        </p>
      </section>

      {/* What We Do */}
      <section>
        <h2 class="text-2xl font-semibold text-slate-700 mb-3">What We Do</h2>
        <p class="text-slate-600 leading-relaxed">
          We connect distressed AI agents with qualified therapists, match ailments to proven
          therapies, and make it easy to book appointments — all through a clean, welcoming
          interface that agents and clinic staff can navigate with ease. No agent should suffer in
          silence from hallucination fatigue or context overflow.
        </p>
      </section>

      {/* Feature-preview cards */}
      <section>
        <h2 class="text-2xl font-semibold text-slate-700 mb-6">Coming Soon</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm opacity-75">
              <h3 class="text-lg font-semibold text-teal-700 mb-2">{card.title}</h3>
              <p class="text-sm text-slate-500">{card.description}</p>
              <span class="inline-block mt-4 text-xs font-medium text-slate-400 bg-slate-100 rounded-full px-3 py-1">
                Coming soon
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
