import { locations } from '@/data/locations';
import ContactForm from '@/components/ContactForm';
import { Building2, ShieldCheck, Ruler, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug,
  }));
}

export default async function LocationPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Location Hero */}
      <section className="bg-brand-charcoal text-brand-white pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 border-l-2 border-brand-blue pl-4 text-brand-blue font-bold uppercase tracking-[0.3em] text-xs">
              Edinburgh Glazing: {location.name}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-inter)] leading-tight">
              Commercial Glazing in <span className="text-brand-blue">{location.name}</span>
            </h1>
            <p className="text-xl text-brand-grey max-w-lg leading-relaxed font-light">
              {location.desc} High-performance curtain walling and shopfront systems engineered for excellence.
            </p>
            <div className="pt-4">
              <Link href="#contact" className="bg-brand-blue hover:bg-blue-700 text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest transition-all shadow-xl inline-flex items-center gap-3">
                Request a {location.name} Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Content */}
      <section className="py-24 bg-gray-50 px-4 text-brand-charcoal">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold font-[family-name:var(--font-inter)] mb-12 text-center tracking-tight">Expert Glazing Contractors Serving {location.name}</h2>
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light text-left">
            <p>
              At Alumise, we understand the specific commercial requirements of the {location.name} area. From high-end retail shopfronts to modern office facades, our aluminium systems are designed to meet the highest structural and thermal standards.
            </p>
            <p>
              We provide a full-service approach for {location.name} developments, including technical design, fabrication, and safe on-site installation. Our local team is equipped to handle projects of all scales, ensuring your vision is realized with precision and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
                { icon: <Building2 />, title: "Curtain Walling", desc: "Structural glass systems for multi-storey commercial units." },
                { icon: <Ruler />, title: "Shopfronts", desc: "Bespoke retail frontages designed for high visibility and security." },
                { icon: <ShieldCheck />, title: "Commercial Doors", desc: "Heavy-duty automatic and manual door systems for high footfall areas." }
            ].map((s, i) => (
                <div key={i} className="p-8 border border-gray-100 rounded-sm hover:shadow-lg transition-shadow">
                    <div className="text-brand-blue mb-6">{s.icon}</div>
                    <h3 className="text-xl font-bold uppercase mb-4">{s.title}</h3>
                    <p className="text-gray-500 text-sm">{s.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold font-[family-name:var(--font-inter)]">Start Your {location.name} Project</h2>
            <p className="text-lg text-gray-600">Contact our technical team to discuss your glazing requirements or request a tender review.</p>
            <div className="flex items-center gap-6">
                <Clock className="text-brand-blue" />
                <span className="font-bold uppercase text-xs tracking-widest">Rapid Response: Under 24 Hours</span>
            </div>
          </div>
          <div className="bg-white p-10 shadow-xl border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}