import { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Glazing & Aluminium Services",
  description: "Premium glazing and aluminium services manufactured in Penicuik for Edinburgh. Bifold doors, sash windows, curtain walling, shopfronts and more.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Glazing & Aluminium Services",
    description: "Premium glazing and aluminium services manufactured in Penicuik for Edinburgh. Bifold doors, sash windows, curtain walling, shopfronts and more.",
    images: [{ url: "/images/unsplash_1507679799987-c73779587ccf_q80_w2071.jpg", width: 1200, height: 630, alt: "Alumise Services" }],
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
