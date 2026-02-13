import ScrollReveal from './ScrollReveal';

const pillars = [
    {
        num: '01',
        title: 'Your agency manages channels, not outcomes.',
        body: 'They optimize impressions and clicks in silos. Nobody owns the full picture — media, analytics, CRM, creative — so nobody can tell you what\'s actually driving revenue and what\'s just burning budget.',
    },
    {
        num: '02',
        title: 'Your data is broken and nobody told you.',
        body: 'GA4 misconfigured. Conversion events double-firing. Attribution models set to defaults nobody questioned. You\'re making six-figure spend decisions on data that wouldn\'t survive an audit.',
    },
    {
        num: '03',
        title: 'You\'re scaling spend on a fractured foundation.',
        body: 'More budget doesn\'t fix a measurement problem. Without clean signal infrastructure — SST, OCT, proper event schemas — every dollar you add amplifies the same blind spots.',
    },
];

export default function Problem() {
    return (
        <section id="problem" className="section-padding">
            <div className="content-grid">
                <ScrollReveal>
                    <p className="label mb-4">The Problem</p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl max-w-2xl mb-16">
                        You don&apos;t have a marketing problem. You have a measurement problem.
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-16">
                    {pillars.map((p, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className="group">
                                <span className="text-xs font-mono text-signal font-medium">{p.num}</span>
                                <h3 className="font-serif text-xl md:text-2xl mt-3 mb-4 leading-snug">
                                    {p.title}
                                </h3>
                                <p className="text-stone text-sm leading-relaxed">
                                    {p.body}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={350}>
                    <div className="border-t border-chalk pt-10">
                        <p className="text-base md:text-lg leading-relaxed max-w-2xl">
                            The fix isn&apos;t more budget or another agency. It&apos;s one operator
                            who owns the full stack — measurement, media, CRM, creative — and builds
                            a system that compounds quarter over quarter.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
