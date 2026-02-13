'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import Image from 'next/image';

interface CaseStudy {
    label: string;
    headline: string;
    metric: string;
    metricLabel: string;
    challenge: string;
    approach: string;
    result: string;
}

const studies: CaseStudy[] = [
    {
        label: 'Ed-Tech · Online School',
        headline: 'From pilot retainer to ₹18 Cr GTV in 5 months',
        metric: '₹18 Cr',
        metricLabel: 'Gross Transaction Value',
        challenge: 'A leading online school needed to hit ₹3.2 Cr enrollment target within a 5-month window. Previous agency had no measurement system — spend was optimized on clicks, not enrollments.',
        approach: 'Rebuilt Google Ads architecture around quarterly enrollment targets. Implemented offline conversion tracking from CRM to feed actual enrollment signals back into Smart Bidding.',
        result: 'Hit the ₹3.2 Cr business goal 2 months ahead of schedule. Account upsold from pilot to core retainer based on measurable pipeline attribution.',
    },
    {
        label: 'Enterprise B2B · SaaS',
        headline: '$1M+ in qualified pipeline from redirected spend',
        metric: '$1M+',
        metricLabel: 'Qualified Enterprise Pipeline',
        challenge: 'A top-tier Workday partner was burning budget on broad informational queries. Pipeline attribution was nonexistent — marketing couldn\'t prove ROI to the board.',
        approach: 'Redirected budget toward high-intent commercial queries. Built HubSpot CRM ↔ Google Ads integration to close the loop between campaign spend and actual sales revenue.',
        result: 'Sourced and qualified $1M+ in enterprise pipeline. Marketing earned board-level credibility with end-to-end attribution proof.',
    },
    {
        label: 'Non-Profit · Global',
        headline: '₹1.2 Cr+ in contributions with zero brand safety violations',
        metric: '₹1.2 Cr+',
        metricLabel: 'Contributions Generated',
        challenge: 'Global religious non-profit needed multi-channel fundraising across North America and India. FCRA compliance mandates and zero-tolerance brand safety requirements.',
        approach: 'Orchestrated Search, Display, and YouTube campaigns with FCRA-compliant cross-border payment frameworks. Built brand safety guardrails into every campaign layer.',
        result: '₹1.2 Cr+ in contributions with 0% brand safety violations across all channels. FCRA compliance maintained throughout.',
    },
    {
        label: 'Signal Infrastructure',
        headline: '$2.3M+ tracked revenue across 47 conversion funnels',
        metric: '$2.3M+',
        metricLabel: 'Tracked Client Revenue',
        challenge: '12 high-ticket clients lacked server-side tracking infrastructure. Cookie deprecation was degrading Smart Bidding performance. Conversion data was incomplete.',
        approach: 'Designed and deployed a repeatable SST + OCT framework — server-side tagging feeding first-party data signals into Performance Max and Smart Bidding.',
        result: '$2.3M+ in tracked revenue across 47+ conversion funnels. Framework now standard within Scalar Ops.',
    },
    {
        label: 'Government · Tourism',
        headline: 'National campaign execution under public-sector compliance',
        metric: '30M+',
        metricLabel: 'Brand-Safe Impressions',
        challenge: 'Ministry of Tourism required digital campaign execution for national initiatives. Complex multi-stakeholder government approval workflows and compliance mandates.',
        approach: 'Navigated public-sector approval chains while maintaining campaign velocity. Integrated brand safety mandates at every campaign layer across YouTube and digital channels.',
        result: '30M+ brand-safe impressions delivered. Campaign execution maintained velocity despite multi-stakeholder government approval workflows.',
    },
    {
        label: 'Insurance · Finance',
        headline: '6x ROAS on study-abroad funding campaigns',
        metric: '6x',
        metricLabel: 'Return on Ad Spend',
        challenge: 'Education finance product targeting students planning to study abroad. Generic keyword targeting was driving unqualified traffic with low conversion rates.',
        approach: 'Restructured search intent architecture around high-value student financial planning queries. Aligned landing page experience with qualification signals.',
        result: '6x ROAS achieved by focusing spend on high-intent, high-value conversion paths rather than broad reach.',
    },
];

const dashboardImages = [
    { src: '/dashboards/Dash_1.png', label: 'Campaign Overview' },
    { src: '/dashboards/Dash_2.png', label: 'ROAS Performance' },
    { src: '/dashboards/Dash_3.png', label: 'Pipeline Attribution' },
    { src: '/dashboards/Dash_4.png', label: 'Enrollment Tracking' },
    { src: '/dashboards/Dash_5.png', label: 'Multi-Channel Report' },
    { src: '/dashboards/Dash_6.png', label: 'Signal Infrastructure' },
    { src: '/dashboards/Time_series(2025.03.01-2025.06.30_compared_to_2022.03.01-2022.06.30).png', label: 'YoY Comparison' },
    { src: '/dashboards/Time_series_chart(2025.03.17-2025.07.14).png', label: 'Growth Trend' },
    { src: '/dashboards/Time_series(2025.02.01-2025.08.30).png', label: 'Revenue Timeline' },
    { src: '/dashboards/Time_series(2024.01.26-2024.02.29).png', label: 'Campaign Sprint' },
    { src: '/dashboards/Time_series_chart(2024.01.26-2024.02.28).png', label: 'Conversion Trend' },
];

