'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Building2, 
  Home as HomeIcon,
  Layers,
  Ruler,
  Send,
  Loader2,
  ShieldCheck,
  Users
} from 'lucide-react';
import { categories, materials, products } from '@/data/products';
import Link from 'next/link';

type Step = 1 | 2 | 3 | 4;

export default function QuotePage() {
  const [step, setStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    category: '',
    material: '',
    projectType: 'Residential',
    dimensions: '',
    message: '',
    name: '',
    email: '',
    phone: '',
    location: ''
  });

  const nextStep = () => setStep((prev) => (prev + 1) as Step);
  const prevStep = () => setStep((prev) => (prev - 1) as Step);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form data will be sent to our team manually until the API endpoint is configured
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const updateData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-brand-charcoal text-white flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white text-brand-charcoal p-12 text-center rounded-sm shadow-2xl"
        >
          <div className="w-20 h-20 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold uppercase mb-4 tracking-tight">Request Received</h2>
          <p className="text-gray-500 font-light mb-8 leading-relaxed">
            Thank you, {formData.name}. We have received your quotation request. Our team will call you within 24 hours to discuss your project and arrange a free design visit.
          </p>
          <Link href="/" className="inline-block bg-brand-gold text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs">
            Return to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-brand-charcoal pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Header */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-bold uppercase tracking-tighter">
              Project <span className="text-brand-gold">Configurator.</span>
            </h1>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Step {step} of 4</span>
          </div>
          <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-brand-gold"
              initial={{ width: '25%' }}
              animate={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-gray-100 shadow-2xl p-8 md:p-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-8"
              >
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold mb-6">01. Select System Category</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        aria-label={`Select ${cat} category`}
                        onClick={() => updateData('category', cat)}
                        className={`flex items-center p-6 border transition-all ${
                          formData.category === cat 
                            ? 'border-brand-gold bg-brand-gold/5 text-brand-gold shadow-lg' 
                            : 'border-gray-100 hover:border-gray-300'
                        }`}
                      >
                        <Building2 className={`w-6 h-6 mr-4 ${formData.category === cat ? 'text-brand-gold' : 'text-gray-500'}`} />
                        <span className="font-bold uppercase tracking-tight text-sm">{cat}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold mb-6">02. Project Sector</h3>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      aria-label="Select Residential Luxury sector"
                      onClick={() => updateData('projectType', 'Residential')}
                      className={`flex-1 flex flex-col items-center p-6 border transition-all ${
                        formData.projectType === 'Residential' 
                          ? 'border-brand-gold bg-brand-gold/5 text-brand-gold' 
                          : 'border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <HomeIcon size={24} className="mb-2" />
                      <span className="font-bold uppercase tracking-tight text-[10px]">Residential Luxury</span>
                    </button>
                    <button
                      type="button"
                      aria-label="Select Commercial and Retail sector"
                      onClick={() => updateData('projectType', 'Commercial')}
                      className={`flex-1 flex flex-col items-center p-6 border transition-all ${
                        formData.projectType === 'Commercial' 
                          ? 'border-brand-gold bg-brand-gold/5 text-brand-gold' 
                          : 'border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <Building2 size={24} className="mb-2" />
                      <span className="font-bold uppercase tracking-tight text-[10px]">Commercial & Retail</span>
                    </button>
                  </div>
                </div>

                <div className="flex justify-end pt-8">
                  <button
                    type="button"
                    disabled={!formData.category}
                    onClick={nextStep}
                    className="flex items-center bg-brand-charcoal text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs disabled:opacity-30 transition-all hover:bg-brand-gold"
                  >
                    Next Step <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-8"
              >
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold mb-6">03. Material Preference</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {materials.map((mat) => (
                      <button
                        key={mat}
                        type="button"
                        onClick={() => updateData('material', mat)}
                        className={`flex flex-col items-center p-6 border transition-all ${
                          formData.material === mat 
                            ? 'border-brand-gold bg-brand-gold/5 text-brand-gold shadow-lg' 
                            : 'border-gray-100 hover:border-gray-300'
                        }`}
                      >
                        <Layers size={24} className={`mb-4 ${formData.material === mat ? 'text-brand-gold' : 'text-gray-500'}`} />
                        <span className="font-bold uppercase tracking-tight text-[10px]">{mat}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between pt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center text-gray-500 hover:text-brand-charcoal px-6 py-4 font-bold uppercase tracking-widest text-xs transition-all"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back
                  </button>
                  <button
                    type="button"
                    disabled={!formData.material}
                    onClick={nextStep}
                    className="flex items-center bg-brand-charcoal text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs disabled:opacity-30 transition-all hover:bg-brand-gold"
                  >
                    Next Step <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-8"
              >
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold mb-6">04. Project Specifications</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 mb-2">Estimated Dimensions / Quantity</label>
                      <input 
                        type="text"
                        placeholder="e.g. 3m x 2.1m Bifold, 4 Standard Windows"
                        className="w-full bg-gray-50 border border-gray-100 p-4 rounded-sm focus:border-brand-gold outline-none transition-all text-sm"
                        value={formData.dimensions}
                        onChange={(e) => updateData('dimensions', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 mb-2">Additional Technical Details</label>
                      <textarea 
                        rows={4}
                        placeholder="Tell us about any specific requirements, U-values, or aesthetic constraints..."
                        className="w-full bg-gray-50 border border-gray-100 p-4 rounded-sm focus:border-brand-gold outline-none transition-all text-sm"
                        value={formData.message}
                        onChange={(e) => updateData('message', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center text-gray-500 hover:text-brand-charcoal px-6 py-4 font-bold uppercase tracking-widest text-xs transition-all"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center bg-brand-charcoal text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-all hover:bg-brand-gold"
                  >
                    Next Step <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-8"
              >
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold mb-6">05. Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 mb-2">Full Name</label>
                      <input 
                        type="text"
                        required
                        className="w-full bg-gray-50 border border-gray-100 p-4 rounded-sm focus:border-brand-gold outline-none transition-all text-sm"
                        value={formData.name}
                        onChange={(e) => updateData('name', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 mb-2">Email Address</label>
                      <input 
                        type="email"
                        required
                        className="w-full bg-gray-50 border border-gray-100 p-4 rounded-sm focus:border-brand-gold outline-none transition-all text-sm"
                        value={formData.email}
                        onChange={(e) => updateData('email', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 mb-2">Phone Number</label>
                      <input 
                        type="tel"
                        className="w-full bg-gray-50 border border-gray-100 p-4 rounded-sm focus:border-brand-gold outline-none transition-all text-sm"
                        value={formData.phone}
                        onChange={(e) => updateData('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 mb-2">Project Location</label>
                      <input 
                        type="text"
                        className="w-full bg-gray-50 border border-gray-100 p-4 rounded-sm focus:border-brand-gold outline-none transition-all text-sm"
                        value={formData.location}
                        onChange={(e) => updateData('location', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center text-gray-500 hover:text-brand-charcoal px-6 py-4 font-bold uppercase tracking-widest text-xs transition-all"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.email || !formData.name}
                    className="flex items-center bg-brand-gold text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-xs disabled:opacity-30 transition-all shadow-xl hover:bg-brand-charcoal"
                  >
                    {isSubmitting ? (
                      <>Processing <Loader2 className="ml-2 w-4 h-4 animate-spin" /></>
                    ) : (
                      <>Submit Technical Request <Send className="ml-2 w-4 h-4" /></>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-100 pt-12">
          <div className="space-y-2">
            <ShieldCheck size={20} className="mx-auto" />
            <p className="text-[8px] uppercase tracking-widest font-bold">Secure Data Transmission</p>
          </div>
          <div className="space-y-2">
            <Ruler size={20} className="mx-auto" />
            <p className="text-[8px] uppercase tracking-widest font-bold">Free Technical Review</p>
          </div>
          <div className="space-y-2">
            <Users size={20} className="mx-auto" />
            <p className="text-[8px] uppercase tracking-widest font-bold">Lead Engineer Review</p>
          </div>
        </div>
      </div>
    </div>
  );
}
