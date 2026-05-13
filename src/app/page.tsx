import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Alumise | Aluminium Windows & Bifold Doors Edinburgh',
  description: 'Premium aluminium windows, bifold doors and architectural glazing manufactured in Penicuik, installed across Edinburgh and Scotland. FENSA accredited.',
  keywords: 'aluminium windows Edinburgh, bifold doors Edinburgh, sliding doors Edinburgh, roof lanterns Edinburgh, curtain walling Scotland, shopfronts Edinburgh, architectural glazing Penicuik, double glazing Midlothian, FENSA accredited Edinburgh, aluminium manufacturing Scotland',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Alumise | Aluminium Windows, Bifold Doors & Glazing Edinburgh',
    description: 'Premium architectural glazing manufactured in our Penicuik facility. Precision-engineered aluminium systems for luxury residential and commercial projects.',
    url: 'https://alumise.co.uk',
    siteName: 'Alumise',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://alumise.co.uk/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alumise — Premium Architectural Glazing',
      },
    ],
  },
};

export default function Home() {
  return <HomeContent />;
}
