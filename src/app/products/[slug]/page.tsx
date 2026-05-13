import type { Metadata } from 'next';
import { products } from '@/data/products';
import ProductPageContent from './Content';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found | Alumise',
    };
  }

  return {
    title: `${product.title} | Alumise`,
    description: product.shortDesc,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.title} | Alumise`,
      description: product.shortDesc,
      url: `https://alumise.co.uk/products/${product.slug}`,
      images: [product.heroImage],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductPageContent slug={slug} />;
}
