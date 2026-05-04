import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import ProjectCaseStudyContent from './Content';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found | Alumise',
    };
  }

  return {
    title: `${project.title} | Alumise`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Alumise`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  return <ProjectCaseStudyContent slug={params.slug} />;
}
