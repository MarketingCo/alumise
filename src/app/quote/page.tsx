import { Metadata } from 'next';
import QuoteClient from './QuoteClient';

export const metadata: Metadata = {
  title: 'Get a Free Glazing Quote | Alumise Windows & Doors',
  description: 'Request a free, no-obligation quote from Alumise. Competitive pricing on bespoke aluminium windows, bifold doors, and roof lanterns across Scotland.',
  alternates: { canonical: '/quote' },
  openGraph: {
    title: 'Get a Free Glazing Quote | Alumise Windows & Doors',
    description: 'Request a free, no-obligation quote from Alumise. Competitive pricing on bespoke aluminium windows, bifold doors, and roof lanterns across Scotland.',
    url: 'https://alumise.co.uk/quote',
    type: 'website',
    images: [{ url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop', width: 1200, height: 630, alt: 'Get a Free Glazing Quote — Alumise' }],
  },
};

export default function QuotePage() {
  return <QuoteClient />;
}
