'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Building2 } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-brand-charcoal pt-40 pb-24 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold uppercase mb-8 tracking-tighter">
              Defining the <span className="text-brand-blue">Skyline.</span>
            </h1>
            <p className="text-xl text-brand-grey max-w-2xl mx-auto font-light leading-relaxed">
              Explore our portfolio of high-specification architectural glazing projects across Edinburgh and the Lothians.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col"
              >
                <Link href={`/projects/${project.slug}`} className="relative h-[450px] overflow-hidden mb-8 bg-gray-100">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </Link>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-blue">
                    <span className="flex items-center"><MapPin className="w-3 h-3 mr-2" /> {project.location}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="flex items-center"><Building2 className="w-3 h-3 mr-2" /> {project.type}</span>
                  </div>
                  <h3 className="text-3xl font-bold uppercase tracking-tight group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold border-b-2 border-brand-charcoal pb-2 group-hover:border-brand-blue group-hover:text-brand-blue transition-all"
                  >
                    View Project Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 py-32 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold uppercase mb-8 tracking-tighter">
            Your Vision, <span className="text-brand-blue">Precisely Engineered.</span>
          </h2>
          <p className="text-lg text-gray-500 font-light mb-12">
            Whether it's a luxury residential renovation or a multi-storey commercial facade, we bring the same level of engineering exactitude to every project.
          </p>
          <Link 
            href="/quote" 
            className="inline-block bg-brand-charcoal text-white hover:bg-brand-blue px-12 py-6 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-xl"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
