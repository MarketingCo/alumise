'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Building2, Home as HomeIcon } from 'lucide-react';
import { locations } from '@/data/locations';

export default function LocationsPage() {
  const regions = Array.from(new Set(locations.map(l => l.region)));

  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="mb-20 text-centre max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-8 tracking-tighter">
            Operational <span className="text-brand-blue">Districts.</span>
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            Alumise provides precision-engineered glazing solutions across Edinburgh, the Lothians, and Fife. Explore our regional hubs.
          </p>
        </header>

        <div className="space-y-24">
          {regions.map((region, rIdx) => (
            <div key={region} className="space-y-12">
              <div className="flex items-centre space-x-6 border-b border-gray-100 pb-4">
                <span className="text-4xl font-bold font-[family-name:var(--font-oswald)] text-gray-600">0{rIdx + 1}</span>
                <h2 className="text-3xl font-bold uppercase tracking-tight">{region} Region</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {locations.filter(l => l.region === region).map((location, idx) => (
                  <motion.div
                    key={location.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="group border border-gray-100 p-10 hover:shadow-2xl hover:border-brand-blue transition-all"
                  >
                    <div className="flex items-centre text-brand-blue mb-6">
                      <MapPin className="w-6 h-6 mr-3" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Operational District</span>
                    </div>
                    <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight group-hover:text-brand-blue transition-colors">{location.name}</h3>
                    <p className="text-sm text-gray-500 font-light mb-8 line-clamp-2 leading-relaxed">
                      {location.description}
                    </p>
                    <Link 
                      href={`/locations/${location.slug}`}
                      className="inline-flex items-centre text-[10px] uppercase tracking-widest font-bold border-b-2 border-brand-charcoal pb-1 group-hover:border-brand-blue transition-all"
                    >
                      Explore Local Projects <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
