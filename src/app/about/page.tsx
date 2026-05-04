'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  History, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Building2,
  Award
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Founded', value: '2012' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Materials Offered', value: '6+' },
    { label: 'Structural Guarantee', value: '10 Yrs' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-brand-charcoal pt-40 pb-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue opacity-5 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-8 tracking-tighter">
              Engineering <span className="text-brand-blue">Total Clarity.</span>
            </h1>
            <p className="text-xl text-brand-grey max-w-2xl font-light leading-relaxed">
              Alumise was founded on a single principle: providing architects and homeowners with the technical exactitude they deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-centre">
          <div className="relative h-[600px] bg-gray-100">
            <Image 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
              alt="Our Facility"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-blue p-8 flex flex-col justify-centre text-white hidden md:flex">
              <span className="text-4xl font-bold font-[family-name:var(--font-oswald)] mb-2">10+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Years Industry Authority</span>
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue">The Alumise Mission</h2>
              <p className="text-4xl font-bold font-[family-name:var(--font-oswald)] uppercase leading-tight tracking-tight">
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
              <div className="flex items-centre space-x-3">
                <ShieldCheck className="w-5 h-5 text-brand-blue" />
                <span className="text-xs font-bold uppercase tracking-widest">FENSA Accredited</span>
              </div>
              <div className="flex items-centre space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                <span className="text-xs font-bold uppercase tracking-widest">Structural QA</span>
              </div>
              <div className="flex items-centre space-x-3">
                <Award className="w-5 h-5 text-brand-blue" />
                <span className="text-xs font-bold uppercase tracking-widest">BIM Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-centre">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl font-bold font-[family-name:var(--font-oswald)] mb-2">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue mb-4">Technical Leadership</h2>
              <p className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-oswald)] uppercase leading-tight tracking-tight">
                Guided by <span className="text-gray-600">Engineering.</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Technical Director', role: 'Structural Engineering', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop' },
              { name: 'Lead Estimator', role: 'Commercial Projects', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop' },
              { name: 'Senior Surveyor', role: 'Technical Compliance', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop' }
            ].map((member, idx) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative h-96 overflow-hidden mb-6 bg-gray-100">
                  <Image src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight">{member.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-brand-blue font-bold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-40 bg-brand-charcoal text-white text-centre relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue opacity-5 blur-3xl rounded-full"></div>
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-8 tracking-tighter">
            Ready to Build <span className="text-brand-blue">Precisely?</span>
          </h2>
          <p className="text-lg text-brand-grey font-light mb-12">
            Let's discuss how our engineering-first approach can elevate your next project. 
          </p>
          <Link 
            href="/quote" 
            className="inline-flex items-centre bg-brand-blue text-white hover:bg-white hover:text-brand-charcoal px-12 py-6 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-2xl"
          >
            Request Technical Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
