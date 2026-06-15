import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Glazing Case Studies & Projects in Edinburgh',
  description: 'Explore our portfolio of premium architectural glazing projects. See our aluminium windows, bifold doors, and roof lanterns installed across Edinburgh.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Glazing Case Studies & Projects in Edinburgh',
    description: 'Explore our portfolio of premium architectural glazing projects. See our aluminium windows, bifold doors, and roof lanterns installed across Edinburgh.',
    url: 'https://alumise.co.uk/projects',
    type: 'website',
    images: [{ url: '/images/unsplash_1507679799987-c73779587ccf_q80_w2071.jpg', width: 1200, height: 630, alt: 'Alumise Glazing Projects Edinburgh' }],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
