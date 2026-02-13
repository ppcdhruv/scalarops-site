'use client';

import { useState, useEffect } from 'react';
import { Logo } from './Logo';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-depth/95 backdrop-blur-md border-b border-white/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="content-wide flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
                <Logo className={scrolled ? 'text-paper' : 'text-paper'} />
                <a
                    href="#contact"
                    className="text-xs font-medium uppercase tracking-wider text-paper/70 hover:text-signal transition-colors duration-300"
                >
                    Let&apos;s Talk
                </a>
            </div>
        </nav>
    );
}
