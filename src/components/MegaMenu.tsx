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
          heading: 'Residential',
          icon: <DoorOpen className="w-4 h-4 mr-2 text-brand-gold" />,
          items: [
            { name: 'Bifold Doors', href: '/services/bifold-doors', desc: 'Slimline aluminium bifolds manufactured in Penicuik.' },
            { name: 'Sliding Doors', href: '/services/sliding-doors', desc: 'Minimalist patio doors for modern extensions.' },
            { name: 'Sash Windows', href: '/services/sash-windows', desc: 'Heritage & modern timber-look sash systems.' },
            { name: 'Casement Windows', href: '/services/casement-windows', desc: 'High-performance aluminium & uPVC windows.' },
            { name: 'Roof Lanterns', href: '/services/roof-lanterns', desc: 'Bespoke skylights and flat rooflights.' }
          ]
        },
        {
          heading: 'Commercial',
          icon: <Building2 className="w-4 h-4 mr-2 text-brand-gold" />,
          items: [
            { name: 'Curtain Walling', href: '/services/curtain-walling', desc: 'Structural glazing for multi-storey developments.' },
            { name: 'Shopfronts', href: '/services/shopfronts', desc: 'Bespoke aluminium retail frontages.' },
            { name: 'Commercial Doors', href: '/services/commercial-doors', desc: 'Automatic & manual entrance systems.' },
            { name: 'Window Installation', href: '/services/window-installation', desc: 'Full replacement & new build fitting.' },
            { name: 'Door Installation', href: '/services/door-installation', desc: 'Expert fitting for all door types.' }
          ]
        }
      ],
      featured: {
        title: 'All Services',
        desc: 'Browse our complete range of glazing and aluminium services for residential and commercial projects across Edinburgh and the Lothians.',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
        href: '/services'
      }
    },
    {
      title: 'Products',
      slug: 'products',
      columns: [
        {
          heading: 'By Category',
          icon: <Grid3X3 className="w-4 h-4 mr-2 text-brand-gold" />,
          items: categories.map(cat => ({
            name: cat,
            href: `/products?category=${cat.toLowerCase().replace(' ', '-')}`,
            desc: `Explore our full range of ${cat.toLowerCase()}.`
          }))
        },
        {
          heading: 'By Material',
          icon: <Layers className="w-4 h-4 mr-2 text-brand-gold" />,
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
          icon: <Zap className="w-4 h-4 mr-2 text-brand-gold" />,
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
          heading: 'Edinburgh',
          icon: <MapPin className="w-4 h-4 mr-2 text-brand-gold" />,
          items: [
            { name: 'New Town', href: '/locations/new-town', desc: 'Heritage glazing for Georgian architecture.' },
            { name: 'Leith', href: '/locations/leith', desc: 'Waterfront residential & commercial facades.' },
            { name: 'Morningside', href: '/locations/morningside', desc: 'Premium villas & tenement upgrades.' },
            { name: 'Stockbridge', href: '/locations/stockbridge', desc: 'Conservation area sash replacements.' },
            { name: 'West End', href: '/locations/west-end', desc: 'Victorian & modern mixed developments.' }
          ]
        },
        {
          heading: 'Lothians & Beyond',
          icon: <MapPin className="w-4 h-4 mr-2 text-brand-gold" />,
          items: [
            { name: 'Penicuik', href: '/locations/penicuik', desc: 'Our manufacturing hub & local projects.' },
            { name: 'Musselburgh', href: '/locations/musselburgh', desc: 'Coastal-grade glazing East Lothian.' },
            { name: 'Dalkeith', href: '/locations/dalkeith', desc: 'Suburban residential window replacement.' },
            { name: 'Livingston', href: '/locations/livingston', desc: 'West Lothian new build & retrofit.' },
            { name: 'All Areas', href: '/locations', desc: 'View our full coverage map.' }
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
          icon: <Building2 className="w-4 h-4 mr-2 text-brand-gold" />,
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
    <nav className="hidden lg:flex items-center space-x-1">
      {menuItems.map((item) => (
        <div
          key={item.slug}
          className="relative group"
          onMouseEnter={() => setActiveMenu(item.slug)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <button className="px-4 py-2 flex items-center text-sm font-medium hover:text-brand-gold transition-colors uppercase tracking-wider">
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
                      <div className="flex items-center mb-4 pb-2 border-b border-gray-100">
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
                              <span className="font-bold text-sm group-hover/item:text-brand-gold transition-colors">{subItem.name}</span>
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
                      className="text-xs font-bold text-brand-gold hover:underline flex items-center"
                    >
                      Learn more <Zap className="w-3 h-3 ml-1 fill-current" />
                    </Link>
                  </div>
                ) : (
                  <div className="border-l border-gray-100 pl-8 flex flex-col justify-center">
                    <div className="flex items-center text-brand-gold mb-4">
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
      <Link href="/materials" className="px-4 py-2 text-sm font-medium hover:text-brand-gold transition-colors uppercase tracking-wider">
        Materials
      </Link>
      <Link href="/blog" className="px-4 py-2 text-sm font-medium hover:text-brand-gold transition-colors uppercase tracking-wider">
        Insights
      </Link>
      <Link href="/about" className="px-4 py-2 text-sm font-medium hover:text-brand-gold transition-colors uppercase tracking-wider">
        About Us
      </Link>
      <Link href="/trust" className="px-4 py-2 text-sm font-medium hover:text-brand-gold transition-colors uppercase tracking-wider">
        Trust & Technical
      </Link>
      <Link href="/contact" className="px-4 py-2 text-sm font-medium hover:text-brand-gold transition-colors uppercase tracking-wider">
        Contact
      </Link>
    </nav>
  );
};

export default MegaMenu;
