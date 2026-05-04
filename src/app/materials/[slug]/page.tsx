import type { Metadata } from 'next';
import { materialsData } from '@/data/materials';
import MaterialDetailContent from './Content';

export function generateStaticParams() {
  return materialsData.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const material = materialsData.find(m => m.slug === params.slug);
  
  if (!material) {
    return {
      title: 'Material Not Found | Alumise',
    };
  }

  return {
    title: `${material.name} | Alumise`,
    description: material.shortDesc,
    openGraph: {
      title: `${material.name} | Alumise`,
      description: material.shortDesc,
      images: [material.heroImage],
    },
  };
}

export default function MaterialDetailPage({ params }: { params: { slug: string } }) {
  return <MaterialDetailContent slug={params.slug} />;
}
