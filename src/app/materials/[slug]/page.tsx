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

  return {
    title: `${material.name} | Alumise`,
    description: material.shortDesc,
    alternates: { canonical: `/materials/${material.slug}` },
    openGraph: {
      title: `${material.name} | Alumise`,
      description: material.shortDesc,
      url: `https://alumise.co.uk/materials/${material.slug}`,
      images: [material.heroImage],
    },
  };
}

export default async function MaterialDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <MaterialDetailContent slug={slug} />;
}
