'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  Ruler, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { products } from '@/data/products';
import EngineeringHotspot from '@/components/EngineeringHotspot';

export default function ProductPageContent({ slug }: { slug: string }) {
  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.title,
            "image": [product.heroImage],
            "description": product.shortDesc,
            "brand": {
              "@type": "Brand",
              "name": "Alumise"
            },
            "material": product.materials.join(', '),
            "category": product.category
          })
        }}
      />
      {/* Product Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end bg-brand-charcoal text-white overflow-hidden">
        <EngineeringHotspot hotspots={[
          { x: 30, y: 40, title: "Precision Frame", content: "High-performance thermally broken core prevents heat transfer and eliminates condensation risks." },
          { x: 60, y: 50, title: "Structural Glass", content: "Low-E coated safety glass with argon-filled cavities for superior thermal efficiency and acoustic dampening." },
          { x: 45, y: 75, title: "Engineered Seals", content: "Multi-layered EPDM gaskets ensure absolute airtightness and weather resistance in extreme conditions." }
        ]}>
          <Image 
            src={product.heroImage}
            alt={product.title}
            fill
            className="object-cover opacity-60"
            priority
          />
        </EngineeringHotspot>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 pb-20">
          <Link 
            href="/products" 
            className="inline-flex items-centre text-[10px] uppercase tracking-widest font-bold text-brand-blue mb-8 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3 h-3 mr-2" /> Back to Systems
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {product.materials.map(mat => (
              <span key={mat} className="bg-brand-blue/20 backdrop-blur-md border border-brand-blue/30 text-[8px] uppercase tracking-[0.2em] px-3 py-1 font-bold">
                {mat}
              </span>
            ))}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold font-[family-name:var(--font-oswald)] uppercase leading-none tracking-tighter mb-4">
            {product.title}
          </h1>
          <p className="text-xl text-brand-grey max-w-2xl font-light leading-relaxed">
            {product.shortDesc}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Left Column: Detailed Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-500 font-light leading-relaxed">
                {product.fullContent.map((para, idx) => (
                  <p key={idx} className="mb-6">{para}</p>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue mb-6">Key Engineering Features</h3>
                  <ul className="space-y-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-brand-charcoal font-medium">
                        <CheckCircle2 className="w-5 h-5 mr-3 text-brand-blue flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-sm">
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-charcoal mb-6">Technical Verification</h3>
                  <ul className="space-y-4">
                    <li className="flex items-centre text-xs text-gray-500">
                      <ShieldCheck className="w-4 h-4 mr-3 text-brand-blue" /> UK Building Regs Compliant
                    </li>
                    <li className="flex items-centre text-xs text-gray-500">
                      <Zap className="w-4 h-4 mr-3 text-brand-blue" /> High Thermal Efficiency
                    </li>
                    <li className="flex items-centre text-xs text-gray-500">
                      <Ruler className="w-4 h-4 mr-3 text-brand-blue" /> Custom Structural Analysis
                    </li>
                    <li className="flex items-centre text-xs text-gray-500">
                      <Clock className="w-4 h-4 mr-3 text-brand-blue" /> FENSA Certified Installation
                    </li>
                  </ul>
                </div>
              </div>

              {/* Technical Specifications Table */}
              {product.technicalSpecs && (
                <div className="pt-16 border-t border-gray-100">
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue mb-8">Technical Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                    {Object.entries(product.technicalSpecs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-centre py-4 border-b border-gray-50">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-sm font-bold text-brand-charcoal">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky CTA / Sidebar */}
            <div className="relative">
              <div className="sticky top-32 bg-brand-charcoal text-white p-10 rounded-sm shadow-2xl">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-6 tracking-tight">
                  Request Technical <br />Consultation
                </h3>
                <p className="text-sm text-brand-grey mb-8 font-light leading-relaxed">
                  Discuss your project specifications with our lead engineer. We provide full technical support from concept through to final installation.
                </p>
                <div className="space-y-4">
                  <Link 
                    href="/quote" 
                    className="flex items-centre justify-centre w-full bg-brand-blue hover:bg-white hover:text-brand-charcoal text-white px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link 
                    href="/contact" 
                    className="flex items-centre justify-centre w-full bg-transparent border border-white/20 hover:border-white text-white px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    Speak with an Expert
                  </Link>
                </div>
                
                <div className="mt-10 pt-10 border-t border-white/10 text-centre">
                  <p className="text-[10px] uppercase tracking-widest text-brand-blue font-bold mb-2">Direct Line</p>
                  <p className="text-xl font-bold">Email us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products / Next Steps */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue mb-4">Complete Your Vision</h2>
              <p className="text-3xl font-bold font-[family-name:var(--font-oswald)] uppercase tracking-tight">Complementary <span className="text-gray-400">Systems.</span></p>
            </div>
            <Link href="/products" className="text-xs font-bold uppercase tracking-widest border-b border-brand-charcoal pb-1 hover:text-brand-blue hover:border-brand-blue transition-all">
              View All Systems
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter(p => p.slug !== product.slug && (p.category === product.category || p.materials.some(m => product.materials.includes(m))))
              .slice(0, 3)
              .map((p) => (
                <Link 
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group bg-white p-6 border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 mb-6 overflow-hidden">
                    <Image src={p.heroImage} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h4 className="font-bold uppercase tracking-tight mb-2 group-hover:text-brand-blue transition-colors">{p.title}</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">{p.shortDesc}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
