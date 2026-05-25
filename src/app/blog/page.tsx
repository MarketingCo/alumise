import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Architectural Glazing Blog & Insights | Alumise',
  description: 'Read the latest news and technical insights from Alumise. Expert advice on aluminium windows, bifold doors, building regulations, and Edinburgh property.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return <BlogClient />;
}
