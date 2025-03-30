import { useState } from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { format, addMonths } from 'date-fns';
import { 
  Heart, Star, Shield, Award, Clock, CheckCircle, Users, ArrowRight, 
  Timer, Tag, Sparkles, Share2, X, ArrowLeft, ArrowRight as ArrowRightIcon 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/shared/SEO';

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

const specialsWithExtras = monthlySpecials.map(special => ({
  ...special,
  endDate: addMonths(new Date(), 1).getTime(), // 1 month from now
  beforeAfterImages: {
    before: "https://images.unsplash.com/photo-1595243643203-06ba168495eb?auto=format&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?auto=format&fit=crop&q=80"
  },
  reviews: [
    {
      name: "Sarah M.",
      rating: 5,
      comment: "Amazing results! I'm so happy with my transformation.",
      date: "2 weeks ago"
    },
    {
      name: "Emily R.",
      rating: 5,
      comment: "The best investment I've made in myself. Highly recommend!",
      date: "1 month ago"
    }
  ]
}));

// Add these animation variants near the top of your file
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

// Add these color constants at the top
const theme = {
  pink: {
    light: 'bg-pink-50',
    medium: 'bg-pink-100',
    accent: 'bg-pink-500',
    hover: 'hover:bg-pink-600',
    text: 'text-pink-500',
    textHover: 'hover:text-pink-600',
    border: 'border-pink-500',
    shadow: 'shadow-pink-100'
  }
};

export default function Home() {
  const [selectedSpecial, setSelectedSpecial] = useState<number | null>(null);
  const [showCompare, setShowCompare] = useState(false);
  const [showSocialProof, setShowSocialProof] = useState(false);

  const handleShare = async (special: typeof monthlySpecials[0]) => {
    const shareData = {
      title: 'Special Offer from Skin & Body Fitness',
      text: `Check out this amazing deal: ${special.title} - Save ${special.savings}!`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(
          `${shareData.title}\n${shareData.text}\n${shareData.url}`
        );
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <>
      <SEO page="home" />
      <div className="relative bg-pink-50/95">
        {/* Hero Section - Enhanced with gradient */}
        <section className="relative h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-black/50"></div>
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Body,<br />Transform Your Life
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Experience the ultimate in body transformation with our advanced treatments and expert care
            </p>
            <div className="flex gap-4">
              <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg hover:bg-pink-600 transition">
                Book Your Consultation
              </button>
              <button className="bg-white text-pink-500 px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition">
                View Services
              </button>
            </div>
          </div>
        </section>

        {/* Monthly Specials Section */}
        <section className="py-20 bg-gradient-to-b from-pink-50 to-pink-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="bg-pink-100 text-pink-500 px-4 py-1 rounded-full font-semibold text-sm">
                Limited Time Offers
              </span>
              <h2 className="text-4xl font-bold mt-4 mb-4">Monthly Specials</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Take advantage of our exclusive monthly deals and start your transformation journey today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialsWithExtras.map((special, index) => (
                <div 
                  key={index}
                  className="bg-pink-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-pink-100"
                >
                  {/* Before/After Images */}
                  <div className="relative h-48">
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 relative overflow-hidden">
                        <img 
                          src={special.beforeAfterImages.before} 
                          alt="Before"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <span className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                          Before
                        </span>
                      </div>
                      <div className="w-1/2 relative overflow-hidden">
                        <img 
                          src={special.beforeAfterImages.after} 
                          alt="After"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <span className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                          After
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-b from-pink-50 to-pink-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{special.title}</h3>
                        <p className="text-gray-500 flex items-center text-sm">
                          <Timer className="w-4 h-4 mr-1" />
                          Valid until {special.validUntil}
                        </p>
                      </div>
                    </div>

                    {/* Countdown Timer - Enhanced */}
                    <div className="mb-4 text-center">
                      {(() => {
                        const { days, hours, minutes, seconds } = useCountdown(special.endDate);
                        return (
                          <div className="grid grid-cols-4 gap-2">
                            {[
                              { value: days, label: 'Days' },
                              { value: hours, label: 'Hours' },
                              { value: minutes, label: 'Mins' },
                              { value: seconds, label: 'Secs' }
                            ].map((time, idx) => (
                              <div key={idx} className="bg-pink-100 p-2 rounded-lg shadow-sm">
                                <div className="text-xl font-bold text-pink-500">{time.value}</div>
                                <div className="text-xs text-pink-400">{time.label}</div>
                              </div>
                            ))}
                          </div>
                        );
                      })()}
                    </div>

                    <div className="mb-4">
                      <span className="text-gray-400 line-through text-lg">{special.originalPrice}</span>
                      <span className="text-3xl font-bold text-pink-500 ml-2">{special.specialPrice}</span>
                    </div>

                    <p className="text-gray-600 mb-4">{special.description}</p>

                    <div className="space-y-2 mb-6">
                      {special.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-pink-500 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm mb-6">
                      <span className="flex items-center text-gray-500">
                        <Tag className="w-4 h-4 mr-1" />
                        {special.location}
                      </span>
                      <span className="flex items-center text-pink-500">
                        <Sparkles className="w-4 h-4 mr-1" />
                        Limited Spots
                      </span>
                    </div>

                    {/* Reviews Preview */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Client Reviews</h4>
                        <button 
                          onClick={() => setSelectedSpecial(index)}
                          className="text-sm text-pink-500 hover:text-pink-600"
                        >
                          View All
                        </button>
                      </div>
                      <div className="text-sm text-gray-600">
                        {special.reviews[0].comment.substring(0, 70)}...
                      </div>
                    </div>

                    {/* Action Buttons - Enhanced */}
                    <div className="flex gap-2 mb-4">
                      <button
                        onClick={() => handleShare(special)}
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-pink-50 text-pink-500 rounded-full hover:bg-pink-100 transition"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </button>
                      <button
                        onClick={() => setShowCompare(true)}
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-pink-50 text-pink-500 rounded-full hover:bg-pink-100 transition"
                      >
                        Compare
                      </button>
                    </div>

                    <Link
                      to="/booking"
                      className="block w-full bg-pink-500 text-white text-center py-3 rounded-full hover:bg-pink-600 transition"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center text-pink-500 hover:text-pink-600 font-semibold"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-pink-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-500 mb-2">5000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-500 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-500 mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-500 mb-2">20+</div>
                <div className="text-gray-600">Expert Staff</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services Section - Enhanced */}
        <section className="py-20 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Body Sculpting",
                  description: "Advanced techniques for targeted fat reduction",
                  image: "https://images.unsplash.com/photo-1532446872803-654cb879aa37?auto=format&fit=crop&q=80",
                  features: ["Non-Invasive", "Quick Recovery", "Lasting Results"]
                },
                {
                  title: "Skin Tightening",
                  description: "Revolutionary treatments to improve skin elasticity and texture",
                  image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80",
                  features: ["Non-Invasive", "All Skin Types", "Long-lasting Results"]
                },
                {
                  title: "Cellulite Reduction",
                  description: "Effective solutions for smoother, firmer skin",
                  image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80",
                  features: ["Targeted Treatment", "Proven Technology", "Custom Plans"]
                }
              ].map((service, index) => (
                <div key={index} className="bg-pink-50/95 rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl border border-pink-100">
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-pink-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced */}
        <section className="py-20 bg-gradient-to-b from-pink-50 to-pink-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Shield className="w-12 h-12 text-pink-500" />,
                  title: "Safe & Certified",
                  description: "All treatments are FDA approved and performed by certified professionals"
                },
                {
                  icon: <Award className="w-12 h-12 text-pink-500" />,
                  title: "Expert Team",
                  description: "Highly trained specialists with years of experience"
                },
                {
                  icon: <Clock className="w-12 h-12 text-pink-500" />,
                  title: "Quick Results",
                  description: "See visible improvements in just a few sessions"
                },
                {
                  icon: <Users className="w-12 h-12 text-pink-500" />,
                  title: "Personalized Care",
                  description: "Customized treatment plans tailored to your goals"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-pink-50 rounded-2xl shadow-lg hover:shadow-xl transition border border-pink-100">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-pink-50 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Transformation?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your free consultation today and take the first step towards achieving your body goals
            </p>
            <button className="bg-white text-pink-500 px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition inline-flex items-center">
              Book Now <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Reviews Modal */}
        <AnimatePresence>
          {selectedSpecial !== null && (
            <motion.div 
              className="fixed inset-0 bg-pink-500/20 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setSelectedSpecial(null)}
            >
              <motion.div 
                className="bg-pink-50/95 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 border border-pink-100"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold">Client Reviews</h3>
                  <button 
                    onClick={() => setSelectedSpecial(null)}
                    className="text-gray-500 hover:text-gray-700 p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-4">
                  {specialsWithExtras[selectedSpecial].reviews.map((review, idx) => (
                    <motion.div 
                      key={idx} 
                      className="border-b pb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Compare Modal */}
        <AnimatePresence>
          {showCompare && (
            <motion.div 
              className="fixed inset-0 bg-pink-500/20 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setShowCompare(false)}
            >
              <motion.div 
                className="bg-pink-50/95 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-4 md:p-6"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold">Compare Packages</h3>
                  <button 
                    onClick={() => setShowCompare(false)}
                    className="text-gray-500 hover:text-gray-700 p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Enhanced Comparison Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left p-4 border-b">Features</th>
                        {specialsWithExtras.map((special, idx) => (
                          <th key={idx} className="p-4 border-b">
                            <div className="text-center">
                              <h4 className="font-semibold">{special.title}</h4>
                              <div className="text-2xl font-bold text-pink-500">{special.specialPrice}</div>
                              <div className="text-sm text-gray-500 line-through">{special.originalPrice}</div>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {/* Features Comparison */}
                      {['Duration', 'Sessions', 'Consultation', 'Follow-up'].map((feature, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="p-4 font-medium">{feature}</td>
                          {specialsWithExtras.map((special, specialIdx) => (
                            <td key={specialIdx} className="p-4 text-center">
                              <CheckCircle className="w-5 h-5 text-pink-500 mx-auto" />
                            </td>
                          ))}
                        </tr>
                      ))}
                      {/* Additional Features */}
                      <tr className="border-b bg-pink-50">
                        <td className="p-4 font-medium">Savings</td>
                        {specialsWithExtras.map((special, idx) => (
                          <td key={idx} className="p-4 text-center font-semibold text-pink-500">
                            {special.savings}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Quick Action Buttons */}
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  {specialsWithExtras.map((special, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/booking"
                        className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
                      >
                        Book {special.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Social Proof Toast */}
        <AnimatePresence>
          {showSocialProof && (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sarah just booked</p>
                  <p className="text-sm text-gray-600">Summer Body Package in Johannesburg</p>
                  <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                </div>
                <button 
                  onClick={() => setShowSocialProof(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
} 