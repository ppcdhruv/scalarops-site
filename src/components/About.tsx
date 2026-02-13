import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function About() {
    return (
        <section id="about" className="section-dark section-padding overflow-hidden">
            <div className="content-grid">
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
                        {/* Image — left column */}
                        <div className="md:col-span-5 relative">
                            {/* Decorative accent */}
                            <div className="absolute -inset-3 border border-signal/10 rounded-sm -z-0" />
                            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-signal/40" />
                            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-signal/40" />

                            <div className="relative overflow-hidden rounded-sm group">
                                <Image
                                    src="/dhruv.png"
                                    alt="Dhruv Gupta — Scalar Ops"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.02]"
                                    priority
                                />
                                {/* Teal overlay that fades on hover */}
                                <div className="absolute inset-0 bg-signal/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-700" />
                            </div>
                        </div>

                        {/* Bio — right column */}
                        <div className="md:col-span-7">
                            <p className="label mb-4">Who I Am</p>
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
                                One operator.<br />
                                Full stack.<br />
                                <span className="text-signal">Accountable to revenue.</span>
                            </h2>

                            <div className="space-y-5 text-stone text-base md:text-lg leading-relaxed">
                                <p>
                                    I&apos;m Dhruv. Over the last 9+ years, I&apos;ve built and operated growth systems
                                    for companies across ed-tech, enterprise SaaS, insurance, pharma, government,
                                    and non-profit — directly and through top agencies in the Google ecosystem.
                                </p>
                                <p>
                                    I don&apos;t manage campaigns. I own the full acquisition stack:
                                    from how you measure conversions, to how your CRM talks to your ad platforms,
                                    to where your next dollar of profitable revenue comes from.
                                </p>
                                <p>
                                    The work I build is designed to outlast the engagement. Infrastructure,
                                    not deliverables. Systems, not decks.
                                </p>
                            </div>

                            {/* Quick credibility strip */}
                            <div className="mt-10 pt-8 border-t border-white/[0.06] grid grid-cols-3 gap-6">
                                <div>
                                    <p className="text-signal font-mono text-sm font-medium">9+ yrs</p>
                                    <p className="text-xs text-stone mt-0.5">Growth operations</p>
                                </div>
                                <div>
                                    <p className="text-signal font-mono text-sm font-medium">Ex-Google</p>
                                    <p className="text-xs text-stone mt-0.5">Ecosystem partner</p>
                                </div>
                                <div>
                                    <p className="text-signal font-mono text-sm font-medium">20+ GA4</p>
                                    <p className="text-xs text-stone mt-0.5">Migrations led</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
