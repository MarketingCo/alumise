import { Metadata } from 'next';
import { blogPosts } from '@/data/blog';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) {
    return { title: 'Article Not Found | Alumise' };
  }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.alumise.co.uk/blog/${post.slug}`,
      type: 'article',
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClient slug={params.slug} />;
}
