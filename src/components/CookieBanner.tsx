'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-2xl"
        >
          <div className="container mx-auto px-4 py-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-alumise-obsidian font-light leading-relaxed">
              We use cookies to improve your experience. By continuing to use this site, you agree to our use of cookies.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleAccept}
                className="px-5 py-2.5 bg-alumise-gold text-white text-sm font-semibold rounded-sm hover:bg-alumise-obsidian transition-colors duration-200"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="px-5 py-2.5 border border-alumise-gold text-alumise-gold text-sm font-semibold rounded-sm hover:bg-alumise-gold hover:text-white transition-colors duration-200"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
