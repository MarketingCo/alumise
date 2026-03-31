import { services } from '@/data/services';
import ContactForm from '@/components/ContactForm';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Service Hero */}
      <section className="relative h-[60vh] flex items-center bg-brand-charcoal overflow-hidden px-4">
        <div className="absolute inset-0 opacity-30">
            <Image 
              src={service.heroImage} 
              alt={service.title} 
              fill 
              priority 
              className="object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/80 to-transparent"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 border-l-2 border-brand-blue pl-4 text-brand-blue font-bold uppercase tracking-[0.3em] text-xs">
              Commercial Glazing Specialist
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-inter)] text-white uppercase tracking-tighter leading-[1.1]">
              {service.title}
            </h1>
            <p className="text-xl text-brand-grey leading-relaxed font-light">
              {service.shortDesc}
            </p>
            <div className="pt-4">
              <Link href="#contact" className="bg-brand-blue hover:bg-blue-700 text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest transition-all shadow-xl inline-flex items-center gap-3 text-center">
                Get Technical Specifications <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-4 border-b border-gray-100">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
                <h2 className="text-4xl font-bold font-[family-name:var(--font-inter)] text-brand-charcoal tracking-tight uppercase">System Engineering & Installation</h2>
                <div className="w-20 h-1 bg-brand-blue"></div>
            </div>
            <div className="space-y-8 text-lg text-gray-500 leading-loose font-light">
              {service.fullContent.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-12 lg:p-16 border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-charcoal mb-10 uppercase tracking-tight">Key Features & Compliance</h3>
            <ul className="space-y-6">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-600 font-medium">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue shadow-sm border border-gray-100">
                    <CheckCircle2 size={20} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-12 p-8 border-t border-gray-200">
                <p className="text-sm italic text-gray-400">All Alumise systems are fully compliant with current UK Building Regulations and local structural requirements for the Edinburgh area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-brand-charcoal rounded-sm shadow-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="p-16 lg:p-24 text-white space-y-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <h2 className="text-5xl font-bold font-[family-name:var(--font-inter)] uppercase tracking-tighter leading-tight relative z-10">Request a <br /> Commercial <br /> Quote</h2>
              <p className="text-xl text-brand-grey/60 font-light leading-relaxed relative z-10">
                Our estimation team provides rapid, accurate quotes for all commercial glazing packages. Submit your project details or drawings today.
              </p>
              <div className="space-y-6 pt-10 border-t border-white/10 relative z-10">
                <div className="flex items-center gap-6">
                    <CheckCircle2 className="text-brand-blue" />
                    <span className="font-bold uppercase tracking-widest text-xs">Technical Drawing Review</span>
                </div>
                <div className="flex items-center gap-6">
                    <CheckCircle2 className="text-brand-blue" />
                    <span className="font-bold uppercase tracking-widest text-xs">BIM / CAD Ready</span>
                </div>
              </div>
            </div>
            <div className="p-16 lg:p-24 bg-white">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}