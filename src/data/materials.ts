export interface MaterialInsight {
  slug: string;
  name: string;
  shortDesc: string;
  fullContent: string[];
  heroImage: string;
  metrics: {
    durability: number; // 1-10
    thermalEfficiency: number; // 1-10
    maintenance: number; // 1-10 (10 = low maintenance)
    costEffectiveness: number; // 1-10
    slimSightlines: number; // 1-10
  };
  pros: string[];
  cons: string[];
  faqs: { question: string; answer: string }[];
}

export const materialsData: MaterialInsight[] = [
  {
    slug: 'aluminium',
    name: 'Aluminium Systems',
    shortDesc: 'The architect’s choice for minimalist aesthetics, massive glass spans, and extreme durability.',
    fullContent: [
      "Aluminium has revolutionized modern architecture by offering an unparalleled strength-to-weight ratio. This allows for ultra-slim frames that can support massive, floor-to-ceiling glass panels without compromising structural integrity.",
      "Naturally corrosion-resistant and 100% recyclable, our aluminium systems are finished with high-grade marine-level powder coating, ensuring they withstand the harshest Edinburgh coastal environments for decades with virtually zero maintenance.",
      "Our systems utilize advanced thermal break technology—polyamide strips that separate the inner and outer frames—to eliminate thermal bridging and deliver exceptional energy efficiency."
    ],
    heroImage: '/images/unsplash_1486406146926-c627a92ad1ab_q80_w2070.jpg',
    metrics: {
      durability: 10,
      thermalEfficiency: 8,
      maintenance: 10,
      costEffectiveness: 7,
      slimSightlines: 10
    },
    pros: ['Ultra-slim sightlines', 'Virtually maintenance-free', 'Marine-grade durability', 'Infinite RAL colour options'],
    cons: ['Higher initial investment than uPVC', 'Standard systems less efficient than timber'],
    faqs: [
      { 
        question: "Do aluminium windows cause condensation?", 
        answer: "No. Modern aluminium systems are 'thermally broken' using polyamide strips, which prevent heat transfer and ensure the internal frame remains at a comfortable temperature, eliminating the risk of condensation." 
      },
      { 
        question: "Can they be used in coastal areas?", 
        answer: "Yes. We offer marine-grade powder coating specifically designed to resist salt-spray and harsh coastal environments common in the Lothians and Fife." 
      }
    ]
  },
  {
    slug: 'timber',
    name: 'Engineered Timber',
    shortDesc: 'Traditional warmth meeting modern engineering. The gold standard for thermal insulation and heritage aesthetics.',
    fullContent: [
      "Our engineered timber systems use multi-layered wood sections bonded with opposing grains. This eliminates the natural tendency of solid wood to warp or twist, resulting in a frame that is dimensionally stable and incredibly strong.",
      "Timber is a natural insulator, offering the lowest U-values in the industry. Combined with our high-performance glazing, it creates a thermal envelope that far exceeds even the strictest building regulations.",
      "Available in a variety of sustainably sourced hardwoods and softwoods, each system is factory-finished with micro-porous stains or paints that allow the wood to breathe while offering long-term weather protection."
    ],
    heroImage: '/images/unsplash_1600607687920-4e2a09cf159d_q80_w2070.jpg',
    metrics: {
      durability: 8,
      thermalEfficiency: 10,
      maintenance: 5,
      costEffectiveness: 6,
      slimSightlines: 7
    },
    pros: ['Natural thermal excellence', 'Unmatched aesthetic warmth', 'Sustainably sourced (FSC)', 'Can be repainted/recoloured'],
    cons: ['Requires periodic maintenance', 'Bulkier profiles than aluminium'],
    faqs: [
      { 
        question: "How often do timber windows need painting?", 
        answer: "Our modern factory-finished timber systems typically only require a simple wash-down. Depending on exposure, they may need a top-coat refresh every 7-10 years, far longer than traditional joinery." 
      }
    ]
  },
  {
    slug: 'upvc',
    name: 'High-Performance uPVC',
    shortDesc: 'The ultimate in cost-effective thermal performance. Modern uPVC offers sleek profiles and exceptional value.',
    fullContent: [
      "Forget the bulky uPVC of the past. Our modern systems feature multi-chambered internal profiles that trap air to create an incredible thermal barrier, often matching the performance of much more expensive materials.",
      "We offer 'flush-sash' designs that mimic the appearance of traditional timber or sleek aluminium, providing a high-end look at a more accessible price point.",
      "uPVC is completely impervious to rot and corrosion, making it an extremely low-maintenance option for busy homeowners and commercial property managers."
    ],
    heroImage: '/images/unsplash_1512917774080-9991f1c4c750_q80_w2070.jpg',
    metrics: {
      durability: 8,
      thermalEfficiency: 9,
      maintenance: 10,
      costEffectiveness: 10,
      slimSightlines: 6
    },
    pros: ['Best value for money', 'Excellent thermal insulation', 'Zero maintenance required', 'Wide range of wood-grain foils'],
    cons: ['Thicker frames than aluminium', 'Finite lifespan compared to metal'],
    faqs: [
      { 
        question: "Does uPVC discolour over time?", 
        answer: "No. Our high-grade uPVC systems are UV-stabilized, ensuring they remain bright white or retain their foil colour even in direct sunlight for decades." 
      }
    ]
  },
  {
    slug: 'steel-look',
    name: 'Steel-Look / Heritage',
    shortDesc: 'Achieve the iconic industrial aesthetic with the high-performance benefits of modern aluminium.',
    fullContent: [
      "Our 'Steel-Look' systems are designed to provide the timeless aesthetic of traditional Crittall-style windows but with modern thermal breaks and high-security multi-point locking.",
      "Featuring ultra-slim horizontal glazing bars and industrial-style hardware, these systems are perfect for heritage renovations in Edinburgh's New Town or modern internal office partitions.",
      "Because they are built using high-strength aluminium, they offer the same minimalist sightlines as steel but at a fraction of the cost and with significantly better thermal performance."
    ],
    heroImage: '/images/unsplash_1516455590571-18256e5bb9ff_q80_w2070.jpg',
    metrics: {
      durability: 10,
      thermalEfficiency: 8,
      maintenance: 10,
      costEffectiveness: 7,
      slimSightlines: 10
    },
    pros: ['Iconic industrial aesthetic', 'Ultra-slim glazing bars', 'Heritage-approved design', 'Thermal break technology'],
    cons: ['Higher cost for specialist glazing bars'],
    faqs: [
      { 
        question: "Can these be used internally?", 
        answer: "Yes. They are extremely popular as internal partitions and doors, allowing light to flow between rooms while maintaining an industrial design theme." 
      }
    ]
  }
];
