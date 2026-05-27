import { Metadata } from 'next';
import LocationsClient from './LocationsClient';

export const metadata: Metadata = {
  title: 'Areas We Serve | Edinburgh & Lothians Glazing | Alumise',
  description: 'Alumise provides premium architectural glazing across Edinburgh, Midlothian, East Lothian, and West Lothian. View our local service areas.',
  alternates: { canonical: '/locations' },
  openGraph: {
    title: 'Areas We Serve | Edinburgh & Lothians Glazing | Alumise',
    description: 'Alumise provides premium architectural glazing across Edinburgh, Midlothian, East Lothian, and West Lothian. View our local service areas.',
    url: 'https://alumise.co.uk/locations',
    type: 'website',
  },
};

export default function LocationsPage() {
  return <LocationsClient />;
}
