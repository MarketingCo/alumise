import { Metadata } from 'next';
import { locations } from '@/data/locations';
import LocationPageClient from './LocationPageClient';

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find(l => l.slug === slug);
  if (!location) {
    return { title: 'Location Not Found | Alumise' };
  }
  return {
    title: `Architectural Glazing in ${location.name}, ${location.region} | Alumise`,
    description: `${location.description} Get a free quote for windows, doors and curtain walling in ${location.name}.`,
    alternates: { canonical: `/locations/${location.slug}` },
    openGraph: {
      title: `Architectural Glazing in ${location.name}, ${location.region} | Alumise`,
      description: `${location.description} Get a free quote for windows, doors and curtain walling in ${location.name}.`,
      images: [{ url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop", width: 1200, height: 630, alt: `Architectural Glazing in ${location.name}` }],
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find(l => l.slug === slug);

  const serviceSchema = location ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Architectural Glazing Services in ${location.name}`,
    "description": location.description,
    "areaServed": {
      "@type": "City",
      "name": location.name
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Alumise",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 2B, Eastfield Industrial Estate",
        "addressLocality": "Penicuik",
        "postalCode": "EH26 8HA",
        "addressRegion": "Midlothian",
        "addressCountry": "GB"
      },
      "telephone": "0131 210 0321",
      "url": "https://alumise.co.uk"
    },
    "serviceType": "Architectural Glazing"
  } : null;

  return (
    <>
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      <LocationPageClient slug={slug} />
    </>
  );
}
