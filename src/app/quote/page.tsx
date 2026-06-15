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
    images: [{ url: '/images/unsplash_1507679799987-c73779587ccf_q80_w2071.jpg', width: 1200, height: 630, alt: 'Get a Free Glazing Quote — Alumise' }],
  },
};

export default function QuotePage() {
  return <QuoteClient />;
}
