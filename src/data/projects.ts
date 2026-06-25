export interface Project {
  slug: string;
  title: string;
  location: string;
  type: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: 'morningside-extension',
    title: 'The Morningside Extension',
    location: 'Morningside, Edinburgh',
    type: 'Residential Extension',
    description: 'A luxury stone-clad extension featuring premium aluminium bi-folding doors and a slim-profile architectural glass roof lantern, seamlessly integrating the kitchen-dining space with the private landscaped garden.',
    image: '/images/unsplash_1600607687939-ce8a6c25118c_q80_w2053.jpg'
  },
  {
    slug: 'new-town-georgian-court',
    title: 'New Town Georgian Court',
    location: 'New Town, Edinburgh',
    type: 'Conservation Renovation',
    description: 'Smart Alitherm Heritage steel-look slimline aluminium doors and windows, designed and fabricated to replicate original historical steel glazing while satisfying conservation planning officers and achieving modern A-rated thermal efficiency.',
    image: '/images/unsplash_1600566752355-35792bedcfea_q80_w2070.jpg'
  },
  {
    slug: 'east-lothian-coastal-villa',
    title: 'East Lothian Coastal Villa',
    location: 'North Berwick, East Lothian',
    type: 'Coastal New Build',
    description: 'Panoramic Cortizo Cor-Vision minimal sliding doors with ultra-slim 20mm interlocking sightlines, finished with marine-grade Qualicoat powder coating and high-performance triple glazing (U-value 1.1 W/m²K) to withstand severe coastal salt-spray and winds.',
    image: '/images/unsplash_1600585154526-990dced4db0d_q80_w2070.jpg'
  },
  {
    slug: 'leith-waterfront-creative-hub',
    title: 'Leith Waterfront Creative Hub',
    location: 'Leith, Edinburgh',
    type: 'Commercial Office',
    description: 'Senior Architectural Systems (SAS) high-performance curtain walling and heavy-duty commercial automated entrance shopfront, maximizing daylight and thermal performance for a multi-use retail and workspace development.',
    image: '/images/unsplash_1486406146926-c627a92ad1ab_q80_w2070.jpg'
  }
];
