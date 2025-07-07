import { Heart, Star, Users, Award, Sparkles, ChevronLeft, ChevronRight, MapPin, Phone, Mail, CheckCircle, UserCheck, BadgeCheck, CalendarCheck, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SEO } from '../components/shared/SEO';

const testimonials = [
  {
    name: "Anonymous",
    quote: "I lost 2 dress sizes in 6 weeks and feel like myself again.",
  },
  {
    name: "Anonymous",
    quote: "The twins have changed my life — it's real, it works, and it's all heart.",
  },
  {
    name: "Anonymous",
    quote: "From my first session, I knew I was in the right place.",
  },
];

const clinicImages = [
  {
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    title: "Reception Area"
  },
  {
    url: "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?auto=format&fit=crop&q=80",
    title: "Treatment Room"
  },
  {
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    title: "Consultation Room"
  },
  {
    url: "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?auto=format&fit=crop&q=80",
    title: "Relaxation Area"
  }
];

const methodSteps = [
  {
    title: "Fat Breakdown",
    desc: "Using fat-dissolving injections, i-Lipo, and thermogenic detox",
    icon: <Sparkles className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Muscle Sculpting",
    desc: "EMS and Faradic muscle stimulation",
    icon: <Users className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Lymphatic Support",
    desc: "Endermologie and infrared therapy",
    icon: <Globe2 className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Skin Tightening",
    desc: "Targeted treatments to firm and smooth",
    icon: <Star className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Progress Tracking",
    desc: "Regular measurements, reviews, and accountability",
    icon: <CalendarCheck className="w-8 h-8 text-pink-500" />,
  },
];

const trustPoints = [
  {
    icon: <UserCheck className="w-6 h-6 text-pink-500 mr-2" />,
    text: "Female-founded & run — we get women's bodies and goals",
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-pink-500 mr-2" />,
    text: "Non-invasive, FDA-approved technologies only",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-pink-500 mr-2" />,
    text: "Free consultations — no pressure, just expert advice",
  },
  {
    icon: <Star className="w-6 h-6 text-pink-500 mr-2" />,
    text: "Visible results in as little as 3–6 sessions",
  },
  {
    icon: <Heart className="w-6 h-6 text-pink-500 mr-2" />,
    text: "Real support, real accountability, real care",
  },
];

