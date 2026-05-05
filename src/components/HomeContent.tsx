'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, Clock, Award, Ruler, Check } from 'lucide-react';
import { products } from '@/data/products';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
  })
};

const mainProducts = [
  {
    title: 'Bi-Folding Doors',
    desc: 'Seamlessly connect indoor and outdoor spaces with slimline aluminium profiles.',
    image: products.find(p => p.slug === 'bifold-doors')?.heroImage || '',
    href: '/products/bifold-doors',
    size: 'large'
  },
  {
    title: 'Aluminium Windows',
    desc: 'Casement and tilt-turn systems engineered for thermal performance and clean sightlines.',
    image: products.find(p => p.slug === 'casement-windows')?.heroImage || '',
    href: '/products/casement-windows',
    size: 'large'
  },
  {
    title: 'Roof Lanterns',
    desc: 'Flood your space with natural light using architectural roof glazing.',
    image: products.find(p => p.slug === 'roof-lanterns')?.heroImage || '',
    href: '/products/roof-lanterns',
    size: 'small'
  },
  {
    title: 'Steel-Look Heritage',
    desc: 'Crittall-style aesthetics with modern thermal performance.',
    image: products.find(p => p.slug === 'steel-look-heritage')?.heroImage || '',
    href: '/products/steel-look-heritage',
    size: 'small'
  }
];

const processSteps = [
  { num: '01', title: 'Design Visit', desc: 'We visit your property, measure precisely and discuss options tailored to your home and budget.' },
  { num: '02', title: 'Manufacture', desc: 'Every frame is fabricated in our Penicuik facility to your exact specifications.' },
  { num: '03', title: 'Installation', desc: 'Our fitting team installs with dust protection, daily cleanup and minimal disruption.' },
  { num: '04', title: 'Guarantee', desc: 'Every installation is backed by our 10-year insurance-backed guarantee.' }
];

const objections = [
  { icon: Shield, title: 'Dust & Mess', desc: 'Full dust extraction and surface protection. We clean up every day.' },
  { icon: Clock, title: 'Timeline', desc: 'Most residential installations complete in 3–5 days. You get a fixed schedule before we start.' },
  { icon: Award, title: 'Warranty', desc: '10-year insurance-backed guarantee. Even if we ceased trading, you are still covered.' },
  { icon: Ruler, title: 'Made to Measure', desc: 'No off-the-shelf sizes. Every frame is manufactured to millimetre precision for your opening.' }
];

export default function HomeContent() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] bg-brand-charcoal text-white overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
            alt="Modern aluminium bifold doors opening onto a garden terrace"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/70 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-10 pb-20 pt-32 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6"
            >
              Manufactured in Penicuik &middot; Installed across Edinburgh
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              The Last Windows<br />
              Your Home Will<br />
              Ever Need
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
            >
              Designed, manufactured and fitted by one team. One promise.
              Premium aluminium glazing for Edinburgh and the Lothians.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/quote"
                className="group inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-charcoal px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-gold-light transition-colors"
              >
                Book Your Free Design Visit
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:01312100321"
                className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:border-brand-gold hover:text-brand-gold transition-colors"
              >
                <Phone size={16} />
                0131 210 0321
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-silver">
            <span className="flex items-center gap-2">
              <Shield size={14} className="text-brand-gold" />
              FENSA Accredited
            </span>
            <span className="hidden md:block w-px h-4 bg-gray-200" />
            <span>Manufactured in Scotland</span>
            <span className="hidden md:block w-px h-4 bg-gray-200" />
            <span>10-Year Insurance-Backed Guarantee</span>
            <span className="hidden md:block w-px h-4 bg-gray-200" />
            <span>Building Standards Compliant</span>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-4">Our Systems</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-oswald)' }}>
              Precision-engineered for<br />Edinburgh homes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainProducts.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative overflow-hidden bg-gray-100 ${product.size === 'large' ? 'h-[400px] md:h-[500px]' : 'h-[300px] md:h-[350px]'}`}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-oswald)' }}>
                    {product.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-4 max-w-sm">{product.desc}</p>
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold hover:text-white transition-colors"
                  >
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-brand-charcoal pb-2 hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY ALUMISE ── */}
      <section className="py-24 md:py-32 bg-brand-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-4">Why Alumise</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
                Made here.<br />Fitted here.<br />Guaranteed here.
              </h2>
              <p className="text-brand-silver leading-relaxed mb-8">
                Most window companies buy frames from a factory in England and send a subcontractor to fit them.
                We manufacture every frame in our Penicuik facility and install with our own team. If something
                needs adjusting, we do it — no passing blame between supplier and fitter.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-brand-charcoal pb-2 hover:text-brand-gold hover:border-brand-gold transition-colors"
              >
                Our Story <ArrowRight size={16} />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {objections.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white p-6 border border-gray-100"
                >
                  <item.icon size={24} className="text-brand-gold mb-4" />
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-brand-silver leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-4">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-oswald)' }}>
              From first visit to finished installation
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <span className="text-6xl font-bold text-gray-100 absolute -top-4 -left-2 select-none" style={{ fontFamily: 'var(--font-oswald)' }}>
                  {step.num}
                </span>
                <div className="relative pt-8 border-t-2 border-brand-gold">
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-oswald)' }}>{step.title}</h3>
                  <p className="text-sm text-brand-silver leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-brand-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-4">Start Your Project</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
                Book your free<br />design visit
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 max-w-md">
                We will visit your property, take precise measurements, discuss styles and materials,
                and provide a fixed-price quotation with no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="group inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-charcoal px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-gold-light transition-colors"
                >
                  Get Your Free Quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-silver font-bold mb-2">Call us</p>
                <a href="tel:01312100321" className="text-4xl md:text-5xl font-bold hover:text-brand-gold transition-colors" style={{ fontFamily: 'var(--font-oswald)' }}>
                  0131 210 0321
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-silver font-bold mb-2">Email us</p>
                <a href="mailto:info@alumise.co.uk" className="text-xl hover:text-brand-gold transition-colors">
                  info@alumise.co.uk
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-silver font-bold mb-2">Visit us</p>
                <p className="text-white/60">
                  Unit 2B, Eastfield Industrial Estate<br />
                  Penicuik, Midlothian, EH26 8HA
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Check size={16} className="text-brand-gold" />
                  <span>Free design visit across Edinburgh and the Lothians</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
