'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Building2, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProjectCaseStudyContent({ slug }: { slug: string }) {
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Project Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end bg-alumise-obsidian text-white overflow-hidden">
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-60 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alumise-obsidian via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 pb-20">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-alumise-gold mb-8 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3 h-3 mr-2" /> Back to Portfolio
          </Link>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="flex items-center text-[10px] uppercase tracking-[0.2em] font-bold text-alumise-gold bg-white/5 backdrop-blur-md px-4 py-2 border border-white/10">
              <MapPin className="w-3 h-3 mr-2" /> {project.location}
            </span>
            <span className="flex items-center text-[10px] uppercase tracking-[0.2em] font-bold text-alumise-gold bg-white/5 backdrop-blur-md px-4 py-2 border border-white/10">
              <Building2 className="w-3 h-3 mr-2" /> {project.type}
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold uppercase leading-none tracking-tighter mb-4 max-w-4xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-alumise-gold">Project Overview</h2>
                <p className="text-2xl text-alumise-obsidian font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="prose prose-lg max-w-none text-gray-500 font-light leading-relaxed">
                  <p>
                    This project required a high degree of technical precision and aesthetic alignment. Our team was involved from the early design stages, working closely with the client and architectural partners to ensure that every glazing junction and structural support was engineered to exact tolerances.
                  </p>
                  <p>
                    The installation featured our premium systems, optimized for the specific environmental conditions and aesthetic requirements of the Edinburgh landscape. The result is a seamless integration of modern glazing technology with superior architectural design.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-100">
                <div className="space-y-6">
                  <h3 className="font-bold uppercase tracking-tight text-lg">Key Deliverables</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-sm">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-alumise-gold flex-shrink-0" />
                      Precision Structural Calculations
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-alumise-gold flex-shrink-0" />
                      Custom Fabricated Framing Systems
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-alumise-gold flex-shrink-0" />
                      High-Performance Thermal Glazing
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-alumise-gold flex-shrink-0" />
                      Certified Site Installation & Safety QA
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-10 flex flex-col justify-center">
                  <ShieldCheck className="w-12 h-12 text-alumise-gold mb-6" />
                  <h3 className="font-bold uppercase tracking-tight text-lg mb-4">Total Compliance</h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    This project was delivered in full compliance with all relevant UK Building Regulations, including Part L (Thermal) and Part Q (Security) standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-12">
              <div className="bg-white border border-gray-100 p-10 shadow-2xl">
                <h3 className="text-xl font-bold uppercase mb-8 tracking-tight">Project Specs</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-4 border-b border-gray-50">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Sector</span>
                    <span className="text-xs font-bold uppercase">{project.type}</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-gray-50">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Location</span>
                    <span className="text-xs font-bold uppercase">{project.location}</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-gray-50">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Status</span>
                    <span className="text-xs font-bold uppercase text-alumise-gold">Completed</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Warranty</span>
                    <span className="text-xs font-bold uppercase">10 Year Structural</span>
                  </div>
                </div>
                
                <Link 
                  href="/quote" 
                  className="mt-12 w-full bg-alumise-obsidian text-white text-center block px-8 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all hover:bg-alumise-gold shadow-xl"
                >
                  Discuss Similar Project
                </Link>
              </div>

              <div className="p-10 bg-alumise-gold text-white">
                <h4 className="font-bold uppercase tracking-tight text-sm mb-4">Expert Advice</h4>
                <p className="text-xs font-light leading-relaxed mb-6">
                  Need a technical review for your project? Speak directly with our lead engineer.
                </p>
                <p className="text-xl font-bold">Email us</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Projects */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-alumise-gold mb-12">View More Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter(p => p.slug !== project.slug)
              .slice(0, 3)
              .map((p) => (
                <Link 
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group block relative h-64 overflow-hidden bg-alumise-obsidian"
                >
                  <Image 
                    src={p.image} 
                    alt={p.title} 
                    fill 
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h4 className="text-white font-bold uppercase tracking-tight text-sm group-hover:text-alumise-gold transition-colors">{p.title}</h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
