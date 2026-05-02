'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ArrowRight, X, CheckCircle2, Loader2 } from 'lucide-react';

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-brand-charcoal overflow-hidden relative border-y border-white/5">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="bg-white/5 border border-white/10 p-8 md:p-16 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-centre">
            <div className="space-y-8">
              <div className="flex items-centre space-x-3 text-brand-blue">
                <FileText className="w-6 h-6" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Free Technical Resource</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-oswald)] uppercase text-white leading-none tracking-tighter">
                Download the 2026 <br /><span className="text-brand-blue">Specifiers Guide.</span>
              </h2>
              <p className="text-lg text-brand-grey font-light leading-relaxed max-w-md">
                Our comprehensive 40-page guide covers structural glazing limits, thermal performance benchmarks, and UK building regulation compliance.
              </p>
              <ul className="space-y-3">
                {['CAD Block Samples', 'U-Value Comparison Matrix', 'Security Rating Guide'].map((item) => (
                  <li key={item} className="flex items-centre text-xs text-brand-grey font-bold uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4 mr-3 text-brand-blue" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="architect@firm.com"
                          className="w-full bg-white/5 border border-white/10 p-5 outline-none focus:border-brand-blue transition-all text-white font-light"
                        />
                      </div>
                      <button 
                        type="submit"
                        disabled={isSubmitting || !email}
                        className="w-full bg-brand-blue text-white px-8 py-5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-brand-charcoal transition-all shadow-xl flex items-centre justify-centre group"
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>Send Technical Guide <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </button>
                      <p className="text-[8px] text-gray-500 uppercase tracking-widest text-centre">
                        We respect your privacy. Zero spam, only technical updates.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-centre p-12 bg-brand-blue/10 border border-brand-blue/20 rounded-sm"
                  >
                    <CheckCircle2 className="w-16 h-16 text-brand-blue mx-auto mb-6" />
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-oswald)] uppercase text-white mb-4">Transmission Sent</h3>
                    <p className="text-brand-grey font-light leading-relaxed">
                      The Specifiers Guide has been sent to <strong>{email}</strong>. Please check your inbox (and spam folder) within the next few minutes.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-[10px] uppercase tracking-widest font-bold text-brand-blue hover:text-white transition-colors"
                    >
                      Download Another Version
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
