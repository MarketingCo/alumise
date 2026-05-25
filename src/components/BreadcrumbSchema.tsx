"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function BreadcrumbSchema() {
  const pathname = usePathname();
  
  if (!pathname || pathname === "/") return null;

  const paths = pathname.split("/").filter(Boolean);
  
  const itemListElement = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://alumise.co.uk",
    },
  ];

  let currentPath = "";
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    
    // Capitalize and format name
    const name = path
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    itemListElement.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": name,
      "item": `https://alumise.co.uk${currentPath}`,
    });
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
