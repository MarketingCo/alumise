import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Alumise | Premium Glazing Manufacturers in Penicuik',
  description: "Discover Alumise, Scotland's leading manufacturer of premium aluminium windows, bifold doors, and architectural glazing. Based in Penicuik, serving Edinburgh.",
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <AboutClient />;
}
