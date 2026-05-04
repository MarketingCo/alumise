'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Droplets, 
  Maximize,
  HelpCircle,
  X
} from 'lucide-react';
import { materialsData } from '@/data/materials';
import Link from 'next/link';

export default function MaterialsComparisonPage() {
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>(['aluminium', 'timber']);

  const toggleMaterial = (slug: string) => {
    if (selectedMaterials.includes(slug)) {
      if (selectedMaterials.length > 1) {
        setSelectedMaterials(selectedMaterials.filter(s => s !== slug));
      }
    } else if (selectedMaterials.length < 3) {
      setSelectedMaterials([...selectedMaterials, slug]);
    }
  };

  const getMetricColor = (val: number) => {
    if (val >= 9) return 'bg-brand-blue';
    if (val >= 7) return 'bg-blue-400';
    return 'bg-blue-200';
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="mb-20 text-centre max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-8 tracking-tighter">
            Decision <span className="text-brand-blue">Intelligence.</span>
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            Selecting the right substrate is the most critical decision in architectural glazing. Use our comparison engine to evaluate performance metrics side-by-side.
          </p>
        </header>

        {/* Selection Bar */}
        <div className="flex flex-wrap justify-centre gap-4 mb-16">
          {materialsData.map((mat) => (
            <button
              key={mat.slug}
              onClick={() => toggleMaterial(mat.slug)}
              className={`px-6 py-3 text-[10px] uppercase tracking-widest font-bold border transition-all flex items-centre ${
                selectedMaterials.includes(mat.slug)
                  ? 'bg-brand-blue border-brand-blue text-white shadow-xl'
                  : 'bg-white border-gray-100 text-brand-charcoal hover:border-brand-blue'
              }`}
            >
              {selectedMaterials.includes(mat.slug) && <CheckCircle2 className="w-3 h-3 mr-2" />}
              {mat.name}
            </button>
          ))}
        </div>

        {/* Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Labels Column */}
          <div className="hidden lg:block lg:col-span-3 pt-[280px] space-y-[72px]">
            {['Durability', 'Thermal Efficiency', 'Maintenance', 'Cost Effectiveness', 'Slim Sightlines'].map((label) => (
              <div key={label} className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-600 text-right pr-8">
                {label}
              </div>
            ))}
          </div>

          {/* Data Columns */}
          <div className={`lg:col-span-9 grid grid-cols-1 md:grid-cols-${selectedMaterials.length} gap-8`}>
            <AnimatePresence mode="popLayout">
              {selectedMaterials.map((slug) => {
                const mat = materialsData.find(m => m.slug === slug)!;
                return (
                  <motion.div
                    key={mat.slug}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-gray-50 border border-gray-100 rounded-sm overflow-hidden flex flex-col"
                  >
                    <div className="p-8 border-b border-gray-200 bg-white">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold uppercase tracking-tight leading-none">{mat.name}</h3>
                        <button onClick={() => toggleMaterial(mat.slug)} className="text-gray-500 hover:text-red-500 transition-colors">
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-400 font-light leading-relaxed h-12 line-clamp-3">
                        {mat.shortDesc}
                      </p>
                    </div>

                    {/* Metrics Visualization */}
                    <div className="p-8 space-y-12">
                      {Object.entries(mat.metrics).map(([key, val]) => (
                        <div key={key} className="space-y-3">
                          <div className="lg:hidden text-[8px] uppercase tracking-widest font-bold text-gray-400">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${val * 10}%` }}
                              className={`h-full ${getMetricColor(val)}`}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                          <div className="text-[10px] font-bold text-brand-charcoal text-right">{val}/10</div>
                        </div>
                      ))}
                    </div>

                    {/* Pros/Cons */}
                    <div className="p-8 mt-auto bg-white border-t border-gray-100">
                      <div className="space-y-6 mb-8">
                        <div className="space-y-2">
                          <p className="text-[8px] uppercase tracking-widest font-black text-brand-blue">Primary Advantages</p>
                          <ul className="space-y-2">
                            {mat.pros.slice(0, 3).map(pro => (
                              <li key={pro} className="flex items-start text-xs font-medium text-gray-600 leading-tight">
                                <CheckCircle2 className="w-3 h-3 mr-2 text-brand-blue flex-shrink-0" /> {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <Link 
                        href={`/materials/${mat.slug}`}
                        className="flex items-centre justify-between w-full text-[10px] uppercase tracking-widest font-black border-b-2 border-brand-charcoal pb-2 hover:text-brand-blue hover:border-brand-blue transition-all"
                      >
                        Technical Deep-Dive <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Global CTA */}
        <section className="mt-32 py-24 bg-brand-charcoal text-white text-centre relative overflow-hidden rounded-sm shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-brand-blue opacity-5 blur-3xl rounded-full"></div>
          <div className="relative z-10 max-w-2xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-8 tracking-tighter">
              Still Unsure of the <span className="text-brand-blue">Right Choice?</span>
            </h2>
            <p className="text-lg text-brand-grey font-light mb-12">
              Our engineering team can provide a site-specific performance analysis based on your project's location and exposure.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-centre">
              <Link 
                href="/quote" 
                className="bg-brand-blue text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-brand-charcoal transition-all"
              >
                Request Material Sample
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border border-white/20 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs hover:border-white transition-all"
              >
                Talk to an Engineer
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
