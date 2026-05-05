"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Home, Building2, Wrench } from "lucide-react";
import type { Service } from "@/data/services";

function ServiceCard({
  service,
  index,
}: {
  service: Service;
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
        className="group block bg-white border border-gray-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300"
      >
        <div className="relative h-56 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-white bg-brand-blue/80 backdrop-blur-sm px-3 py-1">
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
          <h3 className="text-lg font-bold uppercase tracking-tight mb-3 group-hover:text-brand-blue transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-gray-500 font-light leading-relaxed mb-4 line-clamp-3">
            {service.shortDesc}
          </p>
          <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-brand-blue">
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-brand-blue" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-blue">
          {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
}

export default function ServicesGrid({
  residentialServices,
  commercialServices,
  installationServices,
}: {
  residentialServices: Service[];
  commercialServices: Service[];
  installationServices: Service[];
}) {
  return (
    <>
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
    </>
  );
}
