import { Metadata } from 'next';
import ProcessClient from './ProcessClient';

export const metadata: Metadata = {
  title: 'Our Manufacturing & Installation Process',
  description: 'Learn about the Alumise process. From initial design to Penicuik manufacturing and FENSA-certified installation across Edinburgh, we guarantee perfection.',
  alternates: { canonical: '/process' },
  openGraph: {
    title: 'Our Manufacturing & Installation Process',
    description: 'Learn about the Alumise process. From initial design to Penicuik manufacturing and FENSA-certified installation across Edinburgh, we guarantee perfection.',
    url: 'https://alumise.co.uk/process',
    type: 'website',
    images: [{ url: '/images/unsplash_1507679799987-c73779587ccf_q80_w2071.jpg', width: 1200, height: 630, alt: 'Alumise Manufacturing & Installation Process' }],
  },
};

export default function ProcessPage() {
  return <ProcessClient />;
}
