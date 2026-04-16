export interface Location {
  slug: string;
  name: string;
  region: string;
  description: string;
}

export const locations: Location[] = [
  // EDINBURGH DISTRICTS
  { 
    slug: 'morningside', 
    name: 'Morningside', 
    region: 'Edinburgh', 
    description: 'Bespoke glazing solutions for premium residential properties in Morningside, including heritage timber and ultra-slim aluminium bifolds.' 
  },
  { 
    slug: 'stockbridge', 
    name: 'Stockbridge', 
    region: 'Edinburgh', 
    description: 'Specialist architectural glass and heritage steel-look systems for Stockbridge homes and retail units.' 
  },
  { 
    slug: 'colinton', 
    name: 'Colinton', 
    region: 'Edinburgh', 
    description: 'High-performance glazing for luxury homes and architectural projects in the Colinton area.' 
  },
  { 
    slug: 'new-town', 
    name: 'New Town', 
    region: 'Edinburgh', 
    description: 'Expert heritage-approved glazing and slimline framing for New Town’s iconic listed properties.' 
  },
  { 
    slug: 'leith', 
    name: 'Leith', 
    region: 'Edinburgh', 
    description: 'Modern commercial facades and contemporary residential glazing for Leith waterfront developments.' 
  },
  { 
    slug: 'west-end', 
    name: 'West End', 
    region: 'Edinburgh', 
    description: 'Architectural glazing solutions for commercial offices and luxury residential spaces in the West End.' 
  },
  // LOTHIAN & SURROUNDING
  { 
    slug: 'east-lothian', 
    name: 'East Lothian', 
    region: 'Lothians', 
    description: 'Premium glazing and rooflights for coastal homes and new-build developments across East Lothian.' 
  },
  { 
    slug: 'west-lothian', 
    name: 'West Lothian', 
    region: 'Lothians', 
    description: 'Industrial and commercial glazing systems for business parks and residential projects in West Lothian.' 
  },
  { 
    slug: 'fife', 
    name: 'Fife', 
    region: 'Fife', 
    description: 'High-specification window and door systems for residential and commercial projects across Fife and the Tay coast.' 
  }
];
