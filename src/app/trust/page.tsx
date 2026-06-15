import { Metadata } from 'next';
import TrustClient from './TrustClient';

export const metadata: Metadata = {
  title: 'FENSA Accredited Glazing in Edinburgh & Scotland',
  description: 'Alumise is fully FENSA accredited and offers 10-year insurance-backed guarantees on all aluminium window and door installations across Edinburgh.',
  alternates: { canonical: '/trust' },
  openGraph: {
    title: 'FENSA Accredited Glazing in Edinburgh & Scotland',
    description: 'Alumise is fully FENSA accredited and offers 10-year insurance-backed guarantees on all aluminium window and door installations across Edinburgh.',
    url: 'https://alumise.co.uk/trust',
    type: 'website',
    images: [{ url: '/images/unsplash_1507679799987-c73779587ccf_q80_w2071.jpg', width: 1200, height: 630, alt: 'FENSA Accredited Glazing — Alumise' }],
  },
};

export default function TrustPage() {
  return <TrustClient />;
}
