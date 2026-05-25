import { Metadata } from 'next';
import ProcessClient from './ProcessClient';

export const metadata: Metadata = {
  title: 'Our Manufacturing & Installation Process | Alumise',
  description: 'Learn about the Alumise process. From initial design to Penicuik manufacturing and FENSA-certified installation across Edinburgh, we guarantee perfection.',
  alternates: { canonical: '/process' },
};

export default function ProcessPage() {
  return <ProcessClient />;
}
