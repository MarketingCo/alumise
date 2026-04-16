'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MegaMenu from './MegaMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-brand-charcoal shadow-md py-3' : 'bg-brand-charcoal/80 backdrop-blur-md text-brand-white py-5'
      }`}
    >
      {/* Top Bar (Optional, can be hidden on scroll for cleaner look) */}
      {!isScrolled && (
        <div className="container mx-auto px-4 mb-4 flex justify-between items-centre text-[10px] uppercase tracking-[0.2em] opacity-60 max-w-7xl border-b border-white/10 pb-4">
          <div className="flex space-x-6">
            <span className="flex items-centre"><Phone className="w-3 h-3 mr-2" /> Email us</span>
            <span className="flex items-centre"><Mail className="w-3 h-3 mr-2" /> info@alumise.co.uk</span>
          </div>
          <div className="hidden sm:block">
            Architectural Glazing Authority
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 flex justify-between items-centre max-w-7xl">
        <Link href="/" className="flex items-centre group">
          <span className="text-2xl font-bold tracking-tighter uppercase font-[family-name:var(--font-oswald)]">
            Alumise<span className="text-brand-blue group-hover:text-brand-orange transition-colors">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <MegaMenu />
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-centre space-x-6">
          <Link 
            href="/quote" 
            className={`hidden sm:block px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${
              isScrolled 
                ? 'bg-brand-charcoal text-white hover:bg-brand-blue' 
                : 'bg-brand-blue text-white hover:bg-white hover:text-brand-charcoal'
            }`}
          >
            Get a Quote
          </Link>
          
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-charcoal text-white z-[60] p-8 flex flex-col"
          >
            <div className="flex justify-between items-centre mb-12">
              <span className="text-2xl font-bold tracking-tighter uppercase font-[family-name:var(--font-oswald)]">
                Alumise<span className="text-brand-blue">.</span>
              </span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-8 text-2xl font-bold uppercase tracking-tight">
              <Link href="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
              <Link href="/process" onClick={() => setIsMobileMenuOpen(false)}>Our Process</Link>
              <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
              <Link href="/trust" onClick={() => setIsMobileMenuOpen(false)}>Trust & Technical</Link>
              <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-blue">Request Quote</Link>
            </nav>

            <div className="mt-auto pt-8 border-t border-white/10 space-y-4 text-sm opacity-60">
              <p>0131 210 0321</p>
              <p>info@alumise.co.uk</p>
              <p>Unit 14, Prince Regent Street, Edinburgh</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
