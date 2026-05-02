
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  ShieldCheck,
  Zap,
  Ruler
} from 'lucide-react';

export default function LocationPage() {
  const name = "Bonaly";
  const slug = "bonaly";

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Alumise - " + name,
    "image": "https://www.alumise.co.uk/og-image.jpg",
    "url": "https://www.alumise.co.uk/locations/" + slug,
    "telephone": "0131 210 0321",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 2B, Eastfield Industrial Estate",
      "addressLocality": "Penicuik",
      "addressRegion": "Midlothian",
      "postalCode": "EH26 8HA",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 55.8340,
      "longitude": -3.2185
    },
    "areaServed": name + ", Edinburgh"
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Hero */}
      <section className="bg-brand-charcoal pt-40 pb-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue opacity-5 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <Link 
            href="/locations" 
            className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-brand-blue mb-8 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3 h-3 mr-2" /> All Districts
          </Link>
          <div className="flex items-center space-x-2 text-brand-blue mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest font-bold">Local Operations: " + name + "</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-8 tracking-tighter max-w-4xl">
            Architectural Glazing in <span className="text-brand-blue">" + name + ".</span>
          </h1>
          <p className="text-xl text-brand-grey max-w-2xl font-light leading-relaxed">
            Premium aluminium manufacturing and specialist glazing installations for high-end residential and commercial projects in " + name + ".
          </p>
        </div>
      </section>

      {/* Trust & Authority */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue">Total Clarity</h2>
              <p className="text-4xl font-bold font-[family-name:var(--font-oswald)] uppercase leading-tight tracking-tight">
                Engineering Perfection in <span className="text-gray-300">Every District.</span>
              </p>
            </div>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              In " + name + ", Alumise delivers a level of architectural precision that bridges the gap between concept and reality. We manufacture in-house to ensure absolute quality control, providing bespoke systems that maximize light and aesthetic impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start">
                <ShieldCheck className="w-5 h-5 mr-4 text-brand-blue flex-shrink-0" />
                <span className="text-sm font-bold uppercase tracking-tight">RICS Standards</span>
              </div>
              <div className="flex items-start">
                <Zap className="w-5 h-5 mr-4 text-brand-blue flex-shrink-0" />
                <span className="text-sm font-bold uppercase tracking-tight">High Thermal Efficiency</span>
              </div>
              <div className="flex items-start">
                <Ruler className="w-5 h-5 mr-4 text-brand-blue flex-shrink-0" />
                <span className="text-sm font-bold uppercase tracking-tight">Precision Manufacturing</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 text-brand-blue flex-shrink-0" />
                <span className="text-sm font-bold uppercase tracking-tight">Midlothian HQ</span>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] bg-gray-100">
            <Image 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
              alt="Local Projects in " + name
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-40 bg-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-5xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-8 tracking-tighter">
            Discuss Your " + name + " Project.
          </h2>
          <p className="text-xl text-gray-500 font-light mb-12">
            Speak directly with our technical team at our Penicuik manufacturing hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/quote" 
              className="bg-brand-charcoal text-white hover:bg-brand-blue px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-xl"
            >
              Start Your Project
            </Link>
            <Link 
              href="/contact" 
              className="bg-white border border-gray-200 hover:border-brand-charcoal text-brand-charcoal px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all"
            >
              Contact Local Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
