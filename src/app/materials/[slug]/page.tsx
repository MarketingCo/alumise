import type { Metadata } from 'next';
import { materialsData } from '@/data/materials';
import MaterialDetailContent from './Content';

export function generateStaticParams() {
  return materialsData.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const material = materialsData.find(m => m.slug === slug);

  if (!material) {
    return {
      title: 'Material Not Found | Alumise',
    };
  }

  const title = `${material.name} | Alumise`;
  const baseDesc = `${material.shortDesc} Explore our premium architectural glazing materials engineered for maximum thermal efficiency and structural integrity in Edinburgh.`;
  const description = baseDesc.length > 155 ? baseDesc.substring(0, 152) + '...' : baseDesc;

  return {
    title: title.length > 60 ? title.substring(0, 57) + '...' : title,
    description: description,
    alternates: { canonical: `/materials/${material.slug}` },
    openGraph: {
      title: title,
      description: description,
      url: `https://alumise.co.uk/materials/${material.slug}`,
      type: 'website',
      images: [material.heroImage],
    },
  };
}

export default async function MaterialDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <MaterialDetailContent slug={slug} />;
}
