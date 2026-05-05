import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Alumise',
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white text-brand-charcoal px-6 py-24">
      <h1 className="text-8xl md:text-9xl font-bold leading-none tracking-tighter">
        404
      </h1>
      <p className="text-2xl md:text-3xl font-semibold mt-6 tracking-tight">
        Page Not Found
      </p>
      <p className="mt-4 text-brand-grey text-lg md:text-xl max-w-md text-center font-light leading-relaxed">
        The page you're looking for might have been moved or deleted.
      </p>
      <Link
        href="/"
        className="mt-10 px-10 py-4 bg-brand-charcoal text-white font-bold uppercase text-xs tracking-[0.3em] hover:bg-brand-gold transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}
