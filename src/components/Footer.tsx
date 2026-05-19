'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tight uppercase" style={{ fontFamily: 'var(--font-oswald)' }}>
              Alumise<span className="text-brand-gold">.</span>
            </Link>
            <p className="text-brand-silver text-sm leading-relaxed max-w-xs">
              Premium aluminium windows, bifold doors and architectural glazing.
              Manufactured in Penicuik. Installed across Edinburgh and Scotland.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-6">Navigate</h4>
            <ul className="space-y-3">
              {['Products', 'Services', 'Process', 'About', 'Contact', 'Quote'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-brand-silver hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-6">Partners</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://www.crescent-builders.co.uk"
                  className="text-sm text-brand-silver hover:text-white transition-colors"
                >
                  Home Extension Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-6">Get in Touch</h4>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <p className="text-sm text-brand-silver">
                  Unit 2B, Eastfield Industrial Estate,<br />
                  Penicuik, Midlothian, EH26 8HA
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href="tel:01312100321" className="text-sm font-semibold hover:text-brand-gold transition-colors">
                  0131 210 0321
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href="mailto:info@alumise.co.uk" className="text-sm hover:text-brand-gold transition-colors">
                  info@alumise.co.uk
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-brand-silver">
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
          <p>Website by <a href="https://marketing-company.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors underline underline-offset-2">Marketing Company</a> &middot; &copy; {new Date().getFullYear()} Alumise Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
