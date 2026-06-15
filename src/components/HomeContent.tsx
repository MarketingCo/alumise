'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  Shield,
  Clock,
  Award,
  Ruler,
  Check,
  ChevronRight,
  Star,
  MapPin,
  Mail,
} from 'lucide-react';
import { products } from '@/data/products';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const mainProducts = [
  {
    title: 'Bi-Folding Doors',
    desc: 'Seamlessly connect indoor and outdoor living with slimline aluminium profiles engineered in Penicuik.',
    image: products.find((p) => p.slug === 'bifold-doors')?.heroImage || '',
    href: '/products/bifold-doors',
    tag: 'Most Popular',
  },
  {
    title: 'Aluminium Windows',
    desc: 'Casement and tilt-turn systems with clean sightlines and elite thermal performance for Edinburgh homes.',
    image: products.find((p) => p.slug === 'casement-windows')?.heroImage || '',
    href: '/products/casement-windows',
    tag: 'A-Rated',
  },
  {
    title: 'Roof Lanterns',
    desc: 'Architectural roof glazing that floods extensions and kitchens with natural light all year round.',
    image: products.find((p) => p.slug === 'roof-lanterns')?.heroImage || '',
    href: '/products/roof-lanterns',
    tag: 'Bespoke',
  },
  {
    title: 'Steel-Look Heritage',
    desc: 'Crittall-style aesthetics with modern thermal breaks — heritage character, contemporary performance.',
    image: products.find((p) => p.slug === 'steel-look-heritage')?.heroImage || '',
    href: '/products/steel-look-heritage',
    tag: 'Heritage',
  },
  {
    title: 'Sliding Doors',
    desc: 'Minimal-frame, grand-scale sliding systems for panoramic views and effortless operation.',
    image: products.find((p) => p.slug === 'sliding-doors')?.heroImage || '',
    href: '/products/sliding-doors',
    tag: 'Contemporary',
  },
  {
    title: 'Curtain Walling',
    desc: 'Structural glazing facades for commercial developments, retail and office blocks across Scotland.',
    image: products.find((p) => p.slug === 'curtain-walling')?.heroImage || '',
    href: '/products/curtain-walling',
    tag: 'Commercial',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Design Visit',
    desc: 'We visit your property, measure precisely and discuss styles, materials and budgets tailored to your home.',
  },
  {
    num: '02',
    title: 'Manufacture',
    desc: 'Every frame is fabricated in our Penicuik facility to your exact specifications — no off-the-shelf sizes.',
  },
  {
    num: '03',
    title: 'Installation',
    desc: 'Our in-house fitting team installs with full dust protection, daily cleanup and minimal disruption.',
  },
  {
    num: '04',
    title: 'Guarantee',
    desc: 'Every installation is backed by our 10-year insurance-backed guarantee. Even if we ceased trading, you are covered.',
  },
];

const objections = [
  { icon: Shield, title: 'Dust & Mess', desc: 'Full dust extraction and surface protection. We clean up every day before we leave.' },
  { icon: Clock, title: 'Fixed Timeline', desc: 'Most residential installations complete in 3–5 days. You get a fixed schedule before we start.' },
  { icon: Award, title: '10-Year Warranty', desc: 'Insurance-backed guarantee. Even if we ceased trading, you are still fully covered.' },
  { icon: Ruler, title: 'Made to Measure', desc: 'No off-the-shelf sizes. Every frame is manufactured to millimetre precision for your opening.' },
];

const testimonials = [
  {
    name: 'Sarah & James Mackay',
    location: 'Morningside, Edinburgh',
    text: 'The difference between Alumise and our previous quote was night and day. They manufactured everything in-house, installed in four days, and the finish is immaculate.',
    rating: 5,
  },
  {
    name: 'David Chen',
    location: 'New Town, Edinburgh',
    text: 'We needed heritage-style steel-look doors for a Grade B listed renovation. Alumise understood the constraints immediately and the result exceeded planning requirements.',
    rating: 5,
  },
  {
    name: 'Fiona Robertson',
    location: 'Penicuik, Midlothian',
    text: 'Our kitchen extension needed maximum light. The roof lantern they designed and fitted transformed the space. Professional team, no mess, and they stuck to the schedule.',
    rating: 5,
  },
];

const projectGallery = [
  {
    src: '/images/unsplash_1600607687939-ce8a6c25118c_q80_w2053.jpg',
    alt: 'Modern Edinburgh extension with aluminium bifold doors and roof lantern',
    size: 'large',
  },
  {
    src: '/images/unsplash_1600566752355-35792bedcfea_q80_w2070.jpg',
    alt: 'Interior view of steel-look heritage partition in Scottish townhouse',
    size: 'small',
  },
  {
    src: '/images/unsplash_1600585154526-990dced4db0d_q80_w2070.jpg',
    alt: 'Minimal sliding doors opening onto Edinburgh garden terrace',
    size: 'small',
  },
  {
    src: '/images/unsplash_1486406146926-c627a92ad1ab_q80_w2070.jpg',
    alt: 'Commercial curtain walling facade on modern office building in Scotland',
    size: 'large',
  },
  {
    src: '/images/unsplash_1600210492486-724fe5c67fb0_q80_w1974.jpg',
    alt: 'Bespoke aluminium windows in traditional Edinburgh villa renovation',
    size: 'small',
  },
  {
    src: '/images/unsplash_1600573472592-401b489a3cdc_q80_w2070.jpg',
    alt: 'Roof lantern illuminating contemporary kitchen diner in Midlothian home',
    size: 'small',
  },
];

