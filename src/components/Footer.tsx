'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-alumise-obsidian text-white pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tight uppercase" style={{ fontFamily: 'var(--font-oswald)' }}>
              Alumise<span className="text-alumise-gold">.</span>
            </Link>
            <p className="text-alumise-silver text-sm leading-relaxed max-w-xs">
              Premium aluminium windows, bifold doors and architectural glazing.
              Manufactured in Penicuik. Installed across Edinburgh and Scotland.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-alumise-gold mb-6">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'Products', href: '/products' },
                { label: 'Services', href: '/services' },
                { label: 'Materials', href: '/materials' },
                { label: 'Projects', href: '/projects' },
                { label: 'Case Studies', href: '/case-studies/alumise' },
                { label: 'Process', href: '/process' },
                { label: 'About', href: '/about' },
                { label: 'Trust', href: '/trust' },
                { label: 'Contact', href: '/contact' },
                { label: 'Quote', href: '/quote' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-alumise-silver hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-alumise-gold mb-6">Partners</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-alumise-silver">
                  Home Extension Management
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-alumise-gold mb-6">Get in Touch</h4>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-alumise-gold flex-shrink-0 mt-0.5" />
                <p className="text-sm text-alumise-silver">
                  Unit 2B, Eastfield Industrial Estate,<br />
                  Penicuik, Midlothian, EH26 8HA
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-alumise-gold flex-shrink-0" />
                <a href="tel:01312100321" className="text-sm font-semibold hover:text-alumise-gold transition-colors">
                  0131 210 0321
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-alumise-gold flex-shrink-0" />
                <span className="text-sm text-alumise-silver" dangerouslySetInnerHTML={{ __html: '<!--email_off-->info@alumise.co.uk<!--/email_off-->' }} />
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-alumise-silver">
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <span className="text-alumise-gold">FENSA Accredited</span>
          </div>
          <p>Website by <a href="https://marketing-company.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-alumise-gold transition-colors underline underline-offset-2">Marketing Company</a> &middot; &copy; {new Date().getFullYear()} Alumise Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
