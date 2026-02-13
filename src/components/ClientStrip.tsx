import ScrollReveal from './ScrollReveal';

interface Client {
    name: string;
    descriptor: string;
}

const clients: Client[] = [
    { name: '21K School', descriptor: 'Ed-Tech' },
    { name: 'ISKCON Global', descriptor: 'Non-Profit' },
    { name: 'Ministry of Tourism', descriptor: 'Government' },
    { name: 'Lubrizol (Berkshire Hathaway)', descriptor: 'Enterprise' },
    { name: 'Bill & Melinda Gates Foundation', descriptor: 'Public Health' },
    { name: 'HDFC Life', descriptor: 'Insurance' },
    { name: 'Mumbai Tech Week', descriptor: 'Events' },
    { name: 'Hyatt Hotels', descriptor: 'Hospitality' },
    { name: 'Lupin Pharma', descriptor: 'Pharma' },
    { name: 'Hard Rock Cafe', descriptor: 'F&B' },
];

export default function ClientStrip() {
    // Double the array for seamless loop
    const doubled = [...clients, ...clients];

    return (
        <section id="clients" className="py-16 overflow-hidden border-y border-chalk">
            <div className="content-grid px-6 md:px-12 lg:px-20 mb-10">
                <ScrollReveal>
                    <p className="label text-center">
                        Brands I&apos;ve worked with — directly and via agencies
                    </p>
                </ScrollReveal>
            </div>

            <ScrollReveal delay={100}>
                <div className="relative">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-paper to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-paper to-transparent z-10" />

                    <div className="flex animate-marquee">
                        {doubled.map((client, i) => (
                            <div
                                key={i}
                                className="shrink-0 px-8 md:px-10 group cursor-default"
                            >
                                <p className="text-sm md:text-base font-medium text-ink/70 group-hover:text-ink whitespace-nowrap transition-colors duration-300">
                                    {client.name}
                                </p>
                                <p className="text-[10px] uppercase tracking-widest text-stone/50 group-hover:text-signal mt-0.5 transition-colors duration-300">
                                    {client.descriptor}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
