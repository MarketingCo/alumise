import { Metadata } from 'next';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
  title: 'Aluminium Windows & Doors Range | Alumise Systems',
  description: 'Browse the complete range of Alumise architectural glazing. We manufacture premium aluminium windows, bifold doors, and roof lanterns in Penicuik.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Aluminium Windows & Doors Range | Alumise Systems',
    description: 'Browse the complete range of Alumise architectural glazing. We manufacture premium aluminium windows, bifold doors, and roof lanterns in Penicuik.',
    url: 'https://alumise.co.uk/products',
    type: 'website',
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
