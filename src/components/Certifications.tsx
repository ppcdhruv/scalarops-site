import ScrollReveal from './ScrollReveal';

interface Certification {
    platform: string;
    name: string;
    iconUrl: string;
}

const certifications: Certification[] = [
    { platform: 'Google', name: 'Search Ads', iconUrl: 'https://cdn.simpleicons.org/googleads/4285F4' },
    { platform: 'Google', name: 'Display Ads', iconUrl: 'https://cdn.simpleicons.org/googledisplay/4285F4' },
    { platform: 'Google', name: 'Video Ads', iconUrl: 'https://cdn.simpleicons.org/youtube/FF0000' },
    { platform: 'Google', name: 'Measurement', iconUrl: 'https://cdn.simpleicons.org/googleanalytics/E37400' },
    { platform: 'Google', name: 'Analytics (GA4)', iconUrl: 'https://cdn.simpleicons.org/googleanalytics/E37400' },
    { platform: 'Meta', name: 'Blueprint', iconUrl: 'https://cdn.simpleicons.org/meta/0081FB' },
    { platform: 'HubSpot', name: 'Inbound Marketing', iconUrl: 'https://cdn.simpleicons.org/hubspot/FF7A59' },
    { platform: 'HubSpot', name: 'Email Marketing', iconUrl: 'https://cdn.simpleicons.org/hubspot/FF7A59' },
];

const compliance = [
    { name: 'FCRA', desc: 'Cross-border fundraising' },
    { name: 'HIPAA Aware', desc: 'Healthcare data handling' },
    { name: 'GDPR Compliant', desc: 'EU data protection' },
    { name: 'Brand Safety', desc: 'Zero-tolerance campaigns' },
];

// Tools NOT already covered by certifications — no repeats
const tools: { name: string; iconUrl: string }[] = [
    { name: 'Looker Studio', iconUrl: 'https://cdn.simpleicons.org/looker/4285F4' },
    { name: 'BigQuery', iconUrl: 'https://cdn.simpleicons.org/googlebigquery/669DF6' },
    { name: 'GTM', iconUrl: 'https://cdn.simpleicons.org/googletagmanager/246FDB' },
    { name: 'Salesforce', iconUrl: 'https://cdn.simpleicons.org/salesforce/00A1E0' },
    { name: 'LinkedIn Ads', iconUrl: 'https://cdn.simpleicons.org/linkedin/0A66C2' },
    { name: 'Hotjar', iconUrl: 'https://cdn.simpleicons.org/hotjar/FF3C00' },
    { name: 'Semrush', iconUrl: 'https://cdn.simpleicons.org/semrush/FF642D' },
    { name: 'Zapier', iconUrl: 'https://cdn.simpleicons.org/zapier/FF4A00' },
    { name: 'Shopify', iconUrl: 'https://cdn.simpleicons.org/shopify/7AB55C' },
    { name: 'Google Sheets', iconUrl: 'https://cdn.simpleicons.org/googlesheets/34A853' },
];

export default function Certifications() {
    return (
        <section id="certifications" className="section-dark section-padding">
            <div className="content-grid">
                {/* Certifications */}
                <ScrollReveal>
                    <p className="label mb-4">Credentials</p>
                    <h2 className="font-serif text-3xl md:text-4xl mb-12">
                        Certified. Compliant. Verified.
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                        {certifications.map((cert, i) => (
                            <div
                                key={i}
                                className="glass-card p-4 flex items-center gap-3 group hover:border-signal/30 transition-all duration-300"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={cert.iconUrl}
                                    alt={cert.platform}
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <div>
                                    <p className="text-xs text-paper/80 font-medium">{cert.name}</p>
                                    <p className="text-[10px] text-stone">{cert.platform}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Compliance badges — with descriptions */}
                <ScrollReveal delay={150}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
                        {compliance.map((c, i) => (
                            <div
                                key={i}
                                className="border border-white/[0.08] px-4 py-3 rounded-sm hover:border-signal/30 transition-all duration-300 group"
                            >
                                <p className="text-xs font-medium text-stone group-hover:text-signal transition-colors duration-300">
                                    {c.name}
                                </p>
                                <p className="text-[10px] text-stone/50 mt-0.5">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Tools & Platforms — deduplicated */}
                <ScrollReveal delay={200}>
                    <p className="label mb-6">Additional Tools & Platforms</p>
                    <div className="flex flex-wrap gap-6 items-center">
                        {tools.map((tool, i) => (
                            <div key={i} className="flex items-center gap-2 group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={tool.iconUrl}
                                    alt={tool.name}
                                    width={18}
                                    height={18}
                                    className="w-[18px] h-[18px] grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-300"
                                />
                                <span className="text-xs text-stone group-hover:text-paper transition-colors duration-300">
                                    {tool.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
