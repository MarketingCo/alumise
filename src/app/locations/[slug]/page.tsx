import type { Metadata } from 'next';
import { locations } from '@/data/locations';
import LocationContent from './Content';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const location = locations.find(l => l.slug === params.slug);
  
  if (!location) {
    return {
      title: 'Location Not Found | Alumise',
    };
  }

  return {
    title: `Aluminium Windows & Glazing in ${location.name} | Alumise`,
    description: `Premium aluminium windows, bifold doors, sliding doors, roof lanterns and architectural glazing installed in ${location.name}. FENSA accredited. Manufactured in Penicuik, serving Edinburgh & the Lothians.`,
    openGraph: {
      title: `Aluminium Windows & Glazing in ${location.name} | Alumise`,
      description: `Premium aluminium windows, bifold doors, sliding doors, roof lanterns and architectural glazing installed in ${location.name}.`,
    },
  };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = locations.find(l => l.slug === params.slug);
  
  return (
    <>
      {/* Service Schema with areaServed */}
      {location && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": `Architectural Glazing in ${location.name}`,
              "description": location.description,
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
                "email": "info@alumise.co.uk",
                "url": "https://www.alumise.co.uk"
              },
              "areaServed": {
                "@type": "City",
                "name": location.name
              },
              "serviceType": [
                "Aluminium Windows",
                "Bifold Doors",
                "Sliding Doors",
                "Roof Lanterns",
                "Curtain Walling",
                "Shopfronts",
                "Architectural Glazing"
              ]
            })
          }}
        />
      )}
      <LocationContent slug={params.slug} />
    </>
  );
}
