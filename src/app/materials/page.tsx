import { Metadata } from 'next';
import MaterialsClient from './MaterialsClient';

export const metadata: Metadata = {
  title: 'Glazing Materials | Aluminium, uPVC & Timber',
  description: 'Compare our high-performance glazing materials. We offer thermally broken aluminium, premium uPVC, and heritage timber-look systems for Edinburgh homes.',
  alternates: { canonical: '/materials' },
  openGraph: {
    title: 'Glazing Materials | Aluminium, uPVC & Timber',
    description: 'Compare our high-performance glazing materials. We offer thermally broken aluminium, premium uPVC, and heritage timber-look systems for Edinburgh homes.',
    url: 'https://alumise.co.uk/materials',
    type: 'website',
    images: [{ url: '/images/unsplash_1507679799987-c73779587ccf_q80_w2071.jpg', width: 1200, height: 630, alt: 'Alumise Glazing Materials' }],
  },
};

export default function MaterialsPage() {
  return <MaterialsClient />;
}
