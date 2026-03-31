'use client';
import { useForm, ValidationError } from '@formspree/react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  // Use a dummy Formspree ID for now
  const [state, handleSubmit] = useForm("dummy_form_id");

  if (state.succeeded) {
      return (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Thank you!</h3>
          <p>Your commercial glazing enquiry has been received. Our technical team will be in touch shortly.</p>
        </div>
      );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            id="name"
            type="text" 
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue outline-none"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company / Contractor</label>
          <input
            id="company"
            type="text" 
            name="company"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue outline-none"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input
            id="email"
            type="email" 
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue outline-none"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            id="phone"
            type="tel" 
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details *</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Please describe the scope of works, structural requirements, or attach drawing references..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue outline-none resize-none"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-brand-blue hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Submitting...' : 'Send Technical Enquiry'}
        {!state.submitting && <Send size={18} />}
      </button>
    </form>
  );
}