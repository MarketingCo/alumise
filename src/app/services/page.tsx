import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { services } from "@/data/services";
import ServicesGrid from "./ServicesGrid";

export const metadata: Metadata = {
  title: "Our Glazing & Aluminium Services | Alumise",
  description:
    "Premium glazing and aluminium services manufactured in Penicuik and installed across Edinburgh and the Lothians. Bifold doors, sash windows, curtain walling, shopfronts and more.",
};

const residentialSlugs = [
  "bifold-doors",
  "sliding-doors",
  "french-doors",
  "sash-windows",
  "casement-windows",
  "roof-lanterns",
  "skylights",
  "conservatories",
  "secondary-glazing",
  "steel-look-windows",
];

const commercialSlugs = ["curtain-walling", "shopfronts", "commercial-doors"];

const installationSlugs = ["window-installation", "door-installation"];

const residentialServices = services.filter((s) =>
  residentialSlugs.includes(s.slug)
);
const commercialServices = services.filter((s) =>
  commercialSlugs.includes(s.slug)
);
const installationServices = services.filter((s) =>
  installationSlugs.includes(s.slug)
);

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-brand-charcoal pt-40 pb-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue opacity-5 blur-3xl rounded-full translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-8 tracking-tighter max-w-5xl">
            Our Glazing &{" "}
            <span className="text-brand-blue">Aluminium Services.</span>
          </h1>
          <p className="text-xl text-brand-grey max-w-2xl font-light leading-relaxed mb-10">
            Precision-engineered glazing and aluminium systems manufactured in
            our Penicuik facility and installed across Edinburgh, Midlothian,
            East Lothian, and West Lothian. From heritage sash windows to
            commercial curtain walling, every project is managed in-house from
            design through to final handover.
          </p>
          <div className="flex flex-wrap gap-8 text-sm text-brand-grey">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-blue" />
              <span>Penicuik Manufacturing Hub</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-blue" />
              <span>0131 210 0321</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-blue" />
              <span>info@alumise.co.uk</span>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid
        residentialServices={residentialServices}
        commercialServices={commercialServices}
        installationServices={installationServices}
      />

      {/* Contact CTA */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-8 tracking-tighter">
            Discuss Your{" "}
            <span className="text-brand-blue">Project.</span>
          </h2>
          <p className="text-lg text-gray-500 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Speak directly with our engineering team. We provide full
            technical support, on-site surveys, and detailed quotations for
            projects across Edinburgh and the Lothians.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/quote"
              className="bg-brand-charcoal text-white hover:bg-brand-blue px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-xl"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="bg-white border border-gray-200 hover:border-brand-charcoal text-brand-charcoal px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
