import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Architectural Glazing Blog & Insights',
  description: 'Read the latest news and technical insights from Alumise. Expert advice on aluminium windows, bifold doors, building regulations, and Edinburgh property.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Architectural Glazing Blog & Insights',
    description: 'Read the latest news and technical insights from Alumise. Expert advice on aluminium windows, bifold doors, building regulations, and Edinburgh property.',
    url: 'https://alumise.co.uk/blog',
    type: 'website',
    images: [{ url: '/images/unsplash_1507679799987-c73779587ccf_q80_w2071.jpg', width: 1200, height: 630, alt: 'Alumise Architectural Glazing Blog' }],
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
