'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Ruler, 
  Hammer, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  ClipboardCheck,
  Truck,
  Users,
  Clock
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Technical Consultation',
    icon: <Users className="w-8 h-8" />,
    desc: 'Our process begins with a deep-dive into your architectural intent. We discuss performance requirements, material options, and structural constraints to ensure total alignment before a single drawing is made.',
    details: ['Structural Requirement Analysis', 'Material & Finish Selection', 'Preliminary Budget Planning', 'Site Feasibility Surveys']
  },
  {
    number: '02',
    title: 'Precision Engineering',
    icon: <Ruler className="w-8 h-8" />,
    desc: 'Using advanced CAD and structural modeling, our engineers translate your vision into precise technical specifications. Every wind-load, thermal bridge, and junction is meticulously accounted for.',
    details: ['BIM-Ready CAD Drawings', 'Structural Loading Calculations', 'Thermal Performance Modeling', 'Technical Spec Verification']
  },
  {
    number: '03',
    title: 'Bespoke Fabrication',
    icon: <Hammer className="w-8 h-8" />,
    desc: 'In our state-of-the-art facility, your systems are custom-fabricated to exact tolerances. Controlling this stage in-house allows us to maintain the highest levels of quality oversight and schedule reliability.',
    details: ['In-house Quality QA', 'Precision CNC Machining', 'Specialist Glass Integration', 'Rigorous Testing Protocols']
  },
  {
    number: '04',
    title: 'Certified Installation',
    icon: <ClipboardCheck className="w-8 h-8" />,
    desc: 'Our FENSA-certified teams take over on-site. We operate with a "white-glove" mentality, ensuring that the precision of the factory is mirrored in the final structural fit and finish.',
    details: ['FENSA Certified Teams', 'Site Protection Protocols', 'Final Structural Verification', 'Client Handover & Certification']
  }
];

export default function ProcessPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-brand-charcoal pt-40 pb-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold uppercase mb-8 tracking-tighter">
              The Alumise <span className="text-brand-blue">Methodology.</span>
            </h1>
            <p className="text-xl text-brand-grey max-w-2xl font-light leading-relaxed">
              We bridge the gap between architectural concept and structural reality through a meticulously engineered four-stage process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-40">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 space-y-10">
                  <div className="flex items-center space-x-6">
                    <span className="text-7xl font-bold text-gray-100">{step.number}</span>
                    <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
                      {step.title}
                    </h2>
                    <p className="text-lg text-gray-500 font-light leading-relaxed mb-10">
                      {step.desc}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {step.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                          <CheckCircle2 className="w-4 h-4 mr-3 text-brand-blue" /> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2 relative h-[450px] w-full bg-gray-100">
                  <Image 
                    src={`https://images.unsplash.com/photo-${idx === 0 ? '1507679799987-c73779587ccf' : idx === 1 ? '1581094794329-c8112a89af12' : idx === 2 ? '1504307651254-35680f356dfd' : '1503387762-592bed58ef20'}?q=80&w=2071&auto=format&fit=crop`}
                    alt={step.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-charcoal hidden lg:block"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-brand-blue py-24 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <ShieldCheck className="w-12 h-12 mx-auto mb-6" />
              <h4 className="text-xl font-bold uppercase tracking-tight">Fully Accredited</h4>
              <p className="text-sm text-blue-100 font-light">FENSA certified and fully compliant with UK Building Regulations Part L & Q.</p>
            </div>
            <div className="space-y-4">
              <Zap className="w-12 h-12 mx-auto mb-6" />
              <h4 className="text-xl font-bold uppercase tracking-tight">Zero Risk Tolerance</h4>
              <p className="text-sm text-blue-100 font-light">Every junction and wind-load is structurally verified before production.</p>
            </div>
            <div className="space-y-4">
              <Clock className="w-12 h-12 mx-auto mb-6" />
              <h4 className="text-xl font-bold uppercase tracking-tight">Local Commitment</h4>
              <p className="text-sm text-blue-100 font-light">Project management and installation handled by our dedicated Edinburgh team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-32 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 tracking-tighter">
            Ready to Begin <br /><span className="text-brand-blue">Stage 01?</span>
          </h2>
          <p className="text-lg text-gray-500 font-light mb-12">
            The first step is a technical conversation about your architectural intent. No obligation, just expert advice.
          </p>
          <Link 
            href="/quote" 
            className="inline-flex items-center bg-brand-charcoal text-white hover:bg-brand-blue px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all"
          >
            Start Your Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
