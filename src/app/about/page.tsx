import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About | Premium Glazing Manufacturers in Penicuik',
  description: "Discover Alumise, Scotland's leading manufacturer of premium aluminium windows, bifold doors, and architectural glazing. Based in Penicuik, serving Edinburgh.",
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Premium Glazing Manufacturers in Penicuik',
    description: "Discover Alumise, Scotland's leading manufacturer of premium aluminium windows, bifold doors, and architectural glazing. Based in Penicuik, serving Edinburgh.",
    url: 'https://alumise.co.uk/about',
    type: 'website',
    images: [{ url: '/images/unsplash_1507679799987-c73779587ccf_q80_w2071.jpg', width: 1200, height: 630, alt: 'About Alumise — Premium Glazing Manufacturers' }],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
