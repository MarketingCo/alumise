'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ShieldCheck, 
  Zap, 
  Ruler,
  Maximize,
  ArrowRight
} from 'lucide-react';
import { materialsData } from '@/data/materials';
import { products } from '@/data/products';

export default function MaterialDetailContent({ slug }: { slug: string }) {
  const material = materialsData.find(m => m.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!material) {
    notFound();
  }

  const compatibleProducts = products.filter(p => p.materials.some(m => m.toLowerCase().includes(material.slug)));

  return (
    <div className="bg-white min-h-screen">
      {/* Schema.org FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": material.faqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
              }
            }))
          })
        }}
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end bg-brand-charcoal text-white overflow-hidden">
        <Image 
          src={material.heroImage}
          alt={material.name}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 pb-20">
          <Link 
            href="/materials" 
            className="inline-flex items-centre text-[10px] uppercase tracking-widest font-bold text-brand-blue mb-8 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3 h-3 mr-2" /> Back to Comparison
          </Link>
          <div className="flex items-centre space-x-2 text-brand-blue mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest font-bold">Material Specification</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold font-[family-name:var(--font-oswald)] uppercase leading-none tracking-tighter mb-4">
            {material.name.split(' ')[0]} <span className="text-brand-blue">{material.name.split(' ')[1]}</span>
          </h1>
          <p className="text-xl text-brand-grey max-w-2xl font-light leading-relaxed">
            {material.shortDesc}
          </p>
        </div>
      </section>

      {/* Analysis Grid */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Detailed Content */}
            <div className="lg:col-span-2 space-y-16">
              <div className="prose prose-xl prose-slate max-w-none font-light leading-relaxed text-gray-500">
                {material.fullContent.map((para, idx) => (
                  <p key={idx} className="mb-8">{para}</p>
                ))}
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-100">
                <div className="space-y-8">
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">Strategic Advantages</h3>
                  <ul className="space-y-4">
                    {material.pros.map(pro => (
                      <li key={pro} className="flex items-start text-sm text-brand-charcoal font-medium">
                        <CheckCircle2 className="w-5 h-5 mr-3 text-brand-blue flex-shrink-0" /> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-8">
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-600">Considerations</h3>
                  <ul className="space-y-4">
                    {material.cons.map(con => (
                      <li key={con} className="flex items-start text-sm text-gray-600 font-light">
                        <XCircle className="w-5 h-5 mr-3 text-gray-500 flex-shrink-0" /> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical FAQs */}
              <div className="pt-24 border-t border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue mb-12 text-centre">Technical FAQ</h3>
                <div className="max-w-3xl mx-auto space-y-4">
                  {material.faqs.map((faq, idx) => (
                    <div key={idx} className="border border-gray-100 rounded-sm">
                      <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex items-centre justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-bold uppercase tracking-tight text-sm">{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openFaq === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 pt-0 text-sm text-gray-500 font-light leading-relaxed border-t border-gray-50">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-12">
              <div className="sticky top-32">
                <div className="bg-brand-charcoal p-10 text-white rounded-sm mb-8 shadow-2xl">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-6 tracking-tight">Available <br />Systems</h3>
                  <div className="space-y-4">
                    {compatibleProducts.map(p => (
                      <Link 
                        key={p.slug}
                        href={`/products/${p.slug}`}
                        className="flex items-centre justify-between group py-3 border-b border-white/5 hover:border-brand-blue transition-all"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-grey group-hover:text-white">{p.title}</span>
                        <ArrowRight className="w-3 h-3 text-brand-blue opacity-0 group-hover:opacity-100 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-10 border border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4">Lead Engineer Review</h4>
                  <p className="text-xs text-gray-500 font-light leading-relaxed mb-8">
                    Every project is unique. Let our technical team review your plans to ensure the optimal material selection for your project's environmental load and aesthetic goals.
                  </p>
                  <Link href="/quote" className="inline-block bg-brand-charcoal text-white px-8 py-4 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-brand-blue transition-all">
                    Request Technical Pack
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
