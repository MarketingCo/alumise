import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Free Glazing Quote, Edinburgh',
  description: 'Contact Alumise today for a free design consultation. We supply and install premium aluminium windows, bifold doors, and sliding doors across Edinburgh.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | Free Glazing Quote, Edinburgh',
    description: 'Contact Alumise today for a free design consultation. We supply and install premium aluminium windows, bifold doors, and sliding doors across Edinburgh.',
    url: 'https://alumise.co.uk/contact',
    type: 'website',
    images: [{ url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop', width: 1200, height: 630, alt: 'Contact Alumise — Edinburgh Glazing' }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
