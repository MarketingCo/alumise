'use client';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Building2 } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Spacer */}
      <div className="h-20 bg-brand-charcoal"></div>

      {/* Hero Section */}
      <section className="bg-brand-charcoal text-white py-24 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold font-[family-name:var(--font-inter)] tracking-tighter uppercase mb-6"
          >
            Project <span className="text-brand-blue">Showcase</span>
          </motion.h1>
          <p className="text-xl text-brand-grey max-w-2xl mx-auto font-light leading-relaxed">
            Explore our portfolio of high-performance glazing installations across Edinburgh and the Lothians.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, i) => (
              <motion.div 
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm mb-6 shadow-xl">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-charcoal opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest">
                    View Details <ArrowRight size={14} />
                  </div>
                </div>
                <div className="space-y-3 px-2">
                  <div className="flex items-center gap-2 text-brand-blue font-black uppercase text-[10px] tracking-widest">
                    <Building2 size={12} /> {project.type}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-charcoal uppercase tracking-tight group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                    <MapPin size={12} className="text-gray-300" /> {project.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 px-4 text-center">
        <div className="container mx-auto max-w-4xl space-y-10">
          <h2 className="text-4xl font-bold text-brand-charcoal uppercase tracking-tighter">Your project could be next.</h2>
          <Link href="/#contact" className="inline-block bg-brand-blue text-white px-12 py-6 rounded-sm font-black uppercase text-xs tracking-[0.3em] transition-all hover:bg-blue-700 shadow-2xl">
            Start Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}