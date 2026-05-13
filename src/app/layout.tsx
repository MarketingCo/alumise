import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const localBusinessSchema = {
  "@context": "https://schema.org/",
  "@type": ["LocalBusiness", "Service"],
  "name": "Alumise",
  "description": "Alumise Ltd — Premium aluminium windows, bifold doors, sliding doors, roof lanterns, curtain walling and architectural glazing. Manufactured in Penicuik, installed across Edinburgh, Midlothian and Scotland. FENSA accredited.",
  "image": "https://alumise.co.uk/logo.png",
  "url": "https://alumise.co.uk",
  "logo": "https://alumise.co.uk/logo.png",
  "sameAs": [
    "https://www.fensa.org.uk",
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Architectural Glazing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aluminium Windows", "description": "Premium aluminium casement and tilt-turn windows manufactured in Penicuik." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bifold Doors", "description": "Slim-profile bifold door systems for residential and commercial openings." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sliding Doors", "description": "Minimal-frame sliding patio and lift-slide door systems." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Lanterns", "description": "Bespoke aluminium and glass roof lanterns for natural light." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Curtain Walling", "description": "Structural glazing facades for commercial buildings and shopfronts." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Steel-Look Systems", "description": "Heritage-style steel-look aluminium windows and doors." } }
    ]
  },
  "telephone": "0131 210 0321",
  "email": "info@alumise.co.uk",
  "priceRange": "£££",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Unit 2B, Eastfield Industrial Estate",
    "addressLocality": "Penicuik",
    "postalCode": "EH26 8HA",
    "addressRegion": "Midlothian",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 55.8340,
    "longitude": -3.2185
  },
  "areaServed": [
    { "@type": "City", "name": "Edinburgh" },
    { "@type": "AdministrativeArea", "name": "Midlothian" },
    { "@type": "AdministrativeArea", "name": "East Lothian" },
    { "@type": "AdministrativeArea", "name": "West Lothian" },
    { "@type": "AdministrativeArea", "name": "Fife" },
    { "@type": "AdministrativeArea", "name": "Scottish Borders" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "knowsAbout": [
    "Architectural Glazing",
    "Aluminium Windows",
    "Bifold Doors",
    "Curtain Walling",
    "Commercial Shopfronts",
    "Steel-Look Systems",
    "Manufacturing"
  ]
};

export const metadata: Metadata = {
  title: {
    default: "Alumise | Premium Aluminium Windows & Bifold Doors Edinburgh",
    template: "%s | Alumise"
  },
  description: "Premium aluminium windows, bifold doors and architectural glazing manufactured in Penicuik, installed across Edinburgh and Scotland. FENSA accredited.",
  metadataBase: new URL('https://alumise.co.uk'),
  openGraph: {
    title: "Alumise | Premium Aluminium Windows & Bifold Doors Edinburgh",
    description: "Premium architectural glazing manufactured in our Penicuik facility. Precision-engineered aluminium systems for luxury residential and commercial projects across Edinburgh and Scotland.",
    images: [{ url: 'https://alumise.co.uk/og-image.jpg', width: 1200, height: 630, alt: 'Alumise — Premium Architectural Glazing' }],
    siteName: "Alumise",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alumise | Premium Aluminium Windows & Bifold Doors Edinburgh",
    description: "Premium architectural glazing manufactured in Penicuik. Installed across Edinburgh and Scotland.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-brand-charcoal antialiased" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
