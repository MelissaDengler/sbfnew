import { SEO } from '../components/shared/SEO';
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Sparkles, Droplet, Zap, Star, Scissors, Wand2, Eye, Feather, Smile, UserCheck, HeartPulse, BadgeCheck, Flame, Sparkle, Crown, Award, Hand, Gem, CheckCircle, TrendingUp, Users, Calendar, Info, Droplet as DropletIcon, Zap as ZapIcon, Star as StarIcon, Wand2 as WandIcon, Eye as EyeIcon, Feather as FeatherIcon, Smile as SmileIcon, UserCheck as UserCheckIcon, HeartPulse as HeartPulseIcon, BadgeCheck as BadgeCheckIcon, Flame as FlameIcon, Sparkle as SparkleIcon, Crown as CrownIcon, Award as AwardIcon, Hand as HandIcon, Gem as GemIcon, CheckCircle as CheckCircleIcon, TrendingUp as TrendingUpIcon, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.hash]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <SEO
        page="services"
        customTitle="Services & Packages | Skin & Body Fitness"
        customDescription="Explore our advanced slimming, shaping, and wellness services and packages. Find the perfect treatment for your goals at Skin & Body Fitness."
      />
      {/* Glitter/Glow Animation CSS */}
      <style>{`
        .glitter-heading {
          position: relative;
          display: inline-block;
          transition: text-shadow 0.3s, color 0.3s;
        }
        .glitter-heading:hover {
          color: #ec4899;
          text-shadow:
            0 0 8px #ec4899,
            0 0 16px #f472b6,
            0 0 32px #f9a8d4,
            0 0 48px #fff0f6;
          animation: glitter 1.2s linear infinite;
        }
        @keyframes glitter {
          0% { filter: brightness(1) drop-shadow(0 0 2px #f9a8d4); }
          20% { filter: brightness(1.2) drop-shadow(0 0 6px #ec4899); }
          40% { filter: brightness(1.4) drop-shadow(0 0 12px #f472b6); }
          60% { filter: brightness(1.2) drop-shadow(0 0 6px #ec4899); }
          80% { filter: brightness(1.1) drop-shadow(0 0 4px #f9a8d4); }
          100% { filter: brightness(1) drop-shadow(0 0 2px #f9a8d4); }
        }
      `}</style>
      <main className="bg-gradient-to-br from-pink-50 via-white to-pink-100 min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <span className="glitter-heading">✨Our Services</span>
          </motion.h1>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {/* Fat Dissolving Injections Card */}
            <motion.div
              className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-xl border-l-4 border-pink-400 border border-pink-100 p-10 flex flex-col min-h-[480px] space-y-4 group transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              whileHover={{ y: -6, boxShadow: '0 8px 32px 0 rgba(236,72,153,0.15)' }}
            >
              <span className="absolute top-5 right-5 bg-pink-100 text-pink-500 text-xs font-bold px-3 py-1 rounded shadow-sm">Available in Joburg & Cape Town</span>
              <div className="flex items-center gap-3 mb-3">
                <Droplet className="w-8 h-8 text-pink-400" />
                <h2 className="text-xl font-bold text-pink-500">Fat Dissolving Injections</h2>
              </div>
              <div className="text-gray-600 mb-3">Target stubborn fat, sculpt your figure, and feel confident in your skin. Non-invasive, safe, and effective for visible results.</div>
              <div className="mb-4">
                <span className="inline-block bg-pink-100 text-pink-500 text-xs font-bold px-3 py-1 rounded">From R299</span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 mb-4 pl-2">
                <li>• 150 Injections – R6,600</li>
                <li>• 100 Injections – R5,100</li>
                <li>• 40 Injections – R2,890</li>
                <li>• 20 Injections – R1,590</li>
                <li>• 10 Injections – R850</li>
                <li>• 6 Injections – R299</li>
              </ul>
              <div className="flex-1" />
              <div className="flex justify-end pt-2">
                <Link to="/booking">
                  <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition font-semibold shadow">
                    Book Now
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Infrared Sauna Detox Card */}
            <motion.div
              className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-xl border-l-4 border-pink-400 border border-pink-100 p-10 flex flex-col min-h-[480px] space-y-4 group transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              whileHover={{ y: -6, boxShadow: '0 8px 32px 0 rgba(236,72,153,0.15)' }}
            >
              <span className="absolute top-5 right-5 bg-pink-100 text-pink-500 text-xs font-bold px-3 py-1 rounded shadow-sm">Available in Joburg & Cape Town</span>
              <div className="flex items-center gap-3 mb-3">
                <Flame className="w-8 h-8 text-pink-400" />
                <h2 className="text-xl font-bold text-pink-500">Infrared Sauna Detox</h2>
              </div>
              <div className="text-gray-600 mb-3">Deep detox, calorie burn, and relaxation with infrared dome or blanket. Boosts circulation and immunity.</div>
              <div className="mb-4">
                <span className="inline-block bg-pink-100 text-pink-500 text-xs font-bold px-3 py-1 rounded">R200 / session</span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 mb-4 pl-2">
                <li>• Burn up to 600 calories in 30 min</li>
                <li>• Relieve pain & inflammation</li>
                <li>• Improve sleep, mood, & skin tone</li>
                <li>• Boost immunity & reduce water retention</li>
              </ul>
              <div className="flex-1" />
              <div className="flex justify-end pt-2">
                <Link to="/booking">
                  <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition font-semibold shadow">
                    Book Now
                  </button>
                </Link>
              </div>
            </motion.div>

             {/* Endermologie Card */}
             <motion.div
              className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-xl border-l-4 border-pink-400 border border-pink-100 p-10 flex flex-col min-h-[480px] space-y-4 group transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              whileHover={{ y: -6, boxShadow: '0 8px 32px 0 rgba(236,72,153,0.15)' }}
            >
              <span className="absolute top-5 right-5 bg-pink-100 text-pink-500 text-xs font-bold px-3 py-1 rounded shadow-sm">Only available in Joburg</span>
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-8 h-8 text-pink-400" />
                <h2 className="text-xl font-bold text-pink-500">Endermologie</h2>
                <span className="ml-2 bg-pink-100 text-pink-500 text-xs font-bold px-3 py-1 rounded">Popular</span>
              </div>
              <div className="text-gray-600 mb-3">Advanced mechanical massage therapy for cellulite, lymphatic drainage, and skin smoothing. No downtime, just results.</div>
              <div className="mb-4">
                <span className="inline-block bg-pink-100 text-pink-500 text-xs font-bold px-3 py-1 rounded">R450 / session</span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 mb-4 pl-2">
                <li>• Breaks down stubborn fat cells</li>
                <li>• Improves skin elasticity & tone</li>
                <li>• Smooths cellulite</li>
                <li>• Full-body detox & relaxation</li>
              </ul>
              <div className="flex-1" />
              <div className="flex justify-end pt-2">
                <Link to="/booking">
                  <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition font-semibold shadow">
                    Book Now
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Faradic EMS Toning Card */}
            <motion.div
              className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-xl border-l-4 border-pink-400 border border-pink-100 p-10 flex flex-col min-h-[480px] space-y-4 group transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              whileHover={{ y: -6, boxShadow: '0 8px 32px 0 rgba(236,72,153,0.15)' }}
            >
              <span className="absolute top-5 right-5 bg-pink-100 text-pink-500 text-xs font-bold px-3 py-1 rounded shadow-sm">Only available in Joburg</span>
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-8 h-8 text-pink-400" />
                <h2 className="text-xl font-bold text-pink-500">Faradic EMS Toning</h2>
              </div>
              <div className="text-gray-600 mb-3">Gym-free muscle toning for abs, thighs, arms, and glutes. Customizable intensity for all fitness levels.</div>
              <div className="mb-4">
                <span className="inline-block bg-pink-100 text-pink-500 text-xs font-bold px-3 py-1 rounded">R250 / session</span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 mb-4 pl-2">
                <li>• Tones & defines muscles</li>
                <li>• Boosts circulation & metabolism</li>
                <li>• Supports inch loss & sculpting</li>
              </ul>
              <div className="flex-1" />
              <div className="flex justify-end pt-2">
                <Link to="/booking">
                  <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition font-semibold shadow">
                    Book Now
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Beauty Treatments Card */}
            <motion.div
              className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-xl border-l-4 border-pink-400 border border-pink-100 p-10 flex flex-col min-h-[480px] space-y-4 group transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              whileHover={{ y: -6, boxShadow: '0 8px 32px 0 rgba(236,72,153,0.15)' }}
            >
              <span className="absolute top-5 right-5 bg-pink-100 text-pink-500 text-xs font-bold px-3 py-1 rounded shadow-sm">Only available in Joburg</span>
              <div className="flex items-center gap-3 mb-3">
                <Wand2 className="w-8 h-8 text-pink-400" />
                <h2 className="text-xl font-bold text-pink-500">Beauty Treatments</h2>
              </div>
              <div className="text-gray-600 mb-3">Facials, peels, tinting, waxing, and more for glowing, confident skin.</div>
              <div className="mb-4">
                <span className="inline-block bg-pink-100 text-pink-500 text-xs font-bold px-3 py-1 rounded">From R60</span>
              </div>
              <div className="grid grid-cols-1 gap-3 mb-4">
                <div className="bg-pink-50 rounded-2xl p-5 flex flex-col space-y-2">
                  <div className="font-semibold text-pink-500 mb-1">Facial Treatments</div>
                  <ul className="text-gray-700 text-sm flex flex-col gap-3">
                    <li className="flex items-center justify-between"><span className="flex items-center flex-1"><Sparkle className="inline w-4 h-4 text-pink-400 mr-1" /> Microneedling <span className="ml-2 bg-pink-100 text-pink-500 text-xs font-bold px-2 py-0.5 rounded">Popular</span></span><span className="font-bold text-pink-600 whitespace-nowrap">R 990</span></li>
                    <li className="flex items-center justify-between"><span className="flex items-center flex-1"><Feather className="inline w-4 h-4 text-pink-400 mr-1" /> Derma Planning</span><span className="font-bold text-pink-600 whitespace-nowrap">R 550</span></li>
                    <li className="flex items-center justify-between"><span className="flex items-center flex-1"><Wand2 className="inline w-4 h-4 text-pink-400 mr-1" /> Facial Peel 50%</span><span className="font-bold text-pink-600 whitespace-nowrap">R 300</span></li>
                  </ul>
                </div>
                <div className="bg-pink-50 rounded-2xl p-5 flex flex-col space-y-2">
                  <div className="font-semibold text-pink-500 mb-1">Tinting & Waxing</div>
                  <ul className="text-gray-700 text-sm flex flex-col gap-3">
                    <li className="flex items-center justify-between"><span className="flex items-center flex-1"><Eye className="inline w-4 h-4 text-pink-400 mr-1" /> Brow Tinting</span><span className="font-bold text-pink-600 whitespace-nowrap">R 60</span></li>
                    <li className="flex items-center justify-between"><span className="flex items-center flex-1"><Eye className="inline w-4 h-4 text-pink-400 mr-1" /> Eye Lash Tinting</span><span className="font-bold text-pink-600 whitespace-nowrap">R 150</span></li>
                    <li className="flex items-center justify-between"><span className="flex items-center flex-1"><Eye className="inline w-4 h-4 text-pink-400 mr-1" /> Brow & Eye Lash Combo Tinting</span><span className="font-bold text-pink-600 whitespace-nowrap">R 200</span></li>
                    <li className="flex items-center justify-between"><span className="flex items-center flex-1"><Scissors className="inline w-4 h-4 text-pink-400 mr-1" /> Brow Wax & Tint</span><span className="font-bold text-pink-600 whitespace-nowrap">R 100</span></li>
                  </ul>
                </div>
              </div>
              <div className="flex-1" />
              <div className="flex justify-end pt-2">
                <Link to="/booking">
                  <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition font-semibold shadow">
                    Book Now
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Massages Card */}
            <motion.div
              className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-xl border-l-4 border-pink-400 border border-pink-100 p-10 flex flex-col min-h-[480px] space-y-4 group transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              whileHover={{ y: -6, boxShadow: '0 8px 32px 0 rgba(236,72,153,0.15)' }}
            >
              <span className="absolute top-5 right-5 bg-pink-100 text-pink-500 text-xs font-bold px-3 py-1 rounded shadow-sm">Only available in Joburg</span>
              <div className="flex items-center gap-3 mb-3">
                <Hand className="w-8 h-8 text-pink-400" />
                <h2 className="text-xl font-bold text-pink-500">Massages</h2>
              </div>
              <div className="text-gray-600 mb-3">Sports, Swedish, and combo massages for relaxation, recovery, and muscle relief.</div>
              <div className="mb-4">
                <span className="inline-block bg-pink-100 text-pink-500 text-xs font-bold px-3 py-1 rounded">From R350</span>
              </div>
              <div className="grid grid-cols-1 gap-3 mb-4">
                <div className="bg-pink-50 rounded-2xl p-5 flex flex-col space-y-2">
                  <ul className="text-gray-700 text-sm flex flex-col gap-3">
                    <li className="flex items-center justify-between"><span className="flex-1">Sports Massage</span><span className="font-bold text-pink-600 whitespace-nowrap">R 350</span></li>
                    <li className="flex items-center justify-between"><span className="flex items-center flex-1"><Crown className="inline w-4 h-4 text-pink-400 mr-1" /> Swedish Massage <span className="ml-2 bg-pink-100 text-pink-500 text-xs font-bold px-2 py-0.5 rounded">Popular</span></span><span className="font-bold text-pink-600 whitespace-nowrap">R 500</span></li>
                    <li className="flex items-center justify-between"><span className="flex-1">EMS/Faradic & Swedish Massage Combo</span><span className="font-bold text-pink-600 whitespace-nowrap">R 450</span></li>
                    <li className="flex items-center justify-between"><span className="flex-1">30-Minute Sports Massage</span><span className="font-bold text-pink-600 whitespace-nowrap">R 350</span></li>
                    <li className="flex items-center justify-between"><span className="flex-1">45-Minute Sports Massage</span><span className="font-bold text-pink-600 whitespace-nowrap">R 450</span></li>
                    <li className="flex items-center justify-between"><span className="flex-1">60-Minute Sports Massage</span><span className="font-bold text-pink-600 whitespace-nowrap">R 650</span></li>
                  </ul>
                </div>
              </div>
              <div className="flex-1" />
              <div className="flex justify-end pt-2">
                <Link to="/booking">
                  <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition font-semibold shadow">
                    Book Now
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      {/* Packages Section */}
      <section className="container mx-auto px-4 max-w-4xl mt-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="glitter-heading flex items-center justify-center gap-2">
            <Gift className="w-8 h-8 text-pink-400 inline-block" /> Packages
          </span>
        </h2>
        <div className="w-20 h-1 bg-pink-200 rounded mx-auto mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Package 1 */}
          <div className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-xl border-l-4 border-pink-400 border border-pink-100 p-10 flex flex-col min-h-[440px] space-y-6 group transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl">
            <span className="absolute top-5 left-5 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded shadow-sm z-10">Most Popular</span>
            <div className="flex items-center gap-3 mb-4 mt-2">
              <span className="text-pink-400 text-2xl">🔥</span>
              <span className="font-bold text-xl">Sauna Dome & EMS Combo</span>
            </div>
            <ul className="text-gray-700 text-base flex flex-col gap-3 mb-4 pl-2">
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-pink-400" />32x Combo Sessions</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-pink-400" />1x Fat Burner</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-pink-400" />10x Slimming Injections</li>
            </ul>
            <hr className="my-4 border-pink-100" />
            <div className="flex items-center justify-between mt-2 mb-4">
              <span className="bg-pink-100 text-pink-500 font-bold text-lg px-5 py-2 rounded-full">R9 500</span>
              <span className="text-xs text-gray-500 ml-4">3 sessions weekly for 2 months</span>
            </div>
            <div className="flex-1" />
            <div className="flex justify-end pt-6">
              <Link to="/booking" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-pink-500 text-white px-7 py-3 rounded-lg hover:bg-pink-600 transition font-semibold shadow">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          {/* Package 2 */}
          <div className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-xl border-l-4 border-pink-400 border border-pink-100 p-10 flex flex-col min-h-[440px] space-y-6 group transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4 mt-2">
              <span className="text-pink-400 text-2xl">💪</span>
              <span className="font-bold text-xl">Muscle Build & Weight Loss</span>
            </div>
            <ul className="text-gray-700 text-base flex flex-col gap-3 mb-4 pl-2">
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-pink-400" />16x 30-minute EMS Sessions</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-pink-400" />20x Slimming Injections</li>
            </ul>
            <hr className="my-4 border-pink-100" />
            <div className="flex items-center justify-between mt-2 mb-4">
              <span className="bg-pink-100 text-pink-500 font-bold text-lg px-5 py-2 rounded-full">R6 000</span>
              <span className="text-xs text-gray-500 ml-4">3 sessions weekly for 2 months</span>
            </div>
            <div className="flex-1" />
            <div className="flex justify-end pt-6">
              <Link to="/booking" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-pink-500 text-white px-7 py-3 rounded-lg hover:bg-pink-600 transition font-semibold shadow">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          {/* Package 3 */}
          <div className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-xl border-l-4 border-pink-400 border border-pink-100 p-10 flex flex-col min-h-[440px] space-y-6 group transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4 mt-2">
              <span className="text-pink-400 text-2xl">🌟</span>
              <span className="font-bold text-xl">Weight Loss & Firming</span>
            </div>
            <ul className="text-gray-700 text-base flex flex-col gap-3 mb-4 pl-2">
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-pink-400" />24x 30-minute EMS Sessions</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-pink-400" />1x Fat Burner</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-pink-400" />100x Slimming Injections</li>
            </ul>
            <hr className="my-4 border-pink-100" />
            <div className="flex items-center justify-between mt-2 mb-4">
              <span className="bg-pink-100 text-pink-500 font-bold text-lg px-5 py-2 rounded-full">R4 800</span>
              <span className="text-xs text-gray-500 ml-4">2 sessions weekly for 2 months</span>
            </div>
            <div className="flex-1" />
            <div className="flex justify-end pt-6">
              <Link to="/booking" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-pink-500 text-white px-7 py-3 rounded-lg hover:bg-pink-600 transition font-semibold shadow">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          {/* Package 4 */}
          <div className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-xl border-l-4 border-pink-400 border border-pink-100 p-10 flex flex-col min-h-[440px] space-y-6 group transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4 mt-2">
              <span className="text-pink-400 text-2xl">🏋️‍♂️</span>
              <span className="font-bold text-xl">Gym Push</span>
            </div>
            <ul className="text-gray-700 text-base flex flex-col gap-3 mb-4 pl-2">
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-pink-400" />24x 30-minute EMS Sessions</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-pink-400" />1x Fat Burner</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-pink-400" />100x Slimming Injections</li>
            </ul>
            <hr className="my-4 border-pink-100" />
            <div className="flex items-center justify-between mt-2 mb-4">
              <span className="bg-pink-100 text-pink-500 font-bold text-lg px-5 py-2 rounded-full">R4 800</span>
            </div>
            <div className="flex-1" />
            <div className="flex justify-end pt-6">
              <Link to="/booking" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-pink-500 text-white px-7 py-3 rounded-lg hover:bg-pink-600 transition font-semibold shadow">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-20" />
    </>
  );
} 