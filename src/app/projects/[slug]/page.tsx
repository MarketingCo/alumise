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

  const title = `${project.title} | Alumise`;
  const description = project.description.length > 155 ? project.description.substring(0, 152) + '...' : project.description;

  return {
    title: title.length > 60 ? title.substring(0, 57) + '...' : title,
    description: description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: title,
      description: description,
      url: `https://alumise.co.uk/projects/${project.slug}`,
      type: 'website',
      images: [project.image],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectCaseStudyContent slug={slug} />;
}
