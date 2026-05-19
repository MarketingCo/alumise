"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Home,
  Building2,
  Wrench,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { services } from "@/data/services";

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

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group block bg-white border border-gray-100 hover:border-alumise-gold/30 hover:shadow-xl transition-all duration-300"
      >
        <div className="relative h-56 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alumise-obsidian/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-white bg-alumise-gold/80 backdrop-blur-sm px-3 py-1">
              {service.slug.includes("installation")
                ? "Installation"
                : service.slug.includes("curtain") ||
                  service.slug.includes("shopfront") ||
                  service.slug.includes("commercial")
                ? "Commercial"
                : "Residential"}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold uppercase tracking-tight mb-3 group-hover:text-alumise-gold transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-gray-500 font-light leading-relaxed mb-4 line-clamp-3">
            {service.shortDesc}
          </p>
          <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-alumise-gold">
            View Service{" "}
            <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function SectionHeader({
  icon: Icon,
  label,
  title,
}: {
  icon: React.ElementType;
  label: string;
  title: string;
}) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-alumise-gold" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-alumise-gold">
          {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
        {title}
      </h2>
    </div>
  );
}

export default function ServicesPageClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-alumise-obsidian pt-40 pb-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-alumise-gold opacity-5 blur-3xl rounded-full translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase mb-8 tracking-tighter max-w-5xl">
            Our Glazing &{" "}
            <span className="text-alumise-gold">Aluminium Services.</span>
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
              <MapPin className="w-4 h-4 text-alumise-gold" />
              <span>Penicuik Manufacturing Hub</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-alumise-gold" />
              <span>0131 210 0321</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-alumise-gold" />
              <span>info@alumise.co.uk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-24 border-b border-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeader
            icon={Home}
            label="Residential"
            title="Home Glazing Services"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service, idx) => (
              <ServiceCard key={service.slug} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-24 border-b border-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeader
            icon={Building2}
            label="Commercial"
            title="Business & Commercial Systems"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, idx) => (
              <ServiceCard key={service.slug} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="py-24 border-b border-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeader
            icon={Wrench}
            label="Installation"
            title="Expert Fitting & Replacement"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {installationServices.map((service, idx) => (
              <ServiceCard key={service.slug} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8 tracking-tighter">
              Discuss Your{" "}
              <span className="text-alumise-gold">Project.</span>
            </h2>
            <p className="text-lg text-gray-500 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Speak directly with our engineering team. We provide full
              technical support, on-site surveys, and detailed quotations for
              projects across Edinburgh and the Lothians.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/quote"
                className="bg-alumise-obsidian text-white hover:bg-alumise-gold px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-xl"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact"
                className="bg-white border border-gray-200 hover:border-alumise-obsidian text-alumise-obsidian px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
