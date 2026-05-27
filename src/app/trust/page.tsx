import { Metadata } from 'next';
import TrustClient from './TrustClient';

export const metadata: Metadata = {
  title: 'Why Trust Alumise? | FENSA Accredited Glazing in Scotland',
  description: 'Alumise is fully FENSA accredited and offers 10-year insurance-backed guarantees on all aluminium window and door installations across Edinburgh.',
  alternates: { canonical: '/trust' },
  openGraph: {
    title: 'Why Trust Alumise? | FENSA Accredited Glazing in Scotland',
    description: 'Alumise is fully FENSA accredited and offers 10-year insurance-backed guarantees on all aluminium window and door installations across Edinburgh.',
    url: 'https://alumise.co.uk/trust',
    type: 'website',
  },
};

export default function TrustPage() {
  return <TrustClient />;
}
