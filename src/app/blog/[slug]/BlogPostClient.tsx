'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { blogPosts } from '@/data/blog';

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Blog Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end bg-brand-charcoal text-white overflow-hidden">
        <Image 
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10 pb-20">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-brand-blue mb-8 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3 h-3 mr-2" /> Back to Insights
          </Link>
          <div className="flex items-center space-x-4 text-[10px] uppercase tracking-widest font-bold text-brand-blue mb-6">
            <span className="bg-brand-blue/20 backdrop-blur-md px-3 py-1 border border-brand-blue/30 text-white">{post.category}</span>
            <span className="flex items-center"><Calendar className="w-3 h-3 mr-2" /> {post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight tracking-tighter mb-4">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-xl prose-slate max-w-none font-light leading-relaxed text-gray-500">
            {post.content.map((para, idx) => (
              <p key={idx} className="mb-10" dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>

          {/* CTA Box inside article */}
          <div className="bg-gray-50 border border-gray-100 p-12 my-20 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight">Need Technical <br />Specification?</h3>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed font-light">
                  Speak directly with our engineering team for bespoke structural calculations and architectural glazing support.
                </p>
                <Link 
                  href="/quote" 
                  className="inline-flex items-center bg-brand-charcoal text-white px-8 py-4 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-brand-blue transition-all"
                >
                  Request Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-xs font-bold uppercase tracking-tight">
                  <ShieldCheck className="w-4 h-4 mr-3 text-brand-blue" /> UK Building Regs Compliant
                </div>
                <div className="flex items-center text-xs font-bold uppercase tracking-tight">
                  <Zap className="w-4 h-4 mr-3 text-brand-blue" /> Precision Engineering
                </div>
                <div className="flex items-center text-xs font-bold uppercase tracking-tight">
                  <CheckCircle2 className="w-4 h-4 mr-3 text-brand-blue" /> Certified Installation
                </div>
              </div>
            </div>
          </div>

          <footer className="pt-20 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Written By</p>
                  <p className="text-sm font-bold">{post.author}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                {/* Social Share Placeholders */}
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-brand-blue transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>

      {/* More Insights */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue mb-4">Deep Learning</h2>
              <p className="text-3xl font-bold uppercase tracking-tight">Related <span className="text-gray-600">Insights.</span></p>
            </div>
            <Link href="/blog" className="text-xs font-bold uppercase tracking-widest border-b border-brand-charcoal pb-1 hover:text-brand-blue transition-all">
              All Articles
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.slug !== post.slug)
              .slice(0, 3)
              .map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block bg-white border border-gray-100 p-8 hover:shadow-xl transition-all">
                  <div className="text-[8px] uppercase tracking-widest font-bold text-brand-blue mb-4">{p.category}</div>
                  <h4 className="font-bold uppercase tracking-tight text-lg mb-4 group-hover:text-brand-blue transition-colors leading-tight">{p.title}</h4>
                  <p className="text-xs text-gray-400 line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
