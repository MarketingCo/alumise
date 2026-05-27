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
  const description = material.shortDesc.length > 155 ? material.shortDesc.substring(0, 152) + '...' : material.shortDesc;

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
