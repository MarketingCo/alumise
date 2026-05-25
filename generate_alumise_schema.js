/**
 * Alumise LocalBusiness Schema Generator
 * Part of the Jarvis Protocol — Autonomous Builder (Local SEO Neighborhood Offensive)
 *
 * Dynamically generates district-aware LocalBusiness JSON-LD schema for
 * Edinburgh, Midlothian, East Lothian, West Lothian, Fife, Glasgow and Scottish Borders.
 */

const BASE_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Alumise",
  "image": "https://alumise.co.uk/logo.png",
  "url": "https://alumise.co.uk",
  "logo": "https://alumise.co.uk/logo.png",
  "sameAs": ["https://www.fensa.org.uk"],
  "telephone": "0131 210 0321",
  "email": "info@alumise.co.uk",
  "priceRange": "£££",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Unit 2B, Eastfield Industrial Estate",
    "addressLocality": "Penicuik",
    "postalCode": "EH26 8HA",
    "addressRegion": "Midlothian",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 55.8340,
    "longitude": -3.2185
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "24",
    "bestRating": "5"
  }
};

const KNOWS_ABOUT = [
  "Architectural Glazing",
  "Aluminium Windows",
  "Bifold Doors",
  "Curtain Walling",
  "Commercial Shopfronts",
  "Steel-Look Systems",
  "Manufacturing"
];

const OFFER_CATALOG = {
  "@type": "OfferCatalog",
  "name": "Architectural Glazing Services",
  "itemListElement": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Aluminium Windows",
        "description": "Premium aluminium casement and tilt-turn windows manufactured in Penicuik."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Bifold Doors",
        "description": "Slim-profile bifold door systems for residential and commercial openings."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Sliding Doors",
        "description": "Minimal-frame sliding patio and lift-slide door systems."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Roof Lanterns",
        "description": "Bespoke aluminium and glass roof lanterns for natural light."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Curtain Walling",
        "description": "Structural glazing facades for commercial buildings and shopfronts."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Steel-Look Systems",
        "description": "Heritage-style steel-look aluminium windows and doors."
      }
    }
  ]
};

/**
 * Generate a district-specific LocalBusiness schema.
 * @param {string} districtName - e.g. "Morningside", "New Town", "Penicuik"
 * @param {string} regionName   - e.g. "Edinburgh", "Midlothian", "East Lothian"
 * @param {string} [description] - Optional override description
 * @returns {object} JSON-LD LocalBusiness schema object
 */
function generateLocalBusinessSchema(districtName, regionName, description) {
  const fallbackDescription = `Premium aluminium windows, bifold doors and architectural glazing manufactured in Penicuik, installed across ${districtName} and ${regionName}. FENSA accredited. Book a Design Consultation.`;

  return {
    ...BASE_BUSINESS,
    description: description || fallbackDescription,
    knowsAbout: KNOWS_ABOUT,
    hasOfferCatalog: OFFER_CATALOG,
    areaServed: [
      {
        "@type": "City",
        "name": districtName
      },
      {
        "@type": "AdministrativeArea",
        "name": regionName
      }
    ]
  };
}

/**
 * Generate the master Alumise case-study schema (non-district specific).
 * @returns {object} JSON-LD LocalBusiness schema object
 */
function generateCaseStudySchema() {
  return {
    ...BASE_BUSINESS,
    description:
      "Alumise Ltd — Premium aluminium windows, bifold doors, sliding doors, roof lanterns, curtain walling and architectural glazing. Manufactured in Penicuik, installed across Edinburgh, Midlothian and Scotland. FENSA accredited.",
    knowsAbout: KNOWS_ABOUT,
    hasOfferCatalog: OFFER_CATALOG,
    areaServed: [
      { "@type": "City", "name": "Edinburgh" },
      { "@type": "AdministrativeArea", "name": "Midlothian" },
      { "@type": "AdministrativeArea", "name": "East Lothian" },
      { "@type": "AdministrativeArea", "name": "West Lothian" },
      { "@type": "AdministrativeArea", "name": "Fife" },
      { "@type": "AdministrativeArea", "name": "Scottish Borders" }
    ]
  };
}

module.exports = {
  generateLocalBusinessSchema,
  generateCaseStudySchema,
  BASE_BUSINESS,
  OFFER_CATALOG,
  KNOWS_ABOUT
};

// CLI usage: node generate_alumise_schema.js "Morningside" "Edinburgh"
if (require.main === module) {
  const district = process.argv[2] || "Edinburgh";
  const region = process.argv[3] || "Edinburgh";
  const schema = generateLocalBusinessSchema(district, region);
  console.log(JSON.stringify(schema, null, 2));
}
