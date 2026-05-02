export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'architects-guide-structural-glazing',
    title: "The Architect's Guide to Frameless Structural Glazing",
    excerpt: "Understanding the engineering requirements, load-bearing capacities, and aesthetic possibilities of frameless glass systems.",
    date: 'April 10, 2026',
    author: 'Lead Engineer',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
    content: [
      "Structural glazing is more than just an aesthetic choice; it is a complex engineering challenge that requires precise calculation and meticulous execution. By using the glass itself as a load-bearing element, architects can create facades with minimal visible support, offering total clarity and seamless integration.",
      "At Alumise, we utilize advanced computational simulations to determine the exact glass thickness and bonding requirements for every structural project. This ensures that the aesthetic vision is backed by uncompromising structural integrity.",
      "Key considerations for structural glazing include wind-load resistance, thermal expansion coefficients, and the selection of high-performance silicone sealants. Our team provides full technical support to ensure these factors are perfectly managed from concept to installation."
    ]
  },
  {
    slug: 'aluminium-vs-upvc-windows',
    title: 'Aluminium vs. uPVC: Choosing the Right System for Your Project',
    excerpt: 'A detailed comparison of thermal performance, durability, and aesthetics between modern aluminium and uPVC glazing.',
    date: 'March 28, 2026',
    author: 'Technical Director',
    category: 'Materials',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    content: [
      "The debate between aluminium and uPVC is one of the most common in modern construction. While both materials offer excellent benefits, the right choice depends on the specific requirements of your project—be it residential luxury or commercial durability.",
      "Aluminium is favored for its strength-to-weight ratio, allowing for much slimmer profiles and larger glass spans. This makes it the ideal choice for modern architectural designs that prioritize light and minimalist sightlines.",
      "Modern uPVC, on the other hand, offers exceptional thermal insulation and cost-effectiveness. Our high-end uPVC systems are engineered to mimic the sleek look of aluminium while providing superior energy efficiency for residential renovations."
    ]
  },
  {
    slug: 'heritage-steel-look-windows-listed-buildings',
    title: 'Heritage Steel-Look Windows in Edinburgh’s Listed Properties',
    excerpt: 'How to achieve a classic industrial aesthetic while meeting modern thermal and security requirements in conservation areas.',
    date: 'March 15, 2026',
    author: 'Design Consultant',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop',
    content: [
      "Preserving the historic character of Edinburgh’s New Town and conservation areas requires a sensitive approach to glazing. Our steel-look heritage systems provide the iconic slim sightlines of traditional steel windows with the modern benefits of thermally-broken aluminium.",
      "These systems are increasingly approved for use in listed buildings due to their ability to mimic original industrial profiles while drastically improving the building's thermal envelope and security.",
      "We work closely with local planning authorities to ensure our heritage installations meet all regulatory requirements without compromising on performance or aesthetic exactitude."
    ]
  }
];
