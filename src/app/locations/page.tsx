import { Metadata } from 'next';
import LocationsClient from './LocationsClient';

export const metadata: Metadata = {
  title: 'Areas We Serve | Edinburgh & Lothians Glazing',
  description: 'Alumise provides premium architectural glazing across Edinburgh, Midlothian, East Lothian, and West Lothian. View our local service areas.',
  alternates: { canonical: '/locations' },
  openGraph: {
    title: 'Areas We Serve | Edinburgh & Lothians Glazing',
    description: 'Alumise provides premium architectural glazing across Edinburgh, Midlothian, East Lothian, and West Lothian. View our local service areas.',
    url: 'https://alumise.co.uk/locations',
    type: 'website',
    images: [{ url: '/images/unsplash_1507679799987-c73779587ccf_q80_w2071.jpg', width: 1200, height: 630, alt: 'Alumise Service Areas — Edinburgh & Lothians' }],
  },
};

export default function LocationsPage() {
  return <LocationsClient />;
}
