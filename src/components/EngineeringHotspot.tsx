'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Plus, X } from 'lucide-react';

interface Hotspot {
  x: number; // percentage
  y: number; // percentage
  title: string;
  content: string;
}

interface EngineeringHotspotProps {
  hotspots: Hotspot[];
  children: React.ReactNode;
}

const EngineeringHotspot: React.FC<EngineeringHotspotProps> = ({ hotspots, children }) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden group">
      {children}
      
      {hotspots.map((spot, idx) => (
        <div 
          key={idx}
          className="absolute z-20"
          style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
        >
          <div className="relative">
            {/* Pulsing Dot */}
            <motion.button
              onClick={() => setActiveHotspot(activeHotspot === idx ? null : idx)}
              className={`w-6 h-6 rounded-full flex items-centre justify-centre transition-colors ${activeHotspot === idx ? 'bg-brand-blue text-white' : 'bg-white/80 backdrop-blur-sm text-brand-charcoal hover:bg-brand-blue hover:text-white'}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.8, 1.1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Plus className={`w-4 h-4 transition-transform duration-300 ${activeHotspot === idx ? 'rotate-45' : ''}`} />
            </motion.button>

            {/* Tooltip */}
            <AnimatePresence>
              {activeHotspot === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-white p-6 shadow-2xl border border-gray-100 rounded-sm z-30"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[10px] uppercase tracking-widest font-black text-brand-blue">{spot.title}</h4>
                    <button onClick={() => setActiveHotspot(null)}>
                      <X className="w-3 h-3 text-gray-600 hover:text-brand-charcoal" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    {spot.content}
                  </p>
                  {/* Pointer */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}

      {/* Instructions Overlay (Visible on Hover) */}
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-brand-charcoal/80 backdrop-blur-md px-3 py-1 text-[8px] uppercase tracking-widest text-white font-bold rounded-full flex items-centre">
          <Info className="w-2 h-2 mr-2 text-brand-blue" /> Click hotspots for technical details
        </div>
      </div>
    </div>
  );
};

export default EngineeringHotspot;
