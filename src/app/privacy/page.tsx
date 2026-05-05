'use client';

import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-12 tracking-tighter">
          Privacy <span className="text-brand-gold">Policy.</span>
        </h1>
        
        <div className="prose prose-slate max-w-none font-light leading-relaxed text-gray-500 space-y-8">
          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us through our contact forms, quote configurators, and technical guide downloads. This may include your name, email address, phone number, and project details.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide you with technical advice, project estimates, and technical resources. We do not sell your personal data to third parties. We may use your contact information to send you updates regarding your project or relevant industry technical insights.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. Our website uses secure transmission protocols (SSL/TLS) for all form submissions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">4. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information held by Alumise. If you wish to exercise these rights, please contact our data compliance officer at info@alumise.co.uk.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">5. Updates to this Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. The date of the latest update will be indicated at the top of this page.</p>
          </section>

          <p className="text-xs pt-12 border-t border-gray-100">Last Updated: April 15, 2026</p>
        </div>
      </div>
    </div>
  );
}
