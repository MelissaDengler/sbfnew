export const generateStructuredData = {
  localBusiness: () => ({
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Skin & Body Fitness",
    "image": "https://www.skinandbodyfitness.co.za/images/logo.jpg",
    "description": "Premium body transformation treatments in Johannesburg and Cape Town",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "42 Blanca Avenue",
        "addressLocality": "Northcliff",
        "addressRegion": "Johannesburg",
        "postalCode": "1709",
        "addressCountry": "ZA"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "30 Oxford Street",
        "addressLocality": "Durbanville",
        "addressRegion": "Cape Town",
        "postalCode": "7550",
        "addressCountry": "ZA"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-33.8305",
      "longitude": "18.6486"
    },
    "url": "https://www.skinandbodyfitness.co.za",
    "telephone": ["+27685773071", "+27813300683"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:30",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "R999-R5499"
  })
}; 