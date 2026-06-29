'use client';
import { useState, FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Form submission will be wired to a real endpoint
    // For now, show a message directing users to phone/email
    await new Promise(resolve => setTimeout(resolve, 500));
    setSubmitting(false);
    setSubmitted(true);
    
    // Trigger Google Tag conversion event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17145116027/Zp8UCJSNqtkaEPvqtu8_',
        'value': 1.0,
        'currency': 'GBP'
      });
    }
  };

  if (submitted) {
    return (
      <div className="bg-alumise-cream border border-alumise-gold/20 p-8 text-center">
        <CheckCircle2 className="w-10 h-10 text-alumise-gold mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Thank You</h3>
        <p className="text-alumise-silver mb-4">
          We have received your enquiry. Our team will call you back within 24 hours.
        </p>
        <p className="text-sm text-alumise-silver">
          For urgent enquiries, call us directly on <a href="tel:01312100321" className="font-bold text-alumise-obsidian hover:text-alumise-gold">0131 210 0321</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-alumise-silver mb-2">Full Name *</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-200 focus:border-alumise-gold focus:ring-1 focus:ring-alumise-gold outline-none transition-colors bg-white"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-widest text-alumise-silver mb-2">Phone Number *</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-200 focus:border-alumise-gold focus:ring-1 focus:ring-alumise-gold outline-none transition-colors bg-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-alumise-silver mb-2">Email Address *</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-200 focus:border-alumise-gold focus:ring-1 focus:ring-alumise-gold outline-none transition-colors bg-white"
        />
      </div>

      <div>
        <label htmlFor="postcode" className="block text-xs font-semibold uppercase tracking-widest text-alumise-silver mb-2">Postcode</label>
        <input
          id="postcode"
          type="text"
          name="postcode"
          className="w-full px-4 py-3 border border-gray-200 focus:border-alumise-gold focus:ring-1 focus:ring-alumise-gold outline-none transition-colors bg-white md:w-1/2"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-alumise-silver mb-2">Tell us about your project</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="What type of windows or doors are you looking for? Any specific sizes or styles?"
          className="w-full px-4 py-3 border border-gray-200 focus:border-alumise-gold focus:ring-1 focus:ring-alumise-gold outline-none transition-colors bg-white resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-alumise-obsidian text-white font-bold py-4 px-6 uppercase tracking-widest text-xs hover:bg-alumise-gold hover:text-alumise-obsidian transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {submitting ? 'Sending...' : 'Request a Call Back'}
        {!submitting && <Send size={16} />}
      </button>

      <p className="text-[10px] text-alumise-silver text-center">
        We typically respond within 24 hours. For urgent enquiries, call <a href="tel:01312100321" className="font-bold text-alumise-obsidian hover:text-alumise-gold">0131 210 0321</a>.
      </p>
    </form>
  );
}
