import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-brand-charcoal text-brand-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
        <Link href="/" className="text-2xl font-bold font-[family-name:var(--font-inter)] tracking-tight">
          Alumise<span className="text-brand-blue">.</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#services" className="hover:text-brand-grey transition-colors">Services</Link>
          <Link href="#about" className="hover:text-brand-grey transition-colors">About</Link>
          <Link href="#projects" className="hover:text-brand-grey transition-colors">Projects</Link>
        </nav>
        <Link href="#contact" className="bg-brand-blue hover:bg-blue-700 text-brand-white px-6 py-2 rounded-md font-medium transition-colors">
          Request Quote
        </Link>
      </div>
    </header>
  );
}