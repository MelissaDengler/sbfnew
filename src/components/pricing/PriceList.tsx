import { useState } from 'react';
import { Clock, Check, MapPin, Sparkles, Flame, Syringe, Scale, FileText, Share2, Calendar, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LocationMap } from '../location/LocationMap';
import { images } from '../../utils/imageAssets';

const johannesburgPrices = [
  {
    category: "Fat Freezing Treatments",
    treatments: [
      {
        name: "Fat Freezing Small Area",
        price: "R1,500",
        description: "Perfect for small areas like arms or chin",
        duration: "45 mins",
        features: [
          "1 applicator",
          "Targeted fat reduction",
          "No downtime",
          "Results in 6-12 weeks"
        ]
      },
      {
        name: "Fat Freezing Medium Area",
        price: "R2,500",
        description: "Ideal for love handles or lower abdomen",
        duration: "60 mins",
        features: [
          "2 applicators",
          "Symmetrical treatment",
          "Free consultation",
          "Post-treatment massage"
        ]
      },
      {
        name: "Fat Freezing Large Area",
        price: "R3,500",
        description: "Best for abdomen or back",
        duration: "75 mins",
        features: [
          "3-4 applicators",
          "Comprehensive treatment",
          "Body analysis included",
          "Follow-up session"
        ]
      }
    ]
  },
  {
    category: "Body Contouring & Slimming",
    treatments: [
      {
        name: "Ultrasound Cavitation",
        price: "R650",
        description: "Non-invasive fat cell destruction",
        duration: "45 mins",
        features: [
          "Targeted fat reduction",
          "Cellulite improvement",
          "Skin tightening",
          "No recovery time"
        ]
      },
      {
        name: "Radio Frequency",
        price: "R650",
        description: "Skin tightening and cellulite reduction",
        duration: "45 mins",
        features: [
          "Collagen stimulation",
          "Skin firming",
          "Body contouring",
          "Anti-aging benefits"
        ]
      },
      {
        name: "Wood Therapy",
        price: "R450",
        description: "Manual lymphatic drainage and sculpting",
        duration: "45 mins",
        features: [
          "Cellulite reduction",
          "Lymphatic drainage",
          "Body sculpting",
          "Natural technique"
        ]
      }
    ]
  },
  {
    category: "Special Packages",
    treatments: [
      {
        name: "Ultimate Body Package",
        price: "R4,999",
        originalPrice: "R6,500",
        description: "Complete body transformation package",
        duration: "Multiple sessions",
        features: [
          "3 Fat Freezing Sessions",
          "3 Cavitation Sessions",
          "3 RF Sessions",
          "Free Consultation & Assessment"
        ]
      },
      {
        name: "Maintenance Package",
        price: "R2,999",
        originalPrice: "R3,900",
        description: "Keep your results with monthly treatments",
        duration: "Monthly sessions",
        features: [
          "2 Cavitation Sessions",
          "2 RF Sessions",
          "2 Wood Therapy Sessions",
          "Monthly Body Analysis"
        ]
      }
    ]
  }
];

const capeTownPrices = [
  {
    category: "Featured Special",
    treatments: [
      {
        name: "10 Injections Special Package",
        price: "R499",
        originalPrice: "R990",
        description: "Complete slimming package with sauna sessions",
        duration: "30 mins per session",
        features: [
          "10 Slimming Injections",
          "2 Sauna Sessions (30 min each)",
          "Personalized Detox Plan",
          "Healthy Eating Guide",
          "Free Body Analysis"
        ],
        tag: "BEST VALUE",
        savings: "Save 50%"
      }
    ]
  },
  {
    category: "Individual Services",
    treatments: [
      {
        name: "Sauna Session",
        price: "R200",
        description: "Detoxifying infrared sauna session",
        duration: "30 mins",
        features: [
          "Deep tissue heat therapy",
          "Toxin elimination",
          "Improved circulation",
          "Stress reduction"
        ]
      },
      {
        name: "InBody Scale Analysis",
        price: "R50",
        description: "Comprehensive body composition report",
        duration: "15 mins",
        features: [
          "Detailed body composition",
          "Muscle-fat analysis",
          "Segmental lean analysis",
          "Body water balance",
          "Printed report included"
        ]
      }
    ]
  },
  {
    category: "Injection Packages",
    treatments: [
      {
        name: "20 Slimming Injections",
        price: "R1,590",
        description: "Basic top-up package",
        duration: "Valid for 2 months",
        features: [
          "20 Injections",
          "Treatment plan",
          "Progress tracking",
          "Save R410"
        ]
      },
      {
        name: "40 Slimming Injections",
        price: "R2,890",
        description: "Standard top-up package",
        duration: "Valid for 4 months",
        features: [
          "40 Injections",
          "Treatment plan",
          "Progress tracking",
          "Save R910"
        ]
      },
      {
        name: "100 Slimming Injections",
        price: "R5,100",
        description: "Premium top-up package",
        duration: "Valid for 6 months",
        features: [
          "100 Injections",
          "Treatment plan",
          "Progress tracking",
          "Save R3,900"
        ],
        tag: "MOST POPULAR"
      },
      {
        name: "150 Slimming Injections",
        price: "R6,600",
        description: "Ultimate top-up package",
        duration: "Valid for 8 months",
        features: [
          "150 Injections",
          "Treatment plan",
          "Progress tracking",
          "Save R6,900"
        ]
      },
      {
        name: "240 Slimming Injections",
        price: "R8,500",
        description: "Professional top-up package",
        duration: "Valid for 12 months",
        features: [
          "240 Injections",
          "Treatment plan",
          "Progress tracking",
          "Save R12,100"
        ],
        tag: "BEST VALUE"
      }
    ]
  }
];

