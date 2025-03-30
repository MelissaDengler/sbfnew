import React from 'react';
import { Heart, Star, Users, Calendar, ArrowRight, Phone, MapPin, Mail, Clock, ChevronRight, Timer, Sparkles, Tag, CheckCircle2, Trophy, Zap, ShieldCheck } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Booking from './pages/Booking';
import { HelmetProvider } from 'react-helmet-async';

// Benefits data
const benefits = [
  {
    icon: <Trophy className="w-12 h-12 text-pink-500" />,
    title: "Proven Results",
    description: "Over 1000+ satisfied clients with documented transformations"
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-pink-500" />,
    title: "Safe & Professional",
    description: "All treatments performed by certified specialists using medical-grade equipment"
  },
  {
    icon: <Zap className="w-12 h-12 text-pink-500" />,
    title: "Quick Recovery",
    description: "No downtime treatments - return to your daily activities immediately"
  }
];

// Monthly Specials
const monthlySpecials = [
  {
    title: "Summer Body Package",
    location: "Johannesburg",
    originalPrice: "R3,500",
    specialPrice: "R2,800",
    description: "Complete body transformation package including 3 fat freezing sessions + 2 body wraps",
    validUntil: "March 31, 2025",
    savings: "20%",
    features: ["3 Fat Freezing Sessions", "2 Body Wraps", "Free Consultation", "Body Analysis"]
  },
  {
    title: "Ultimate Slim Bundle",
    location: "Cape Town",
    originalPrice: "R4,200",
    specialPrice: "R3,150",
    description: "6 laser lipo sessions + 3 ultrasonic cavitation treatments",
    validUntil: "March 31, 2025",
    savings: "25%",
    features: ["6 Laser Lipo Sessions", "3 Cavitation Treatments", "Nutritional Guide", "Progress Tracking"]
  },
  {
    title: "First-Time Client Special",
    location: "Both Branches",
    originalPrice: "R1,500",
    specialPrice: "R999",
    description: "Trial package including consultation, body analysis, and 2 slimming treatments",
    validUntil: "March 31, 2025",
    savings: "33%",
    features: ["2 Slimming Treatments", "Body Analysis", "Consultation", "Treatment Plan"]
  }
];

// Testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "After 6 sessions, I lost 15cm around my waist! The team at Skin & Body Fitness is amazing and professional.",
    beforeImage: "https://images.unsplash.com/photo-1595243643203-06ba168495eb?auto=format&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?auto=format&fit=crop&q=80",
    location: "Johannesburg Branch"
  },
  {
    name: "Emily Thompson",
    rating: 5,
    comment: "The fat freezing treatment gave me incredible results. I'm so much more confident now!",
    beforeImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1583454155184-870a1f63aebc?auto=format&fit=crop&q=80",
    location: "Cape Town Branch"
  },
  {
    name: "Michelle van der Merwe",
    rating: 5,
    comment: "Best slimming center in Johannesburg! The body wraps and cavitation treatments really work.",
    beforeImage: "https://images.unsplash.com/photo-1596611629870-2d08d0d2b5da?auto=format&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80",
    location: "Johannesburg Branch"
  }
];

// Pricing data
const johannesburgServices = [
  {
    name: "Body Sculpting Package",
    price: "R1,200",
    description: "Includes cavitation and radio frequency",
    duration: "60 mins"
  },
  {
    name: "Premium Fat Freezing",
    price: "R2,500",
    description: "Advanced cryolipolysis treatment",
    duration: "90 mins"
  },
  {
    name: "Cellulite Reduction",
    price: "R950",
    description: "Specialized massage and vacuum therapy",
    duration: "45 mins"
  }
];

const capeTownServices = [
  {
    name: "Laser Lipo Package",
    price: "R1,800",
    description: "Latest laser technology for fat reduction",
    duration: "75 mins"
  },
  {
    name: "Body Wraps Deluxe",
    price: "R1,100",
    description: "Includes mineral wrap and infrared",
    duration: "60 mins"
  },
  {
    name: "Ultrasonic Cavitation",
    price: "R1,400",
    description: "targeted fat cell destruction",
    duration: "45 mins"
  }
];

function App() {
  return (
    <HelmetProvider>
      <Router>
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RootLayout>
      </Router>
    </HelmetProvider>
  );
}

export default App;