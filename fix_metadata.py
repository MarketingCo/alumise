import os

pages = ["about", "contact", "cookies", "privacy-policy", "process", "projects", "quote", "terms", "trust", "products", "services", "locations", "materials", "blog"]

for page in pages:
    dir_path = f"websites/alumise/src/app/{page}"
    page_path = f"{dir_path}/page.tsx"
    
    if os.path.exists(page_path):
        # Read the client component
        with open(page_path, 'r') as f:
            content = f.read()
            
        if "'use client'" not in content:
            continue
            
        # Capitalize and format
        comp_name = "".join(x.capitalize() for x in page.split('-')) + "Client"
        title_name = " ".join(x.capitalize() for x in page.split('-'))
        
        # Rename original to Client component
        client_path = f"{dir_path}/{comp_name}.tsx"
        os.rename(page_path, client_path)
        
        # Create new server component page.tsx
        new_page_content = f"""import {{ Metadata }} from 'next';
import {comp_name} from './{comp_name}';

export const metadata: Metadata = {{
  title: '{title_name} | Alumise | Aluminium Windows & Doors',
  description: 'Learn more about {title_name} at Alumise. Premium aluminium windows, bifold doors, and architectural glazing in Edinburgh.',
  alternates: {{ canonical: '/{page}' }},
}};

export default function {title_name.replace(' ', '')}Page() {{
  return <{comp_name} />;
}}
"""
        with open(page_path, 'w') as f:
            f.write(new_page_content)

print("Metadata refactoring complete.")
