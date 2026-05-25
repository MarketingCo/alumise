import os

metadata_mapping = {
    "about": {
        "title": "About Alumise | Premium Glazing Manufacturers in Penicuik",
        "description": "Discover Alumise, Scotland's leading manufacturer of premium aluminium windows, bifold doors, and architectural glazing. Based in Penicuik, serving Edinburgh."
    },
    "contact": {
        "title": "Contact Alumise | Get a Free Glazing Quote in Edinburgh",
        "description": "Contact Alumise today for a free design consultation. We supply and install premium aluminium windows, bifold doors, and sliding doors across Edinburgh."
    },
    "cookies": {
        "title": "Cookie Policy | Alumise Architectural Glazing",
        "description": "Read the Alumise cookie policy. We respect your privacy and only use essential cookies to improve your experience on our architectural glazing website."
    },
    "privacy-policy": {
        "title": "Privacy Policy | Alumise Data Protection Guidelines",
        "description": "Read the Alumise privacy policy. Learn how we protect the data of our Edinburgh and Lothian customers when enquiring about our premium glazing systems."
    },
    "process": {
        "title": "Our Manufacturing & Installation Process | Alumise",
        "description": "Learn about the Alumise process. From initial design to Penicuik manufacturing and FENSA-certified installation across Edinburgh, we guarantee perfection."
    },
    "projects": {
        "title": "Glazing Case Studies & Projects in Edinburgh | Alumise",
        "description": "Explore our portfolio of premium architectural glazing projects. See our aluminium windows, bifold doors, and roof lanterns installed across Edinburgh."
    },
    "quote": {
        "title": "Get a Free Glazing Quote | Alumise Windows & Doors",
        "description": "Request a free, no-obligation quote from Alumise. Competitive pricing on bespoke aluminium windows, bifold doors, and roof lanterns across Scotland."
    },
    "terms": {
        "title": "Terms & Conditions | Alumise Ltd",
        "description": "Read the terms and conditions for Alumise Ltd. Essential information for customers purchasing our manufactured aluminium glazing systems."
    },
    "trust": {
        "title": "Why Trust Alumise? | FENSA Accredited Glazing in Scotland",
        "description": "Alumise is fully FENSA accredited and offers 10-year insurance-backed guarantees on all aluminium window and door installations across Edinburgh."
    },
    "products": {
        "title": "Aluminium Windows & Doors Range | Alumise Systems",
        "description": "Browse the complete range of Alumise architectural glazing. We manufacture premium aluminium windows, bifold doors, and roof lanterns in Penicuik."
    },
    "services": {
        "title": "Glazing Installation Services in Edinburgh | Alumise",
        "description": "Expert glazing services across Edinburgh and the Lothians. From residential window replacement to commercial curtain walling, we deliver absolute precision."
    },
    "locations": {
        "title": "Areas We Serve | Edinburgh & Lothians Glazing | Alumise",
        "description": "Alumise provides premium architectural glazing across Edinburgh, Midlothian, East Lothian, and West Lothian. View our local service areas."
    },
    "materials": {
        "title": "Glazing Materials | Aluminium, uPVC & Timber | Alumise",
        "description": "Compare our high-performance glazing materials. We offer thermally broken aluminium, premium uPVC, and heritage timber-look systems for Edinburgh homes."
    },
    "blog": {
        "title": "Architectural Glazing Blog & Insights | Alumise",
        "description": "Read the latest news and technical insights from Alumise. Expert advice on aluminium windows, bifold doors, building regulations, and Edinburgh property."
    }
}

for page, meta in metadata_mapping.items():
    page_path = f"websites/alumise/src/app/{page}/page.tsx"
    
    if os.path.exists(page_path):
        with open(page_path, 'r') as f:
            content = f.read()
            
        import re
        content = re.sub(r'title: \'.*?\'', f"title: '{meta['title']}'", content)
        content = re.sub(r'description: \'.*?\'', f"description: '{meta['description']}'", content)
        
        with open(page_path, 'w') as f:
            f.write(content)

print("Metadata copy optimized.")
