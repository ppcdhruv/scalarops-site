import ScrollReveal from './ScrollReveal';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center section-dark bg-grid overflow-hidden">
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(15,118,110,0.08),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(15,118,110,0.05),transparent_50%)]" />

            {/* Decorative growth line */}
            <div className="absolute right-12 top-1/4 hidden lg:block opacity-[0.04]">
                <svg width="280" height="320" viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 300 Q70 280 90 220 T160 140 T220 60 T260 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="90" cy="220" r="4" fill="currentColor" opacity="0.5" />
                    <circle cx="160" cy="140" r="4" fill="currentColor" opacity="0.7" />
                    <circle cx="220" cy="60" r="4" fill="currentColor" opacity="0.9" />
                    <circle cx="260" cy="20" r="5" fill="#0f766e" />
                </svg>
            </div>

            <div className="relative content-wide px-6 md:px-12 lg:px-20 pt-32 pb-20">
                <div className="max-w-3xl">
                    {/* Above-headline KPI bar */}
                    <ScrollReveal>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10">
                            <span className="text-xs font-mono text-signal/80 tracking-wide">$2.3M+ tracked revenue</span>
                            <span className="text-white/10 hidden sm:inline">|</span>
                            <span className="text-xs font-mono text-signal/80 tracking-wide">6x avg ROAS</span>
                            <span className="text-white/10 hidden sm:inline">|</span>
                            <span className="text-xs font-mono text-signal/80 tracking-wide">340% avg brand lift</span>
                            <span className="text-white/10 hidden sm:inline">|</span>
                            <span className="text-xs font-mono text-signal/80 tracking-wide">47+ funnels built</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={80}>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
                            I build the systems that turn ad spend into{' '}
                            <span className="text-signal">compounding revenue.</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={120}>
                        <p className="text-stone text-sm uppercase tracking-widest mb-8">
                            Measurement · Attribution · Full-Stack Growth
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={160}>
                        <p className="text-stone text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                            Most growth teams pour budget into channels they can&apos;t measure.
                            I build the revenue infrastructure first — attribution, signal architecture,
                            CRM integration — then scale what&apos;s actually driving profit. One operator.
                            Your entire growth stack.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={240}>
                        <div className="flex flex-col sm:flex-row items-start gap-5">
                            <a
                                href="#contact"
                                className="inline-block bg-signal text-paper px-8 py-3.5 text-sm font-medium uppercase tracking-wider hover:bg-signal-light transition-colors duration-300"
                            >
                                Book a Strategy Call
                            </a>
                            <a
                                href="#work"
                                className="inline-flex items-center gap-2 text-sm text-stone hover:text-paper transition-colors duration-300 py-3.5"
                            >
                                See the Work
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <polyline points="19 12 12 19 5 12" />
                                </svg>
                            </a>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Below-CTA credential strip — core values, not low-level stats */}
                <ScrollReveal delay={350}>
                    <div className="mt-20 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <p className="metric text-2xl md:text-3xl">KPI-First</p>
                            <p className="text-xs text-stone mt-1">Every engagement starts with measurable outcomes</p>
                        </div>
                        <div>
                            <p className="metric text-2xl md:text-3xl">Full P&L</p>
                            <p className="text-xs text-stone mt-1">Revenue ownership, not channel-level vanity metrics</p>
                        </div>
                        <div>
                            <p className="metric text-2xl md:text-3xl">0 Layers</p>
                            <p className="text-xs text-stone mt-1">Direct access — no account managers in between</p>
                        </div>
                        <div>
                            <p className="metric text-2xl md:text-3xl">Compounds</p>
                            <p className="text-xs text-stone mt-1">Infrastructure that grows with you, not campaigns that expire</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
