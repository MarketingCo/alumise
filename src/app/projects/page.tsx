import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Glazing Case Studies & Projects in Edinburgh | Alumise',
  description: 'Explore our portfolio of premium architectural glazing projects. See our aluminium windows, bifold doors, and roof lanterns installed across Edinburgh.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
