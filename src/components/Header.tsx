'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md text-alumise-obsidian shadow-sm py-4'
          : 'bg-transparent text-white py-6'
      }`}
    >
      <div className="w-full px-6 md:px-10 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold tracking-tight uppercase" style={{ fontFamily: 'var(--font-oswald)' }}>
            Alumise<span className="text-alumise-gold">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-semibold hover:text-alumise-gold transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:01312100321"
            className="flex items-center gap-2 text-sm font-semibold tracking-wide hover:text-alumise-gold transition-colors"
          >
            <Phone size={16} />
            0131 210 0321
          </a>
          <Link
            href="/quote"
            className={`px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all border ${
              isScrolled
                ? 'bg-alumise-obsidian text-white border-alumise-obsidian hover:bg-alumise-gold hover:border-alumise-gold'
                : 'bg-white/10 text-white border-white/30 hover:bg-white hover:text-alumise-obsidian'
            }`}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-alumise-obsidian text-white z-[60] pt-24 px-8"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2"
              aria-label="Close navigation menu"
            >
              <X size={28} />
            </button>

            <nav className="flex flex-col gap-6 text-2xl font-bold uppercase tracking-tight">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-alumise-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-white/10 space-y-4 text-sm">
              <a href="tel:01312100321" className="flex items-center gap-2 text-lg font-bold">
                <Phone size={20} />
                0131 210 0321
              </a>
              <p className="opacity-60">Unit 2B, Eastfield Industrial Estate, Penicuik</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