// Add testimonials data
const serviceTestimonials = {
  sauna: [
    {
      name: "Michelle K.",
      image: "/testimonials/michelle.jpg",
      text: "The infrared sauna sessions have been amazing for my detox journey. I feel lighter and more energized!",
      rating: 5
    }
  ],
  injections: [
    {
      name: "Sarah M.",
      image: "/testimonials/sarah.jpg",
      text: "The 100 injection package gave me incredible results. Lost 8kg in 2 months!",
      rating: 5
    },
    {
      name: "Emma R.",
      image: "/testimonials/emma.jpg",
      text: "Best decision ever! The team is professional and the results are amazing.",
      rating: 5
    }
  ]
};

// Animation variants
const animations = {
  card: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  },
  button: {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  },
  feature: {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  },
  shine: {
    initial: {
      x: "-100%",
      opacity: 0.5
    },
    animate: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  }
};

// Reusable components
const PriceTag = ({ 
  price, 
  originalPrice, 
  savings,
  inverted 
}: { 
  price: string; 
  originalPrice?: string; 
  savings?: string;
  inverted?: boolean;
}) => (
  <div className="relative text-right">
    {savings && (
      <div className={`
        absolute -top-8 right-0 px-3 py-1 rounded-full text-xs
        ${inverted ? 'bg-white text-pink-500' : 'bg-green-500 text-white'}
      `}>
        {savings}
      </div>
    )}
    <div className="mt-2">
      {originalPrice && (
        <span className={`text-sm block mb-1 line-through ${inverted ? 'text-white/60' : 'text-gray-400'}`}>
          {originalPrice}
        </span>
      )}
      <span className={`text-3xl font-bold ${inverted ? 'text-white' : 'bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent'}`}>
        {price}
      </span>
    </div>
  </div>
);

const FeaturedBadge = ({ text }: { text: string }) => (
  <motion.div 
    className="absolute -right-12 top-6 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-12 py-1 rotate-45 text-sm font-bold shadow-lg"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
  >
    {text}
  </motion.div>
);

const CategoryHeader = ({ title }: { title: string }) => (
  <div className="text-center mb-12">
    <motion.h3 
      className="text-3xl font-bold mb-4 relative inline-block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {title}
      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full" />
    </motion.h3>
  </div>
);

const FeatureList = ({ 
  features, 
  highlighted,
  inverted 
}: { 
  features: string[]; 
  highlighted?: boolean;
  inverted?: boolean;
}) => (
  <ul className="space-y-3 mb-6">
    {features.map((feature, idx) => (
      <motion.li 
        key={idx} 
        className={`
          flex items-center
          ${highlighted ? 'text-lg font-semibold' : ''}
          ${inverted ? 'text-white/90' : 'text-gray-600'}
        `}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: idx * 0.1 }}
      >
        <Check className={`
          ${highlighted ? 'w-6 h-6' : 'w-4 h-4'} 
          ${inverted ? 'text-white' : 'text-pink-500'} 
          mr-2
        `} />
        <span>{feature}</span>
      </motion.li>
    ))}
  </ul>
);

