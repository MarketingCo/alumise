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
      "Our bi-folding doors are precision-engineered to transform the way you interact with your living space. Manufactured at our dedicated facility in Penicuik, Midlothian, these high-performance systems are designed specifically for the Scottish climate, combining ultra-slim aesthetics with uncompromising thermal efficiency and security.",
      "As a leading manufacturer and installer serving Edinburgh and the Lothians, Alumise provides bespoke bifolding door solutions that seamlessly connect your indoor and outdoor environments. Whether you are extending a traditional Victorian home in Morningside or developing a contemporary waterfront property in Leith, our systems provide the expansive views and natural light that modern architecture demands.",
      "**Technical Excellence & Thermal Performance**",
      "Thermal efficiency is at the heart of our design. With energy prices and building regulations becoming increasingly stringent, our aluminium bifold doors feature advanced thermal break technology. This ensures that even during the coldest Edinburgh winters, your home remains warm and comfortable. Our systems achieve industry-leading U-values, often exceeding the requirements for new builds and renovations alike.",
      "**Uncompromising Security for Your Peace of Mind**",
      "Security is never an afterthought at Alumise. Every bifold door system we manufacture is equipped with multi-point locking mechanisms that meet PAS 24 and 'Secured by Design' standards. The robust nature of high-grade aluminium, combined with our precision engineering in Penicuik, ensures that your property is protected by one of the most secure glazing systems available on the market.",
      "**Customisation: Tailored to Your Vision**",
      "No two projects are the same, which is why we offer a limitless range of customisation options. Choose from over 200 RAL colours to match your interior and exterior design palette. We offer various threshold options, including flush thresholds for a seamless transition between the kitchen and the garden, and multiple configuration styles—from two panels up to massive multi-leaf spans.",
      "**Why Choose Aluminium Over uPVC or Timber?**",
      "While timber offers a traditional look and uPVC is a budget-friendly option, aluminium is the superior choice for bifolding doors. **Aluminium's inherent strength-to-weight ratio** allows for significantly slimmer sightlines, meaning more glass and less frame. Unlike timber, aluminium will not warp, rot, or require regular repainting. Unlike uPVC, it remains structurally stable across extreme temperature fluctuations, ensuring your doors operate smoothly for decades.",
      "**The Alumise Advantage: Local Manufacturing in Penicuik**",
      "By choosing Alumise, you are supporting local manufacturing. Our doors are not 'off-the-shelf' products; they are custom-fabricated by our skilled engineers at Eastfield Industrial Estate in Penicuik. This local proximity allows us to maintain strict quality control, offer faster lead times across Midlothian and Edinburgh, and provide direct technical support that national resellers simply cannot match."
    ],
    features: ['Slimline Profiles', 'High-Security Multi-Point Locking', 'Flush Threshold Options', 'Exceptional Thermal Performance'],
    heroImage: '/images/unsplash_1600607687920-4e2a09cf159d_q80_w2070.jpg',
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
      "Experience the pinnacle of modern architectural glazing with Alumise premium sliding door systems. Designed to carry massive glass weights with finger-tip operation, these doors are engineered at our Penicuik facility to provide panoramic views and exceptional thermal performance for Edinburgh and Lothian homes.",
      "Our sliding doors are the ideal choice for homeowners seeking to maximise their connection with the outdoors without the stacking space required by bifold doors. Whether you are overlooking the Firth of Forth from a coastal property in East Lothian or enjoying a garden view in Morningside, our systems provide a seamless, minimalist aesthetic that transforms any living space.",
      "**Ultra-Slim Sightlines & Minimalist Design**",
      "The defining feature of our aluminium sliding doors is the ultra-slim interlocking profile. We offer sightlines as narrow as 20mm, ensuring that even when closed, your view remains virtually uninterrupted. This minimalist design is achieved through the inherent strength of high-grade aluminium, allowing us to support massive glass panels that would be impossible with other materials.",
      "**Lift-and-Slide Technology for Effortless Operation**",
      "Despite the significant weight of large-scale glass panels, our sliding doors are designed for effortless operation. We offer both inline sliding and lift-and-slide mechanisms. The lift-and-slide system allows you to raise the door onto its rollers with a simple turn of the handle, allowing it to glide smoothly across the track. When lowered, the door sits securely on its gaskets, providing industry-leading weather sealing and airtightness.",
      "**Superior Thermal Performance & Weather Resistance**",
      "Every Alumise sliding door is manufactured with advanced thermal break technology to ensure your home remains energy-efficient year-round. Our systems are tested to withstand the most severe Scottish weather conditions, achieving Class 4 airtightness and high ratings for water tightness. Combined with our premium double or triple glazing, these doors achieve exceptional U-values that exceed current building standards.",
      "**Bespoke Configurations for Grand Openings**",
      "We specialise in grand-scale glazing, offering configurations that include twin, triple, and quadruple tracks. This allows for massive multi-panel spans that can cover the entire rear elevation of a property. Our engineers in Penicuik provide full structural analysis for every project, ensuring that your sliding doors are as safe as they are beautiful.",
      "**The Alumise Advantage: Manufactured in Midlothian**",
      "By choosing Alumise, you are dealing directly with the manufacturer. Our sliding doors are custom-fabricated by our expert team at Eastfield Industrial Estate in Penicuik. This local proximity allows us to maintain strict quality control, offer shorter lead times across Edinburgh and the Lothians, and provide direct technical support that national resellers cannot match."
    ],
    features: ['Ultra-Slim Sightlines', 'Massive Panel Capability', 'Smooth Lift-and-Slide Action', 'High Weather Resistance'],
    heroImage: '/images/unsplash_1512917774080-9991f1c4c750_q80_w2070.jpg',
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
      "Your front door is more than just an entry point; it is a statement of style and a critical component of your home's security and thermal performance. At Alumise, we manufacture and install premium entrance systems that combine high-security engineering with architectural elegance, serving homeowners across Edinburgh and the Lothians.",
      "Manufactured at our Penicuik facility, our entrance doors are designed to provide a warm welcome while keeping your home secure against both intruders and the variable Scottish climate. From contemporary aluminium designer doors to traditional composite and timber systems, we offer a solution for every property style.",
      "**High-Security Engineering: PAS 24 & Secured by Design**",
      "Security is at the forefront of our entrance door design. Every system we manufacture is equipped with multi-point locking mechanisms, anti-drill cylinders, and robust hinge systems as standard. Our doors meet or exceed the requirements of PAS 24 and 'Secured by Design', providing you with the peace of mind that your home and family are protected by the highest industry standards.",
      "**Thermal Efficiency: Keeping the Warmth In**",
      "In Scotland's often damp and cold climate, a well-insulated entrance door is essential. Our aluminium and composite doors feature high-density insulated cores and advanced thermal break technology, achieving exceptional U-values. This not only keeps your hallway warm and draught-free but also contributes to the overall energy efficiency of your property.",
      "**Architectural Style & Bespoke Customisation**",
      "We believe that a front door should reflect the character of the home it protects. We offer a virtually limitless range of designs, from minimalist flush panels with integrated handles and LED lighting to traditional heritage styles with decorative glazing and classic hardware. Choose from over 200 RAL colours and a variety of textures and finishes to create a bespoke entrance that is truly unique.",
      "**Durability & Low Maintenance: Built for the Scottish Climate**",
      "Our entrance doors are engineered for durability. Unlike traditional timber doors that can warp, rot, and require regular repainting, our aluminium and high-grade composite systems are designed to withstand the elements without fading or deteriorating. A simple wipe down is all that's required to keep your Alumise entrance looking brand new for decades.",
      "**The Alumise Advantage: Manufactured in Penicuik**",
      "When you choose an Alumise entrance door, you are dealing directly with the experts. Our doors are custom-fabricated by our skilled team at Eastfield Industrial Estate in Penicuik. This allows us to maintain strict quality control, offer faster lead times across Edinburgh and Midlothian, and provide direct technical support throughout the design and installation process."
    ],
    features: ['Smart Lock Integration', 'Thermally Broken Thresholds', 'Limitless Design Options', 'Police-Approved Security'],
    heroImage: '/images/unsplash_1560185007-cde436f6a4d0_q80_w1918.jpg',
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
      "Alumise casement windows represent the perfect blend of traditional window design and modern aluminium engineering. Manufactured at our state-of-the-art facility in Penicuik, Midlothian, these windows are designed to provide maximum energy efficiency, security, and aesthetic versatility for homes across Edinburgh and the Lothians.",
      "As a specialist manufacturer, we understand the architectural diversity of Scotland. From heritage-sensitive sash replacements in the Grange to high-performance slimline systems for modern developments in Corstorphine, our casement windows are the premier choice for discerning homeowners and architects.",
      "**Superior Thermal Insulation & A-Rated Efficiency**",
      "Our aluminium casement windows are engineered with high-performance thermal breaks and multi-chambered profiles to minimize heat loss. When combined with our premium double or triple glazing, these systems achieve exceptional A-rated energy efficiency. This ensures your home remains warm during the harsh Scottish winters while significantly reducing your carbon footprint and energy bills.",
      "**Slimline Profiles for Maximum Natural Light**",
      "One of the primary advantages of choosing aluminium over traditional uPVC or timber is the material's inherent strength. This allows for significantly slimmer frames, resulting in a larger glass area that floods your home with natural light. Our slimline profiles provide a sleek, modern aesthetic that complements any property style, from period cottages to contemporary villas.",
      "**Security & Durability Built to Last**",
      "Every Alumise window is equipped with high-security, multi-point locking systems as standard, ensuring your home is protected against intruders. Unlike timber, our aluminium frames will never warp, rot, or require repainting, even when exposed to the damp and variable Edinburgh climate. A simple wipe down is all that's required to keep them looking brand new for decades.",
      "**Bespoke Finishing: The RAL Colour Palette**",
      "We offer a virtually limitless range of customisation options. Choose from hundreds of RAL colours in matte, satin, or gloss finishes to perfectly match your home's exterior and interior design. We also offer dual-colour options, allowing you to have a different colour on the inside of the frame to match your internal decor.",
      "**Direct from the Manufacturer: Penicuik, Midlothian**",
      "When you buy from Alumise, you are buying direct from the source. Our windows are fabricated by our expert team at Eastfield Industrial Estate in Penicuik. This eliminates the middleman, providing you with better value, faster lead times across Edinburgh and Midlothian, and the peace of mind that comes from knowing exactly where your windows were made."
    ],
    features: ['A-Rated Energy Efficiency', 'Double or Triple Glazing', 'Heritage Steel-Look Options', 'Concealed Hinges'],
    heroImage: '/images/unsplash_1512917774080-9991f1c4c750_q80_w2070.jpg',
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
      "The tilt-and-turn window system is the ultimate solution for homeowners seeking a combination of secure ventilation, ease of maintenance, and contemporary architectural style. Manufactured at our Penicuik facility, these versatile windows are engineered to provide maximum functionality for homes and commercial developments across Edinburgh and the Lothians.",
      "As a specialist manufacturer, Alumise provides high-performance tilt-and-turn systems that are ideal for multi-storey residential blocks, modern extensions, and any project where safety and ease of cleaning are paramount. Our systems combine robust engineering with the sleek aesthetics that modern architecture demands.",
      "**Dual-Action Functionality: Tilt for Ventilation, Turn for Cleaning**",
      "The defining feature of the tilt-and-turn system is its dual-action handle. Tilt the handle 90 degrees to open the top of the window slightly for secure, weather-protected ventilation. Turn the handle a further 90 degrees to swing the entire sash inward, allowing you to safely clean the exterior glass from inside the building. This makes them the perfect choice for upper-storey flats and high-rise developments in Edinburgh.",
      "**Superior Airtightness & Thermal Performance**",
      "Because the tilt-and-turn sash closes against a continuous compression seal, these windows offer some of the highest ratings for airtightness and water tightness available. Every Alumise tilt-and-turn window is manufactured with advanced thermal break technology and high-specification glazing, achieving exceptional U-values that exceed Scottish Building Standards and keep your home comfortable year-round.",
      "**High-Security Multi-Point Locking**",
      "Security is a standard feature of every Alumise window. Our tilt-and-turn systems are equipped with robust multi-point locking mechanisms that engage around the entire perimeter of the sash. Combined with high-grade aluminium or reinforced uPVC frames, these windows provide a formidable barrier against intruders and meet the rigorous requirements of PAS 24.",
      "**Modern Aesthetics & Expansive Glass Areas**",
      "The inherent strength of our aluminium tilt-and-turn systems allows us to support much larger sash sizes than traditional casement windows. This means you can achieve expansive, uninterrupted glass areas that flood your home with natural light. Available in a wide range of RAL colours and finishes, our windows provide a sleek, contemporary look that complements any modern property.",
      "**The Alumise Advantage: Local Manufacturing in Midlothian**",
      "When you choose Alumise, you are choosing precision engineering from the heart of Midlothian. Our tilt-and-turn windows are custom-fabricated by our skilled team at Eastfield Industrial Estate in Penicuik. This allows us to maintain total quality control, offer faster lead times across Edinburgh, and provide direct technical support that national resellers simply cannot match."
    ],
    features: ['Dual Operation Mode', 'Easy Internal Cleaning', 'High Security Locking', 'Superior Airtightness'],
    heroImage: '/images/unsplash_1503708928676-1cb796a0891e_q80_w1974.jpg',
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
      "Alumise roof lanterns and skylights are designed to act as a stunning architectural focal point, flooding your living space with natural light while providing superior thermal performance. Manufactured in our Penicuik facility, these systems are precision-engineered to meet the specific structural and aesthetic requirements of Edinburgh and Lothian homes.",
      "Whether you are planning a kitchen extension in Balerno or a modern renovation in the New Town, our roof lanterns provide a minimalist, ultra-slim aesthetic that maximises the glass area and light intake.",
      "**Precision Engineering & Structural Integrity**",
      "Our roof lanterns feature ultra-slim 40mm rafters, some of the sleekest sightlines on the market. Despite their minimalist appearance, they are engineered for extreme durability, capable of withstanding the high wind loads and snow levels typical of the Scottish climate. Every system is custom-fabricated in Midlothian using high-grade aluminium that ensures lifelong structural integrity.",
      "**Advanced Thermal Efficiency & Specialist Glass**",
      "One of the primary concerns with large-scale roof glazing is heat loss or gain. Alumise addresses this by using thermally broken aluminium frames and high-performance, double or triple glazed units. We offer a range of specialist glass options, including self-cleaning coatings and solar-control glass, which keeps your room cool in the summer and warm in the winter.",
      "**Minimalist Aesthetics for Modern Living**",
      "For homeowners seeking a clean, contemporary look, our minimalist flat rooflights and lantern systems offer a perfect solution. With no bulky rafters to obscure your view of the sky, they provide a 'borderless' feel that integrates seamlessly with modern interior design. Available in a variety of RAL colours, our systems can be finished to match your existing windows and doors.",
      "**Local Manufacturing: The Penicuik Advantage**",
      "Unlike national suppliers who ship products from afar, Alumise manufactures your roof lanterns locally in Penicuik. This means we can offer unparalleled technical support, faster delivery times across Edinburgh, and a guarantee of quality that comes from direct oversight of the fabrication process. When you choose Alumise, you are choosing precision engineering from the heart of Midlothian."
    ],
    features: ['Self-Cleaning Glass', 'Solar Control Coatings', 'Ultra-Slim Rafters', 'High-Performance Insulated Glass'],
    heroImage: '/images/unsplash_1600585154340-be6161a56a0c_q80_w2070.jpg',
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
      "Alumise specialises in the design, manufacture, and installation of high-performance curtain walling systems for commercial developments and office blocks across Scotland. Operating from our Penicuik facility, we provide structural glazing solutions that define the modern Edinburgh skyline, combining striking aesthetics with uncompromising engineering.",
      "Our curtain walling systems are engineered to provide a robust, energy-efficient building envelope that meets the most demanding structural and thermal specifications. We work closely with architects, developers, and main contractors to deliver bespoke facades that are as functional as they are visually impactful.",
      "**Versatile Stick-Build & Unitised Systems**",
      "We offer both stick-build and unitised curtain walling systems to suit various project scales and site conditions. Our stick-build systems are fabricated from high-grade aluminium mullions and transoms on-site, providing total flexibility for complex geometries. For large-scale projects with tight programmes, our unitised systems are pre-fabricated as complete panels in our Midlothian factory, allowing for rapid, high-quality installation.",
      "**Advanced Thermal Performance & CWCT Certification**",
      "In the Scottish climate, thermal performance is critical for large-scale glazing. Every Alumise curtain walling system features advanced thermal break technology and is designed to accommodate high-performance double or triple glazing. Our systems are CWCT (Centre for Window and Cladding Technology) certified, ensuring they meet rigorous standards for water tightness, airtightness, and wind resistance.",
      "**Structural Integrity & High Wind-Load Resistance**",
      "Edinburgh's exposed location demands facades that can withstand high wind loads. Our engineers provide full structural analysis for every project, ensuring that mullion and transom profiles are correctly specified to handle the expected forces. We use premium 6063-T6 aluminium extrusions to ensure long-term structural integrity and stability.",
      "**Design Support: From Concept to BIM Integration**",
      "We provide comprehensive technical support throughout the design process. Our team uses advanced CAD and BIM (Building Information Modelling) software to create precise digital twins of our facades, ensuring seamless integration with other building components. We offer a wide range of capping options and glass specifications, including solar-control and acoustic laminated units.",
      "**The Alumise Advantage: Local Manufacturing in Penicuik**",
      "By choosing Alumise for your commercial facade, you are dealing with a local manufacturer. Every component of our curtain walling is fabricated by our skilled team at Eastfield Industrial Estate in Penicuik. This allows for faster lead times, direct technical accountability, and the ability to respond rapidly to on-site requirements across Edinburgh and the Central Belt."
    ],
    features: ['Thermal Break Technology', 'Structural Silicone Glazing', 'High Wind-Load Resistance', 'BIM Integrated Design'],
    heroImage: '/images/unsplash_1486406146926-c627a92ad1ab_q80_w2070.jpg',
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
      "Our steel-look systems capture the iconic industrial aesthetic of traditional steel windows using modern thermally broken aluminium. Manufactured in Penicuik, each window features slim 30mm glazing bars with authentic mitred joints and putty-line detailing that is indistinguishable from original steel at normal viewing distance. The aluminium construction eliminates the corrosion, condensation, and single-glazing limitations of genuine steel while providing U-values from 1.2 W/m²K.",
      "As a specialist manufacturer, Alumise provides heritage-style windows and doors that are increasingly approved for use in Edinburgh's listed buildings and conservation areas. These systems allow homeowners to preserve the historic character of their property while benefiting from modern levels of comfort, security, and efficiency.",
      "**Authentic Industrial Aesthetics & Slim Sightlines**",
      "The defining feature of our steel-look system is the ultra-slim horizontal glazing bars. We have engineered these to be as slim as 30mm, replicating the elegant sightlines of original 20th-century steel windows. Combined with our industrial-style hardware—including monkey-tail handles and peg stays—these systems provide a level of authenticity that is unmatched in the aluminium market.",
      "**Superior Thermal Insulation & Security**",
      "Unlike original single-glazed steel windows that were notoriously draughty and cold, our aluminium heritage systems feature a high-performance thermal break. Combined with 28mm argon-filled double glazing, these windows achieve exceptional thermal insulation. Every Alumise heritage window is also equipped with multi-point locking mechanisms, providing a level of security that genuine steel windows cannot match.",
      "**Internal Partition Screens & Open-Plan Living**",
      "Our steel-look systems are also highly popular for internal applications. Create stunning industrial-style partitions, room dividers, and internal doors that allow light to flow through your home while maintaining a distinct architectural aesthetic. These are a particular favourite for tenement conversions and contemporary open-plan renovations in Edinburgh.",
      "**Bespoke Finishing: The Industrial Palette**",
      "While matte black is the classic choice for steel-look systems, we offer a full range of RAL colours to suit your design vision. We can also provide dual-colour options, allowing you to match your external facade while keeping a different colour internally. Our powder-coated finishes are highly durable and will never require the regular repainting associated with traditional steel.",
      "**The Alumise Advantage: Manufactured in Penicuik**",
      "By choosing Alumise, you are DEALING directly with the manufacturer. Our steel-look heritage systems are custom-fabricated by our skilled team at Eastfield Industrial Estate in Penicuik. This allows us to maintain strict quality control, offer faster lead times across Edinburgh and Midlothian, and provide direct technical support that national resellers simply cannot match."
    ],
    features: ['Iconic Slim Glazing Bars', 'Traditional Industrial Hardware', 'High Thermal Efficiency', 'Internal Partition Options'],
    heroImage: '/images/unsplash_1516455590571-18256e5bb9ff_q80_w2070.jpg',
    technicalSpecs: {
      uValue: 'From 1.2 W/m²K',
      maxDimensions: 'Unlimited via Multi-Panel Screens',
      securityRating: 'PAS 24 / RC2 Certified',
      sightlines: '30mm Glazing Bars',
      glazingOptions: 'Double or Triple Heritage Units',
      airTightness: 'Class 4 (600 Pa)'
    }
  },
];
