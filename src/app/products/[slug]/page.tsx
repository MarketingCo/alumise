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

  const title = `${product.title} | Alumise`;
  const description = product.shortDesc.length > 155 ? product.shortDesc.substring(0, 152) + '...' : product.shortDesc;

  return {
    title: title.length > 60 ? title.substring(0, 57) + '...' : title,
    description: description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: title,
      description: description,
      url: `https://alumise.co.uk/products/${product.slug}`,
      type: 'website',
      images: [product.heroImage],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <ProductPageContent slug={slug} />;
  }

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": product.heroImage,
    "description": product.shortDesc,
    "brand": {
      "@type": "Brand",
      "name": "Alumise"
    },
    "category": product.category,
    "url": `https://alumise.co.uk/products/${product.slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductPageContent slug={slug} />
    </>
  );
}
