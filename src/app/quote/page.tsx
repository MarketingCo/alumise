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
  },
};

export default function QuotePage() {
  return <QuoteClient />;
}
