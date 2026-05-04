import { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Glazing & Aluminium Services | Alumise",
  description:
    "Premium glazing and aluminium services manufactured in Penicuik and installed across Edinburgh and the Lothians. Bifold doors, sash windows, curtain walling, shopfronts and more.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
