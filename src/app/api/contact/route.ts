import { NextRequest, NextResponse } from 'next/server';
import { insforge } from '@/lib/insforge';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, company, country, phone, adSpend, challenges } = body;

        if (!name || !email || !company || !country) {
            return NextResponse.json(
                { error: 'Required fields are missing' },
                { status: 400 }
            );
        }

        const { error } = await insforge.database
            .from('contact_submissions')
            .insert({
                name,
                email,
                company,
                country,
                phone: phone || null,
                ad_spend: adSpend || null,
                challenges: challenges?.length ? challenges : null,
            });

        if (error) {
            console.error('InsForge insert error:', error);
            return NextResponse.json(
                { error: 'Failed to save submission' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
