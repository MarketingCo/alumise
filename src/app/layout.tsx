import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const localBusinessSchema = {
  "@context": "https://schema.org/",
  "@type": ["LocalBusiness", "Service"],
  "name": "Alumise",
  "description": "Alumise Ltd — Premium aluminium windows, bifold doors, sliding doors, roof lanterns, curtain walling and architectural glazing. Manufactured in Penicuik, installed across Edinburgh, Midlothian and Scotland. FENSA accredited.",
  "image": "https://www.alumise.co.uk/logo.png",
  "url": "https://www.alumise.co.uk",
  "sameAs": [],
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
    default: "Alumise | Aluminium Windows, Bifold Doors & Glazing Edinburgh",
    template: "%s | Alumise"
  },
  description: "Alumise Ltd — Premium aluminium windows, bifold doors, sliding doors, roof lanterns, curtain walling and architectural glazing. Manufactured in Penicuik, installed across Edinburgh, Midlothian and Scotland. FENSA accredited.",
  keywords: "aluminium windows Edinburgh, bifold doors Edinburgh, sliding doors Edinburgh, roof lanterns Edinburgh, curtain walling Scotland, shopfronts Edinburgh, architectural glazing Penicuik, double glazing Midlothian, FENSA accredited Edinburgh, aluminium manufacturing Scotland",
  metadataBase: new URL('https://www.alumise.co.uk'),
  alternates: { canonical: '/' },
  openGraph: {
    title: "Alumise | Aluminium Windows, Bifold Doors & Glazing Edinburgh",
    description: "Premium architectural glazing manufactured in our Penicuik facility. Precision-engineered aluminium systems for luxury residential and commercial projects.",
    url: "https://www.alumise.co.uk",
    siteName: "Alumise",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.alumise.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alumise — Premium Architectural Glazing"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Alumise | Premium Architectural Glazing",
    description: "Precision-engineered glazing systems. Manufactured in-house at our Midlothian hub.",
    images: ["https://www.alumise.co.uk/og-image.jpg"],
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
    <html lang="en-GB" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-[family-name:var(--font-inter)] flex flex-col min-h-screen bg-white text-brand-charcoal antialiased">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppBubble />
        </SmoothScrollProvider>
        <CookieBanner />
      </body>
    </html>
  );
}
