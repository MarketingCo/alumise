export const dynamic = 'force-static';

import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { locations } from '@/data/locations';
import { blogPosts } from '@/data/blog';
import { materialsData } from '@/data/materials';
import { services } from '@/data/services';

const BASE_DATE = '2026-05-04';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alumise.co.uk';

  const corePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: BASE_DATE, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/products`, lastModified: BASE_DATE, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: BASE_DATE, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/process`, lastModified: BASE_DATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/quote`, lastModified: BASE_DATE, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: BASE_DATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: BASE_DATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/locations`, lastModified: BASE_DATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/materials`, lastModified: BASE_DATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: BASE_DATE, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, lastModified: BASE_DATE, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: BASE_DATE, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified: BASE_DATE, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/projects`, lastModified: BASE_DATE, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/trust`, lastModified: BASE_DATE, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: BASE_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: BASE_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const materialPages = materialsData.map((mat) => ({
    url: `${baseUrl}/materials/${mat.slug}`,
    lastModified: BASE_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: BASE_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: BASE_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...corePages, ...productPages, ...locationPages, ...materialPages, ...blogPages, ...servicePages];
}
