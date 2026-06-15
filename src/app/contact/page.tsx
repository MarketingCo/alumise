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
    images: [{ url: '/images/unsplash_1507679799987-c73779587ccf_q80_w2071.jpg', width: 1200, height: 630, alt: 'Contact Alumise — Edinburgh Glazing' }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
