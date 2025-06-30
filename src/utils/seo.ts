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
    "Faradic",
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
    description: "Transform your body with our advanced slimming treatments. Professional body sculpting, Faradic, and skin tightening in Johannesburg and Cape Town.",
    keywords: [
      "body transformation",
      "slimming treatments",
      "Faradic south africa",
      "body sculpting johannesburg",
      "skin tightening cape town"
    ]
  },
  services: {
    title: "Our Services | Professional Body Sculpting & Slimming Treatments",
    description: "Discover our range of effective body transformation treatments. Expert solutions for fat reduction, skin tightening, and cellulite treatment.",
    keywords: [
      "Faradic treatment",
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
      "professional Faradic",
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
      "Faradic booking",
      "johannesburg slimming clinic",
      "cape town body sculpting"
    ]
  },
  booking: {
    title: "Book Appointment | Skin & Body Fitness Treatment Booking",
    description: "Schedule your body transformation treatment. Easy online booking for our Johannesburg and Cape Town clinics.",
    keywords: [
      "book slimming treatment",
      "Faradic appointment",
      "body sculpting booking",
      "treatment consultation",
      "online booking"
    ]
  },
  terms: {
    title: "Terms & Conditions | Skin & Body Fitness",
    description: "Read the terms and conditions for all services provided by Skin and Body Fitness, including EMS, Endermologie, Infrared Sauna Therapy, and more.",
    keywords: [
      "terms and conditions",
      "skin and body fitness",
      "wellness clinic policies",
      "slimming clinic terms",
      "body sculpting legal"
    ]
  },
  privacy: {
    title: "Privacy Policy | Skin & Body Fitness",
    description: "Read our privacy policy to learn how Skin and Body Fitness collects, uses, and protects your personal information.",
    keywords: [
      "privacy policy",
      "data protection",
      "client confidentiality",
      "skin and body fitness privacy",
      "wellness clinic privacy"
    ]
  }
}; 