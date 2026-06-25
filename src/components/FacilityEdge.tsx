'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Settings, Hammer, Award, HelpCircle } from 'lucide-react';

export default function FacilityEdge() {
  return (
    <section className="py-28 md:py-36 bg-alumise-obsidian text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-alumise-gold opacity-5 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-alumise-gold opacity-5 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Block: The Manufacturing Story */}
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-alumise-gold block">
                The Penicuik Engineering Edge
              </span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
                MANUFACTURED IN <br />
                <span className="text-alumise-gold">MIDLOTHIAN.</span>
              </h2>
              <p className="text-lg text-brand-grey font-light leading-relaxed">
                Unlike national double-glazing sales offices that buy pre-made, standard-sized units from generic trade counters, we design and custom-fabricate every single system in-house at our dedicated facility in **Eastfield Industrial Estate, Penicuik**.
              </p>
            </div>

            {/* Our Core Values / Iain's Tone */}
            <blockquote className="border-l-2 border-alumise-gold pl-6 py-2 italic text-brand-grey font-light">
              "Our business is built on a straightforward foundation: transparent communication, setting realistic timelines, and delivering engineered excellence without over-promising. We don't employ aggressive sales representatives—just expert fabricators and installers."
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-alumise-gold">
                  <Settings className="w-5 h-5" />
                  <h4 className="text-xs font-bold uppercase tracking-wider">Precision CNC Folding</h4>
                </div>
                <p className="text-xs text-brand-grey leading-relaxed font-light">
                  Our advanced CNC folding and sheet-metal tooling allows us to manufacture bespoke aluminium trims, perimeter sills, and custom architectural flashings locally—drastically reducing lead times for complex structural junctions.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-alumise-gold">
                  <Hammer className="w-5 h-5" />
                  <h4 className="text-xs font-bold uppercase tracking-wider">Industrial Panel Sawing</h4>
                </div>
                <p className="text-xs text-brand-grey leading-relaxed font-light">
                  With millimetre-accurate panel saws and high-grade alloy tooling, every frame is cut and assembled to absolute tolerances to survive Scotland’s severe coastal weather conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Local Authority Credentials & Action Card */}
          <div className="space-y-12 lg:pl-10">
            <div className="bg-white/5 border border-white/10 p-10 md:p-12 space-y-8 rounded-sm backdrop-blur-md">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                Fully Accredited & Guaranteed
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <ShieldCheck className="w-6 h-6 text-alumise-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider">FENSA Registered Member</h4>
                    <p className="text-xs text-brand-grey font-light mt-1 leading-relaxed">
                      Every domestic installation is certified compliant with current Scottish Building Standards, with thermal calculations pre-checked and automatically registered.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-alumise-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider">10-Year Insurance-Backed Guarantee</h4>
                    <p className="text-xs text-brand-grey font-light mt-1 leading-relaxed">
                      We secure every project under a comprehensive, independent structural insurance guarantee, ensuring full coverage even in the unlikely event we cease trading.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-alumise-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider">Metfab-Style Custom Metal Pressings</h4>
                    <p className="text-xs text-brand-grey font-light mt-1 leading-relaxed">
                      Need custom-colored aluminium flashings, perimeter trims, or pressings for a self-build or B2B trade project? We offer express next-day collections straight from our Penicuik factory.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="flex items-center justify-center bg-alumise-gold hover:bg-white hover:text-alumise-obsidian text-white px-8 py-5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all w-full text-center"
                >
                  Book a Penicuik Visit <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
