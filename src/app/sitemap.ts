export const dynamic = 'force-static';

import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { projects } from '@/data/projects';
import { locations } from '@/data/locations';
import { blogPosts } from '@/data/blog';
import { materialsData } from '@/data/materials';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alumise.vercel.app';

  // Core Pages
  const corePages = [
    '',
    '/products',
    '/projects',
    '/process',
    '/trust',
    '/quote',
    '/blog',
    '/locations',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/cookies',
    '/materials',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Product Pages
  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Project Pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic Location Pages
  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic Material Pages
  const materialPages = materialsData.map((mat) => ({
    url: `${baseUrl}/materials/${mat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Blog Pages
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...corePages, ...productPages, ...projectPages, ...locationPages, ...materialPages, ...blogPages];
}
