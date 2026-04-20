import type { Metadata } from "next";
import { Cinzel, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alumise | Premium Architectural Glazing Edinburgh & Lothians",
  description: "The authority in advanced glazing solutions. Providing precision-engineered aluminium, uPVC, timber, and steel-look systems for luxury residential and commercial projects.",
  openGraph: {
    title: "Alumise | Premium Architectural Glazing Edinburgh & Lothians",
    description: "The authority in advanced glazing solutions. Providing precision-engineered aluminium, uPVC, timber, and steel-look systems for luxury residential and commercial projects.",
    url: "https://www.alumise.co.uk",
    siteName: "Alumise",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Alumise",
              image: "https://www.alumise.co.uk/logo.png",
              "@id": "https://www.alumise.co.uk",
              url: "https://www.alumise.co.uk",
              telephone: "",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Edinburgh",
                addressRegion: "Scotland",
                addressCountry: "UK"
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00"
              }
            })
          }}
        />
      </head>
      <body className={`${cinzel.variable} ${jost.variable} font-[family-name:var(--font-jost)] flex flex-col min-h-screen`}>
        <CustomCursor />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}