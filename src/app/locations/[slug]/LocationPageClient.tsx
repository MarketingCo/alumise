'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
import { locations } from '@/data/locations';
import { projects } from '@/data/projects';
import { categories } from '@/data/products';

export default function LocationPageClient({ slug }: { slug: string }) {
  const location = locations.find(l => l.slug === slug);
  
  if (!location) {
    notFound();
  }

  // Find projects in this location
  const localProjects = projects.filter(p => p.location.toLowerCase().includes(location.name.toLowerCase()));

  return (
    <div className="bg-white min-h-screen">
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
            <span className="text-[10px] uppercase tracking-widest font-bold">Local Hub: {location.region}</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold uppercase mb-8 tracking-tighter max-w-4xl">
            Architectural Glazing in <span className="text-brand-blue">{location.name}.</span>
          </h1>
          <p className="text-xl text-brand-grey max-w-2xl font-light leading-relaxed">
            {location.description}
          </p>
        </div>
      </section>

      {/* Local Services Grid */}
      <section className="py-24 border-b border-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue">Regional Expertise</h2>
            <p className="text-3xl font-bold uppercase tracking-tight">Our Solutions for {location.name}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <div key={cat} className="p-8 border border-gray-100 bg-white hover:shadow-xl transition-all">
                <Building2 className="w-8 h-8 text-brand-blue mb-6" />
                <h4 className="font-bold uppercase tracking-tight text-lg mb-4">{cat}</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                  Precision-engineered {cat.toLowerCase()} systems tailored for {location.name} developments.
                </p>
                <Link 
                  href={`/products?category=${cat.toLowerCase().replace(' ', '-')}`}
                  className="text-[10px] font-bold uppercase tracking-widest text-brand-blue hover:underline"
                >
                  Explore Category
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Authority Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue">Total Clarity</h2>
              <p className="text-4xl font-bold uppercase leading-tight tracking-tight">
                Engineering Perfection in <span className="text-gray-600">Every District.</span>
              </p>
            </div>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              At Alumise, our expertise in architectural glazing extends to a deep understanding of local planning requirements and environmental conditions across {location.name}. We work directly with architects and developers to deliver high-performance systems that respect local heritage while providing modern thermal efficiency.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start">
                <ShieldCheck className="w-5 h-5 mr-4 text-brand-blue flex-shrink-0" />
                <span className="text-sm font-bold uppercase tracking-tight">FENSA Accredited</span>
              </div>
              <div className="flex items-start">
                <Zap className="w-5 h-5 mr-4 text-brand-blue flex-shrink-0" />
                <span className="text-sm font-bold uppercase tracking-tight">High Thermal Efficiency</span>
              </div>
              <div className="flex items-start">
                <Ruler className="w-5 h-5 mr-4 text-brand-blue flex-shrink-0" />
                <span className="text-sm font-bold uppercase tracking-tight">Structural Verification</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 text-brand-blue flex-shrink-0" />
                <span className="text-sm font-bold uppercase tracking-tight">Local Installations</span>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] bg-gray-100">
            <Image 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
              alt="Local Projects"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Local Projects */}
      {localProjects.length > 0 && (
        <section className="py-32 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex justify-between items-end mb-16">
              <div className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue">Proven Locally</h2>
                <p className="text-3xl font-bold uppercase tracking-tight">Case Studies in {location.name}</p>
              </div>
              <Link href="/projects" className="text-xs font-bold uppercase tracking-widest border-b border-brand-charcoal pb-1 hover:text-brand-blue transition-all">
                View All Projects
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {localProjects.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`} className="group bg-white border border-gray-100 overflow-hidden hover:shadow-2xl transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-blue block mb-2">{project.type}</span>
                    <h4 className="text-lg font-bold uppercase tracking-tight mb-4 group-hover:text-brand-blue transition-colors">{project.title}</h4>
                    <span className="text-[10px] uppercase tracking-widest font-bold flex items-center">
                      View Project <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote CTA */}
      <section className="py-40 bg-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-5xl font-bold uppercase mb-8 tracking-tighter">
            Discuss Your Project in <span className="text-brand-blue">{location.name}.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light mb-12">
            Speak directly with our engineering team. We provide full technical support for projects across {location.name} and the Lothians.
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
              Contact Local Engineer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