export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <SEO 
        page="about" 
        customTitle="About Us | Skin & Body Fitness - Meet Our Team & Story" 
        customDescription="Learn about the mission, values, and team behind Skin & Body Fitness. Discover our story and why we are passionate about your transformation journey." 
      />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-pink-50 border-b border-pink-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-pink-600 tracking-tight flex flex-col items-center gap-2">
              <span className="inline-flex items-center gap-2">💖 About <span className="text-gray-900">Skin & Body Fitness</span></span>
            </h1>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-6">
              <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full font-semibold text-sm">Twin-Led</span>
              <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full font-semibold text-sm">Results-Driven</span>
              <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full font-semibold text-sm">Woman-Empowering</span>
            </div>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-4">
              Welcome to Skin & Body Fitness — a trusted name in advanced body contouring, slimming, and skin rejuvenation. Founded by twin sisters <span className="font-bold text-pink-600">Sam & Mel</span>, we operate two modern, welcoming studios in Northcliff (Johannesburg) and Rosenpark (Cape Town).
            </p>
            <p className="max-w-2xl mx-auto text-base text-gray-600">
              For over 12 years, we've helped thousands of women transform how they look and feel — using non-invasive, medically backed treatments that actually work. No surgery. No gimmicks. Just real results, delivered with expert care and a personal touch.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white border-b border-pink-100">
          <div className="container mx-auto px-4 max-w-4xl grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
                alt="Clinic Interior at Skin & Body Fitness"
                className="rounded-3xl shadow-xl w-full max-w-xs object-cover border border-pink-100"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 tracking-tight">👯‍♀️ Our Story</h2>
              <div className="h-1 w-16 bg-pink-200 rounded mb-4" />
              <p className="text-gray-700 mb-4 text-lg">
                As twin sisters, we know firsthand the emotional and physical journey that comes with body confidence. That's why we created Skin & Body Fitness: a safe, supportive space where women are empowered, educated, and transformed from the inside out.
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                Our goal is simple — to help you look amazing, feel powerful, and love the skin you're in.
              </p>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-20 bg-gray-50 border-b border-pink-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">📍 Our Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Johannesburg */}
              <div className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-xl border-l-4 border-pink-400 border border-pink-100 p-10 flex flex-col gap-4 group transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 tracking-tight">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 mr-2"><MapPin className="w-6 h-6 text-pink-500" /></span> Northcliff, Johannesburg <span className="ml-2 bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full text-xs">Flagship Studio</span>
                </h3>
                <div className="h-1 w-10 bg-pink-200 rounded mb-2" />
                <p className="text-gray-600 mb-2">Our original location, based just minutes from Sandton, Rosebank, and Fourways, has earned a reputation for delivering dramatic results and deeply personal care.</p>
                <div>
                  <span className="font-semibold text-pink-600">Signature Treatments:</span>
                  <ul className="list-disc ml-6 text-gray-700 mt-1 space-y-1">
                    <li>Endermologie & Faradic EMS</li>
                    <li>Fat-Dissolving Injections & Fat Burner Boosters</li>
                    <li>i-Lipo & Infrared Sauna Therapy</li>
                    <li>Laser Hair Removal & Anti-Ageing Facials</li>
                    <li>Microneedling, Peels, & Skin Rejuvenation</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold text-pink-600">Loved for:</span>
                  <ul className="list-disc ml-6 text-gray-700 mt-1 space-y-1">
                    <li>Professional staff, measurable results, and a warm, "second home" atmosphere.</li>
                  </ul>
                </div>
              </div>
              {/* Cape Town */}
              <div className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-xl border-l-4 border-pink-400 border border-pink-100 p-10 flex flex-col gap-4 group transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 tracking-tight">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 mr-2"><MapPin className="w-6 h-6 text-pink-500" /></span> Rosenpark, Cape Town <span className="ml-2 bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full text-xs">New Branch</span>
                </h3>
                <div className="h-1 w-10 bg-pink-200 rounded mb-2" />
                <p className="text-gray-600 mb-2">Now serving Cape Town's Northern Suburbs, our latest studio brings our proven formula of success to a clean, modern space perfect for working professionals, new moms, and wellness seekers.</p>
                <div>
                  <span className="font-semibold text-pink-600">Specialising in:</span>
                  <ul className="list-disc ml-6 text-gray-700 mt-1 space-y-1">
                    <li>Slimming Injections & Sauna Detox</li>
                    <li>EMS Toning & Body Sculpting</li>
                    <li>Personalised Consultations & Goal Tracking</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold text-pink-600">Loved for:</span>
                  <ul className="list-disc ml-6 text-gray-700 mt-1 space-y-1">
                    <li>Privacy, calm energy, and quick access from Durbanville, Tygervalley, and Bellville.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5-Angle Body Transformation Method */}
        <section className="py-20 bg-white border-b border-pink-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">🔬 Our 5-Angle Body Transformation Method</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
              {methodSteps.map((step, idx) => (
                <div key={idx} className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-xl border-l-4 border-pink-400 border border-pink-100 p-8 flex flex-col items-center text-center group transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 mb-3">{step.icon}</span>
                  <h4 className="font-semibold text-pink-600 mb-1 tracking-tight">{step.title}</h4>
                  <p className="text-gray-700 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-10 max-w-2xl mx-auto">
              Our method is science-backed, body-positive, and customized to your lifestyle.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50 border-b border-pink-100">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">💬 Client Love</h2>
            <div className="flex justify-center">
              <div className="relative bg-white rounded-3xl shadow-xl border border-pink-100 p-10 max-w-xl w-full text-center flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 mb-4"><Star className="w-7 h-7 text-pink-500" /></span>
                <p className="text-gray-600 italic mb-4 text-lg">"{testimonials[currentTestimonial].quote}"</p>
                <p className="font-semibold text-pink-600">{testimonials[currentTestimonial].name}</p>
                <div className="flex justify-center gap-4 mt-6">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-pink-50 border border-pink-100 hover:bg-pink-100 transition"
                  >
                    <ChevronLeft className="w-6 h-6 text-pink-500" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-pink-50 border border-pink-100 hover:bg-pink-100 transition"
                  >
                    <ChevronRight className="w-6 h-6 text-pink-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="py-20 bg-white border-b border-pink-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">🧡 Why Women Trust Skin & Body Fitness</h2>
            <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
              {trustPoints.map((point, idx) => (
                <div key={idx} className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-xl border-l-4 border-pink-400 border border-pink-100 p-8 flex items-start gap-3 group transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-100">{point.icon}</span>
                  <span className="text-gray-700 text-base">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinic Gallery Section */}
        <section className="py-20 bg-gray-50 border-b border-pink-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Our Facilities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clinicImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative cursor-pointer group rounded-2xl overflow-hidden border border-pink-100 shadow-md hover:shadow-xl transition"
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition rounded-2xl flex items-center justify-center">
                    <p className="text-white opacity-0 group-hover:opacity-100 transition text-center font-semibold">
                      {image.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-pink-500 via-pink-400 to-pink-600 text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">🌟 Ready to Transform?</h2>
            <p className="text-xl mb-4">Book your free consultation now and enjoy a complimentary 30-minute sauna session to kickstart your journey.</p>
            <div className="mb-6 flex flex-col sm:flex-row justify-center items-center gap-4">
              <span className="inline-flex items-center gap-2"><CalendarCheck className="w-5 h-5" /> Appointments available Monday–Saturday</span>
              <span className="inline-flex items-center gap-2"><MapPin className="w-5 h-5" /> Visit us in Northcliff or Rosenpark</span>
              <span className="inline-flex items-center gap-2"><Phone className="w-5 h-5" /> Call, WhatsApp, or book online</span>
            </div>
            <Link 
              to="/booking"
              className="bg-white text-pink-500 px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition inline-flex items-center font-semibold shadow-lg"
            >
              Book Your Free Consultation
            </Link>
            <div className="mt-6">
              <a href="https://www.skinandbodyfitness.co.za" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200">www.skinandbodyfitness.co.za</a>
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img 
                src={clinicImages[selectedImage].url} 
                alt={clinicImages[selectedImage].title}
                className="rounded-3xl w-full border-4 border-white shadow-2xl"
              />
              <button 
                className="absolute top-4 right-4 text-white bg-pink-500 hover:bg-pink-600 rounded-full px-4 py-2 shadow-lg"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
} 