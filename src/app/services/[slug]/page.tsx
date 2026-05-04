import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { products } from "@/data/products";
import ServiceContent from "./ServiceContent";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return {
      title: "Service Not Found | Alumise",
    };
  }
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const relatedProducts = products.filter((p) =>
    service.relatedProducts.includes(p.slug)
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDesc,
    provider: {
      "@type": "LocalBusiness",
      name: "Alumise",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 2B, Eastfield Industrial Estate",
        addressLocality: "Penicuik",
        postalCode: "EH26 8HA",
        addressRegion: "Midlothian",
        addressCountry: "GB",
      },
      telephone: "0131 210 0321",
      email: "info@alumise.co.uk",
    },
    areaServed: ["Edinburgh", "Midlothian", "East Lothian", "West Lothian"],
    url: `https://www.alumise.co.uk/services/${service.slug}`,
    image: service.image,
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end bg-brand-charcoal text-white overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10 pb-20">
          <Link
            href="/services"
            className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-brand-blue mb-8 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3 h-3 mr-2" /> All Services
          </Link>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-oswald)] uppercase leading-none tracking-tighter mb-6 max-w-5xl">
            {service.title}
          </h1>
          <p className="text-xl text-brand-grey max-w-2xl font-light leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-blue block mb-4">
                  Service Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-oswald)] uppercase tracking-tight">
                  Manufactured in Penicuik. Installed Across the Lothians.
                </h2>
              </div>
              <div className="space-y-6">
                {service.description.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-lg text-gray-500 font-light leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="sticky top-32 bg-brand-charcoal text-white p-10 rounded-sm shadow-2xl">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-6 tracking-tight">
                  Request a Consultation
                </h3>
                <p className="text-sm text-brand-grey mb-8 font-light leading-relaxed">
                  Discuss your project with our lead engineer. We provide full
                  technical support from concept through to final installation.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/quote"
                    className="flex items-center justify-center w-full bg-brand-blue hover:bg-white hover:text-brand-charcoal text-white px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full bg-transparent border border-white/20 hover:border-white text-white px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    Speak with an Expert
                  </Link>
                </div>
                <div className="mt-10 pt-10 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-blue" />
                    <span className="text-sm font-bold">0131 210 0321</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-blue" />
                    <span className="text-sm font-bold">info@alumise.co.uk</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-grey font-light">
                      Unit 2B, Eastfield Industrial Estate,
                      <br />
                      Penicuik, EH26 8HA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Content */}
      <ServiceContent service={service} />

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-blue block mb-4">
                  Explore Further
                </span>
                <h2 className="text-3xl font-bold font-[family-name:var(--font-oswald)] uppercase tracking-tight">
                  Related{" "}
                  <span className="text-gray-400">Systems.</span>
                </h2>
              </div>
              <Link
                href="/products"
                className="hidden md:inline-flex items-center text-xs font-bold uppercase tracking-widest border-b border-brand-charcoal pb-1 hover:text-brand-blue hover:border-brand-blue transition-all"
              >
                View All Systems{" "}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group bg-white p-6 border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 mb-6 overflow-hidden">
                    <Image
                      src={product.heroImage}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold uppercase tracking-tight mb-2 group-hover:text-brand-blue transition-colors">
                    {product.title}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {product.shortDesc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-8 tracking-tighter">
            Start Your{" "}
            <span className="text-brand-blue">{service.title}</span> Project.
          </h2>
          <p className="text-lg text-gray-500 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Our engineering team is ready to survey, specify, and install your
            project across Edinburgh, Midlothian, East Lothian, and West
            Lothian.
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
