'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ShieldCheck, Info, ChevronRight, Gauge } from 'lucide-react';

const ThermalEstimator = () => {
  const [system, setSystem] = useState('bifold');
  const [material, setMaterial] = useState('aluminium');
  const [glazing, setGlazing] = useState('double');
  const [result, setResult] = useState(1.4);

  const calculateUValue = () => {
    // Basic logic mapping industry performance
    let base = 1.4;
    
    if (system === 'fixed') base -= 0.2;
    if (system === 'curtain-walling') base -= 0.1;
    
    if (material === 'timber') base -= 0.1;
    if (material === 'upvc') base -= 0.15;
    
    if (glazing === 'triple') base -= 0.4;
    if (glazing === 'vacuum') base -= 0.6;

    return parseFloat(base.toFixed(1));
  };

  useEffect(() => {
    setResult(calculateUValue());
  }, [system, material, glazing]);

  return (
    <div className="bg-white border border-gray-100 shadow-2xl overflow-hidden rounded-sm">
      <div className="bg-brand-charcoal p-8 md:p-12 text-white">
        <div className="flex items-centre space-x-3 text-brand-blue mb-4">
          <Gauge className="w-6 h-6" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Engineering Tool</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-oswald)] uppercase leading-none tracking-tighter">
          Thermal Performance <br /><span className="text-brand-blue">Estimator.</span>
        </h3>
        <p className="text-brand-grey text-sm font-light mt-6 max-w-md">
          Adjust the system parameters to calculate the estimated whole-product U-value. Alumise systems are engineered to exceed Part L building regulations.
        </p>
      </div>

      <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          {/* System Type */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">01. System Configuration</label>
            <div className="grid grid-cols-2 gap-2">
              {['bifold', 'sliding', 'fixed', 'curtain-walling'].map((s) => (
                <button
                  key={s}
                  onClick={() => setSystem(s)}
                  className={`px-4 py-3 text-[10px] uppercase tracking-widest font-bold border transition-all ${system === s ? 'bg-brand-blue border-brand-blue text-white' : 'bg-white border-gray-100 text-brand-charcoal hover:border-gray-300'}`}
                >
                  {s.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Material */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">02. Primary Material</label>
            <div className="grid grid-cols-3 gap-2">
              {['aluminium', 'upvc', 'timber'].map((m) => (
                <button
                  key={m}
                  onClick={() => setMaterial(m)}
                  className={`px-4 py-3 text-[10px] uppercase tracking-widest font-bold border transition-all ${material === m ? 'bg-brand-blue border-brand-blue text-white' : 'bg-white border-gray-100 text-brand-charcoal hover:border-gray-300'}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Glazing */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">03. Glazing Specification</label>
            <div className="grid grid-cols-3 gap-2">
              {['double', 'triple', 'vacuum'].map((g) => (
                <button
                  key={g}
                  onClick={() => setGlazing(g)}
                  className={`px-4 py-3 text-[10px] uppercase tracking-widest font-bold border transition-all ${glazing === g ? 'bg-brand-blue border-brand-blue text-white' : 'bg-white border-gray-100 text-brand-charcoal hover:border-gray-300'}`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-10 flex flex-col items-centre justify-centre text-centre rounded-sm h-full min-h-[300px] border border-gray-100">
          <div className="space-y-2 mb-8">
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">Estimated U-Value</p>
            <motion.div 
              key={result}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-8xl font-bold font-[family-name:var(--font-oswald)] text-brand-charcoal tracking-tighter"
            >
              {result.toFixed(1)}
            </motion.div>
            <p className="text-xs font-bold text-brand-blue uppercase tracking-widest">W/m²K</p>
          </div>

          <div className="space-y-6 w-full max-w-xs">
            <div className={`p-4 border text-[10px] uppercase tracking-widest font-bold flex items-centre justify-centre ${result <= 1.2 ? 'bg-green-50 border-green-200 text-green-700' : 'bg-blue-50 border-blue-200 text-brand-blue'}`}>
              {result <= 1.2 ? (
                <><ShieldCheck className="w-4 h-4 mr-2" /> Exceeds Part L 2026</>
              ) : (
                <><Info className="w-4 h-4 mr-2" /> Compliant with Part L</>
              )}
            </div>
            
            <button className="group w-full flex items-centre justify-between text-[10px] uppercase tracking-widest font-bold border-b-2 border-brand-charcoal pb-2 hover:text-brand-blue hover:border-brand-blue transition-all">
              Request Full Technical Report <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThermalEstimator;
