import { Heart, Star, Users, Award, Sparkles, ChevronLeft, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    quote: "After trying numerous solutions, I finally found something that works! The team here is amazing and the results speak for themselves.",
    location: "Johannesburg"
  },
  {
    name: "Emily Thompson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    quote: "The personalized care and attention I received was exceptional. I've achieved results I never thought possible!",
    location: "Cape Town"
  },
  {
    name: "Michelle van der Merwe",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80",
    quote: "The treatments are effective and the staff is incredibly knowledgeable. I'm so glad I found this clinic!",
    location: "Johannesburg"
  }
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
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-gray-600 text-lg mb-8">
              We are two sisters with a shared passion for health, wellness, and confidence. Together, we founded our slimming clinic with one goal in mind—to help men and women feel amazing in their own skin.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
                alt="Clinic Interior"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Nothing motivates us more than seeing our clients transform, both physically and mentally. With seven highly effective slimming solutions, we offer the best, science-backed treatments to help you achieve your weight loss goals quickly and safely.
              </p>
              <div className="space-y-4">
                {[
                  "Expert guidance",
                  "Personalized care",
                  "Real results",
                  "Science-backed treatments"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-5 h-5 text-pink-500 mr-2" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Johannesburg Clinic</h3>
              <p className="text-gray-600 mb-4">
                Our Johannesburg clinic offers state-of-the-art facilities and a welcoming environment for your transformation journey.
              </p>
              <Link to="/contact" className="text-pink-500 hover:text-pink-600 flex items-center">
                Get directions <Sparkles className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Cape Town Clinic</h3>
              <p className="text-gray-600 mb-4">
                Visit our Cape Town location for expert treatments and personalized care in a relaxing atmosphere.
              </p>
              <Link to="/contact" className="text-pink-500 hover:text-pink-600 flex items-center">
                Get directions <Sparkles className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12 text-pink-500" />,
                title: "Passion",
                description: "We're passionate about helping you achieve your body goals and boost your confidence."
              },
              {
                icon: <Users className="w-12 h-12 text-pink-500" />,
                title: "Personal Care",
                description: "Every client receives a customized treatment plan tailored to their specific needs."
              },
              {
                icon: <Award className="w-12 h-12 text-pink-500" />,
                title: "Excellence",
                description: "We maintain the highest standards in all our treatments and services."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Stories</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition"
              >
                <ChevronLeft className="w-6 h-6 text-pink-500" />
              </button>
              
              <div className="text-center px-8">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-600 italic mb-4">"{testimonials[currentTestimonial].quote}"</p>
                <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                <p className="text-sm text-gray-500">{testimonials[currentTestimonial].location}</p>
              </div>

              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition"
              >
                <ChevronRight className="w-6 h-6 text-pink-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clinicImages.map((image, index) => (
              <div 
                key={index}
                className="relative cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="rounded-lg shadow-md transition transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition rounded-lg flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition text-center font-semibold">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-pink-500 mr-2" />
                Johannesburg Location
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-pink-500" />
                  123 Main Street, Sandton
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2 text-pink-500" />
                  +27 11 234 5678
                </p>
                <p className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2 text-pink-500" />
                  joburg@skinbodyfitness.co.za
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-pink-500 mr-2" />
                Cape Town Location
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-pink-500" />
                  456 Beach Road, Sea Point
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2 text-pink-500" />
                  +27 21 234 5678
                </p>
                <p className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2 text-pink-500" />
                  capetown@skinbodyfitness.co.za
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="text-xl mb-8">Your journey to a healthier, happier you starts here!</p>
          <Link 
            to="/booking"
            className="bg-white text-pink-500 px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition inline-flex items-center"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img 
              src={clinicImages[selectedImage].url} 
              alt={clinicImages[selectedImage].title}
              className="rounded-lg w-full"
            />
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 