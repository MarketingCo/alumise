import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog';
import BlogPostContent from './Content';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Article Not Found | Alumise',
    };
  }

  return {
    title: `${post.title} | Alumise`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Alumise`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostContent slug={params.slug} />;
}
