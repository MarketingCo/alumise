export type Material = 'Aluminium' | 'uPVC' | 'Timber' | 'Composite' | 'Specialist Glass' | 'Steel-Look';
export type Category = 'Doors' | 'Windows' | 'Roof Glazing' | 'Commercial';

export interface TechnicalSpec {
  uValue?: string;
  maxDimensions?: string;
  securityRating?: string;
  sightlines?: string;
  glazingOptions?: string;
  airTightness?: string;
}

export interface Product {
  slug: string;
  title: string;
  category: Category;
  materials: Material[];
  shortDesc: string;
  fullContent: string[];
  features: string[];
  heroImage: string;
  technicalSpecs?: TechnicalSpec;
}

export const materials: Material[] = ['Aluminium', 'uPVC', 'Timber', 'Composite', 'Specialist Glass', 'Steel-Look'];
export const categories: Category[] = ['Doors', 'Windows', 'Roof Glazing', 'Commercial'];

export const products: Product[] = [
  // DOORS
  {
    slug: 'bifold-doors',
    title: 'Bi-Folding Doors',
    category: 'Doors',
    materials: ['Aluminium', 'uPVC', 'Timber'],
    shortDesc: 'Seamlessly connect your indoor and outdoor spaces with high-performance bi-fold systems.',
    fullContent: [
      "Our bi-folding doors are engineered for effortless operation and maximum thermal efficiency. Whether you choose the sleek profiles of aluminium, the warmth of timber, or the durability of uPVC, our systems provide expansive views and uncompromising security.",
      "Available in a vast range of configurations and RAL colours, we custom-fabricate each set to your exact structural requirements."
    ],
    features: ['Slimline Profiles', 'High-Security Multi-Point Locking', 'Flush Threshold Options', 'Exceptional Thermal Performance'],
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    technicalSpecs: {
      uValue: 'From 1.3 W/m²K',
      maxDimensions: 'Up to 3m height per leaf',
      securityRating: 'PAS 24 / Secured by Design',
      sightlines: 'From 94mm (Aluminium)',
      glazingOptions: '28mm Double or 44mm Triple',
      airTightness: 'Class 4 (600 Pa)'
    }
  },
  {
    slug: 'sliding-doors',
    title: 'Sliding Doors',
    category: 'Doors',
    materials: ['Aluminium', 'uPVC', 'Timber', 'Composite'],
    shortDesc: 'Grand-scale sliding systems designed for minimalist aesthetics and panoramic views.',
    fullContent: [
      "Experience floor-to-ceiling glass with our premium sliding door systems. Designed to carry massive glass weights with finger-tip operation, these doors are the pinnacle of modern architectural glazing.",
      "Choose from lift-and-slide or inline sliding mechanisms, optimized for both residential luxury and commercial durability."
    ],
    features: ['Ultra-Slim Sightlines', 'Massive Panel Capability', 'Smooth Lift-and-Slide Action', 'High Weather Resistance'],
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    technicalSpecs: {
      uValue: 'From 1.1 W/m²K',
      maxDimensions: 'Up to 3.5m height, 3m width per leaf',
      securityRating: 'PAS 24 / RC3 Available',
      sightlines: 'From 20mm (Minimalist Systems)',
      glazingOptions: 'Up to 52mm Triple Glazing',
      airTightness: 'Class 4 (600 Pa)'
    }
  },
  {
    slug: 'entrance-doors',
    title: 'Front & Entrance Doors',
    category: 'Doors',
    materials: ['Aluminium', 'Composite', 'Timber', 'uPVC'],
    shortDesc: 'Make a statement with secure, high-performance entrance systems tailored to your brand or home.',
    fullContent: [
      "Your entrance door is the first impression of your property. We supply and install everything from high-security aluminium commercial entrances to bespoke designer composite doors for luxury homes.",
      "Every door is built with advanced security cores and premium hardware to ensure long-term reliability and safety."
    ],
    features: ['Smart Lock Integration', 'Thermally Broken Thresholds', 'Limitless Design Options', 'Police-Approved Security'],
    heroImage: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1918&auto=format&fit=crop',
    technicalSpecs: {
      uValue: 'From 0.9 W/m²K',
      maxDimensions: 'Bespoke Sizing up to 1.5m width',
      securityRating: 'RC3 / Secured by Design',
      sightlines: 'Flush or Recessed Options',
      glazingOptions: 'Laminated Security Glass',
      airTightness: 'Class 4 (600 Pa)'
    }
  },
  // WINDOWS
  {
    slug: 'casement-windows',
    title: 'Casement Windows',
    category: 'Windows',
    materials: ['Aluminium', 'uPVC', 'Timber', 'Steel-Look'],
    shortDesc: 'Versatile and efficient window systems suitable for any architectural style.',
    fullContent: [
      "Our casement windows combine classic design with modern engineering. From ultra-slim aluminium frames to high-performance uPVC and traditional timber, we offer solutions for both heritage renovations and modern new builds.",
      "Optimized for high thermal performance and noise reduction, our windows are a cornerstone of a comfortable, energy-efficient building."
    ],
    features: ['A-Rated Energy Efficiency', 'Double or Triple Glazing', 'Heritage Steel-Look Options', 'Concealed Hinges'],
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    technicalSpecs: {
      uValue: 'From 0.8 W/m²K (Triple)',
      maxDimensions: 'Up to 1.8m height',
      securityRating: 'PAS 24 / BS 6375',
      sightlines: 'From 48mm (Slimline Alum)',
      glazingOptions: '24mm to 48mm Units',
      airTightness: 'Class 4 (600 Pa)'
    }
  },
  {
    slug: 'tilt-turn-windows',
    title: 'Tilt & Turn Windows',
    category: 'Windows',
    materials: ['Aluminium', 'uPVC', 'Timber'],
    shortDesc: 'Functional, safe, and easy-to-clean window systems perfect for high-rise and modern projects.',
    fullContent: [
      "The tilt-and-turn system offers dual functionality: tilt for secure ventilation or turn fully for easy cleaning from the inside. This makes them the ideal choice for multi-storey residential and commercial developments.",
      "Engineered with robust multi-point locking and exceptional weather seals."
    ],
    features: ['Dual Operation Mode', 'Easy Internal Cleaning', 'High Security Locking', 'Superior Airtightness'],
    heroImage: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=1974&auto=format&fit=crop',
    technicalSpecs: {
      uValue: 'From 0.9 W/m²K',
      maxDimensions: 'Up to 2.4m height',
      securityRating: 'RC2 / PAS 24',
      sightlines: 'Modern Integrated Sash',
      glazingOptions: 'Double or Triple',
      airTightness: 'Class 4 (600 Pa)'
    }
  },
  // ROOF GLAZING
  {
    slug: 'roof-lanterns',
    title: 'Roof Lanterns & Skylights',
    category: 'Roof Glazing',
    materials: ['Aluminium', 'uPVC', 'Specialist Glass'],
    shortDesc: 'Flood your living space with natural light using our architectural roof glazing solutions.',
    fullContent: [
      "Our roof lanterns are designed to create a stunning architectural focal point while maximizing light intake. Using slimline aluminium rafters and self-cleaning specialist glass, we provide systems that look incredible and perform flawlessly year-round.",
      "Available in traditional lantern styles or minimalist flat rooflights for a modern look."
    ],
    features: ['Self-Cleaning Glass', 'Solar Control Coatings', 'Ultra-Slim Rafters', 'High-Performance Insulated Glass'],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    technicalSpecs: {
      uValue: 'From 1.0 W/m²K (Overall)',
      maxDimensions: 'Unlimited via Link Systems',
      securityRating: 'Non-Fragile / BS EN 12600',
      sightlines: '40mm Slimline Rafters',
      glazingOptions: 'Self-Cleaning / Solar Control',
      airTightness: 'Watertight to 600 Pa'
    }
  },
  // COMMERCIAL
  {
    slug: 'curtain-walling',
    title: 'Curtain Walling Systems',
    category: 'Commercial',
    materials: ['Aluminium', 'Specialist Glass'],
    shortDesc: 'Full-scale structural glazing facades for commercial developments and office blocks.',
    fullContent: [
      "We specialize in high-performance curtain walling systems optimized for the Edinburgh climate. Our team works from design through to installation, ensuring every facade meets rigorous structural and thermal specifications.",
      "Available in stick-build and unitized systems for various project scales."
    ],
    features: ['Thermal Break Technology', 'Structural Silicone Glazing', 'High Wind-Load Resistance', 'BIM Integrated Design'],
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    technicalSpecs: {
      uValue: 'Project Specific (to 0.7)',
      maxDimensions: 'Structural spans up to 12m+',
      securityRating: 'CWCT Sequence B Certified',
      sightlines: '50mm Standard Box',
      glazingOptions: 'Up to 60mm Structural Units',
      airTightness: 'A4 / 600 Pa'
    }
  },
  {
    slug: 'steel-look-heritage',
    title: 'Steel-Look & Heritage Systems',
    category: 'Windows',
    materials: ['Steel-Look', 'Aluminium'],
    shortDesc: 'Achieve the iconic Crittall-style aesthetic with modern thermal performance and security.',
    fullContent: [
      "Our steel-look systems provide the timeless aesthetic of traditional steel windows with the modern benefits of thermally-broken aluminium. Perfect for internal partitions or external heritage-style facades.",
      "Featuring slim horizontal glazing bars and industrial-style hardware."
    ],
    features: ['Iconic Slim Glazing Bars', 'Traditional Industrial Hardware', 'High Thermal Efficiency', 'Internal Partition Options'],
    heroImage: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop',
    technicalSpecs: {
      uValue: 'From 1.2 W/m²K',
      maxDimensions: 'Up to 2.1m leaf height',
      securityRating: 'PAS 24 / RC2',
      sightlines: '30mm Glazing Bars',
      glazingOptions: 'Double Glazed Heritage Units',
      airTightness: 'Class 4 (600 Pa)'
    }
  }
];
