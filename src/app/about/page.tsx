import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Alumise | Premium Glazing Manufacturers in Penicuik',
  description: "Discover Alumise, Scotland's leading manufacturer of premium aluminium windows, bifold doors, and architectural glazing. Based in Penicuik, serving Edinburgh.",
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Alumise | Premium Glazing Manufacturers in Penicuik',
    description: "Discover Alumise, Scotland's leading manufacturer of premium aluminium windows, bifold doors, and architectural glazing. Based in Penicuik, serving Edinburgh.",
    url: 'https://alumise.co.uk/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
