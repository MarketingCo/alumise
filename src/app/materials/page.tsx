import { Metadata } from 'next';
import MaterialsClient from './MaterialsClient';

export const metadata: Metadata = {
  title: 'Glazing Materials | Aluminium, uPVC & Timber | Alumise',
  description: 'Compare our high-performance glazing materials. We offer thermally broken aluminium, premium uPVC, and heritage timber-look systems for Edinburgh homes.',
  alternates: { canonical: '/materials' },
};

export default function MaterialsPage() {
  return <MaterialsClient />;
}
