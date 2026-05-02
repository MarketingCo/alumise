'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
      animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
      transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.3 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Architectural Crosshair (+) */}
        <div className="absolute w-[20px] h-[1px] bg-white opacity-80" />
        <div className="absolute h-[20px] w-[1px] bg-white opacity-80" />
      </div>
    </motion.div>
  );
}
