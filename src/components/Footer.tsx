export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        <div>
          <h3 className="text-xl font-bold font-[family-name:var(--font-inter)] mb-4">Alumise.</h3>
          <p className="text-brand-grey max-w-sm">
            Edinburgh's premier commercial glazing specialists, delivering high-performance curtain walling and bespoke shopfronts for major developments.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 font-[family-name:var(--font-inter)]">Contact Us</h4>
          <address className="not-italic text-brand-grey space-y-2">
            <p>123 Glazing Park</p>
            <p>Edinburgh, EH1 1AA</p>
            <p>Phone: 0131 000 0000</p>
            <p>Email: info@alumise.co.uk</p>
          </address>
        </div>
        <div>
          <h4 className="font-bold mb-4 font-[family-name:var(--font-inter)]">Locations</h4>
          <ul className="text-brand-grey text-xs grid grid-cols-2 gap-2 uppercase tracking-widest">
            <li><Link href="/locations/george-street" className="hover:text-brand-blue transition-colors">George Street</Link></li>
            <li><Link href="/locations/princes-street" className="hover:text-brand-blue transition-colors">Princes Street</Link></li>
            <li><Link href="/locations/st-james-quarter" className="hover:text-brand-blue transition-colors">St James</Link></li>
            <li><Link href="/locations/fountainbridge" className="hover:text-brand-blue transition-colors">Fountainbridge</Link></li>
            <li><Link href="/locations/haymarket" className="hover:text-brand-blue transition-colors">Haymarket</Link></li>
            <li><Link href="/locations/gyle" className="hover:text-brand-blue transition-colors">The Gyle</Link></li>
            <li><Link href="/locations/leith-shore" className="hover:text-brand-blue transition-colors">Leith Shore</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 font-[family-name:var(--font-inter)]">Our Network</h4>
          <ul className="text-brand-grey text-[10px] space-y-2 uppercase tracking-widest">
            <li><a href="https://crescent-builders.vercel.app" target="_blank" className="hover:text-brand-blue">Crescent Builders</a></li>
            <li><a href="https://edinburgh-landscaping.vercel.app" target="_blank" className="hover:text-brand-blue">Edinburgh Landscaping</a></li>
            <li><a href="https://enviroworx.vercel.app" target="_blank" className="hover:text-brand-blue">Enviroworx</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-brand-grey text-[10px] uppercase tracking-[0.3em] max-w-6xl">
        <p>&copy; {new Date().getFullYear()} Alumise Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}