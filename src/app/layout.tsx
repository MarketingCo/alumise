import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import NetworkPartners from "@/components/NetworkPartners";

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
  "@type": "LocalBusiness",
  "name": "Alumise",
  "description": "The authority in advanced glazing solutions. Precision-engineered aluminium, uPVC, timber, and steel-look systems for luxury residential and commercial projects across Edinburgh and Midlothian. Manufacturing hub in Penicuik.",
  "image": "https://alumise.vercel.app/logo.png",
  "url": "https://alumise.vercel.app",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "42",
    "bestRating": "5"
  },
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
    default: "Alumise | Premium Architectural Glazing Edinburgh & Midlothian",
    template: "%s | Alumise"
  },
  description: "Alumise: Premium architectural glazing manufactured in our Penicuik facility. Precision-engineered aluminium, uPVC, timber, and steel-look systems for luxury projects across Edinburgh and the Lothians.",
  keywords: "commercial aluminium glazing Edinburgh, architectural glazing Penicuik, bifold doors Midlothian, curtain walling contractors Scotland, aluminium manufacturing Edinburgh, high-end glazing systems",
  metadataBase: new URL("https://alumise.vercel.app"),
  alternates: { canonical: '/' },
  openGraph: {
    title: "Alumise | Premium Architectural Glazing Edinburgh & Midlothian",
    description: "Premium architectural glazing manufactured in our Penicuik facility. Precision-engineered aluminium systems for luxury residential and commercial projects.",
    url: "https://alumise.vercel.app",
    siteName: "Alumise",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://alumise.vercel.app/og-image.jpg",
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
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-[family-name:var(--font-inter)] flex flex-col min-h-screen bg-white text-brand-charcoal antialiased">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <NetworkPartners />
          <Footer />
          <WhatsAppBubble />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
