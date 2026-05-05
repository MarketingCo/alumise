'use client';

import React from 'react';

export default function CookiesPage() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-12 tracking-tighter">
          Cookie <span className="text-brand-blue">Policy.</span>
        </h1>
        
        <div className="prose prose-slate max-w-none font-light leading-relaxed text-gray-500 space-y-8">
          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">1. What are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They are used to enhance your browsing experience and provide us with information about how our website is used.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">2. How We Use Cookies</h2>
            <p>We use essential cookies to ensure the website functions correctly, such as maintaining your progress through our project configurator. We also use analytical cookies (like Google Analytics) to help us understand which pages are most useful to our visitors.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">3. Managing Your Preferences</h2>
            <p>You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.</p>
          </section>

          <p className="text-xs pt-12 border-t border-gray-100">Last Updated: April 15, 2026</p>
        </div>
      </div>
    </div>
  );
}
