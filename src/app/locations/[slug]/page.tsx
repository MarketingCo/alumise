import { Metadata } from 'next';
import { locations } from '@/data/locations';
import LocationPageClient from './LocationPageClient';
import { generateLocalBusinessSchema } from '../../../../generate_alumise_schema.js';

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find(l => l.slug === slug);
  if (!location) {
    return { title: 'Location Not Found | Alumise' };
  }

  const title = `${location.name} Aluminium Windows & Bifold Doors`;
  const baseDesc = `${location.description} Get a free quote for premium aluminium windows, bespoke bifold doors, and curtain walling in ${location.name}. Our Penicuik-manufactured systems are engineered for Scottish weather.`;
  const description = baseDesc.length > 155 ? baseDesc.substring(0, 152) + '...' : baseDesc;

  return {
    title,
    description: description,
    alternates: { canonical: `/locations/${location.slug}` },
    openGraph: {
      title: title,
      description: description,
      url: `https://alumise.co.uk/locations/${location.slug}`,
      type: 'website',
      images: [{ url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop", width: 1200, height: 630, alt: `Architectural Glazing in ${location.name}` }],
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find(l => l.slug === slug);

  // Jarvis Protocol: Dynamically inject district-aware LocalBusiness schema
  const localBusinessSchema = location
    ? generateLocalBusinessSchema(location.name, location.region, location.description)
    : null;

  return (
    <>
      {localBusinessSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      )}
      <LocationPageClient slug={slug} />
    </>
  );
}
