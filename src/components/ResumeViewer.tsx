import ScrollReveal from './ScrollReveal';

export default function ResumeViewer() {
    return (
        <section id="resume" className="section-padding">
            <div className="content-grid">
                <ScrollReveal>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
                        <div>
                            <p className="label mb-4">Background</p>
                            <h2 className="font-serif text-3xl md:text-4xl">
                                The full picture.
                            </h2>
                        </div>
                        <a
                            href="/resume.pdf"
                            download
                            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm text-signal hover:text-ink transition-colors duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download PDF
                        </a>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={150}>
                    <div className="border border-chalk rounded-sm overflow-hidden bg-white">
                        <iframe
                            src="/resume.pdf"
                            title="Dhruv Gupta — Resume"
                            className="w-full h-[600px] md:h-[800px]"
                        />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
