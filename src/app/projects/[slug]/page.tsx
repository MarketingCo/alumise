import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import ProjectCaseStudyContent from './Content';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Alumise',
    };
  }

  return {
    title: `${project.title} | Alumise`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Alumise`,
      description: project.description,
      url: `https://alumise.co.uk/projects/${project.slug}`,
      images: [project.image],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectCaseStudyContent slug={slug} />;
}
