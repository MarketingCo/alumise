'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import LeadMagnet from '@/components/LeadMagnet';

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="mb-20 text-centre max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-oswald)] uppercase mb-8 tracking-tighter">
            Architectural <span className="text-brand-blue">Insights.</span>
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            The authority in architectural glazing. Explore our latest technical guides, material comparisons, and heritage restoration insights.
          </p>
        </header>

        {/* Lead Magnet */}
        <div className="mb-20">
          <LeadMagnet />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-white border border-gray-100 overflow-hidden hover:shadow-2xl transition-all"
            >
              <Link href={`/blog/${post.slug}`} className="relative h-64 overflow-hidden bg-gray-100">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-blue text-white text-[8px] uppercase tracking-widest font-bold px-3 py-1">
                    {post.category}
                  </span>
                </div>
              </Link>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-centre space-x-4 text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">
                  <span className="flex items-centre"><Calendar className="w-3 h-3 mr-2" /> {post.date}</span>
                  <span className="flex items-centre"><User className="w-3 h-3 mr-2" /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 font-light mb-8 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-centre text-[10px] uppercase tracking-widest font-bold border-b-2 border-brand-charcoal pb-1 group-hover:border-brand-blue transition-all w-max"
                >
                  Read Full Insight <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
