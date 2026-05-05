'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { categories, materials } from '@/data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Mission */}
          <div className="space-y-8">
            <Link href="/" className="text-3xl font-bold tracking-tighter uppercase font-[family-name:var(--font-oswald)]">
              Alumise<span className="text-brand-blue">.</span>
            </Link>
            <p className="text-brand-grey text-sm font-light leading-relaxed">
              The authority in advanced glazing solutions. We bridge the gap between architectural concept and structural reality through engineering precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-blue mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-sm text-brand-grey hover:text-white transition-colors flex items-centre group">Services <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/locations" className="text-sm text-brand-grey hover:text-white transition-colors flex items-centre group">Locations <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/blog" className="text-sm text-brand-grey hover:text-white transition-colors flex items-centre group">Insights <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/materials" className="text-sm text-brand-grey hover:text-white transition-colors flex items-centre group">Materials <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/about" className="text-sm text-brand-grey hover:text-white transition-colors flex items-centre group">About Us <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/contact" className="text-sm text-brand-grey hover:text-white transition-colors flex items-centre group">Contact <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-blue mb-8">Systems</h4>
            <ul className="space-y-4">
              {categories.map(cat => (
                <li key={cat}>
                  <Link 
                    href={`/products?category=${cat.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-brand-grey hover:text-white transition-colors flex items-centre group"
                  >
                    {cat} <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-sm text-brand-blue font-bold uppercase tracking-widest mt-4 inline-block hover:underline">
                  All Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-blue mb-8">Get in Touch</h4>
            <address className="not-italic space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 text-brand-blue flex-shrink-0" />
                <p className="text-sm text-brand-grey font-light">
                  <span className="font-bold text-white">Alumise Ltd</span><br />
                  Unit 2B, Eastfield Industrial Estate,<br />
                  Penicuik, Midlothian,<br />
                  EH26 8HA
                </p>
              </div>
              <div className="flex items-centre">
                <Phone className="w-5 h-5 mr-4 text-brand-blue flex-shrink-0" />
                <p className="text-sm font-bold">0131 210 0321</p>
              </div>
              <div className="flex items-centre">
                <Mail className="w-5 h-5 mr-4 text-brand-blue flex-shrink-0" />
                <p className="text-sm font-bold">info@alumise.co.uk</p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-centre gap-8 text-[10px] uppercase tracking-[0.2em] text-brand-grey font-bold">
          <div className="flex space-x-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy (GDPR)</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
          <p>&copy; {currentYear} Alumise Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
