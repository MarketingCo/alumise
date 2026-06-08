import { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Glazing & Aluminium Services",
  description: "Premium glazing and aluminium services manufactured in Penicuik for Edinburgh. Bifold doors, sash windows, curtain walling, shopfronts and more.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Glazing & Aluminium Services",
    description: "Premium glazing and aluminium services manufactured in Penicuik for Edinburgh. Bifold doors, sash windows, curtain walling, shopfronts and more.",
    images: [{ url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop", width: 1200, height: 630, alt: "Alumise Services" }],
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
