'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-white border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-[300px] overflow-hidden">
        <Image 
          src={product.heroImage}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {product.materials.map(mat => (
            <span key={mat} className="bg-brand-charcoal/80 backdrop-blur-md text-[8px] uppercase tracking-widest text-white px-2 py-1 font-bold">
              {mat}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-8">
        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-2 block">
          {product.category}
        </span>
        <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight group-hover:text-brand-gold transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 mb-6 line-clamp-2 font-light leading-relaxed">
          {product.shortDesc}
        </p>
        
        <ul className="space-y-2 mb-8">
          {product.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-center text-xs text-gray-600">
              <CheckCircle2 className="w-3 h-3 mr-2 text-brand-gold flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Link 
          href={`/products/${product.slug}`}
          className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] font-bold border-b-2 border-brand-charcoal pb-1 group-hover:border-brand-gold group-hover:text-brand-gold transition-all"
        >
          View Technical Specs <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
