'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Ruler, 
  Hammer, 
  Zap, 
  Award, 
  CheckCircle2,
  Building2,
  Home as HomeIcon,
  ChevronRight,
  Layers,
  Grid3X3
} from 'lucide-react';
import { products, categories, materials } from '@/data/products';
import { projects } from '@/data/projects';


export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    })
  };

  return (
    <>
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-[95vh] min-h-[750px] flex items-center overflow-hidden bg-black text-white">
        {/* Background Image with Premium Treatment */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
            alt="Ultra-Luxury Modern Glazing"
            fill
            className="object-cover opacity-70 scale-110 sepia-[0.15] contrast-[1.1]"
            priority
          />
          {/* Instagrammy Vignette and Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        </motion.div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-32">
          <div className="max-w-4xl">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeIn as any}
              className="inline-flex items-center space-x-3 px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-10"
            >
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse shadow-[0_0_10px_#D4AF37]"></span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/90">
                Architectural Integrity · Master Craftsmen
              </span>
            </motion.div>
            
            <motion.h1 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn as any}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6 tracking-tighter italic font-[family-name:var(--font-heading)]"
            >
              Premium Aluminium Windows, Bifold Doors & Architectural Glazing
            </motion.h1>
            <motion.h2 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn as any}
              className="text-xl md:text-2xl font-light text-white/80 mb-12 tracking-wide max-w-2xl"
            >
              Edinburgh & Midlothian
            </motion.h2>
            
            <motion.p 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn as any}
              className="text-lg md:text-xl text-white/70 max-w-xl mb-12 leading-relaxed font-light tracking-wide"
            >
              Manufactured in Penicuik. Installed across Edinburgh, the Lothians and Scotland. Specialising in bifold doors, sliding doors, roof lanterns, curtain walling and shopfronts.
            </motion.p>
            
            <motion.div 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeIn as any}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link 
                href="/quote" 
                className="group bg-white text-black px-12 py-6 rounded-none font-bold uppercase text-xs tracking-[0.3em] transition-all flex items-center justify-center hover:bg-gold-500 hover:text-white shadow-2xl"
              >
                Free Technical Briefing
              </Link>
              <Link 
                href="/products" 
                className="bg-transparent backdrop-blur-md border border-white/30 hover:border-white text-white px-12 py-6 rounded-none font-bold uppercase text-xs tracking-[0.3em] transition-all text-center"
              >
                View Collections
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-centre space-y-2 opacity-50"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>

      {/* Category Grid Section */}
      <section className="py-32 bg-white text-brand-charcoal overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue mb-4">The Palette of Clarity</h2>
              <p className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                Light-Maximizing Solutions for the <span className="text-brand-silver">Modern Threshold.</span>
              </p>
            </div>
            <Link href="/products" className="group flex items-centre font-semibold tracking-wide border-b-2 border-brand-blue pb-2 hover:text-brand-blue transition-colors">
              Explore All Systems <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => {
              const catProducts = products.filter(p => p.category === cat);
              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative h-[500px] overflow-hidden bg-gray-100"
                >
                  <Image 
                    src={catProducts[0]?.heroImage || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'}
                    alt={cat}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-80"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{cat}</h3>
                    <ul className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {catProducts.slice(0, 3).map(p => (
                        <li key={p.slug} className="flex items-centre text-xs font-medium text-white/90">
                          <CheckCircle2 className="w-3 h-3 mr-2 text-brand-blue" /> {p.title}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={`/products?category=${cat.toLowerCase().replace(' ', '-')}`}
                      className="inline-flex items-centre text-[10px] uppercase tracking-widest font-bold border border-white/30 px-4 py-2 hover:bg-white hover:text-brand-charcoal transition-colors w-max"
                    >
                      View Category
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="bg-brand-charcoal py-40 text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue opacity-5 blur-3xl rounded-full"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-centre">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
                The Luxury of <br />
                <span className="text-brand-blue">Natural Light.</span>
              </h2>
              <p className="text-lg text-white/60 font-light leading-relaxed max-w-lg">
                We curate visual clarity. Our minimalist frames are designed to maximise light and dissolve boundaries, creating an unparalleled connection to the horizon.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 glass-panel text-brand-blue">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h4 className="font-semibold tracking-tight mb-2">Design Fidelity</h4>
                    <p className="text-xs text-white/50 leading-relaxed">Absolute adherence to minimalist principles and architectural intent.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 glass-panel text-brand-blue">
                    <Award size={28} />
                  </div>
                  <div>
                    <h4 className="font-semibold tracking-tight mb-2">Luxury Warranty</h4>
                    <p className="text-xs text-white/50 leading-relaxed">Comprehensive assurance for enduring performance and visual clarity.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-12 text-centre group hover:bg-brand-blue/10 transition-colors duration-500">
                <h3 className="text-6xl font-semibold mb-2">15+</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold">Years Experience</p>
              </div>
              <div className="glass-panel p-12 text-centre group hover:bg-brand-blue/10 transition-colors duration-500 mt-12">
                <h3 className="text-6xl font-semibold mb-2">500+</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold">Projects Delivered</p>
              </div>
              <div className="glass-panel p-12 text-centre group hover:bg-brand-blue/10 transition-colors duration-500">
                <h3 className="text-6xl font-semibold mb-2">100%</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold">Bespoke Design</p>
              </div>
              <div className="glass-panel p-12 text-centre group hover:bg-brand-blue/10 transition-colors duration-500 mt-12">
                <h3 className="text-6xl font-semibold mb-2">Elite</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold">Supply Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Showcase */}
      <section className="py-40 bg-gray-50 text-brand-charcoal overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-centre mb-20 max-w-3xl mx-auto space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">The Palette of Clarity</h2>
            <p className="text-4xl md:text-5xl font-semibold tracking-tight">
              One Partner. <span className="text-brand-silver">The Luxury of Choice.</span>
            </p>
            <p className="text-lg text-brand-slate font-light">
              We bridge the gap between commercial-grade engineering and the pinnacle of residential aesthetic perfection.
            </p>
          </div>

          <div className="flex flex-wrap justify-centre gap-4">
            {materials.map((mat) => (
              <Link 
                key={mat}
                href={`/products?material=${mat.toLowerCase().replace(' ', '-')}`}
                className="bg-white border border-gray-100 px-8 py-6 rounded-sm shadow-sm hover:shadow-xl hover:border-brand-blue transition-all group flex flex-col items-centre min-w-[180px]"
              >
                {mat === 'Aluminium' && <Zap className="w-8 h-8 mb-4 text-brand-blue group-hover:scale-110 transition-transform" />}
                {mat === 'uPVC' && <ShieldCheck className="w-8 h-8 mb-4 text-brand-blue group-hover:scale-110 transition-transform" />}
                {mat === 'Timber' && <TreeIcon className="w-8 h-8 mb-4 text-brand-blue group-hover:scale-110 transition-transform" />}
                {mat === 'Composite' && <Layers className="w-8 h-8 mb-4 text-brand-blue group-hover:scale-110 transition-transform" />}
                {mat === 'Specialist Glass' && <Grid3X3 className="w-8 h-8 mb-4 text-brand-blue group-hover:scale-110 transition-transform" />}
                {mat === 'Steel-Look' && <Hammer className="w-8 h-8 mb-4 text-brand-blue group-hover:scale-110 transition-transform" />}
                <span className="font-bold uppercase tracking-widest text-xs">{mat}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Alumise Process Section */}
      <section className="py-40 bg-white text-brand-charcoal">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-centre">
          <div className="relative h-[600px]">
            <Image 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
              alt="Installation Site"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-blue p-12 flex flex-col justify-centre text-brand-charcoal hidden md:flex">
              <p className="text-4xl font-semibold mb-2">0%</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Risk Tolerance in Engineering</p>
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue mb-4">The Architecture of Light</h2>
              <p className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                From Minimalist Design to <span className="text-brand-silver">Visual Clarity.</span>
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex space-x-6 group">
                <div className="text-5xl font-semibold text-gray-100 group-hover:text-brand-blue transition-colors">01</div>
                <div>
                  <h4 className="font-semibold tracking-tight text-lg mb-2">Minimalist Design Language</h4>
                  <p className="text-sm text-brand-slate font-light leading-relaxed">Our design philosophy prioritizes ultra-slim profiles and minimalist frames, ensuring that every system maximizes natural light and visual clarity.</p>
                </div>
              </div>
              <div className="flex space-x-6 group">
                <div className="text-5xl font-semibold text-gray-100 group-hover:text-brand-blue transition-colors">02</div>
                <div>
                  <h4 className="font-semibold tracking-tight text-lg mb-2">Precision Clarity</h4>
                  <p className="text-sm text-brand-slate font-light leading-relaxed">Through advanced glass engineering and precision fabrication, we deliver expansive glazing solutions that offer unobstructed views and unmatched luxury.</p>
                </div>
              </div>
              <div className="flex space-x-6 group">
                <div className="text-5xl font-semibold text-gray-100 group-hover:text-brand-blue transition-colors">03</div>
                <div>
                  <h4 className="font-semibold tracking-tight text-lg mb-2">Luxury Integration</h4>
                  <p className="text-sm text-brand-slate font-light leading-relaxed">Our specialist installation teams ensure a flawless integration of minimalist systems, respecting the threshold of design in every high-value environment.</p>
                </div>
              </div>
            </div>
            
            <Link 
              href="/process" 
              className="inline-flex items-centre text-xs font-bold uppercase tracking-widest border-b-2 border-brand-charcoal pb-2 hover:text-brand-blue hover:border-brand-blue transition-all"
            >
              Learn More About Our Process <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-centre mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue mb-4">Voices of Luxury</h2>
            <p className="text-4xl font-bold font-[family-name:var(--font-oswald)] uppercase tracking-tight">The Alumise <span className="text-gray-400">Horizon.</span></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                quote: "Alumise delivered a level of visual clarity that is rare in the industry. Their minimalist frames and attention to junction details were flawless.", 
                author: "Principal Architect", 
                org: "Elite Design Studio" 
              },
              { 
                quote: "The seamless integration of the light-maximizing bifold systems and the frameless rooflight transformed our perspective. Truly a luxury experience.", 
                author: "Luxury Homeowner", 
                org: "Morningside" 
              },
              { 
                quote: "As a developer, I seek the threshold of design. Alumise's minimalist systems and light-maximizing glass ensure every project represents the pinnacle of luxury.", 
                author: "Design Director", 
                org: "Luxury Development Group" 
              }
            ].map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 shadow-sm border border-gray-100 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex text-brand-blue">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-lg text-brand-charcoal font-light italic leading-relaxed">"{t.quote}"</p>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-50">
                  <p className="text-xs font-bold uppercase tracking-widest">{t.author}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{t.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel Placeholder */}
      <section className="py-32 bg-brand-charcoal text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue mb-4">Portfolio</h2>
              <p className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-oswald)] uppercase tracking-tight">
                Defining the <span className="text-brand-blue">Edinburgh Skyline.</span>
              </p>
            </div>
            <Link href="/projects" className="hidden md:flex items-centre font-bold uppercase tracking-widest text-xs group">
              View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative h-[400px] bg-gray-900"
              >
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-widest text-brand-blue font-bold mb-2">{project.type}</span>
                  <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">{project.title}</h3>
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300"
                  >
                    Explore Project +
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-40 bg-white text-brand-charcoal relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-centre relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-oswald)] uppercase leading-[0.9] mb-10 tracking-tighter">
              Ready to <span className="text-brand-blue">Transform</span> <br />Your Perspective?
            </h2>
            <p className="text-xl text-gray-500 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you're an architect with a complex vision or a homeowner seeking the ultimate aesthetic, Alumise provides the engineering expertise to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-centre">
              <Link 
                href="/quote" 
                className="bg-brand-charcoal text-white hover:bg-brand-blue px-12 py-6 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-2xl"
              >
                Start Your Project
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border border-gray-200 hover:border-brand-charcoal text-brand-charcoal px-12 py-6 rounded-sm font-bold uppercase tracking-widest text-xs transition-all"
              >
                Speak with an Engineer
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle Background Elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue opacity-5 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-blue opacity-5 blur-3xl rounded-full"></div>
      </section>
    </>
  );
}

// Simple Tree Icon replacement since TreeDeciduous might be missing in some lucide versions
function TreeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19 3-7-3-7-3 7 3 7Z" />
      <path d="M9 19h6" />
      <path d="M12 3v16" />
    </svg>
  );
}
