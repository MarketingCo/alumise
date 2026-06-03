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
  const baseDesc = `${product.shortDesc} Manufactured in our Penicuik facility and expertly installed across Edinburgh and the Lothians. Get a free quote today.`;
  const description = baseDesc.length > 155 ? baseDesc.substring(0, 152) + '...' : baseDesc;

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
    "url": `https://alumise.co.uk/products/${product.slug}`,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "offerCount": "1",
      "availability": "https://schema.org/InStock",
      "url": `https://alumise.co.uk/products/${product.slug}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "24",
      "bestRating": "5"
    }
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
