'use client';

import { useState, useEffect, FormEvent } from 'react';
import ScrollReveal from './ScrollReveal';

const countries = [
    'India', 'United States', 'United Kingdom', 'Canada', 'Australia',
    'Germany', 'Singapore', 'UAE', 'Netherlands', 'France',
    'Israel', 'Sweden', 'Switzerland', 'Japan', 'South Korea',
    'Brazil', 'Mexico', 'South Africa', 'New Zealand', 'Ireland', 'Other',
];

const spendRanges = [
    { value: '<5k', label: 'Under $5K / mo' },
    { value: '5k-25k', label: '$5K – $25K / mo' },
    { value: '25k-100k', label: '$25K – $100K / mo' },
    { value: '100k+', label: '$100K+ / mo' },
    { value: 'not-sure', label: 'Not sure yet' },
];

const challenges = [
    'Tracking & attribution',
    'Low ROAS / high CPA',
    'Agency underperformance',
    'Scaling profitably',
    'CRM integration',
    'GA4 / GTM setup',
    'Other',
];

function generateCaptcha() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    return { a, b, answer: a + b };
}

export default function Contact() {
    const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [captcha, setCaptcha] = useState({ a: 0, b: 0, answer: 0 });
    const [captchaInput, setCaptchaInput] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        country: '',
        phone: '',
        adSpend: '',
        challenges: [] as string[],
    });

    useEffect(() => {
        setCaptcha(generateCaptcha());
    }, []);

    function toggleChallenge(c: string) {
        setFormData(prev => ({
            ...prev,
            challenges: prev.challenges.includes(c)
                ? prev.challenges.filter(x => x !== c)
                : [...prev.challenges, c],
        }));
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        // Validate CAPTCHA
        if (parseInt(captchaInput) !== captcha.answer) {
            setFormState('error');
            setCaptcha(generateCaptcha());
            setCaptchaInput('');
            return;
        }

        setFormState('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Failed to submit');
            setFormState('sent');
            setFormData({ name: '', email: '', company: '', country: '', phone: '', adSpend: '', challenges: [] });
        } catch {
            setFormState('error');
        }
    }

    const inputClasses = 'w-full bg-transparent border border-chalk px-4 py-3 text-ink text-sm focus:border-signal focus:outline-none transition-colors rounded-sm placeholder:text-stone/40';
    const labelClasses = 'block text-xs font-medium uppercase tracking-wider text-stone mb-2';

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Decorative dot grid behind form */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.02] pointer-events-none">
                <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }} />
            </div>

            <div className="content-grid relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
                    {/* Left — Copy */}
                    <ScrollReveal>
                        <div>
                            <p className="label mb-4">Get In Touch</p>
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
                                Let&apos;s figure out what&apos;s broken.
                            </h2>
                            <p className="text-stone text-base md:text-lg leading-relaxed mb-8">
                                No pitch decks. No discovery call scripts. Tell me what&apos;s
                                not working and I&apos;ll tell you if I can help. If I can&apos;t,
                                I&apos;ll point you to someone who can.
                            </p>
                            <div className="space-y-4 text-sm text-stone">
                                <div className="flex items-center gap-3">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-signal">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <a href="mailto:hello@scalarops.io" className="hover:text-signal transition-colors">
                                        hello@scalarops.io
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-signal">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                    <a
                                        href="https://linkedin.com/in/droovdarshan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-signal transition-colors"
                                    >
                                        linkedin.com/in/droovdarshan
                                    </a>
                                </div>
                            </div>

                            {/* Response time badge */}
                            <div className="mt-10 inline-flex items-center gap-2 text-xs text-stone/60 border border-chalk/50 px-3 py-1.5 rounded-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse-dot" />
                                Typically responds within 24 hours
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right — Form */}
                    <ScrollReveal delay={150}>
                        {formState === 'sent' ? (
                            <div className="border border-signal/30 p-8 text-center h-full flex flex-col items-center justify-center rounded-sm">
                                <div className="w-12 h-12 rounded-full bg-signal/10 flex items-center justify-center mb-4">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-signal">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <p className="font-serif text-2xl mb-2">Thanks for reaching out.</p>
                                <p className="text-stone">I&apos;ll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name + Company row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className={labelClasses}>Name *</label>
                                        <input
                                            id="name" type="text" required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className={inputClasses}
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className={labelClasses}>Company *</label>
                                        <input
                                            id="company" type="text" required
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className={inputClasses}
                                            placeholder="Company name"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className={labelClasses}>Work Email *</label>
                                    <input
                                        id="email" type="email" required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={inputClasses}
                                        placeholder="you@company.com"
                                    />
                                </div>

                                {/* Country + Phone row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="country" className={labelClasses}>Country *</label>
                                        <select
                                            id="country" required
                                            value={formData.country}
                                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                            className={`${inputClasses} appearance-none bg-no-repeat bg-[right_12px_center] bg-[length:12px]`}
                                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b6560' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")` }}
                                        >
                                            <option value="">Select country</option>
                                            {countries.map(c => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className={labelClasses}>Phone <span className="text-stone/40">(optional)</span></label>
                                        <input
                                            id="phone" type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className={inputClasses}
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                {/* Monthly Ad Spend */}
                                <div>
                                    <label className={labelClasses}>Monthly Ad Spend</label>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {spendRanges.map(r => (
                                            <button
                                                key={r.value}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, adSpend: r.value })}
                                                className={`text-xs px-3 py-2 border rounded-sm transition-all duration-200 cursor-pointer ${formData.adSpend === r.value
                                                    ? 'border-signal text-signal bg-signal/5'
                                                    : 'border-chalk text-stone hover:border-signal/30'
                                                    }`}
                                            >
                                                {r.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Challenges — multi-select */}
                                <div>
                                    <label className={labelClasses}>What&apos;s not working?</label>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {challenges.map(c => (
                                            <button
                                                key={c}
                                                type="button"
                                                onClick={() => toggleChallenge(c)}
                                                className={`text-xs px-3 py-2 border rounded-sm transition-all duration-200 cursor-pointer ${formData.challenges.includes(c)
                                                    ? 'border-signal text-signal bg-signal/5'
                                                    : 'border-chalk text-stone hover:border-signal/30'
                                                    }`}
                                            >
                                                {c}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Math CAPTCHA */}
                                <div className="pt-2">
                                    <label htmlFor="captcha" className={labelClasses}>
                                        Quick check: What is {captcha.a} + {captcha.b}? *
                                    </label>
                                    <input
                                        id="captcha"
                                        type="number"
                                        required
                                        value={captchaInput}
                                        onChange={(e) => setCaptchaInput(e.target.value)}
                                        className={`${inputClasses} max-w-[120px]`}
                                        placeholder="?"
                                    />
                                </div>

                                {formState === 'error' && (
                                    <p className="text-red-400 text-sm">
                                        {parseInt(captchaInput) !== captcha.answer
                                            ? 'Incorrect answer. Please try again.'
                                            : 'Something went wrong. Email me directly at '}
                                        {parseInt(captchaInput) === captcha.answer && (
                                            <a href="mailto:hello@scalarops.io" className="underline text-signal">
                                                hello@scalarops.io
                                            </a>
                                        )}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={formState === 'sending'}
                                    className="w-full bg-signal text-paper py-3.5 text-sm font-medium uppercase tracking-wider hover:bg-signal-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm cursor-pointer"
                                >
                                    {formState === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
