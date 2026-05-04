'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, DoorOpen, Layout, Grid3X3, Building2, Layers, TreeDeciduous, Hammer, ShieldCheck, Zap, MapPin } from 'lucide-react';
import { categories, materials, products } from '@/data/products';

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuVariants = {
    hidden: { opacity: 0, y: 10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
  };

  const menuItems = [
    {
      title: 'Services',
      slug: 'services',
      columns: [
        {
          heading: 'What We Do',
          icon: <Zap className="w-4 h-4 mr-2 text-brand-blue" />,
          items: [
            { name: 'Design & Engineering', href: '/services#design', desc: 'Precision CAD and structural analysis.' },
            { name: 'Fabrication', href: '/services#fabrication', desc: 'Expert craftsmanship in our local facility.' },
            { name: 'Installation', href: '/services#installation', desc: 'White-glove service by certified teams.' }
          ]
        }
      ]
    },
    {
      title: 'Products',
      slug: 'products',
      columns: [
        {
          heading: 'By Category',
          icon: <Grid3X3 className="w-4 h-4 mr-2 text-brand-blue" />,
          items: categories.map(cat => ({
            name: cat,
            href: `/products?category=${cat.toLowerCase().replace(' ', '-')}`,
            desc: `Explore our full range of ${cat.toLowerCase()}.`
          }))
        },
        {
          heading: 'By Material',
          icon: <Layers className="w-4 h-4 mr-2 text-brand-blue" />,
          items: materials.map(mat => ({
            name: mat,
            href: `/materials/${mat.toLowerCase().replace(' ', '-')}`,
            desc: `Technical deep-dive into ${mat.toLowerCase()} systems.`
          }))
        }
      ],
      featured: {
        title: 'Bespoke Solutions',
        desc: 'Need something unique? Our engineering team can design custom glazing for any project.',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
        href: '/products/bespoke'
      }
    },
    {
      title: 'Our Process',
      slug: 'process',
      columns: [
        {
          heading: 'The Journey',
          icon: <Zap className="w-4 h-4 mr-2 text-brand-blue" />,
          items: [
            { name: 'Design & Engineering', href: '/process#design', desc: 'Precision CAD and structural analysis.' },
            { name: 'Fabrication', href: '/process#fabrication', desc: 'Expert craftsmanship in our local facility.' },
            { name: 'Installation', href: '/process#installation', desc: 'White-glove service by certified teams.' }
          ]
        }
      ]
    },
    {
      title: 'Locations',
      slug: 'locations',
      columns: [
        {
          heading: 'Areas We Cover',
          icon: <MapPin className="w-4 h-4 mr-2 text-brand-blue" />,
          items: [
            { name: 'Edinburgh', href: '/locations', desc: 'All districts and neighbourhoods.' },
            { name: 'Midlothian', href: '/locations', desc: 'Penicuik and surrounding areas.' },
            { name: 'The Lothians', href: '/locations', desc: 'East and West Lothian coverage.' }
          ]
        }
      ]
    },
    {
      title: 'Projects',
      slug: 'projects',
      columns: [
        {
          heading: 'Sectors',
          icon: <Building2 className="w-4 h-4 mr-2 text-brand-blue" />,
          items: [
            { name: 'Residential Luxury', href: '/projects?sector=residential', desc: 'Edinburgh\'s finest homes.' },
            { name: 'Commercial & Retail', href: '/projects?sector=commercial', desc: 'High-traffic retail and office facades.' },
            { name: 'Heritage Renovations', href: '/projects?sector=heritage', desc: 'Preserving historic character.' }
          ]
        }
      ]
    }
  ];

  return (
    <nav className="hidden lg:flex items-centre space-x-1">
      {menuItems.map((item) => (
        <div
          key={item.slug}
          className="relative group"
          onMouseEnter={() => setActiveMenu(item.slug)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <button className="px-4 py-2 flex items-centre text-sm font-medium hover:text-brand-blue transition-colors uppercase tracking-wider">
            {item.title}
            <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeMenu === item.slug ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {activeMenu === item.slug && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants as any}
                className="absolute top-full left-0 w-[600px] bg-white text-brand-charcoal shadow-2xl rounded-b-xl border border-gray-100 overflow-hidden z-50 p-8 grid grid-cols-3 gap-8"
              >
                <div className="col-span-2 grid grid-cols-2 gap-8">
                  {item.columns.map((col, idx) => (
                    <div key={idx}>
                      <div className="flex items-centre mb-4 pb-2 border-b border-gray-100">
                        {col.icon}
                        <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500">{col.heading}</h4>
                      </div>
                      <ul className="space-y-4">
                        {col.items.map((subItem, sIdx) => (
                          <li key={sIdx}>
                            <Link 
                              href={subItem.href}
                              className="group/item flex flex-col"
                            >
                              <span className="font-bold text-sm group-hover/item:text-brand-blue transition-colors">{subItem.name}</span>
                              <span className="text-xs text-gray-500 mt-1 leading-tight">{subItem.desc}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                {item.featured ? (
                  <div className="bg-gray-50 p-6 rounded-lg flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm mb-2">{item.featured.title}</h4>
                      <p className="text-xs text-gray-500 mb-4">{item.featured.desc}</p>
                    </div>
                    <Link 
                      href={item.featured.href}
                      className="text-xs font-bold text-brand-blue hover:underline flex items-centre"
                    >
                      Learn more <Zap className="w-3 h-3 ml-1 fill-current" />
                    </Link>
                  </div>
                ) : (
                  <div className="border-l border-gray-100 pl-8 flex flex-col justify-centre">
                    <div className="flex items-centre text-brand-blue mb-4">
                      <ShieldCheck className="w-6 h-6 mr-2" />
                      <span className="font-bold text-xs uppercase tracking-wider">Guaranteed Quality</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed italic">
                      "Engineered to exact tolerances. We partner with main contractors to deliver projects perfectly to specification."
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      <Link href="/materials" className="px-4 py-2 text-sm font-medium hover:text-brand-blue transition-colors uppercase tracking-wider">
        Materials
      </Link>
      <Link href="/blog" className="px-4 py-2 text-sm font-medium hover:text-brand-blue transition-colors uppercase tracking-wider">
        Insights
      </Link>
      <Link href="/about" className="px-4 py-2 text-sm font-medium hover:text-brand-blue transition-colors uppercase tracking-wider">
        About Us
      </Link>
      <Link href="/trust" className="px-4 py-2 text-sm font-medium hover:text-brand-blue transition-colors uppercase tracking-wider">
        Trust & Technical
      </Link>
      <Link href="/contact" className="px-4 py-2 text-sm font-medium hover:text-brand-blue transition-colors uppercase tracking-wider">
        Contact
      </Link>
    </nav>
  );
};

export default MegaMenu;
