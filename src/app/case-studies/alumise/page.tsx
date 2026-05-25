import type { Metadata } from "next";
import Link from "next/link";
import { generateCaseStudySchema } from "../../../../generate_alumise_schema.js";

export const metadata: Metadata = {
  title: "Case Studies | Alumise",
  description:
    "Explore Alumise's portfolio of architectural glazing projects across Edinburgh, Midlothian and Scotland. Premium aluminium windows, bifold doors and curtain walling.",
  alternates: { canonical: "/case-studies/alumise" },
  openGraph: {
    title: "Case Studies | Alumise",
    description:
      "Premium architectural glazing manufactured in Penicuik. View our project portfolio across Edinburgh and Scotland.",
    url: "https://alumise.co.uk/case-studies/alumise",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
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

        {/* Content Placeholder */}
        <section className="py-32 border-b border-gray-50">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-alumise-gold mb-6">
              Projects Loading
            </h2>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              The Night Shift is currently indexing project photography and technical specifications. Case studies will be deployed automatically as assets are finalised.
            </p>
            <div className="mt-12">
              <Link
                href="/locations"
                className="bg-alumise-obsidian text-white hover:bg-alumise-gold px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-xl"
              >
                Explore by District
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
