'use client';
import ContactForm from '@/components/ContactForm';
import GoogleReviews from '@/components/GoogleReviews';
import { Building2, ShieldCheck, Ruler, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUpVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

const fadeInUpTransition = { duration: 0.6, ease: "easeOut" as const as const };

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.2 }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-charcoal text-brand-white pt-32 pb-40 px-4 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue via-brand-charcoal to-brand-charcoal pointer-events-none"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-blue rounded-full blur-3xl pointer-events-none"
        ></motion.div>
        
        <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 border-l-2 border-brand-blue pl-4 text-brand-blue font-bold uppercase tracking-[0.3em] text-xs">
              Commercial Glazing Architects
            </div>
            <h1 className="text-6xl md:text-7xl font-bold font-[family-name:var(--font-inter)] leading-[1.1] tracking-tighter">
              Precision <br /> <span className="text-brand-blue">Curtain Walling</span> <br /> in Edinburgh
            </h1>
            <p className="text-xl text-brand-grey max-w-lg leading-relaxed font-light">
              Engineering high-performance glass facades and bespoke aluminium systems for Edinburgh’s most ambitious commercial developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link href="#contact" className="group bg-brand-blue hover:bg-blue-700 text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest transition-all shadow-2xl flex items-center justify-center gap-3">
                Request a Tender <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#services" className="bg-white/5 border border-white/10 hover:bg-white hover:text-brand-charcoal text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest transition-all text-center">
                Our Systems
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative h-[600px]"
          >
            <div className="absolute inset-0 bg-gray-800 rounded-sm border border-white/5 overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-charcoal to-transparent opacity-60"></div>
              <span className="text-gray-500 font-bold uppercase tracking-widest text-xs z-10 text-center px-12 leading-loose">
                [ Hero Image: Modern Commercial Glass Facade ] <br /> 
                <span className="font-light italic text-[10px] opacity-50">Upload high-res architectural shot here</span>
              </span>
            </div>
            {/* Geometric accents */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border-t-2 border-r-2 border-brand-blue opacity-30"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-b-2 border-l-2 border-brand-blue opacity-30"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gray-50 px-4 text-brand-charcoal overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            transition={fadeInUpTransition}
            className="text-center mb-24 space-y-6"
          >
            <h2 className="text-5xl font-bold font-[family-name:var(--font-inter)] text-brand-charcoal tracking-tight">Structural Glazing Systems</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed italic">
              "Engineered to exact tolerances. We partner with main contractors to deliver commercial projects on time and perfectly to specification."
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { 
                icon: <Building2 size={36} />, 
                title: "Curtain Walling", 
                desc: "High-performance structural curtain wall systems for multi-storey developments. Thermal efficiency combined with modern architectural aesthetics." 
              },
              { 
                icon: <Ruler size={36} />, 
                title: "Aluminium Shopfronts", 
                desc: "Bespoke retail frontages designed for high footfall, maximum security, and brand visibility across Edinburgh's commercial high streets." 
              },
              { 
                icon: <ShieldCheck size={36} />, 
                title: "Commercial Doors", 
                desc: "Heavy-duty automatic and manual aluminium commercial doors. DDA compliant and built for continuous operational reliability." 
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                variants={fadeInUpVariants}
                transition={fadeInUpTransition}
                className="bg-white p-12 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-sm flex items-center justify-center mb-8 border-b-4 border-brand-blue/20">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 font-[family-name:var(--font-inter)] uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-500 leading-loose font-light">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust / Stats Banner */}
      <section className="bg-brand-blue text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
            <div className="grid grid-cols-6 h-full w-full">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="border-r border-white h-full"></div>
                ))}
            </div>
        </div>
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { label: "Years Commercial Experience", val: "15+" },
            { label: "Structural Compliance", val: "100%" },
            { label: "Edinburgh-Based Installers", val: "LOCAL" },
            { label: "Strict Project Deadlines Met", val: <Clock size={40} className="mx-auto" /> }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-4"
            >
              <h4 className="text-5xl font-black mb-4 font-[family-name:var(--font-inter)] tracking-tighter uppercase">{stat.val}</h4>
              <p className="text-blue-100 font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <GoogleReviews />

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-white">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            transition={fadeInUpTransition}
            className="space-y-10 text-brand-charcoal"
          >
            <h2 className="text-5xl font-bold font-[family-name:var(--font-inter)] tracking-tighter uppercase">Discuss Your Next <br /> <span className="text-brand-blue">Commercial Project</span></h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Whether you are a main contractor seeking a reliable glazing partner or an architect defining technical specifications, our team in Edinburgh is ready to assist.
            </p>
            
            <div className="space-y-8 pt-6">
              <div className="flex items-start gap-6 border-l-2 border-gray-100 pl-8 hover:border-brand-blue transition-colors group">
                <div className="w-14 h-14 bg-gray-50 rounded-sm flex items-center justify-center flex-shrink-0 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-1">Direct Line</h4>
                  <p className="text-2xl font-bold tracking-tight">0131 000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-6 border-l-2 border-gray-100 pl-8 hover:border-brand-blue transition-colors group">
                <div className="w-14 h-14 bg-gray-50 rounded-sm flex items-center justify-center flex-shrink-0 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-1">Tenders & Quotes</h4>
                  <p className="text-2xl font-bold tracking-tight italic text-brand-blue">tenders@alumise.co.uk</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-12 lg:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-gray-50 relative text-brand-charcoal"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-blue"></div>
            <h3 className="text-3xl font-bold mb-10 font-[family-name:var(--font-inter)] tracking-tighter uppercase">Submit Technical Enquiry</h3>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}