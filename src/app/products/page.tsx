'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import { products, categories, materials, Category, Material } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import LeadMagnet from '@/components/LeadMagnet';

function ProductsContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeMaterial, setActiveMaterial] = useState<string | null>(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    const mat = searchParams.get('material');
    if (cat) setActiveCategory(cat.replace(/-/g, ' '));
    if (mat) setActiveMaterial(mat.replace(/-/g, ' '));
  }, [searchParams]);

  const filteredProducts = products.filter(product => {
    const categoryMatch = !activeCategory || product.category.toLowerCase() === activeCategory.toLowerCase();
    const materialMatch = !activeMaterial || product.materials.some(m => m.toLowerCase() === activeMaterial.toLowerCase());
    return categoryMatch && materialMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-brand-charcoal pt-40 pb-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-6 tracking-tighter">
            Architectural <span className="text-brand-blue">Systems.</span>
          </h1>
          <p className="text-lg text-brand-grey max-w-2xl font-light leading-relaxed">
            Explore our comprehensive range of precision-engineered glazing solutions. From high-performance aluminium to heritage timber.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-40 bg-gray-50 border-b border-gray-200 py-4 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap items-centre justify-between gap-4">
            <div className="flex flex-wrap items-centre gap-4">
              <div className="flex items-centre text-xs font-bold uppercase tracking-widest text-gray-400 mr-2">
                <Filter className="w-3 h-3 mr-2" /> Filter By:
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all ${!activeCategory ? 'bg-brand-blue text-white' : 'bg-white border border-gray-200 text-brand-charcoal hover:border-brand-blue'}`}
                >
                  All Categories
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all ${activeCategory?.toLowerCase() === cat.toLowerCase() ? 'bg-brand-blue text-white' : 'bg-white border border-gray-200 text-brand-charcoal hover:border-brand-blue'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="w-px h-6 bg-gray-200 hidden md:block"></div>

              {/* Material Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveMaterial(null)}
                  className={`px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all ${!activeMaterial ? 'bg-brand-blue text-white' : 'bg-white border border-gray-200 text-brand-charcoal hover:border-brand-blue'}`}
                >
                  All Materials
                </button>
                {materials.map(mat => (
                  <button
                    key={mat}
                    onClick={() => setActiveMaterial(mat)}
                    className={`px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all ${activeMaterial?.toLowerCase() === mat.toLowerCase() ? 'bg-brand-blue text-white' : 'bg-white border border-gray-200 text-brand-charcoal hover:border-brand-blue'}`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Showing {filteredProducts.length} Systems
            </div>
          </div>
        </div>
      </section>

      {/* Active Filters Display */}
      {(activeCategory || activeMaterial) && (
        <div className="bg-white py-4 border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-7xl flex items-centre gap-3">
            <span className="text-[10px] uppercase font-bold text-gray-400">Active:</span>
            {activeCategory && (
              <span className="inline-flex items-centre bg-gray-100 px-3 py-1 rounded-full text-[10px] font-bold text-brand-blue uppercase">
                {activeCategory} <button onClick={() => setActiveCategory(null)}><X className="w-3 h-3 ml-2 hover:text-brand-charcoal transition-colors" /></button>
              </span>
            )}
            {activeMaterial && (
              <span className="inline-flex items-centre bg-gray-100 px-3 py-1 rounded-full text-[10px] font-bold text-brand-blue uppercase">
                {activeMaterial} <button onClick={() => setActiveMaterial(null)}><X className="w-3 h-3 ml-2 hover:text-brand-charcoal transition-colors" /></button>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {filteredProducts.map((product, idx) => (
                  <ProductCard key={product.slug} product={product} index={idx} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-centre py-40 border-2 border-dashed border-gray-100 rounded-xl"
              >
                <SlidersHorizontal className="w-12 h-12 mx-auto text-gray-500 mb-6" />
                <h3 className="text-2xl font-bold uppercase tracking-tight text-brand-charcoal mb-4">No matching systems found</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">Try adjusting your filters or contact our engineering team for bespoke solutions.</p>
                <button 
                  onClick={() => { setActiveCategory(null); setActiveMaterial(null); }}
                  className="bg-brand-blue text-white px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-brand-charcoal transition-colors"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lead Magnet */}
      <LeadMagnet />

      {/* Final CTA */}
      <section className="bg-gray-50 py-32 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl text-centre">
          <h2 className="text-4xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-8 tracking-tighter">
            Need a <span className="text-brand-blue">Bespoke</span> Solution?
          </h2>
          <p className="text-lg text-gray-500 font-light mb-12 leading-relaxed">
            Our engineers specialize in custom glazing designs that push the boundaries of what's possible. Let's discuss your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-centre">
            <Link 
              href="/quote" 
              className="bg-brand-charcoal text-white hover:bg-brand-blue px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all"
            >
              Request Consultation
            </Link>
            <Link 
              href="/contact" 
              className="bg-white border border-gray-200 hover:border-brand-charcoal text-brand-charcoal px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-centre justify-centre bg-brand-charcoal text-white">
        <div className="w-8 h-8 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
