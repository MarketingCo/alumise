'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  FileText, 
  CheckCircle2, 
  Zap, 
  Ruler, 
  Lock,
  Leaf,
  Users
} from 'lucide-react';
import Link from 'next/link';



const accreditations = [
  { name: 'FENSA Certified', desc: 'Industry standard for replacement windows and doors in England and Wales.' }
];

export default function TrustHub() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-brand-charcoal pt-40 pb-24 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-5xl md:text-7xl font-bold uppercase mb-8 tracking-tighter">
            Technical & <span className="text-brand-blue">Trust Hub.</span>
          </h1>
          <p className="text-xl text-brand-grey max-w-2xl font-light leading-relaxed">
            Total transparency in engineering. Explore our warranties, technical specifications, and safety accreditations.
          </p>
        </div>
      </section>

      {/* Accreditations Grid */}
      <section className="py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {accreditations.map((acc, idx) => (
              <motion.div 
                key={acc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-brand-blue" />
                </div>
                <h4 className="font-bold uppercase tracking-tight text-lg">{acc.name}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{acc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue mb-6">The Alumise Guarantee</h2>
            <p className="text-4xl md:text-5xl font-bold uppercase leading-tight tracking-tight mb-8">
              A Decade of Absolute <span className="text-brand-blue">Confidence.</span>
            </p>
            <p className="text-lg text-gray-500 font-light leading-relaxed mb-10">
              Every Alumise installation is backed by a comprehensive 10-year structural warranty. We don't just walk away once the job is done; we manage the asset lifecycle through proactive support.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-4 text-brand-blue flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-tight">10-Year Structural Integrity</h4>
                  <p className="text-xs text-gray-600 mt-1">Covers frames, structural glass seals, and load-bearing components.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-4 text-brand-blue flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-tight">5-Year Hardware & Seals</h4>
                  <p className="text-xs text-gray-600 mt-1">Covers locks, hinges, and weatherproofing gaskets.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-4 text-brand-blue flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-tight">Post-Installation Support</h4>
                  <p className="text-xs text-gray-600 mt-1">Direct access to our engineering team for any operational adjustments.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-brand-charcoal p-12 text-white relative overflow-hidden">
            <ShieldCheck className="absolute -top-10 -right-10 w-64 h-64 text-white opacity-5" />
            <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight relative z-10">Download <br />Technical Documentation</h3>
            <div className="space-y-4 relative z-10">
              <button className="flex items-center justify-between w-full bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-all group">
                <span className="flex items-center text-xs font-bold uppercase tracking-widest"><FileText className="w-4 h-4 mr-4 text-brand-blue" /> Warranty Terms & Conditions</span>
                <span className="text-[8px] opacity-40 group-hover:opacity-100 uppercase tracking-[0.2em]">PDF (1.2MB)</span>
              </button>
              <button className="flex items-center justify-between w-full bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-all group">
                <span className="flex items-center text-xs font-bold uppercase tracking-widest"><Zap className="w-4 h-4 mr-4 text-brand-blue" /> Thermal Performance Guide</span>
                <span className="text-[8px] opacity-40 group-hover:opacity-100 uppercase tracking-[0.2em]">PDF (2.4MB)</span>
              </button>
              <button className="flex items-center justify-between w-full bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-all group">
                <span className="flex items-center text-xs font-bold uppercase tracking-widest"><Lock className="w-4 h-4 mr-4 text-brand-blue" /> Security & Safety Specs</span>
                <span className="text-[8px] opacity-40 group-hover:opacity-100 uppercase tracking-[0.2em]">PDF (0.8MB)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Standards */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue mb-6">Performance & Sustainability</h2>
            <p className="text-4xl font-bold uppercase tracking-tight">Technical <span className="text-gray-600">Benchmarks.</span></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all">
              <Zap className="w-8 h-8 text-brand-blue mb-8" />
              <h4 className="font-bold uppercase tracking-tight text-lg mb-4">U-Value Excellence</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">Our systems are engineered to achieve U-values as low as 0.8 W/m²K, significantly exceeding current Part L building regulations.</p>
            </div>
            <div className="p-10 border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all">
              <Lock className="w-8 h-8 text-brand-blue mb-8" />
              <h4 className="font-bold uppercase tracking-tight text-lg mb-4">Security Class RC3</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">Available systems tested to Resistance Class 3, providing high-level protection against forced entry attempts.</p>
            </div>
            <div className="p-10 border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all">
              <Leaf className="w-8 h-8 text-brand-blue mb-8" />
              <h4 className="font-bold uppercase tracking-tight text-lg mb-4">Eco-Engineering</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">We prioritize high-recycled-content aluminium and sustainable timber sources (FSC/PEFC) to minimize project carbon footprints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Marquee */}


      {/* Final CTA */}
      <section className="bg-brand-charcoal py-32 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 tracking-tighter">
            Need Detailed <span className="text-brand-blue">Technical Specs?</span>
          </h2>
          <p className="text-lg text-brand-grey font-light mb-12">
            Our engineering team can provide full CAD blocks, U-value calculations, and structural simulations for your specific project.
          </p>
          <Link 
            href="/quote" 
            className="inline-block bg-brand-blue text-white hover:bg-white hover:text-brand-charcoal px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all"
          >
            Request Technical Pack
          </Link>
        </div>
      </section>
    </div>
  );
}
