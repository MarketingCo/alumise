import { Metadata } from 'next';
import { blogPosts } from '@/data/blog';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) {
    return { title: 'Article Not Found | Alumise' };
  }

  const title = post.title;
  const description = post.excerpt.length > 155 ? post.excerpt.substring(0, 152) + '...' : post.excerpt;

  return {
    title: title.length > 50 ? title.substring(0, 47) + '...' : title,
    description: description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: title,
      description: description,
      url: `https://alumise.co.uk/blog/${post.slug}`,
      type: 'article',
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
