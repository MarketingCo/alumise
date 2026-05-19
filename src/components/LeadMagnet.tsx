'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export default function LeadMagnet() {
  return (
    <section className="py-20 bg-alumise-obsidian overflow-hidden relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="bg-white/5 border border-white/10 p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3 text-alumise-gold">
                <FileText className="w-6 h-6" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Free Technical Resource</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-none tracking-tight" style={{ fontFamily: 'var(--font-oswald)' }}>
                Download the 2026<br /><span className="text-alumise-gold">Specifiers Guide</span>
              </h2>
              <p className="text-lg text-alumise-silver leading-relaxed max-w-md">
                Our comprehensive guide covers structural glazing limits, thermal performance benchmarks,
                and UK building regulation compliance.
              </p>
              <ul className="space-y-3">
                {['U-Value Comparison Matrix', 'Security Rating Guide', 'Scottish Building Standards Overview'].map((item) => (
                  <li key={item} className="flex items-center text-xs text-alumise-silver font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-alumise-gold rounded-full mr-3" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-alumise-silver mb-6">
                The Specifiers Guide is currently being updated for 2026.
                Enter your email below and we will send it to you as soon as it is ready.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-alumise-gold text-alumise-obsidian px-8 py-5 font-bold uppercase tracking-widest text-xs hover:bg-alumise-gold-light transition-colors"
              >
                Request the Guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