const MobileLocationMenu = ({ 
  selectedLocation, 
  setSelectedLocation 
}: { 
  selectedLocation: string;
  setSelectedLocation: (location: 'johannesburg' | 'capetown') => void;
}) => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 shadow-lg md:hidden z-50">
    <div className="flex justify-around p-4">
      <motion.button
        onClick={() => setSelectedLocation('johannesburg')}
        className={`flex flex-col items-center px-6 py-2 rounded-full ${
          selectedLocation === 'johannesburg'
            ? 'bg-pink-500 text-white'
            : 'bg-gray-50 text-gray-600'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        <MapPin className="w-5 h-5 mb-1" />
        <span className="text-sm">Joburg</span>
      </motion.button>
      <motion.button
        onClick={() => setSelectedLocation('capetown')}
        className={`flex flex-col items-center px-6 py-2 rounded-full ${
          selectedLocation === 'capetown'
            ? 'bg-pink-500 text-white'
            : 'bg-gray-50 text-gray-600'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        <MapPin className="w-5 h-5 mb-1" />
        <span className="text-sm">Cape Town</span>
      </motion.button>
    </div>
  </div>
);

const TreatmentCard = ({ treatment, onSelect, isFeatured }: { 
  treatment: any; 
  onSelect: (name: string) => void;
  isFeatured?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`
        group rounded-2xl shadow-lg overflow-hidden
        relative border
        ${isFeatured 
          ? 'bg-gradient-to-br from-pink-500 to-pink-600 border-pink-400 md:col-span-2 lg:col-span-3' 
          : 'bg-white border-pink-100'
        }
      `}
      variants={animations.card}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Shine effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12
          ${isFeatured ? 'opacity-10' : 'opacity-0 group-hover:opacity-5'}
        `}
        variants={animations.shine}
        initial="initial"
        animate={isHovered ? "animate" : "initial"}
      />

      {/* Featured Tag */}
      {treatment.tag && (
        <div className={`
          absolute top-0 right-0 px-4 py-1 rounded-bl-lg text-sm font-bold shadow-lg
          ${isFeatured 
            ? 'bg-white text-pink-500' 
            : 'bg-gradient-to-r from-pink-500 to-pink-600 text-white'
          }
        `}>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block"
          >
            {treatment.tag}
          </motion.span>
        </div>
      )}

      <div className={`
        p-6 ${isFeatured ? 'md:grid md:grid-cols-2 md:gap-8' : ''}
        ${treatment.tag ? 'pt-12' : ''}
      `}>
        {/* Content */}
        <div className="space-y-6 sm:space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
              <h4 className={`
                ${isFeatured ? 'text-2xl text-white' : 'text-xl bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent'} 
                font-bold mb-2
              `}>
                {treatment.name}
              </h4>
              <div className={`flex items-center ${isFeatured ? 'text-white/80' : 'text-gray-500'}`}>
                <Clock className="w-4 h-4 mr-2" />
                <span>{treatment.duration}</span>
              </div>
            </div>
            <PriceTag 
              price={treatment.price} 
              originalPrice={treatment.originalPrice}
              savings={treatment.savings}
              inverted={isFeatured}
            />
          </div>

          <p className={isFeatured ? 'text-white/90' : 'text-gray-600'}>
            {treatment.description}
          </p>
        </div>

        {/* Features Section */}
        <div className={`
          mt-6 sm:mt-0
          ${isFeatured ? 'md:border-l md:border-white/20 md:pl-8' : ''}
        `}>
          <FeatureList 
            features={treatment.features} 
            highlighted={isFeatured}
            inverted={isFeatured}
          />

          {/* Action Buttons */}
          <div className="space-y-3">
            <motion.button 
              className={`
                w-full rounded-full relative overflow-hidden
                ${isFeatured 
                  ? 'bg-white text-pink-500 hover:bg-white/90 text-lg font-bold' 
                  : 'bg-gradient-to-r from-pink-500 to-pink-600 text-white'
                }
                py-3
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </span>
            </motion.button>

            <div className="grid grid-cols-2 gap-2">
              <motion.button
                className={`
                  flex items-center justify-center px-4 py-2 rounded-full
                  ${isFeatured 
                    ? 'border border-white/30 text-white hover:bg-white/10' 
                    : 'border border-pink-200 text-pink-500 hover:bg-pink-50'
                  }
                  transition
                `}
                variants={animations.button}
                whileHover="hover"
                whileTap="tap"
                onClick={() => onSelect(treatment.name)}
              >
                <Info className="w-4 h-4 mr-2" />
                Details
              </motion.button>
              <motion.button
                className={`
                  flex items-center justify-center px-4 py-2 rounded-full
                  ${isFeatured 
                    ? 'border border-white/30 text-white hover:bg-white/10' 
                    : 'border border-pink-200 text-pink-500 hover:bg-pink-50'
                  }
                  transition
                `}
                variants={animations.button}
                whileHover="hover"
                whileTap="tap"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Update the locationInfo constant
const locationInfo = {
  johannesburg: {
    address: "42 Blanca Avenue, Northcliff",
    mapUrl: "https://maps.google.com/maps?q=Skin+And+Body+Fitness+Johannesburg",
    phone: "+27685773071",
    coordinates: {
      lat: "-26.1461",
      lng: "27.9661"
    },
    hours: [
      "Monday - Friday: 7:30 AM - 6:00 PM",
      "Saturday: 8:00 AM - 4:00 PM",
      "Sunday: Closed"
    ],
    specialties: [
      "Fat Freezing",
      "Body Contouring",
      "RF Treatments"
    ]
  },
  capetown: {
    address: "30 Oxford Street, Durbanville",
    mapUrl: "https://maps.google.com/maps/search/Skin+And+Body+Fitness+Cape+Town/@-33.8305,18.6486,17z?hl=en",
    phone: "+27813300683",
    coordinates: {
      lat: "-33.8305",
      lng: "18.6486"
    },
    hours: [
      "Monday - Friday: 7:30 AM - 6:00 PM",
      "Saturday: 8:00 AM - 4:00 PM",
      "Sunday: Closed"
    ],
    specialties: [
      "Slimming Injections",
      "Infrared Sauna",
      "Body Analysis"
    ]
  }
};

export function PriceList() {
  const [selectedLocation, setSelectedLocation] = useState<'johannesburg' | 'capetown'>('johannesburg');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isComparing, setIsComparing] = useState(false);

  const prices = selectedLocation === 'johannesburg' ? johannesburgPrices : capeTownPrices;

  return (
    <div className="bg-pink-50 py-16 pb-32 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setSelectedLocation('johannesburg')}
              className={`flex items-center px-6 py-2 rounded-full ${
                selectedLocation === 'johannesburg'
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Johannesburg
            </button>
            <button
              onClick={() => setSelectedLocation('capetown')}
              className={`flex items-center px-6 py-2 rounded-full ${
                selectedLocation === 'capetown'
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Cape Town
            </button>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            {selectedLocation === 'johannesburg' ? 'Johannesburg' : 'Cape Town'} Price List
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Our competitive pricing for premium body transformation treatments. All treatments include a complimentary consultation.
          </p>
          <div className="flex items-center justify-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            <a 
              href={locationInfo[selectedLocation].mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              {locationInfo[selectedLocation].address}
            </a>
          </div>
        </div>

        <div className="mb-16">
          <LocationMap {...locationInfo[selectedLocation]} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {Object.entries(locationInfo).map(([location, info]) => (
            <motion.button
              key={location}
              onClick={() => setSelectedLocation(location as 'johannesburg' | 'capetown')}
              className={`
                p-6 rounded-2xl text-left transition
                ${selectedLocation === location 
                  ? 'bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-lg' 
                  : 'bg-white hover:bg-pink-50'
                }
              `}
              whileHover={{ y: -5 }}
            >
              <h3 className={`text-xl font-bold mb-2 ${
                selectedLocation === location ? 'text-white' : 'text-gray-800'
              }`}>
                {location === 'johannesburg' ? 'Johannesburg Branch' : 'Cape Town Branch'}
              </h3>
              <p className={selectedLocation === location ? 'text-white/90' : 'text-gray-600'}>
                {info.address}
              </p>
              <div className="mt-4">
                <p className="font-semibold mb-2">Specialties:</p>
                <ul className="space-y-1">
                  {info.specialties.map((specialty, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-4 h-4 mr-2" />
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          variants={animations.container}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {prices.map((category, idx) => (
            <section key={idx} aria-labelledby={`category-${category.category}`}>
              <CategoryHeader title={category.category} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.treatments.map((treatment, index) => (
                  <TreatmentCard 
                    key={index}
                    treatment={treatment}
                    onSelect={setSelectedService}
                    isFeatured={category.category === "Featured Special"}
                  />
                ))}
              </div>
            </section>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            * Prices are subject to change. Package prices are valid for 6 months from purchase date.
          </p>
          <motion.button 
            className="mt-6 bg-white text-pink-500 border-2 border-pink-500 px-8 py-3 rounded-full hover:bg-pink-50 transition"
            variants={animations.button}
            whileHover="hover"
            whileTap="tap"
          >
            Download Full Price List
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">{selectedService}</h3>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Client Testimonials</h4>
                <div className="space-y-4">
                  {serviceTestimonials[selectedService.toLowerCase()]?.map((testimonial, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-pink-50 p-4 rounded-lg"
                    >
                      {/* ... testimonial content ... */}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-8 right-8 flex flex-col space-y-4">
        <motion.button
          className="bg-pink-500 text-white p-4 rounded-full shadow-lg"
          variants={animations.button}
          whileHover="hover"
          whileTap="tap"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Calendar className="w-6 h-6" />
        </motion.button>

        <motion.button
          className="bg-white text-pink-500 p-4 rounded-full shadow-lg border-2 border-pink-500"
          variants={animations.button}
          whileHover="hover"
          whileTap="tap"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setIsComparing(true)}
        >
          <Scale className="w-6 h-6" />
        </motion.button>
      </div>

      <MobileLocationMenu 
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
    </div>
  );
} 