import { Metadata } from 'next';
import CookiesClient from './CookiesClient';

export const metadata: Metadata = {
  title: 'Cookie Policy | Alumise Architectural Glazing',
  description: 'Read the Alumise cookie policy. We respect your privacy and only use essential cookies to improve your experience on our architectural glazing website.',
  alternates: { canonical: '/cookies' },
  openGraph: {
    title: 'Cookie Policy | Alumise Architectural Glazing',
    description: 'Read the Alumise cookie policy. We respect your privacy and only use essential cookies to improve your experience on our architectural glazing website.',
    url: 'https://alumise.co.uk/cookies',
    type: 'website',
  },
};

export default function CookiesPage() {
  return <CookiesClient />;
}
