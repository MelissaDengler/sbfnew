interface MetaData {
  title: string;
  description: string;
  keywords: string[];
}

export const siteMetadata = {
  siteName: "Skin & Body Fitness",
  siteUrl: "https://www.skinandbodyfitness.co.za",
  defaultDescription: "Premium body transformation treatments in Johannesburg and Cape Town. Expert slimming solutions with proven results.",
  defaultKeywords: [
    "body sculpting",
    "fat freezing",
    "slimming clinic",
    "body transformation",
    "skin tightening",
    "cellulite reduction",
    "johannesburg",
    "cape town"
  ]
};

export const pageMetadata: Record<string, MetaData> = {
  home: {
    title: "Skin & Body Fitness | Premium Body Transformation Treatments",
    description: "Transform your body with our advanced slimming treatments. Professional body sculpting, fat freezing, and skin tightening in Johannesburg and Cape Town.",
    keywords: [
      "body transformation",
      "slimming treatments",
      "fat freezing south africa",
      "body sculpting johannesburg",
      "skin tightening cape town"
    ]
  },
  services: {
    title: "Our Services | Professional Body Sculpting & Slimming Treatments",
    description: "Discover our range of effective body transformation treatments. Expert solutions for fat reduction, skin tightening, and cellulite treatment.",
    keywords: [
      "fat freezing treatment",
      "body sculpting services",
      "cellulite reduction",
      "skin tightening treatment",
      "slimming solutions"
    ]
  },
  about: {
    title: "About Us | Expert Body Transformation Specialists",
    description: "Two sisters passionate about helping clients achieve their body goals. Professional slimming clinic with locations in Johannesburg and Cape Town.",
    keywords: [
      "slimming clinic johannesburg",
      "body transformation cape town",
      "professional fat freezing",
      "experienced therapists",
      "body sculpting experts"
    ]
  },
  contact: {
    title: "Contact Us | Book Your Consultation Today",
    description: "Book your free consultation at our Johannesburg or Cape Town clinics. Expert advice on body transformation treatments.",
    keywords: [
      "slimming clinic contact",
      "body transformation consultation",
      "fat freezing booking",
      "johannesburg slimming clinic",
      "cape town body sculpting"
    ]
  },
  booking: {
    title: "Book Appointment | Skin & Body Fitness Treatment Booking",
    description: "Schedule your body transformation treatment. Easy online booking for our Johannesburg and Cape Town clinics.",
    keywords: [
      "book slimming treatment",
      "fat freezing appointment",
      "body sculpting booking",
      "treatment consultation",
      "online booking"
    ]
  }
}; 