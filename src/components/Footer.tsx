import { Logo } from './Logo';

export default function Footer() {
    return (
        <footer className="bg-depth border-t border-white/[0.06] px-6 md:px-12 lg:px-20 py-12">
            <div className="content-grid">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Brand */}
                    <div>
                        <Logo className="text-paper mb-3" />
                        <p className="text-xs text-stone max-w-xs">
                            Measurement-first marketing systems for growth-stage companies.
                            One operator, full stack, compounding results.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-2 text-sm text-stone">
                        <a href="#work" className="hover:text-signal transition-colors w-fit">Work</a>
                        <a href="#approach" className="hover:text-signal transition-colors w-fit">Approach</a>
                        <a href="#resume" className="hover:text-signal transition-colors w-fit">Resume</a>
                        <a href="#contact" className="hover:text-signal transition-colors w-fit">Contact</a>
                    </div>

                    {/* Connect */}
                    <div className="flex flex-col gap-2 text-sm text-stone md:items-end">
                        <a
                            href="mailto:hello@scalarops.io"
                            className="hover:text-signal transition-colors"
                        >
                            hello@scalarops.io
                        </a>
                        <a
                            href="https://linkedin.com/in/droovdarshan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-signal transition-colors"
                        >
                            LinkedIn
                        </a>
                        <p className="text-xs text-stone/50 mt-4">
                            © {new Date().getFullYear()} Scalar Ops. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
