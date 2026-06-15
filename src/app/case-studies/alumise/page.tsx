import type { Metadata } from "next";
import Link from "next/link";
import { generateCaseStudySchema } from "../../../../generate_alumise_schema.js";

export const metadata: Metadata = {
  title: "Case Studies | Architectural Glazing Portfolio",
  description: "Explore Alumise's glazing portfolio across Edinburgh and Scotland. Premium aluminium windows, bifold doors and curtain walling, manufactured in Penicuik.",
  alternates: { canonical: "/case-studies/alumise" },
  openGraph: {
    title: "Case Studies | Architectural Glazing Portfolio",
    description:
      "Premium architectural glazing manufactured in Penicuik. View our project portfolio across Edinburgh and Scotland.",
    url: "https://alumise.co.uk/case-studies/alumise",
    images: [
      {
        url: "/images/unsplash_1507679799987-c73779587ccf_q80_w2071.jpg",
        width: 1200,
        height: 630,
        alt: "Alumise — Premium Architectural Glazing",
      },
    ],
  },
};

export default function CaseStudiesPage() {
  // Jarvis Protocol: Inject master LocalBusiness schema for the case-studies hub
  const caseStudySchema = generateCaseStudySchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <div className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-alumise-obsidian pt-40 pb-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-alumise-gold opacity-5 blur-3xl rounded-full translate-x-1/2"></div>
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="flex items-center space-x-2 text-alumise-gold mb-4">
              <span className="text-[10px] uppercase tracking-widest font-bold">Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold uppercase mb-8 tracking-tighter max-w-4xl">
              Alumise <span className="text-alumise-gold">Case Studies.</span>
            </h1>
            <p className="text-xl text-brand-grey max-w-2xl font-light leading-relaxed">
              Precision-engineered architectural glazing for luxury residential and commercial projects across Edinburgh and Scotland. Manufactured in Penicuik, installed with zero compromise.
            </p>
          </div>
        </section>

        {/* Project Types */}
        <section className="py-24 border-b border-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-alumise-gold mb-4">What We Build</h2>
              <p className="text-3xl font-bold uppercase tracking-tight">Project Specialisms</p>
              <p className="text-lg text-gray-500 font-light mt-6 max-w-2xl mx-auto leading-relaxed">
                Alumise manufactures and installs premium architectural glazing for luxury residential developments, heritage restorations, and commercial projects across Edinburgh and Scotland.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-10 border border-gray-100 bg-white">
                <h3 className="font-bold uppercase tracking-tight text-xl mb-4">Luxury Residential</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                  Bespoke aluminium bifold doors, roof lanterns, and casement windows for high-specification homes across Edinburgh, Midlothian, and the Lothians. Every system is manufactured to the homeowner's exact dimensions in our Penicuik facility.
                </p>
                <Link href="/products/bifold-doors" className="text-[10px] font-bold uppercase tracking-widest text-alumise-gold hover:underline">
                  Bifold Doors →
                </Link>
              </div>
              <div className="p-10 border border-gray-100 bg-white">
                <h3 className="font-bold uppercase tracking-tight text-xl mb-4">Heritage & Conservation</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                  Steel-look heritage glazing and slimline aluminium systems approved for Edinburgh's conservation areas and listed buildings. Our heritage team works directly with local planning authorities to ensure compliance and visual authenticity.
                </p>
                <Link href="/products/steel-look-heritage" className="text-[10px] font-bold uppercase tracking-widest text-alumise-gold hover:underline">
                  Heritage Systems →
                </Link>
              </div>
              <div className="p-10 border border-gray-100 bg-white">
                <h3 className="font-bold uppercase tracking-tight text-xl mb-4">Commercial & Developer</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                  Curtain walling, commercial sliding systems, and structural glazing facades for developers, architects, and main contractors across Scotland. We supply and install on schedule, at scale.
                </p>
                <Link href="/products/curtain-walling" className="text-[10px] font-bold uppercase tracking-widest text-alumise-gold hover:underline">
                  Curtain Walling →
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/locations"
                className="bg-alumise-obsidian text-white hover:bg-alumise-gold px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-xl"
              >
                View Coverage Areas
              </Link>
            </div>
          </div>
        </section>

        {/* Why Alumise */}
        <section className="py-24 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-alumise-gold mb-4">The Alumise Standard</h2>
                <p className="text-4xl font-bold uppercase tracking-tight leading-tight mb-8">
                  Manufactured in Penicuik.<br /><span className="text-gray-400">Installed Across Scotland.</span>
                </p>
                <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                  Unlike national glazing resellers, Alumise owns the entire process — from design consultation through to factory manufacture and on-site installation. Our Midlothian facility gives us full quality control, faster lead times, and direct accountability to every client.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-alumise-gold font-bold text-lg">10</span>
                    <span className="text-sm font-bold uppercase tracking-wide">Year Insurance-Backed Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-alumise-gold font-bold text-lg">FENSA</span>
                    <span className="text-sm font-bold uppercase tracking-wide">Accredited Installation</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-alumise-gold font-bold text-lg">A+</span>
                    <span className="text-sm font-bold uppercase tracking-wide">Energy Rated Systems Available</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Link href="/products" className="block p-8 bg-white border border-gray-100 hover:border-alumise-gold hover:shadow-xl transition-all group">
                  <h3 className="font-bold uppercase tracking-tight text-lg mb-2 group-hover:text-alumise-gold transition-colors">View All Products</h3>
                  <p className="text-xs text-gray-400 font-light">Explore the full range of aluminium glazing systems available from Alumise.</p>
                </Link>
                <Link href="/services" className="block p-8 bg-white border border-gray-100 hover:border-alumise-gold hover:shadow-xl transition-all group">
                  <h3 className="font-bold uppercase tracking-tight text-lg mb-2 group-hover:text-alumise-gold transition-colors">Our Services</h3>
                  <p className="text-xs text-gray-400 font-light">From initial survey through to completed installation and aftercare.</p>
                </Link>
                <Link href="/quote" className="block p-8 bg-alumise-obsidian text-white hover:bg-alumise-gold transition-all group">
                  <h3 className="font-bold uppercase tracking-tight text-lg mb-2">Request a Quote</h3>
                  <p className="text-xs text-white/70 font-light">Tell us about your project and get a detailed technical proposal.</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