export default function HomeContent() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] bg-alumise-obsidian text-white overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/unsplash_1600607687920-4e2a09cf159d_q80_w2070.jpg"
            alt="Premium aluminium bifold doors opening onto a landscaped garden terrace at dusk"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alumise-obsidian via-alumise-obsidian/60 to-alumise-obsidian/30" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-10 pb-24 pt-32 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-3 mb-8"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 text-[10px] uppercase tracking-[0.3em] font-bold text-alumise-gold">
                <MapPin size={12} />
                Manufactured in Penicuik &middot; Installed across Edinburgh
              </span>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-8"
            >
              <h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                The Last Glazing Your Home Will Ever Need | Aluminium Windows & Bifold Doors Edinburgh
              </h1>
            </motion.div>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed"
            >
              Architectural aluminium windows, bespoke bifold doors and precision-engineered glazing — crafted with fidelity in our Penicuik facility, building a legacy of excellence across Edinburgh and the Lothians.
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
                className="group inline-flex items-center justify-center gap-3 bg-alumise-gold text-alumise-obsidian px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-alumise-gold-light transition-colors"
              >
                Book Your Free Design Visit
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:01312100321"
                className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:border-alumise-gold hover:text-alumise-gold transition-colors"
              >
                <Phone size={16} />
                0131 210 0321
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold">Scroll</span>
          <div className="w-px h-8 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full h-1/2 bg-alumise-gold"
            />
          </div>
        </motion.div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-4">
            {[
              { icon: Shield, text: 'FENSA Accredited' },
              { icon: Check, text: 'Manufactured in Scotland' },
              { icon: Award, text: '10-Year Insurance-Backed' },
              { icon: Star, text: 'Building Standards Compliant' },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-alumise-silver">
                <item.icon size={16} className="text-alumise-gold" />
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-alumise-gold mb-4">Our Systems</p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                Precision-engineered
                <br />
                for Edinburgh homes
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-alumise-obsidian pb-2 hover:text-alumise-gold hover:border-alumise-gold transition-colors"
              >
                View All Products <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mainProducts.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group relative overflow-hidden bg-gray-100 h-[420px] md:h-[480px]"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-alumise-obsidian/90 via-alumise-obsidian/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold text-alumise-gold">
                    {product.tag}
                  </span>
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3
                    className="text-2xl md:text-3xl font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-oswald)' }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-5 max-w-sm leading-relaxed">{product.desc}</p>
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-alumise-gold hover:text-white transition-colors"
                  >
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ALUMISE ── */}
      <section className="py-28 md:py-36 bg-alumise-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-alumise-gold mb-4">Why Alumise</p>
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                Made here. Fitted here.
                <br />
                Guaranteed here.
              </h2>
              <p className="text-alumise-silver leading-relaxed mb-10 text-lg">
                Most companies buy frames from England and subcontract the fitting. We manufacture every frame in our Penicuik facility and install with our own team. If something needs adjusting, we do it — no blame, no delays.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {objections.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-white p-6 border border-gray-100 hover:border-alumise-gold/30 transition-colors"
                  >
                    <item.icon size={24} className="text-alumise-gold mb-4" />
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-alumise-silver leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-alumise-obsidian pb-2 hover:text-alumise-gold hover:border-alumise-gold transition-colors"
                >
                  Our Story <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative h-[400px] md:h-[600px] lg:h-[700px]"
            >
              <Image
                src="/images/unsplash_1600585154340-be6161a56a0c_q80_w2070.jpg"
                alt="Alumise manufacturing facility in Penicuik with aluminium glazing frames in production"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-alumise-gold mb-2">Our Facility</p>
                <p className="text-sm text-alumise-obsidian leading-relaxed">
                  Unit 2B, Eastfield Industrial Estate, Penicuik — where every frame is manufactured to millimetre precision.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERY ── */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-alumise-gold mb-4">Recent Work</p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                Projects across
                <br />
                Edinburgh & the Lothians
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-alumise-obsidian pb-2 hover:text-alumise-gold hover:border-alumise-gold transition-colors"
              >
                View All Projects <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
            {projectGallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`group relative overflow-hidden bg-gray-100 ${
                  img.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={
                    img.size === 'large'
                      ? '(max-width: 768px) 100vw, 50vw'
                      : '(max-width: 768px) 100vw, 25vw'
                  }
                />
                <div className="absolute inset-0 bg-alumise-obsidian/0 group-hover:bg-alumise-obsidian/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-flex items-center gap-2 px-5 py-3 bg-white text-alumise-obsidian text-[10px] uppercase tracking-[0.2em] font-bold">
                    View Project <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-28 md:py-36 bg-alumise-obsidian text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center max-w-3xl mx-auto"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-alumise-gold mb-4">How It Works</p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              From first visit to
              <br />
              finished installation
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line - desktop only */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-white/10" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 bg-alumise-obsidian border border-alumise-gold/30 text-alumise-gold text-sm font-bold tracking-widest mb-8 mx-auto">
                    {step.num}
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold mb-4"
                    style={{ fontFamily: 'var(--font-oswald)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 md:py-36 bg-alumise-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-alumise-gold mb-4">Testimonials</p>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              What our clients say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-8 border border-gray-100 flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-alumise-gold text-alumise-gold" />
                  ))}
                </div>
                <p className="text-alumise-obsidian leading-relaxed mb-8 flex-grow">&ldquo;{t.text}&rdquo;</p>
                <div className="pt-6 border-t border-gray-100">
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-alumise-silver uppercase tracking-wider">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS SERVED ── */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-alumise-gold mb-4">Local Service</p>
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                Installed across
                <br />
                Edinburgh & the Lothians
              </h2>
              <p className="text-alumise-silver leading-relaxed mb-10 text-lg">
                We are based in Penicuik and serve homeowners, architects and developers across Edinburgh, Midlothian, East Lothian, West Lothian, Fife and the Scottish Borders.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Edinburgh', href: '/locations/edinburgh' },
                  { label: 'Midlothian', href: '/locations/midlothian' },
                  { label: 'East Lothian', href: '/locations/east-lothian' },
                  { label: 'West Lothian', href: '/locations/west-lothian' },
                  { label: 'Fife', href: '/locations' },
                  { label: 'Scottish Borders', href: '/locations' },
                ].map((area) => (
                  <Link
                    key={area.label}
                    href={area.href}
                    className="group flex items-center gap-2 text-sm font-semibold text-alumise-obsidian hover:text-alumise-gold transition-colors"
                  >
                    <ChevronRight size={14} className="text-alumise-gold opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {area.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] bg-alumise-cream"
            >
              <Image
                src="/images/unsplash_1506377295352-e3154d43ea9e_q80_w1974.jpg"
                alt="Edinburgh skyline with traditional and modern Scottish architecture"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-6 left-6 bg-white px-5 py-4">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-alumise-gold mb-1">Free Design Visit</p>
                <p className="text-sm text-alumise-obsidian">Available across all service areas</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 md:py-36 bg-alumise-obsidian text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/unsplash_1600607688969-a5bfcd646154_q80_w2070.jpg"
            alt="Luxury interior with aluminium glazing framing a garden view"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-alumise-obsidian via-alumise-obsidian/90 to-alumise-obsidian/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-alumise-gold mb-4">Start Your Project</p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                Book your free
                <br />
                design visit
              </h2>
              <p className="text-white/60 leading-relaxed mb-10 max-w-md text-lg">
                We will visit your property, take precise measurements, discuss styles and materials, and provide a fixed-price quotation with no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="group inline-flex items-center justify-center gap-3 bg-alumise-gold text-alumise-obsidian px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-alumise-gold-light transition-colors"
                >
                  Get Your Free Quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:01312100321"
                  className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:border-alumise-gold hover:text-alumise-gold transition-colors"
                >
                  <Phone size={16} />
                  0131 210 0321
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 lg:pl-12"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5 flex-shrink-0">
                  <Phone size={20} className="text-alumise-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-alumise-silver font-bold mb-1">Call us</p>
                  <a
                    href="tel:01312100321"
                    className="text-3xl md:text-4xl font-bold hover:text-alumise-gold transition-colors"
                    style={{ fontFamily: 'var(--font-oswald)' }}
                  >
                    0131 210 0321
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5 flex-shrink-0">
                  <Mail size={20} className="text-alumise-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-alumise-silver font-bold mb-1">Email us</p>
                  <span className="text-xl text-white/80" dangerouslySetInnerHTML={{ __html: '<!--email_off-->info@alumise.co.uk<!--/email_off-->' }} />
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5 flex-shrink-0">
                  <MapPin size={20} className="text-alumise-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-alumise-silver font-bold mb-1">Visit us</p>
                  <p className="text-white/60 leading-relaxed">
                    Unit 2B, Eastfield Industrial Estate
                    <br />
                    Penicuik, Midlothian, EH26 8HA
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Check size={16} className="text-alumise-gold flex-shrink-0" />
                  <span>Free design visit across Edinburgh and the Lothians</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Check size={16} className="text-alumise-gold flex-shrink-0" />
                  <span>Fixed-price quotation with no obligation</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Check size={16} className="text-alumise-gold flex-shrink-0" />
                  <span>10-year insurance-backed guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
