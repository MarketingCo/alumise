import { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Alumise Ltd',
  description: 'Read the terms and conditions for Alumise Ltd. Essential information for customers purchasing our manufactured aluminium glazing systems.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return <TermsClient />;
}
