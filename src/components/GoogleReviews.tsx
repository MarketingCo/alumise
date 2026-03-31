'use client';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    name: "Robertson Construction",
    date: "2 weeks ago",
    text: "Alumise delivered the curtain walling for our latest office development ahead of schedule. Their technical knowledge and site safety standards are second to none.",
    rating: 5
  },
  {
    name: "Architectural Studio EH",
    date: "1 month ago",
    text: "We have partnered with Alumise on multiple high-street shopfront projects. Their attention to detail in the aluminium fabrication is exceptional.",
    rating: 5
  },
  {
    name: "Miller Developments",
    date: "3 months ago",
    text: "Precision engineered glazing systems. The team at Alumise are professional, reliable, and highly skilled contractors. Highly recommended for commercial works.",
    rating: 5
  }
];

export default function GoogleReviews() {
  return (
    <section className="py-24 bg-white px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="space-y-4 text-center md:text-left">
                <h2 className="text-4xl font-bold font-[family-name:var(--font-inter)] text-brand-charcoal tracking-tighter uppercase">Commercial <span className="text-brand-blue">Reputation</span></h2>
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">5.0 Rating on Google</span>
                </div>
            </div>
            <div className="bg-gray-50 px-6 py-3 border border-gray-100 rounded-sm flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Verified Reviews</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 p-10 border border-gray-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex text-yellow-400 mb-6 group-hover:scale-110 transition-transform origin-left">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 leading-loose font-light italic mb-8">"{review.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-bold text-xs uppercase italic">
                    {review.name.charAt(0)}
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h4 className="font-bold text-brand-charcoal text-sm uppercase tracking-tight">{review.name}</h4>
                        <CheckCircle2 size={12} className="text-blue-500" />
                    </div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}