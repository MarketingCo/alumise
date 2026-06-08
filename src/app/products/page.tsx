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
  return (
    <>
      <section className="bg-alumise-obsidian pt-40 pb-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-5xl md:text-7xl font-bold uppercase mb-6 tracking-tighter">
            Architectural <span className="text-alumise-gold">Systems.</span>
          </h1>
          <p className="text-lg text-brand-grey max-w-2xl font-light leading-relaxed">
            Explore our comprehensive range of precision-engineered glazing solutions. From high-performance aluminium to heritage timber.
          </p>
        </div>
      </section>
      <ProductsClient />
    </>
  );
}