export default function CaseStudies() {
    const [expanded, setExpanded] = useState<number | null>(null);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

    return (
        <section id="work" className="section-dark section-padding">
            <div className="content-grid">
                <ScrollReveal>
                    <p className="label mb-4">Featured Work</p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
                        Selected engagements.
                    </h2>
                    <p className="text-stone text-base md:text-lg mb-16 max-w-2xl">
                        Each project starts with a measurement audit. Results are attributed, not estimated.
                        Client names anonymized under NDA.
                    </p>
                </ScrollReveal>

                <div className="space-y-0">
                    {studies.map((study, i) => (
                        <ScrollReveal key={i} delay={i * 60}>
                            <div
                                className="border-t border-white/[0.06] group cursor-pointer"
                                onClick={() => setExpanded(expanded === i ? null : i)}
                            >
                                {/* Header row */}
                                <div className="py-6 md:py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                                    <span className="text-xs font-mono text-signal shrink-0 w-48">{study.label}</span>
                                    <h3 className="font-serif text-xl md:text-2xl flex-1 group-hover:text-signal transition-colors duration-300">
                                        {study.headline}
                                    </h3>
                                    <div className="shrink-0 text-right">
                                        <span className="metric text-2xl md:text-3xl">{study.metric}</span>
                                        <p className="text-xs text-stone mt-0.5">{study.metricLabel}</p>
                                    </div>
                                    <svg
                                        className={`w-5 h-5 text-stone shrink-0 transition-transform duration-300 ${expanded === i ? 'rotate-180' : ''}`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>

                                {/* Expanded detail */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded === i ? 'max-h-[600px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-wider text-signal mb-2">Challenge</p>
                                            <p className="text-sm text-stone leading-relaxed">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-wider text-signal mb-2">Approach</p>
                                            <p className="text-sm text-stone leading-relaxed">{study.approach}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-wider text-signal mb-2">Result</p>
                                            <p className="text-sm text-stone leading-relaxed">{study.result}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Dashboard gallery — click dependent */}
                <ScrollReveal delay={400}>
                    <div className="mt-16 border-t border-white/[0.06] pt-10">
                        <button
                            onClick={() => setGalleryOpen(!galleryOpen)}
                            className="flex items-center gap-3 group cursor-pointer"
                        >
                            <span className="text-sm font-medium text-stone group-hover:text-signal transition-colors duration-300">
                                {galleryOpen ? 'Hide' : 'View'} performance dashboards
                            </span>
                            <svg
                                className={`w-4 h-4 text-signal transition-transform duration-300 ${galleryOpen ? 'rotate-180' : ''}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                            <span className="text-[10px] text-stone/50 font-mono ml-1">{dashboardImages.length} screenshots</span>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-600 ease-in-out ${galleryOpen ? 'max-h-[500px] opacity-100 mt-8' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
                                {dashboardImages.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={(e) => { e.stopPropagation(); setLightboxIdx(i); }}
                                        className="shrink-0 group/thumb cursor-pointer"
                                    >
                                        <div className="relative w-52 h-32 border border-white/[0.06] rounded-sm overflow-hidden">
                                            <Image
                                                src={img.src}
                                                alt={img.label}
                                                fill
                                                className="object-cover opacity-60 group-hover/thumb:opacity-100 transition-opacity duration-300"
                                            />
                                        </div>
                                        <p className="text-[10px] text-stone/50 mt-2 text-center group-hover/thumb:text-stone transition-colors duration-300">
                                            {img.label}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Lightbox modal */}
            {lightboxIdx !== null && (
                <div
                    className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
                    onClick={() => setLightboxIdx(null)}
                >
                    <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                        {/* Close */}
                        <button
                            onClick={() => setLightboxIdx(null)}
                            className="absolute -top-10 right-0 text-stone hover:text-paper transition-colors text-sm cursor-pointer"
                        >
                            Close ✕
                        </button>

                        {/* Image */}
                        <div className="border border-white/[0.08] rounded-sm overflow-hidden bg-white/[0.02]">
                            <Image
                                src={dashboardImages[lightboxIdx].src}
                                alt={dashboardImages[lightboxIdx].label}
                                width={1200}
                                height={600}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Caption + nav */}
                        <div className="mt-4 flex items-center justify-between">
                            <p className="text-xs text-stone">{dashboardImages[lightboxIdx].label}</p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setLightboxIdx(lightboxIdx > 0 ? lightboxIdx - 1 : dashboardImages.length - 1)}
                                    className="text-xs text-stone hover:text-signal transition-colors cursor-pointer"
                                >
                                    ← Prev
                                </button>
                                <span className="text-xs text-stone/30">{lightboxIdx + 1}/{dashboardImages.length}</span>
                                <button
                                    onClick={() => setLightboxIdx(lightboxIdx < dashboardImages.length - 1 ? lightboxIdx + 1 : 0)}
                                    className="text-xs text-stone hover:text-signal transition-colors cursor-pointer"
                                >
                                    Next →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
