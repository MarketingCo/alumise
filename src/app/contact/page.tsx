import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Alumise | Get a Free Glazing Quote in Edinburgh',
  description: 'Contact Alumise today for a free design consultation. We supply and install premium aluminium windows, bifold doors, and sliding doors across Edinburgh.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Alumise | Get a Free Glazing Quote in Edinburgh',
    description: 'Contact Alumise today for a free design consultation. We supply and install premium aluminium windows, bifold doors, and sliding doors across Edinburgh.',
    url: 'https://alumise.co.uk/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
