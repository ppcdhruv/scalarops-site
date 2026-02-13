import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Scalar Ops — Marketing Systems That Compound',
  description:
    'Fractional Growth Head building measurement-first marketing systems for Ed-Tech, B2B SaaS, Government, Non-Profit, and Enterprise brands. 9+ years, ex-Google, ₹10 Cr+ in managed spend.',
  openGraph: {
    title: 'Scalar Ops — Marketing Systems That Compound',
    description:
      'Fractional Growth Head building measurement-first marketing systems. 9+ years, ex-Google.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Scalar Ops',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scalar Ops — Marketing Systems That Compound',
    description:
      'Fractional Growth Head building measurement-first marketing systems. 9+ years, ex-Google.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
