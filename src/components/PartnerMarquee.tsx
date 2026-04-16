'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  'Schüco',
  'Reynaers Aluminium',
  'Smart Systems',
  'Centor',
  'Origin Global',
  'Internorm',
  'Guardian Glass',
  'Saint-Gobain',
  'Pilkington'
];

const PartnerMarquee = () => {
  return (
    <div className="py-20 bg-white overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-4 mb-12">
        <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-300 text-centre">Elite Systems Partners</h3>
      </div>
      
      <div className="relative flex">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...partners, ...partners].map((partner, idx) => (
            <div 
              key={idx} 
              className="mx-12 text-3xl md:text-5xl font-bold font-[family-name:var(--font-oswald)] uppercase tracking-tighter text-gray-200 hover:text-brand-blue transition-colors cursor-default"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerMarquee;
