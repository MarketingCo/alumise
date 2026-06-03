export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortDesc: string;
  description: string[];
  features: string[];
  benefits: string[];
  relatedProducts: string[];
  image: string;
  faq: ServiceFAQ[];
}

export const services: Service[] = [
  {
    slug: "bifold-doors",
    title: "Bifold Doors",
    metaTitle: "Bifold Doors Edinburgh | Manufactured & Installed",
    metaDescription:
      "Aluminium bifold doors manufactured in Penicuik and installed across Edinburgh. U-values from 1.3 W/m²K, PAS 24 security, Secured by Design.",
    shortDesc:
      "Engineered aluminium bifold door systems manufactured in our Penicuik facility and installed across Edinburgh and the Lothians.",
    description: [
      "Our aluminium bifold doors are manufactured in-house at our Penicuik facility using thermally broken profiles and multi-chamber frame construction. Every system is engineered to achieve U-values as low as 1.3 W/m²K with 44mm triple-glazed units featuring warm edge spacer bars and argon gas fill. We fabricate leaves up to 3 metres in height with sightlines starting from 94mm, creating the widest possible apertures without compromising structural integrity.",
      "Security is integral to our design philosophy. All bifold door systems are tested to PAS 24:2022 and available with Secured by Design accreditation. Multi-point locking with hook bolts, deadbolts, and shoot-bolt engagement secures the master door and intermediate panels at multiple points along the track. The bottom-running carriage system uses stainless steel rollers rated for 150kg per leaf, ensuring effortless operation even after decades of daily use.",
      "From initial survey through to final installation, our Edinburgh-based team manages every aspect of your project. We offer flush threshold options for seamless indoor-outdoor transitions, integrated trickle vents for Part F compliance, and a full RAL colour powder-coating service with marine-grade finishes for coastal properties in East Lothian.",
    ],
    features: [
      "Thermally broken aluminium profiles with polyamide strips",
      "Triple glazing with argon fill and warm edge spacers (U-values from 1.3 W/m²K)",
      "PAS 24:2022 security tested with Secured by Design options",
      "Stainless steel roller carriage rated to 150kg per leaf",
      "Flush threshold with weather-rated drainage channel",
      "Marine-grade polyester powder coating to Qualicoat standards",
    ],
    benefits: [
      "Manufactured in Penicuik — not bought in from a national trade counter",
      "U-values that exceed current Scottish Building Standards by up to 40%",
      "Secured by Design options accepted by home insurers nationwide",
      "Full FENSA certification and Building Regs compliance included",
    ],
    relatedProducts: ["bifold-doors", "sliding-doors", "entrance-doors"],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    faq: [
      {
        question: "What U-value can I expect from your bifold doors?",
        answer:
          "Our standard double-glazed bifold doors achieve U-values from 1.6 W/m²K. Upgrading to 44mm triple glazing with warm edge spacers and argon fill delivers U-values from 1.3 W/m²K, comfortably exceeding Scottish Building Standards and reducing annual heating costs significantly.",
      },
      {
        question: "Do you manufacture bifold doors on-site in Penicuik?",
        answer:
          "Yes. Every aluminium frame is cut, machined, and assembled in our Penicuik manufacturing facility. We do not buy pre-fabricated frames from trade counters. This allows us to control tolerances, offer bespoke sizes up to 3m per leaf, and deliver faster lead times for Edinburgh and Lothian projects.",
      },
      {
        question: "Are your bifold doors suitable for exposed coastal locations?",
        answer:
          "Absolutely. We offer marine-grade polyester powder coating to Qualicoat SeaSide Class standards, with enhanced anodised finishes available for the most aggressive environments. All hardware is 316-grade stainless steel or PVD-coated brass to prevent corrosion in salt-laden air.",
      },
    ],
  },
  {
    slug: "sliding-doors",
    title: "Sliding Doors",
    metaTitle: "Sliding Doors Edinburgh | Slimline Aluminium Patio Doors",
    metaDescription:
      "Slimline aluminium sliding doors manufactured in Penicuik. Lift-and-slide and inline systems. U-values from 1.1 W/m²K, PAS 24 security.",
    shortDesc:
      "Slimline aluminium sliding door systems with panoramic glass, engineered for thermal efficiency and effortless operation across Edinburgh.",
    description: [
      "Our aluminium sliding doors are built around ultra-slim interlocking profiles that maximise glass area while maintaining exceptional thermal and structural performance. We manufacture both inline sliding and lift-and-slide systems at our Penicuik facility, with panel heights up to 3.5 metres and widths up to 3 metres per leaf. Sightlines start from just 20mm on our minimalist systems, creating uninterrupted views across Edinburgh gardens and skyline.",
      "Thermal performance is achieved through polyamide thermal breaks, dual EPDM compression seals, and high-specification glazing. Our triple-glazed lift-and-slide configurations deliver U-values from 1.1 W/m²K with argon-filled cavities and low-emissivity coatings on surfaces 2 and 5. The lift-and-slide mechanism engages a pneumatic seal when the handle is rotated, compressing the gasket against the frame to achieve Class 4 airtightness at 600 Pa — critical for Edinburgh's exposed hillside properties.",
      "Security is provided by multi-point espagnolette locking with anti-lift blocks and laminated inner panes where required. Our systems are tested to PAS 24 and RC3 burglary resistance standards. Every installation is carried out by our own fitting teams, not subcontractors, ensuring perfect alignment of tracks and seamless threshold integration.",
    ],
    features: [
      "Ultra-slim sightlines from 20mm on minimalist systems",
      "Lift-and-slide pneumatic seal achieving Class 4 airtightness (600 Pa)",
      "Triple glazing with U-values from 1.1 W/m²K",
      "PAS 24 and RC3 security-rated hardware",
      "Panel sizes up to 3.5m height × 3m width",
      "Dual stainless steel track with adjustable rollers",
    ],
    benefits: [
      "Up to 40% more glass area than traditional French or patio doors",
      "Lift-and-slide mechanism reduces operating force by 70%",
      "Thermal performance exceeds Scottish Building Standards without compromise",
      "In-house installation teams for precise track alignment and sealing",
    ],
    relatedProducts: ["sliding-doors", "bifold-doors", "casement-windows"],
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    faq: [
      {
        question: "What is the difference between inline and lift-and-slide?",
        answer:
          "Inline sliding doors run directly on the track with constant contact between sash and seal, suitable for standard openings. Lift-and-slide systems use a handle-operated mechanism that raises the sash onto rollers for movement, then lowers it onto a compression seal when closed. This delivers superior airtightness and is essential for large panels over 200kg or exposed Edinburgh elevations.",
      },
      {
        question: "Can sliding doors be installed in period properties?",
        answer:
          "Yes. We regularly install slimline sliding doors in Edinburgh Victorian and Georgian properties, including garden-flat conversions and mews houses. We can match existing stonework with bespoke cill details, provide heritage-style glazing bars, and work with conservation officers where Article 4 directions apply.",
      },
      {
        question: "How do you achieve such low U-values on large glass panels?",
        answer:
          "Large glass areas demand exceptional glazing specification. We use 52mm triple-glazed units with two low-E coatings, argon fill, and warm edge spacer bars. The aluminium frame incorporates a multi-chamber thermal break up to 42mm wide, minimising cold bridging at the perimeter. Combined, this delivers whole-door U-values from 1.1 W/m²K even on 3.5m panels.",
      },
    ],
  },
  {
    slug: "french-doors",
    title: "French Doors",
    metaTitle: "French Doors Edinburgh | Aluminium & uPVC Double Doors",
    metaDescription:
      "Aluminium and uPVC French doors manufactured in Penicuik. Multi-point locking, U-values from 1.4 W/m²K, heritage and modern styling for Edinburgh.",
    shortDesc:
      "Classic and contemporary French door systems in aluminium and uPVC, manufactured in Penicuik and installed across Edinburgh and the Lothians.",
    description: [
      "Our French doors combine timeless symmetry with modern thermal engineering. Manufactured in our Penicuik facility, we offer both aluminium and uPVC systems tailored to the architectural style of your Edinburgh property. Aluminium French doors feature slim 48mm sightlines and thermally broken profiles, while our uPVC systems provide exceptional value with multi-chamber construction and U-values from 1.4 W/m²K.",
      "Every French door set is fitted with multi-point espagnolette locking as standard, engaging at least three points along the master door stile. Shoot-bolts secure the slave leaf top and bottom into the frame head and cill. For enhanced security, we offer PAS 24 configurations with laminated glass and anti-jemmy strips. Astragal bars and Georgian grille options are available for period properties in Edinburgh New Town and conservation areas.",
      "We manufacture each set to exact structural opening dimensions, allowing for bespoke widths up to 2.4 metres and heights to 2.7 metres. Low threshold cills with integrated weather bars ensure Part M compliance for level access, while trickle vent options satisfy Part F ventilation requirements. All installations are FENSA registered with full Building Regulations certification.",
    ],
    features: [
      "Aluminium thermally broken frames with 48mm sightlines",
      "uPVC multi-chamber construction with U-values from 1.4 W/m²K",
      "Multi-point espagnolette locking with shoot-bolts",
      "PAS 24 security and Secured by Design upgrades available",
      "Astragal bars and Georgian grilles for heritage properties",
      "Low threshold cills with integrated weather bars",
    ],
    benefits: [
      "Perfect symmetry for traditional and transitional architecture",
      "Manufactured to exact opening size — no infill panels required",
      "FENSA registered installation with Building Regs certification",
      "Choice of aluminium slimline or uPVC high-efficiency systems",
    ],
    relatedProducts: ["entrance-doors", "casement-windows", "bifold-doors"],
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1918&auto=format&fit=crop",
    faq: [
      {
        question: "Should I choose aluminium or uPVC French doors?",
        answer:
          "Aluminium offers slimmer sightlines (48mm vs 70mm), greater colour choice with polyester powder coating, and superior structural strength for large openings. uPVC provides excellent thermal performance at a lower price point, with woodgrain foils that suit traditional cottages and suburban homes. We manufacture both in Penicuik and can advise based on your opening size, budget, and aesthetic preferences.",
      },
      {
        question: "Do French doors meet current Scottish Building Standards?",
        answer:
          "Yes. Both our aluminium and uPVC French doors exceed current Scottish Building Standards for thermal efficiency and security. We provide U-value calculations, airtightness certification, and FENSA compliance documentation with every installation. For new builds, we can supply SAP input data.",
      },
      {
        question: "Can I have asymmetrical French doors with one fixed panel?",
        answer:
          "Absolutely. We regularly manufacture unequal-pair French doors where one leaf is fixed and the other operates, or where the opening leaf is narrower than the fixed leaf. This is ideal for Edinburgh garden flats and tenement conversions where external space is limited but maximum light is desired.",
      },
    ],
  },
  {
    slug: "sash-windows",
    title: "Sash Windows",
    metaTitle: "Sash Windows Edinburgh | Heritage & Modern Timber-Look",
    metaDescription:
      "Sash windows manufactured in Penicuik for Edinburgh period properties. Timber-look uPVC and aluminium, U-values from 1.2 W/m²K, heritage compliance.",
    shortDesc:
      "Heritage-compliant vertical sliding sash windows in timber-look uPVC and aluminium, manufactured for Edinburgh's period properties.",
    description: [
      "Edinburgh's architectural heritage demands sash windows that respect Georgian, Victorian, and Edwardian proportions while delivering modern thermal performance. Our vertically sliding sash windows are manufactured in Penicuik with mechanical joints that replicate traditional mortise-and-tenon construction — no welded corners that betray a modern replacement. Run-through horns, deep bottom rails, and astragal bar patterns are fabricated to match existing windows precisely.",
      "We offer both timber-look uPVC and powder-coated aluminium systems. Our uPVC sash windows achieve U-values from 1.2 W/m²K with 28mm argon-filled double glazing and warm edge spacers. For conservation-area properties in Edinburgh New Town, Marchmont, or Stockbridge, we provide heritage-style aluminium systems with wood-effect finishes and slim 58mm sightlines that satisfy planning requirements without the maintenance burden of timber.",
      "The spring-balanced or spiral-balanced sash mechanism ensures fingertip operation with no cords to fray or weights to rattle. Tilt-in functionality allows safe cleaning from inside — essential for upper-storey Edinburgh tenement flats. All hardware is concealed within the frame, maintaining clean sightlines, while trickle vents and night-vent positions provide secure background ventilation.",
    ],
    features: [
      "Mechanical joints with run-through horns for authentic heritage appearance",
      "Spring-balanced sash operation with tilt-in for internal cleaning",
      "U-values from 1.2 W/m²K with argon-filled double glazing",
      "Heritage-compliant astragal bar patterns and deep bottom rails",
      "Concealed hardware maintaining clean sightlines",
      "Timber-look foil finishes in oak, rosewood, and cream",
    ],
    benefits: [
      "Planning-compliant for Edinburgh conservation areas and listed buildings",
      "Eliminates draughts and rattles common in original timber sashes",
      "Internal tilt-in function for safe cleaning of upper-storey flats",
      "No painting or sanding — lifetime colour stability guaranteed",
    ],
    relatedProducts: ["casement-windows", "steel-look-heritage", "entrance-doors"],
    image:
      "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=1974&auto=format&fit=crop",
    faq: [
      {
        question: "Will these sash windows pass planning in a conservation area?",
        answer:
          "Yes. Our heritage sash windows are specifically designed for Edinburgh conservation areas. We provide mechanical joints, run-through horns, slim sightlines, and authentic astragal bar patterns that satisfy planning officers in New Town, Marchmont, Stockbridge, and other protected areas. We can supply detailed drawings and samples for pre-application consultations.",
      },
      {
        question: "How do you replicate the appearance of original timber sashes?",
        answer:
          "We use mechanical jointing rather than welding, which creates the sharp corners and shadow gaps characteristic of traditional joinery. Run-through horns are integral to the sash profile, not clipped on. Deep bottom rails match original proportions, and our timber-foil finishes include woodgrain texture and matt sheen that is indistinguishable from painted timber at street level.",
      },
      {
        question: "Can sash windows be installed in top-floor tenement flats?",
        answer:
          "Absolutely. Our tilt-in sash windows are specifically popular in Edinburgh tenements where external access for cleaning is impossible. Both sashes tilt inward into the room, allowing safe cleaning from inside. We also offer restrictor stays for child safety and night-vent positions for secure background ventilation in bedrooms.",
      },
    ],
  },
  {
    slug: "casement-windows",
    title: "Casement Windows",
    metaTitle: "Casement Windows Edinburgh | Aluminium & uPVC",
    metaDescription:
      "Casement windows manufactured in Penicuik. Aluminium and uPVC with U-values from 0.8 W/m²K, PAS 24 security, concealed hinges.",
    shortDesc:
      "Versatile aluminium and uPVC casement windows engineered for thermal efficiency, security, and architectural flexibility across Edinburgh.",
    description: [
      "Our casement windows are the cornerstone of energy-efficient Edinburgh homes. Manufactured in Penicuik, we offer both aluminium and uPVC systems with configurations including side-hung, top-hung, and fixed-light combinations. Aluminium frames utilise polyamide thermal breaks up to 42mm wide, achieving whole-window U-values from 0.8 W/m²K with triple glazing. uPVC multi-chamber profiles offer outstanding value with U-values from 1.2 W/m²K and woodgrain finishes for heritage applications.",
      "Security is paramount. All casement windows are fitted with multi-point espagnolette locking that engages at the handle side, top, and bottom of the sash. PAS 24:2022 certification is available across the range, with laminated inner panes and internal glazing beads that prevent external bead removal. Concealed hinges maintain clean sightlines and eliminate the corrosion risk associated with exposed hinge hardware in Edinburgh's coastal wind and rain.",
      "We fabricate each window to exact structural-opening dimensions, with bespoke shapes including arches, gables, and circular frames. For Edinburgh's conservation areas, we provide Georgian bar layouts, monkey-tail handles, and heritage colour options including Chartwell Green and Cream. Every installation is FENSA registered with full Building Regulations certification and a 10-year insurance-backed guarantee.",
    ],
    features: [
      "Aluminium polyamide thermal breaks with triple glazing (U-values from 0.8 W/m²K)",
      "uPVC multi-chamber profiles with woodgrain foil options",
      "Multi-point espagnolette locking with PAS 24 certification",
      "Concealed friction hinges with corrosion-resistant finish",
      "Internal glazing beads for enhanced security",
      "Bespoke shapes: arches, gables, circular, and tilted frames",
    ],
    benefits: [
      "Whole-window U-values that exceed Scottish Building Standards",
      "Internal glazing beads prevent external glass removal",
      "FENSA registered with 10-year insurance-backed guarantee",
      "Heritage styling available for Edinburgh conservation areas",
    ],
    relatedProducts: ["casement-windows", "tilt-turn-windows", "steel-look-heritage"],
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    faq: [
      {
        question: "What is the difference between aluminium and uPVC casement windows?",
        answer:
          "Aluminium offers slimmer sightlines (from 48mm), greater structural strength for large openings, and a virtually unlimited RAL colour range with polyester powder coating. uPVC provides excellent thermal performance at a lower cost, with multi-chamber construction and convincing woodgrain foils. Both are manufactured in our Penicuik facility to the same exacting tolerances.",
      },
      {
        question: "Do your casement windows meet Scottish Building Standards?",
        answer:
          "Yes. All our casement windows exceed current Scottish Building Standards for thermal performance, airtightness, and security. We supply U-value calculations, airtightness test reports, and FENSA compliance certificates with every installation. For new-build projects, we provide SAP input data and psi-value calculations for thermal bridging.",
      },
      {
        question: "Can you match existing windows in a conservation area?",
        answer:
          "We regularly supply heritage-style casement windows for Edinburgh conservation areas including New Town, Dean Village, and Marchmont. Options include Georgian bar patterns, monkey-tail and pear-drop handles, heritage colour finishes, and slim sightlines that satisfy planning requirements. We can provide drawings and samples for pre-application consultations with Edinburgh City Council.",
      },
    ],
  },
  {
    slug: "roof-lanterns",
    title: "Roof Lanterns",
    metaTitle: "Roof Lanterns Edinburgh | Bespoke Aluminium Skylights",
    metaDescription: "Aluminium roof lanterns manufactured in Penicuik. Slimline rafters, self-cleaning glass, U-values from 1.0 W/m²K. Precision engineered for Edinburgh homes.",
    shortDesc:
      "Architectural aluminium roof lanterns with slimline rafters, self-cleaning glass, and superior thermal performance for Edinburgh properties.",
    description: [
      "Our aluminium roof lanterns are manufactured in Penicuik using thermally broken box-section rafters and hip bars that minimise visual obstruction while maximising structural span. We fabricate lanterns in any rectangular or square configuration, with rafter sightlines starting from 40mm. Every lantern is engineered to support triple-glazed units up to 48mm thick, achieving overall U-values from 1.0 W/m²K with argon fill, warm edge spacers, and low-emissivity coatings.",
      "Glass specification is critical for roof lanterns. We offer self-cleaning glass with a photocatalytic coating that breaks down organic dirt using UV light, which is then washed away by rainfall. For south-facing elevations in Edinburgh, solar control glass reduces solar gain by up to 78% while maintaining high light transmission. For bedrooms and media rooms, we supply acoustic laminated glass that reduces external noise by up to 40dB.",
      "Installation is carried out by our own teams, not subcontractors. We install on flat roofs, orangery roofs, and existing structural openings, integrating seamlessly with your builder's upstand construction. Every lantern includes concealed guttering, thermal breaks at all rafter junctions, and a choice of cappings in aluminium or powder-coated steel to match existing rooflines.",
    ],
    features: [
      "Thermally broken aluminium rafters with 40mm slimline sightlines",
      "Triple glazing with U-values from 1.0 W/m²K overall",
      "Self-cleaning photocatalytic glass coating",
      "Solar control options reducing gain by up to 78%",
      "Acoustic laminated glass for noise reduction up to 40dB",
      "Concealed guttering and thermal breaks at all junctions",
    ],
    benefits: [
      "Up to three times more light than vertical windows of the same area",
      "Self-cleaning glass reduces maintenance in hard-to-reach roof locations",
      "Thermal breaks eliminate condensation on internal rafter surfaces",
      "Bespoke sizing means no standard-size compromises or infill panels",
    ],
    relatedProducts: ["roof-lanterns", "casement-windows", "bifold-doors"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    faq: [
      {
        question: "What size roof lantern can you manufacture?",
        answer:
          "We manufacture roof lanterns to any rectangular or square dimension. Single lanterns up to 3m × 6m are standard; larger areas are achieved using link systems with hidden structural supports. We design each lantern based on your builder's upstand dimensions, ensuring a precise fit without unsightly infill panels.",
      },
      {
        question: "Will a roof lantern make my room too hot in summer?",
        answer:
          "Not with correct glass specification. We offer solar control glass that reduces solar heat gain by up to 78% while maintaining excellent visible light transmission. For south and west-facing lanterns in Edinburgh, we recommend solar control combined with opening vents or automated smoke vents that can be triggered by temperature sensors.",
      },
      {
        question: "How do you prevent condensation on the rafters?",
        answer:
          "Condensation forms where warm, moist internal air meets cold metal surfaces. Our aluminium rafters incorporate polyamide thermal breaks that separate the internal and external faces, keeping internal surfaces above dew point. Combined with triple glazing and warm edge spacers, this eliminates condensation even in Edinburgh's cold, damp winters.",
      },
    ],
  },
  {
    slug: "skylights",
    title: "Skylights",
    metaTitle: "Skylights Edinburgh | Fixed & Opening Rooflights",
    metaDescription:
      "Fixed and opening skylights across Edinburgh. Electric venting, U-values from 1.0 W/m²K, rain sensors and integrated blinds.",
    shortDesc:
      "Fixed and opening skylights for flat and pitched roofs, with electric venting, rain sensors, and integrated blinds for Edinburgh homes.",
    description: [
      "Our skylight range covers fixed, manual opening, and electric venting rooflights for both flat and pitched roof applications. Manufactured in our Penicuik facility, each unit is built around a thermally broken aluminium frame with dual EPDM seals and a concealed drainage channel. Flat roof skylights feature an insulated upstand kerb that integrates with your roofer's membrane system, while pitched roof units are designed for direct tile or slate installation with bespoke flashing kits.",
      "Thermal performance is achieved through triple glazing with argon fill, warm edge spacers, and low-E coatings on surfaces 2 and 5. Our fixed skylights achieve U-values from 1.0 W/m²K, while opening units maintain U-values from 1.2 W/m²K through compression-seal technology. Electric venting models include rain sensors that automatically close the sash at the first drops, and can be integrated with smart home systems for automated ventilation based on temperature and CO2 levels.",
      "For bedrooms and home offices, we offer integrated blackout blinds with side rails that eliminate light bleed — essential for Edinburgh's bright summer mornings. Solar-powered blind options are available for retrofit installations where wiring is impractical. Every skylight is non-fragile tested to BS EN 12600 and includes laminated inner panes for walk-on applications where required.",
    ],
    features: [
      "Thermally broken aluminium frame with triple glazing (U-values from 1.0 W/m²K)",
      "Electric venting with rain sensor and smart home integration",
      "Integrated blackout and pleated blind options",
      "Insulated upstand kerb for flat roof membrane integration",
      "Bespoke flashing kits for slate and tile roofs",
      "Non-fragile BS EN 12600 with laminated inner pane",
    ],
    benefits: [
      "Natural daylight reduces artificial lighting needs by up to 60%",
      "Automated venting improves indoor air quality without security risk",
      "Non-fragile construction safe for roof maintenance access",
      "Bespoke flashing ensures weathertight integration with existing roof",
    ],
    relatedProducts: ["roof-lanterns", "casement-windows", "bifold-doors"],
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
    faq: [
      {
        question: "Can skylights be installed on a flat roof?",
        answer:
          "Yes. Our flat roof skylights include an insulated upstand kerb that raises the glass above roof level to prevent ponding. The kerb is clad in aluminium and designed to integrate with EPDM, GRP, or felt roofing systems. We work directly with your roofer to ensure a weathertight detail that carries the same warranty as the rest of the roof.",
      },
      {
        question: "Do electric opening skylights need wiring?",
        answer:
          "Mains-powered electric skylights require a 240V supply to the unit, which we can arrange through your electrician. For retrofit installations where wiring is impractical, we offer solar-powered venting units with rechargeable battery backup. Both options include rain sensors and can be controlled via remote, wall switch, or smart home integration.",
      },
      {
        question: "What warranty do you offer on skylights?",
        answer:
          "We provide a 10-year insurance-backed guarantee on the frame and glazing unit, and a 5-year guarantee on electric operators and blind mechanisms. The aluminium frame carries a 25-year powder-coat finish guarantee. All warranties are backed by our own manufacturing facility in Penicuik, not a distant national supplier.",
      },
    ],
  },
  {
    slug: "curtain-walling",
    title: "Curtain Walling",
    metaTitle: "Curtain Walling Edinburgh | Commercial Glazing Systems",
    metaDescription:
      "Curtain walling for Edinburgh commercial developments. Stick-build and unitised aluminium facades, thermal breaks, CWCT certified.",
    shortDesc:
      "High-performance structural glazing facades for Edinburgh commercial developments, from stick-build to unitised systems.",
    description: [
      "Our curtain walling systems provide the structural envelope for Edinburgh's commercial buildings, from office blocks in the city centre to retail developments in the Lothians. We specialise in both stick-build systems — fabricated on-site from mullions and transoms — and unitised panels pre-glazed in our Penicuik facility for rapid installation on tight city-centre sites. Every system is engineered to withstand Edinburgh's wind loads, with structural calculations verified by independent structural engineers.",
      "Thermal performance is achieved through polyamide thermal breaks in both mullions and transoms, dual EPDM gaskets, and structurally silicone-glazed units up to 60mm thick. Our high-performance facades achieve whole-wall U-values down to 0.7 W/m²K with triple glazing and warm edge spacers. Pressure-equalised drainage within the mullion cavity prevents water ingress even during the most exposed Edinburgh weather events, and all systems are CWCT Sequence B certified for watertightness and airtightness.",
      "We provide full design support including BIM modelling, thermal bridging calculations (psi-values), and structural wind-load analysis. Our installation teams are CISRS-qualified and experienced in working at height on city-centre sites with restricted access. From concept through to final handover, we manage every aspect of the facade envelope to ensure it meets specification, programme, and budget.",
    ],
    features: [
      "Stick-build and unitised aluminium systems for all project scales",
      "Polyamide thermal breaks in mullions and transoms",
      "Structural silicone glazing with 60mm triple units",
      "CWCT Sequence B certified for watertightness and airtightness",
      "Pressure-equalised drainage within mullion cavities",
      "BIM modelling and thermal bridging calculations provided",
    ],
    benefits: [
      "Unitised panels reduce on-site installation time by up to 60%",
      "Thermal breaks eliminate cold bridging and condensation risk",
      "CWCT certification satisfies warranty and insurance requirements",
      "In-house design team provides BIM-compatible facade models",
    ],
    relatedProducts: ["curtain-walling", "entrance-doors", "steel-look-heritage"],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    faq: [
      {
        question: "What is the difference between stick-build and unitised curtain walling?",
        answer:
          "Stick-build systems are assembled on-site from individual mullions and transoms, with glazing installed afterwards. This is cost-effective for smaller projects and allows on-site flexibility. Unitised systems are pre-fabricated as complete panels in our Penicuik facility, then craned into place and sealed. Unitised is faster on site, higher quality, and ideal for large city-centre projects with tight programmes.",
      },
      {
        question: "Do you provide structural calculations for building control?",
        answer:
          "Yes. We provide full structural wind-load calculations, deflection analysis, and thermal bridging psi-values for every curtain walling project. Our documentation is prepared by chartered structural engineers and is accepted by Edinburgh City Council building control and warranty providers including NHBC and Premier Guarantee.",
      },
      {
        question: "Can curtain walling achieve Passivhaus standards?",
        answer:
          "Yes. Our high-performance curtain walling systems can be configured to meet Passivhaus requirements with whole-wall U-values down to 0.7 W/m²K, thermal-bridge-free junction details, and exceptional airtightness. We have supplied Passivhaus-certified facades for commercial and residential projects across Scotland.",
      },
    ],
  },
  {
    slug: "shopfronts",
    title: "Shopfronts",
    metaTitle: "Shopfronts Edinburgh | Aluminium Retail Frontages",
    metaDescription:
      "Aluminium shopfronts manufactured across Edinburgh. Slimline profiles, RAL powder coating, laminated safety glass, security hardware.",
    shortDesc:
      "Bespoke aluminium retail shopfronts for Edinburgh high streets, designed for security, visibility, and brand impact.",
    description: [
      "Our aluminium shopfronts are engineered for Edinburgh's high-footfall retail environment. Manufactured in Penicuik using robust 6063-T6 aluminium extrusions, each shopfront is designed to withstand daily impact from trolleys, deliveries, and pedestrian traffic while providing maximum visibility for your merchandise. Slimline 50mm mullions maximise glass area, and our integrated signage channels accommodate illuminated fascias without visible fixings.",
      "Security is critical for retail premises. We offer laminated safety glass that holds together when shattered, anti-jemmy flush bolts, and heavy-duty deadlocks with anti-drill cylinders. For high-risk locations in Edinburgh city centre, we provide LPS 1175 security-rated shopfronts with steel-reinforced frames and ballistic glass options. All hardware is concealed within the profile to maintain clean sightlines and deter tampering.",
      "Every shopfront is polyester powder coated to your chosen RAL colour with a 25-year finish guarantee. We can match corporate brand colours precisely and provide dual-colour options with one finish externally and another internally. Installation is carried out by our own fitting teams, including removal of existing shopfronts, making good of reveals, and full weather sealing to prevent water ingress into retail units.",
    ],
    features: [
      "6063-T6 aluminium extrusions with 50mm slimline mullions",
      "Laminated safety glass with anti-shatter interlayer",
      "Polyester powder coating to any RAL colour with 25-year guarantee",
      "Integrated signage channels for illuminated fascias",
      "LPS 1175 security-rated options with steel-reinforced frames",
      "Concealed hardware and anti-jemmy flush bolts",
    ],
    benefits: [
      "Maximum glass area for product visibility and natural light",
      "Laminated glass retains integrity even if cracked or impacted",
      "Powder-coated finish will not fade, peel, or corrode",
      "In-house installation includes removal and making good",
    ],
    relatedProducts: ["curtain-walling", "entrance-doors", "steel-look-heritage"],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    faq: [
      {
        question: "How long does shopfront installation take?",
        answer:
          "A standard single-bay aluminium shopfront is manufactured in 3–4 weeks and installed in 2–3 days. Large multi-bay installations or projects requiring structural steelwork may take 1–2 weeks on site. We work outside trading hours where necessary to minimise disruption to your business.",
      },
      {
        question: "Can you match my corporate brand colour exactly?",
        answer:
          "Yes. We polyester powder coat to any RAL or BS colour with colour-matching accuracy within Delta E 1.0. For premium finishes, we offer anodising in natural, bronze, and black, as well as textured and metallic powder coatings. We can provide colour samples for approval before manufacture.",
      },
      {
        question: "What security rating do I need for an Edinburgh retail unit?",
        answer:
          "For most retail locations, our standard shopfronts with laminated glass and multi-point locking provide adequate security. For high-value goods, city-centre locations, or insurance requirements, we recommend LPS 1175 SR2-rated systems with steel-reinforced frames and anti-bandit glass. We can advise based on your location, insurer requirements, and stock value.",
      },
    ],
  },
  {
    slug: "commercial-doors",
    title: "Commercial Doors",
    metaTitle: "Commercial Doors Edinburgh | Automatic & Manual Systems",
    metaDescription: "Commercial door systems for Edinburgh. DDA-compliant access, robust aluminium profiles, active motion sensors, and secure panic bar integration for businesses.",
    shortDesc:
      "Automatic sliding, swing, and manual commercial door systems engineered for high-traffic Edinburgh businesses.",
    description: [
      "Our commercial door range covers automatic sliding, automatic swing, manual swing, and revolving systems for Edinburgh offices, retail units, hospitals, and public buildings. All frames are fabricated from heavy-duty aluminium sections with thermal breaks where required for Part L compliance. Automatic systems use brushless DC motor drives with microprocessor control, providing 2 million cycle reliability and adjustable opening speeds for DDA compliance.",
      "Accessibility is non-negotiable in commercial environments. Our automatic sliding doors feature infrared motion sensors with active infrared safety curtains that prevent closure if a pedestrian is detected in the threshold. DDA-compliant low thresholds, wide opening widths, and push-pad activation ensure compliance with the Equality Act 2010. For emergency egress, we integrate panic bars, break-out swing leaves, and finger-trap protection screens.",
      "Security options include access control integration with proximity card readers, biometric scanners, and interlock airlock configurations. For out-of-hours security, our aluminium manual doors can be fitted with electric strikes, magnetic locks, and delayed egress systems. Every installation is covered by a comprehensive maintenance contract with 4-hour response times for automatic door breakdowns across Edinburgh and the Lothians.",
    ],
    features: [
      "Brushless DC motor drives with 2 million cycle reliability",
      "Infrared motion sensors with active infrared safety curtains",
      "DDA-compliant low thresholds and push-pad activation",
      "Panic bar and break-out swing leaf emergency egress options",
      "Access control integration with proximity and biometric readers",
      "4-hour breakdown response maintenance contract",
    ],
    benefits: [
      "Brushless motors reduce energy consumption by 40% versus brushed drives",
      "DDA compliance protects your business from accessibility claims",
      "Access control integration prevents unauthorised entry",
      "Local maintenance team provides rapid breakdown response",
    ],
    relatedProducts: ["curtain-walling", "entrance-doors", "steel-look-heritage"],
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1918&auto=format&fit=crop",
    faq: [
      {
        question: "Are automatic doors expensive to run?",
        answer:
          "No. Our automatic doors use brushless DC motors that consume less than 100W during operation and under 5W in standby. Compared to holding open a heated building lobby, automatic doors typically pay for themselves in energy savings within 2–3 years. We can provide energy consumption calculations for your specific usage pattern.",
      },
      {
        question: "Do you provide maintenance contracts?",
        answer:
          "Yes. Every automatic door installation includes a 12-month maintenance contract, with options to extend. Our Edinburgh-based engineers provide scheduled servicing every 6 months and 4-hour emergency response for breakdowns. Maintenance includes safety sensor calibration, wear-part replacement, and compliance documentation for insurance and health-and-safety audits.",
      },
      {
        question: "Can you integrate automatic doors with our access control system?",
        answer:
          "Absolutely. Our door controllers accept inputs from virtually any access control system including Paxton, HID, Salto, and bespoke BMS integrations. We can configure one-way traffic, time-based access, interlock airlocks, and anti-passback functions. Our engineers work directly with your security contractor to ensure seamless integration.",
      },
    ],
  },
  {
    slug: "window-installation",
    title: "Window Installation",
    metaTitle: "Window Installation Edinburgh | Replacement & New Build",
    metaDescription:
      "Window installation across Edinburgh and the Lothians. FENSA certified, Building Regs compliant, 10-year insurance-backed guarantee.",
    shortDesc:
      "Professional window installation for replacement and new-build projects across Edinburgh, with FENSA certification and airtightness testing.",
    description: [
      "Window installation is where engineering design meets structural reality. Our Edinburgh-based installation teams are FENSA registered and trained to install aluminium, uPVC, timber, and steel-look systems with precision that ensures thermal performance, airtightness, and longevity. Every installation begins with a detailed survey using laser measurement to capture opening dimensions, structural condition, and thermal bridging risks at the reveal.",
      "We do not use expanding foam as a primary sealant. Instead, we install compression-seal tapes between frame and reveal, followed by internal airtightness membranes and external weatherproof tapes. This 'inside-tight, outside-shed' approach prevents interstitial condensation and ensures the window performs to its design U-value. For Edinburgh's stone-built properties, we use bespoke cill sections and masonry ties that accommodate uneven reveals without compromising the seal.",
      "On completion, every installation is checked for operational smoothness, drainage clearance, and seal continuity. We provide FENSA compliance certificates, Building Regulations completion certificates, and airtightness test reports where required. Our installations carry a 10-year insurance-backed guarantee underwritten by an independent insurer, protecting your investment regardless of our company's future.",
    ],
    features: [
      "Laser-measured survey with thermal bridging risk assessment",
      "Compression-seal tape installation — no reliance on expanding foam",
      "Internal airtightness membrane and external weatherproof tape",
      "Bespoke cill sections for Edinburgh stone and render reveals",
      "FENSA registration and Building Regulations certification",
      "10-year insurance-backed guarantee",
    ],
    benefits: [
      "Proper sealing prevents interstitial condensation and mould growth",
      "FENSA certificate required for property sales and remortgages",
      "Insurance-backed guarantee protects your investment long-term",
      "Local Edinburgh teams understand stone construction and planning",
    ],
    relatedProducts: ["casement-windows", "tilt-turn-windows", "steel-look-heritage"],
    image:
      "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=1974&auto=format&fit=crop",
    faq: [
      {
        question: "Do I need planning permission to replace my windows?",
        answer:
          "In most cases, no. Replacement windows in existing dwellings are covered by permitted development rights, provided they are similar in appearance to the existing windows. However, if your property is in a conservation area or is listed, you will need planning permission or listed building consent. We provide drawings and handle pre-application consultations with Edinburgh City Council where required.",
      },
      {
        question: "What is FENSA and why does it matter?",
        answer:
          "FENSA is a government-authorised competent persons scheme for replacement windows and doors. A FENSA certificate proves your installation complies with Building Regulations for thermal performance, safety, and ventilation. It is required when selling or remortgaging your property. All our installations are FENSA registered, and certificates are issued within 2 weeks of completion.",
      },
      {
        question: "How do you prevent draughts around the frame?",
        answer:
          "We use a three-layer sealing system: compression-seal tape between frame and structural opening, internal airtightness membrane taped to the plaster line, and external weatherproof tape that sheds water while allowing vapour diffusion. This 'inside-tight, outside-shed' approach is proven in Passivhaus construction and eliminates the draughts common with foam-only installations.",
      },
    ],
  },
  {
    slug: "door-installation",
    title: "Door Installation",
    metaTitle: "Door Installation Edinburgh | Front, Patio & Bifold",
    metaDescription:
      "Door installation across Edinburgh and the Lothians. FENSA certified, PAS 24 compliance, 10-year insurance-backed guarantee.",
    shortDesc:
      "Expert installation of front, patio, bifold, and French doors across Edinburgh with FENSA certification and security compliance.",
    description: [
      "Door installation demands precision that affects security, weather resistance, and thermal performance for decades. Our Edinburgh installation teams are specialists in fitting aluminium, composite, uPVC, and timber doors into the challenging reveals of Edinburgh's stone and render construction. Every installation begins with a structural survey to assess lintel condition, threshold drainage, and thermal bridging at the cill and jambs.",
      "Threshold detailing is critical for both weather resistance and Part M accessibility. We install adjustable cill sections with integrated drainage channels that prevent water pooling while maintaining a level access threshold. For bifold and sliding doors, we set track systems into structural screeds with thermal breaks to prevent cold bridging at the floor junction. Multi-point locking systems are adjusted to achieve equal compression around the entire door perimeter, ensuring PAS 24 security compliance and Class 4 airtightness.",
      "We do not subcontract installation. Every fitter is directly employed by Alumise, trained in our Penicuik facility, and backed by our technical team. On completion, we provide FENSA certificates, PAS 24 compliance documentation where applicable, and a 10-year insurance-backed guarantee. For commercial projects, we offer maintenance contracts with scheduled servicing and emergency call-out.",
    ],
    features: [
      "Structural survey assessing lintel, threshold, and thermal bridging",
      "Adjustable cill sections with integrated drainage channels",
      "Track systems set into structural screeds with thermal breaks",
      "Multi-point locking adjusted for equal perimeter compression",
      "PAS 24 security compliance documentation",
      "FENSA certification and 10-year insurance-backed guarantee",
    ],
    benefits: [
      "Directly employed fitters — no subcontractors",
      "Thermal breaks at threshold prevent condensation and heat loss",
      "PAS 24 compliance accepted by insurers and warranty providers",
      "Local Edinburgh teams understand stone construction challenges",
    ],
    relatedProducts: ["bifold-doors", "sliding-doors", "entrance-doors"],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    faq: [
      {
        question: "How long does a door installation take?",
        answer:
          "A standard single entrance door takes 1 day. A bifold door set up to 4 panels takes 2–3 days including threshold preparation and sealing. Large commercial entrance systems or curtain walling integrations may take 3–5 days. We provide a detailed programme at quotation stage and work to agreed dates.",
      },
      {
        question: "Will installation damage my internal plaster or external render?",
        answer:
          "We take every precaution to protect surrounding finishes. Our installers use dust extraction, protective sheeting, and careful cutting techniques. For Edinburgh stone properties, we use masonry anchors rather than frame fixings to preserve stonework. Any making good required is included in our quotation.",
      },
      {
        question: "What security standards do your door installations meet?",
        answer:
          "All our door installations meet or exceed PAS 24:2022 for enhanced security performance. We provide compliance certificates that are accepted by home insurers, warranty providers, and building control. For commercial projects, we can achieve LPS 1175 and RC3 ratings where required.",
      },
    ],
  },
  {
    slug: "conservatories",
    title: "Conservatories & Orangeries",
    metaTitle: "Conservatories & Orangeries Edinburgh | Bespoke Glass Rooms",
    metaDescription: "Bespoke conservatories manufactured in Penicuik for Edinburgh homes. Thermally broken aluminium frames, self-cleaning glass, and U-values from 1.2 W/m²K.",
    shortDesc:
      "Bespoke conservatories and orangeries engineered for year-round comfort with superior thermal performance and architectural detail.",
    description: [
      "Our conservatories and orangeries are designed as true extensions of your Edinburgh home, not seasonal afterthoughts. Manufactured in Penicuik using thermally broken aluminium frames and high-performance glazing, we create glass rooms that remain comfortable in January and cool in July. Every design is bespoke, from Victorian faceted bays to contemporary lean-to structures with structural glass corners.",
      "Thermal performance is achieved through a combination of thermally broken aluminium profiles, 44mm triple glazing with argon fill, and insulated warm roofs where solid sections are preferred. Our warm roof systems use insulated aluminium panels with a U-value of 0.18 W/m²K, allowing you to use the space as a proper room rather than a greenhouse. For maximum light, we integrate aluminium roof lanterns with self-cleaning glass and solar control coatings.",
      "We manage every stage from planning drawings and building control approval through to foundation construction, frame installation, and final electrical connections. Our designs comply with permitted development rules where applicable, and we handle planning applications for projects in conservation areas. Every conservatory includes a 10-year insurance-backed guarantee and is certified under our FENSA registration.",
    ],
    features: [
      "Thermally broken aluminium frames with 44mm triple glazing",
      "Insulated warm roof panels with U-values from 0.18 W/m²K",
      "Integrated aluminium roof lanterns with self-cleaning glass",
      "Solar control coatings reducing gain by up to 78%",
      "Bespoke designs from Victorian to contemporary lean-to",
      "Full project management including planning and building control",
    ],
    benefits: [
      "Warm roof construction creates a true year-round living space",
      "Triple glazing and thermal breaks eliminate winter heat loss",
      "Solar control prevents overheating on south-facing elevations",
      "Full project management removes contractor coordination stress",
    ],
    relatedProducts: ["roof-lanterns", "casement-windows", "bifold-doors"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    faq: [
      {
        question: "Do I need planning permission for a conservatory?",
        answer:
          "Many conservatories fall within permitted development rights, provided they are single-storey, less than 4 metres high, and do not cover more than 50% of your garden. However, properties in conservation areas, listed buildings, or with previous extensions may require planning permission. We assess your specific situation and handle all applications with Edinburgh City Council if required.",
      },
      {
        question: "How do you prevent a conservatory from being too cold in winter?",
        answer:
          "Traditional polycarbonate conservatories are cold in winter because they have no thermal break and poor insulation. Our systems use thermally broken aluminium frames, 44mm triple glazing, and insulated warm roof panels with a U-value of 0.18 W/m²K. Combined with underfloor heating and properly detailed connections to the existing house, our conservatories achieve room temperatures comparable to the rest of your home year-round.",
      },
      {
        question: "What is the difference between a conservatory and an orangery?",
        answer:
          "A conservatory is predominantly glass, with a glazed roof and walls. An orangery includes a solid perimeter roof with a central roof lantern, and often brick or render pillars between the window sections. Orangeries feel more like a permanent room extension and typically have better thermal performance due to the solid roof area. We design and manufacture both from our Penicuik facility.",
      },
    ],
  },
  {
    slug: "secondary-glazing",
    title: "Secondary Glazing",
    metaTitle: "Secondary Glazing Edinburgh | Soundproofing for Sash Windows",
    metaDescription:
      "Secondary glazing manufactured in Penicuik. Acoustic laminated glass, U-values from 1.8 W/m²K, heritage-compliant slimline frames.",
    shortDesc:
      "Heritage-compliant secondary glazing for Edinburgh period properties, delivering acoustic insulation and thermal improvement without altering original windows.",
    description: [
      "Secondary glazing is the only solution that improves thermal and acoustic performance in Edinburgh's listed buildings and conservation areas without altering the original windows. Our slimline aluminium secondary glazing is manufactured in Penicuik with frames just 32mm wide, ensuring it is barely visible from the street and fully compliant with planning restrictions in Edinburgh New Town, Dean Village, and Marchmont.",
      "Acoustic performance is achieved through laminated glass with an acoustic interlayer that dampens sound vibration. A 100mm cavity between the original sash and the secondary panel provides the air gap essential for noise reduction. Our systems achieve up to 45dB reduction in external noise — transforming sleep quality for properties on Edinburgh's bus routes and main roads. For thermal performance, we offer low-E coated glass with argon fill, achieving U-values from 1.8 W/m²K for the combined window assembly.",
      "We manufacture horizontal and vertical sliding systems, hinged casements, and lift-out panels to suit every original window configuration. All panels feature easy-clean tilt operation that allows access to the external face of the secondary unit and the internal face of the original sash. Installation is non-invasive, with frames fixed using discreet brackets that do not damage original timber or stonework.",
    ],
    features: [
      "Slimline aluminium frames at just 32mm wide for planning compliance",
      "Acoustic laminated glass with up to 45dB noise reduction",
      "Low-E coated glass with U-values from 1.8 W/m²K combined",
      "100mm air cavity optimised for acoustic and thermal performance",
      "Easy-clean tilt operation for both sash and secondary panel",
      "Non-invasive installation with discreet fixing brackets",
    ],
    benefits: [
      "Planning-compliant for listed buildings and conservation areas",
      "No alteration to original windows — fully reversible",
      "Dramatic noise reduction for Edinburgh's busy streets",
      "Significant thermal improvement without replacing original joinery",
    ],
    relatedProducts: ["casement-windows", "entrance-doors", "steel-look-heritage"],
    image:
      "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=1974&auto=format&fit=crop",
    faq: [
      {
        question: "Will secondary glazing damage my original sash windows?",
        answer:
          "No. Our secondary glazing is fixed using discreet brackets that screw into the window reveal, not into the original sash or frame. The installation is fully reversible — if removed, there will be no visible damage to the historic joinery. This is why it is the preferred solution for listed buildings and conservation areas across Edinburgh.",
      },
      {
        question: "How much noise reduction can I expect?",
        answer:
          "With acoustic laminated glass and a 100mm cavity, our secondary glazing achieves up to 45dB reduction in external noise. This typically reduces the sound of heavy traffic to a gentle hum, and eliminates the high-frequency noise of buses and emergency vehicles. For properties on Edinburgh's main roads, this can transform sleep quality and concentration.",
      },
      {
        question: "Does secondary glazing stop condensation?",
        answer:
          "Secondary glazing reduces condensation by keeping the internal face of the original window warmer. The air cavity acts as an insulating layer, raising the surface temperature of the original sash above dew point. For severe condensation issues, we recommend combining secondary glazing with improved background ventilation using trickle vents or mechanical extract.",
      },
    ],
  },
  {
    slug: "steel-look-windows",
    title: "Steel-Look Windows",
    metaTitle: "Steel-Look Windows Edinburgh | Heritage Crittall Style",
    metaDescription:
      "Steel-look aluminium windows manufactured in Penicuik. Crittall-style glazing bars, U-values from 1.2 W/m²K, PAS 24 security.",
    shortDesc:
      "Crittall-style steel-look aluminium windows with authentic slim glazing bars and modern thermal performance for Edinburgh homes.",
    description: [
      "Our steel-look windows capture the iconic industrial aesthetic of traditional Crittall steel frames using modern thermally broken aluminium. Manufactured in Penicuik, each window features slim 30mm glazing bars with authentic mitred joints and putty-line detailing that is indistinguishable from original steel at normal viewing distance. The aluminium construction eliminates the corrosion, condensation, and single-glazing limitations of genuine steel while providing U-values from 1.2 W/m²K.",
      "The thermal performance is achieved through a 42mm polyamide thermal break, 28mm argon-filled double glazing with warm edge spacers, and dual EPDM compression seals. Unlike original steel windows, our systems achieve PAS 24 security certification with multi-point locking and internal glazing beads. For Edinburgh's conservation areas, we provide heritage-style ironmongery including monkey-tail handles, peg stays, and dummy ventilator details that satisfy planning officers.",
      "We manufacture both fixed and opening configurations, including side-hung, top-hung, and tilt-and-turn variants. Internal partition screens using the same profile system are popular for Edinburgh tenement conversions and open-plan living spaces. Every window is polyester powder coated in your choice of RAL colour, with textured finishes that replicate the slightly coarse surface of original painted steel.",
    ],
    features: [
      "30mm slim glazing bars with authentic mitred joints",
      "Thermally broken aluminium with 42mm polyamide strips",
      "U-values from 1.2 W/m²K with argon-filled double glazing",
      "PAS 24 security with multi-point locking",
      "Heritage ironmongery including monkey-tail handles and peg stays",
      "Internal partition screens for open-plan living",
    ],
    benefits: [
      "Authentic Crittall aesthetic without corrosion or condensation",
      "Thermal performance 400% better than original single-glazed steel",
      "PAS 24 security accepted by insurers and warranty providers",
      "Planning-compliant for Edinburgh conservation areas",
    ],
    relatedProducts: ["steel-look-heritage", "casement-windows", "entrance-doors"],
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop",
    faq: [
      {
        question: "How do steel-look windows compare to genuine Crittall?",
        answer:
          "Genuine Crittall steel windows are single-glazed, cold, and prone to rust in Edinburgh's damp climate. Our steel-look aluminium windows replicate the exact aesthetic with 30mm glazing bars and authentic detailing, but achieve U-values from 1.2 W/m²K — approximately 400% better thermal performance. They also require no painting and will not corrode.",
      },
      {
        question: "Are steel-look windows suitable for conservation areas?",
        answer:
          "Yes. Our steel-look windows are specifically designed for Edinburgh conservation areas including New Town, Stockbridge, and Leith. We provide slim glazing bars, heritage ironmongery, and authentic proportions that satisfy planning officers. We can supply drawings and samples for pre-application consultation with Edinburgh City Council.",
      },
      {
        question: "Can steel-look windows be used internally?",
        answer:
          "Absolutely. Internal steel-look screens are increasingly popular for Edinburgh tenement conversions and open-plan living spaces. Using the same slim glazing bars and industrial aesthetic, we manufacture fixed and sliding partition screens that divide spaces while maintaining light flow and visual connection. Internal screens do not require thermal breaks and can be specified with clear or frosted glass.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
