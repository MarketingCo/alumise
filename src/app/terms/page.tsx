'use client';

import React from 'react';

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-12 tracking-tighter">
          Terms of <span className="text-brand-blue">Service.</span>
        </h1>
        
        <div className="prose prose-slate max-w-none font-light leading-relaxed text-gray-500 space-y-8">
          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">1. Project Estimates</h2>
            <p>Any project estimates provided through our online configurator are preliminary and subject to full site survey and technical verification by an Alumise engineer. Official quotations will be provided in writing following a comprehensive review of architectural plans and site conditions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">2. Technical Information</h2>
            <p>The technical data, U-values, and specifications provided on this website are for general guidance only. Actual performance values are project-specific and depend on glass selection, framing configuration, and installation environment.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">3. Intellectual Property</h2>
            <p>All content, technical guides, and architectural assets provided on this website are the intellectual property of Alumise Ltd. Unauthorized distribution or reproduction of these materials is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">4. Governing Law</h2>
            <p>These terms are governed by the laws of Scotland. Any disputes arising from the use of this website or our services will be subject to the exclusive jurisdiction of the Scottish courts.</p>
          </section>

          <p className="text-xs pt-12 border-t border-gray-100">Last Updated: April 15, 2026</p>
        </div>
      </div>
    </div>
  );
}
