'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Award
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Materials Offered', value: '6+' },
    { label: 'Structural Guarantee', value: '10 Yrs' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-alumise-obsidian pt-40 pb-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-alumise-gold opacity-5 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold uppercase mb-8 tracking-tighter">
              Engineering <span className="text-alumise-gold">Total Clarity.</span>
            </h1>
            <p className="text-xl text-brand-grey max-w-2xl font-light leading-relaxed">
              Alumise was founded on a single principle: providing architects and homeowners with the technical exactitude they deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px] bg-gray-100">
            <Image 
              src="/images/unsplash_1507679799987-c73779587ccf_q80_w2071.jpg"
              alt="Our Facility"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />

          </div>
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-alumise-gold">The Alumise Mission</h2>
              <p className="text-4xl font-bold uppercase leading-tight tracking-tight">
                Architectural Performance, <span className="text-gray-600">Perfectly Delivered.</span>
              </p>
            </div>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              We design, manufacture and install premium aluminium glazing systems for commercial and high-end residential projects across Edinburgh and Scotland. Every frame is fabricated in our Penicuik facility and fitted by our own installation team.
            </p>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              Based in Penicuik, our facility is the heart of our operations, where every window, door and curtain walling system is manufactured to exact specifications before installation. This commitment to in-house fabrication and fitting is what sets Alumise apart as Edinburgh's trusted glazing partner.
            </p>
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-alumise-gold" />
                <span className="text-xs font-bold uppercase tracking-widest">FENSA Accredited</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-alumise-gold" />
                <span className="text-xs font-bold uppercase tracking-widest">Structural QA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-alumise-gold" />
                <span className="text-xs font-bold uppercase tracking-widest">BIM Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-40 bg-alumise-obsidian text-white text-center relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-alumise-gold opacity-5 blur-3xl rounded-full"></div>
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8 tracking-tighter">
            Ready to Build <span className="text-alumise-gold">Precisely?</span>
          </h2>
          <p className="text-lg text-brand-grey font-light mb-12">
            Let's discuss how our engineering-first approach can elevate your next project. 
          </p>
          <Link 
            href="/quote" 
            className="inline-flex items-center bg-alumise-gold text-white hover:bg-white hover:text-alumise-obsidian px-12 py-6 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-2xl"
          >
            Request Technical Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
