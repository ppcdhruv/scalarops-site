import ScrollReveal from './ScrollReveal';

const phases = [
    {
        num: '01',
        title: 'Audit your signal layer',
        subtitle: 'Before spending a dollar more, I figure out if your data is telling you the truth.',
        outcome: 'You\'ll know exactly what\'s measured correctly, what\'s not, and where the blind spots are.',
        details: [
            'Full analytics audit — are your conversion events, attribution models, and event schemas set up correctly?',
            'Server-side tracking assessment — is your data surviving ad blockers and cookie deprecation?',
            'CRM-to-ad-platform mapping — can you trace a lead from click to closed revenue?',
            'Cross-platform gap analysis — where are Google, Meta, YouTube, and LinkedIn disagreeing?',
            'AI readiness check — is your data clean enough for automated bidding to actually work?',
        ],
    },
    {
        num: '02',
        title: 'Architect the growth system',
        subtitle: 'Build the full path from first click to revenue — not just ads, but the entire conversion engine.',
        outcome: 'A system where every dollar spent can be traced to a business outcome.',
        details: [
            'Campaign architecture across Search, Display, YouTube, and Performance Max — structured for revenue, not reach',
            'Landing page conversion analysis — where visitors drop off and why',
            'CRM pipeline integration — connect your ad platforms to HubSpot or Salesforce so you see actual revenue, not just leads',
            'Creative direction tied to buyer intent stages — what converts at each step',
            'Bid strategy design — feeding the right signals so AI optimizes for profit, not clicks',
        ],
    },
    {
        num: '03',
        title: 'Operate and compound',
        subtitle: 'Ongoing execution with weekly accountability — not quarterly check-ins and monthly slide decks.',
        outcome: 'Infrastructure that compounds. Performance that\'s measured against forecasts, not benchmarks.',
        details: [
            'Weekly performance rhythm with real-time dashboards — you always know where you stand',
            'Budget pacing and reallocation — proactive adjustments, not end-of-month surprises',
            'I sit in your revenue conversations, not just the ad account — full P&L visibility',
            '90-day roadmaps with clear hypotheses and kill criteria — structured experimentation',
            'System documentation — everything I build stays with you after the engagement',
        ],
    },
];

const comparison = {
    dimensions: ['Who owns results', 'How you communicate', 'How success is measured', 'What stays after', 'Cadence'],
    columns: [
        {
            name: 'What most agencies deliver',
            values: [
                'Channel-level KPIs, not revenue',
                'Through an account manager',
                'Platform metrics and monthly decks',
                'Campaigns that expire',
                'Monthly or quarterly reviews',
            ],
        },
        {
            name: 'What freelancers deliver',
            values: [
                'Task completion, not outcomes',
                'Direct, but narrow scope',
                'Basic tracking and reports',
                'No lasting systems',
                'As-needed, ad hoc',
            ],
        },
        {
            name: 'What you get with Scalar Ops',
            values: [
                'Full P&L ownership, cross-stack',
                'Direct — no layers, no hand-off',
                'Revenue attribution, performance-vs-forecast',
                'Compounding infrastructure',
                'Weekly operational rhythm',
            ],
        },
    ],
};

export default function Methodology() {
    return (
        <section id="approach" className="section-padding">
            <div className="content-grid">
                <ScrollReveal>
                    <p className="label mb-4">How It Works</p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
                        Three phases. One system.
                    </h2>
                    <p className="text-stone text-base md:text-lg mb-16 max-w-2xl">
                        Not a retainer. Not a project. A growth engine designed to compound —
                        built on data you can trust, operated with weekly accountability.
                    </p>
                </ScrollReveal>

                {/* Three phases with visual connector */}
                <div className="relative space-y-12 md:space-y-16 mb-20">
                    {/* Vertical connector line */}
                    <div className="absolute left-[15px] md:left-[85px] top-8 bottom-8 w-px bg-gradient-to-b from-signal/40 via-signal/20 to-transparent hidden md:block" />

                    {phases.map((phase, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 relative">
                                {/* Phase number + title */}
                                <div className="md:col-span-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        {/* Step dot */}
                                        <div className="w-[10px] h-[10px] rounded-full bg-signal/60 border-2 border-signal shrink-0 hidden md:block" />
                                        <span className="text-xs font-mono text-signal font-medium">{phase.num}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl md:text-3xl mb-3 leading-snug">
                                        {phase.title}
                                    </h3>
                                    <p className="text-stone text-sm leading-relaxed mb-3">
                                        {phase.subtitle}
                                    </p>
                                    <p className="text-xs text-signal/80 font-medium italic">
                                        → {phase.outcome}
                                    </p>
                                </div>

                                {/* Details */}
                                <div className="md:col-span-8">
                                    <ul className="space-y-3">
                                        {phase.details.map((item, j) => (
                                            <li
                                                key={j}
                                                className="text-sm text-stone leading-relaxed pl-4 border-l-2 border-chalk hover:border-signal/50 transition-colors duration-300"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Comparison table */}
                <ScrollReveal delay={200}>
                    <div className="border-t border-chalk pt-12">
                        <h3 className="font-serif text-xl md:text-2xl mb-3">
                            Why this model works differently.
                        </h3>
                        <p className="text-stone text-sm mb-8 max-w-xl">
                            Most growth hires give you deliverables. This gives you a system.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-chalk">
                                        <th className="py-3 pr-6 text-xs font-medium uppercase tracking-wider text-stone w-1/4"></th>
                                        {comparison.columns.map((col, i) => (
                                            <th
                                                key={i}
                                                className={`py-3 px-4 text-xs font-medium uppercase tracking-wider ${i === 2 ? 'text-signal' : 'text-stone'
                                                    }`}
                                            >
                                                {col.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparison.dimensions.map((dim, rowIdx) => (
                                        <tr key={rowIdx} className="border-b border-chalk/50">
                                            <td className="py-3 pr-6 text-xs font-medium uppercase tracking-wider text-stone">
                                                {dim}
                                            </td>
                                            {comparison.columns.map((col, colIdx) => (
                                                <td
                                                    key={colIdx}
                                                    className={`py-3 px-4 text-sm ${colIdx === 2 ? 'text-ink font-medium' : 'text-stone'
                                                        }`}
                                                >
                                                    {col.values[rowIdx]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
