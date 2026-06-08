'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Building2
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-alumise-obsidian pt-40 pb-24 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-5xl md:text-8xl font-bold uppercase mb-8 tracking-tighter">
            Direct <span className="text-alumise-gold">Engagement.</span>
          </h1>
          <p className="text-xl text-brand-grey max-w-2xl font-light leading-relaxed">
            Connect directly with our engineering and sales teams. We are ready to mobilize for your next architectural challenge.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div className="space-y-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-alumise-gold">Departmental Contacts</h3>
                
                <div className="space-y-6">
                  <div className="group">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2 group-hover:text-alumise-gold transition-colors">Project Estimations</p>
                    <p className="text-xl font-bold mb-1">Email us</p>
                    <p className="text-sm text-gray-500 font-light" dangerouslySetInnerHTML={{ __html: '<!--email_off-->info@alumise.co.uk<!--/email_off-->' }} />
                  </div>
                  
                  <div className="group">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2 group-hover:text-alumise-gold transition-colors">Technical & Engineering</p>
                    <p className="text-xl font-bold mb-1">Email us</p>
                    <p className="text-sm text-gray-500 font-light" dangerouslySetInnerHTML={{ __html: '<!--email_off-->info@alumise.co.uk<!--/email_off-->' }} />
                  </div>

                  <div className="group">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2 group-hover:text-alumise-gold transition-colors">Post-Installation Support</p>
                    <p className="text-xl font-bold mb-1">Email us</p>
                    <p className="text-sm text-gray-500 font-light" dangerouslySetInnerHTML={{ __html: '<!--email_off-->info@alumise.co.uk<!--/email_off-->' }} />
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-gray-100 space-y-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-alumise-gold">Visit Our Facility</h3>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-4 text-alumise-gold flex-shrink-0" />
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    Unit 2B, Eastfield Industrial Estate,<br />
                    Penicuik,<br />
                    EH26 8HA
                  </p>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-4 text-alumise-gold flex-shrink-0" />
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    Monday — Friday<br />
                    08:00 — 17:00
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-12 rounded-sm shadow-inner">
                <h3 className="text-3xl font-bold uppercase mb-8 tracking-tight">General Inquiry</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Full Name</label>
                    <input type="text" className="w-full bg-white border border-gray-100 p-4 outline-none focus:border-alumise-gold transition-all text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Email Address</label>
                    <input type="email" className="w-full bg-white border border-gray-100 p-4 outline-none focus:border-alumise-gold transition-all text-sm" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Subject</label>
                    <select className="w-full bg-white border border-gray-100 p-4 outline-none focus:border-alumise-gold transition-all text-sm appearance-none">
                      <option>General Question</option>
                      <option>Technical Specification</option>
                      <option>Project Update</option>
                      <option>Media & PR</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Your Message</label>
                    <textarea rows={6} className="w-full bg-white border border-gray-100 p-4 outline-none focus:border-alumise-gold transition-all text-sm"></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button className="flex items-center bg-alumise-obsidian text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-alumise-gold transition-all shadow-xl group">
                      Send Inquiry <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-24 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center opacity-100">
            <div className="flex flex-col items-center">
              <ShieldCheck size={32} className="mb-4" />
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Data Protected</p>
            </div>
            <div className="flex flex-col items-center">
              <Building2 size={32} className="mb-4" />
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Direct from Fabricator</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare size={32} className="mb-4" />
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Expert Human Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
