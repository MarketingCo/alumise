import type { Metadata } from 'next';
import { products } from '@/data/products';
import ProductPageContent from './Content';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find(p => p.slug === params.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found | Alumise',
    };
  }

  return {
    title: `${product.title} | Alumise`,
    description: product.shortDesc,
    openGraph: {
      title: `${product.title} | Alumise`,
      description: product.shortDesc,
      images: [product.heroImage],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  return <ProductPageContent slug={params.slug} />;
}
