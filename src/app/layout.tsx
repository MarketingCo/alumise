import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Alumise | Commercial Aluminium Glazing Edinburgh",
  description: "Edinburgh's premier commercial glazing specialists, delivering high-performance curtain walling and bespoke shopfronts.",
  openGraph: {
    title: "Alumise | Commercial Aluminium Glazing Edinburgh",
    description: "Edinburgh's premier commercial glazing specialists, delivering high-performance curtain walling and bespoke shopfronts.",
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
              telephone: "0131 000 0000",
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
      <body className={`${inter.variable} ${roboto.variable} font-[family-name:var(--font-roboto)] flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}