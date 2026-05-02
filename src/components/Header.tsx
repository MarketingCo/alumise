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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-2xl text-black shadow-2xl py-4' : 'bg-transparent text-white py-8'
      }`}
    >
      {/* Top Bar - Ultra Minimal */}
      {!isScrolled && (
        <div className="container mx-auto px-6 mb-6 flex justify-between items-center text-[9px] uppercase tracking-[0.5em] opacity-40 max-w-7xl">
          <div className="flex space-x-10">
            <span className="flex items-center tracking-[0.6em]">Penicuik Manufacturing Hub</span>
            <span className="flex items-center tracking-[0.6em]">info@alumise.co.uk</span>
          </div>
          <div className="hidden sm:block">
            Architectural Authority
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        <Link href="/" className="flex items-center group">
          <span className="text-3xl font-black tracking-tighter uppercase font-[family-name:var(--font-heading)] italic">
            Alumise<span className="text-gold-500 transition-colors">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <MegaMenu />
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center space-x-8">
          <Link 
            href="/quote" 
            className={`hidden sm:block px-8 py-3 rounded-none text-[10px] font-black uppercase tracking-[0.3em] transition-all border ${
              isScrolled 
                ? 'bg-black text-white border-black hover:bg-gold-500 hover:border-gold-500' 
                : 'bg-white/10 text-white border-white/20 backdrop-blur-md hover:bg-white hover:text-black'
            }`}
          >
            Inquire
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
              <p>Unit 2B, Eastfield Industrial Estate, Penicuik</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
