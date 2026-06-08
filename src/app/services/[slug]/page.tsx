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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return {
      title: "Service Not Found | Alumise",
    };
  }
  
  const title = service.metaTitle;
  const description = service.metaDescription.length > 155 ? service.metaDescription.substring(0, 152) + '...' : service.metaDescription;

  return {
    title: title.length > 50 ? title.substring(0, 47) + '...' : title,
    description: description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: title,
      description: description,
      url: `https://alumise.co.uk/services/${service.slug}`,
      type: 'website',
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

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
      url: "https://alumise.co.uk",
    },
    areaServed: {
      "@type": "City",
      name: "Edinburgh",
    },
    serviceType: service.title,
  };

  const schemas: Record<string, unknown>[] = [serviceSchema];

  if (service.faq && service.faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((f: { question: string; answer: string }) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    } as Record<string, unknown>);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-alumise-obsidian pt-40 pb-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-alumise-gold opacity-5 blur-3xl rounded-full translate-x-1/2" />
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <Link
              href="/services"
              className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-alumise-gold mb-8 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3 h-3 mr-2" /> All Services
            </Link>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none tracking-tighter mb-6 max-w-5xl">
              {service.title}{" "}
              <span className="text-alumise-gold">Services.</span>
            </h1>
            <p className="text-xl text-brand-grey max-w-2xl font-light leading-relaxed mb-10">
              {service.shortDesc}
            </p>
            <div className="flex flex-wrap gap-8 text-sm text-brand-grey">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-alumise-gold" />
                <span>Edinburgh & Lothians</span>
              </div>
            </div>
          </div>
        </section>

        <ServiceContent service={service} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-32 border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-alumise-gold">
                  Compatible Systems
                </h2>
                <p className="text-3xl font-bold uppercase tracking-tight">
                  Related Products
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group bg-white border border-gray-100 overflow-hidden hover:shadow-2xl transition-all"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={product.heroImage}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-alumise-gold block mb-2">
                        {product.category}
                      </span>
                      <h4 className="text-lg font-bold uppercase tracking-tight mb-4 group-hover:text-alumise-gold transition-colors">
                        {product.title}
                      </h4>
                      <span className="text-[10px] uppercase tracking-widest font-bold flex items-center">
                        View Product{" "}
                        <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-40 bg-gray-50 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-5xl font-bold uppercase mb-8 tracking-tighter">
              Start Your{" "}
              <span className="text-alumise-gold">{service.title} Project.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light mb-12">
              Get a fixed-price quotation for {service.title.toLowerCase()}{" "}
              manufactured in Penicuik and installed across Edinburgh.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/quote"
                className="bg-alumise-obsidian text-white hover:bg-alumise-gold px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-xl"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                className="bg-white border border-gray-200 hover:border-alumise-obsidian text-alumise-obsidian px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all"
              >
                Speak to an Engineer
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
