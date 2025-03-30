import { useState } from 'react';
import { 
  Droplet, Timer, Calendar, Sun, Waves, Info, CheckCircle, AlertTriangle,
  Plus, Minus, ArrowRight, Camera, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Add FAQ data
const faqs = [
  {
    question: "How many injections will I need?",
    answer: "The number of injections depends on your body size and treatment areas. Larger areas or clients may require more injections. We'll assess this during your consultation."
  },
  {
    question: "Is the treatment painful?",
    answer: "The treatment involves minimal discomfort. The injections are quick and we use very fine needles to minimize any pain."
  },
  {
    question: "How soon will I see results?",
    answer: "Most clients start seeing results after 2-3 sessions. The fat reduction process continues for several weeks after each treatment."
  },
  {
    question: "How long do results last?",
    answer: "Results can be long-lasting when combined with a healthy lifestyle. The fat cells treated with phosphatidylcholine are permanently removed."
  },
  {
    question: "Are there any side effects?",
    answer: "Some clients may experience temporary swelling, redness, or mild discomfort at injection sites. These typically resolve within a few days."
  }
];

// Add before/after examples
const results = [
  {
    area: "Abdomen",
    before: "/images/results/abdomen-before.jpg",
    after: "/images/results/abdomen-after.jpg",
    sessions: 4,
    timeframe: "8 weeks"
  },
  {
    area: "Love Handles",
    before: "/images/results/sides-before.jpg",
    after: "/images/results/sides-after.jpg",
    sessions: 3,
    timeframe: "6 weeks"
  }
];

export function InjectionGuide() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedResult, setSelectedResult] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Understanding Our Slimming Injections</h2>
          <p className="text-gray-600">
            Learn about our natural phosphatidylcholine injections and how to prepare for your treatment
          </p>
        </div>

        {/* Process Timeline */}
        <div className="space-y-8 mb-12">
          <motion.div 
            className="bg-pink-50 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Sun className="w-6 h-6 text-pink-500 mr-2" />
              Step 1: Sauna Session
            </h3>
            <p className="text-gray-600 mb-4">
              Begin with a sauna session to cleanse your lymphatic system. This crucial step enhances the effectiveness of the injections by preparing your body for optimal results.
            </p>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-gray-500">
                💡 Pro Tip: The more you sweat during the sauna session, the better candidate you are for the treatment!
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-pink-50 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Droplet className="w-6 h-6 text-pink-500 mr-2" />
              Step 2: Injection Process
            </h3>
            <p className="text-gray-600 mb-4">
              All injections are administered in one session using natural phosphatidylcholine, a safe and effective compound for fat reduction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-2">Session Duration</h4>
                <p className="text-gray-600">30-45 minutes total treatment time</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-2">Follow-up</h4>
                <p className="text-gray-600">Return one week later for next session</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Important Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div 
            className="bg-pink-50 rounded-xl p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-xl font-semibold mb-4">What to Bring</h3>
            <ul className="space-y-3">
              {[
                "Towel",
                "Water bottle",
                "Extra underwear or costume",
                "Comfortable clothing"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-pink-500 mr-2" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="bg-pink-50 rounded-xl p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-xl font-semibold mb-4">Treatment Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Info className="w-5 h-5 text-pink-500 mr-2 mt-1" />
                <span className="text-gray-600">Natural phosphatidylcholine-based treatment</span>
              </li>
              <li className="flex items-start">
                <Info className="w-5 h-5 text-pink-500 mr-2 mt-1" />
                <span className="text-gray-600">Number of injections varies based on body size and treatment areas</span>
              </li>
              <li className="flex items-start">
                <Info className="w-5 h-5 text-pink-500 mr-2 mt-1" />
                <span className="text-gray-600">Multiple sessions may be required for optimal results</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Important Notes */}
        <div className="bg-pink-50/50 rounded-xl p-6 border border-pink-100">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <AlertTriangle className="w-6 h-6 text-pink-500 mr-2" />
            Important Notes
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-pink-500 mr-2 mt-1" />
              <span className="text-gray-600">Heavy sweating during sauna is a positive indicator for treatment success</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-pink-500 mr-2 mt-1" />
              <span className="text-gray-600">Larger clients may require more injections and sessions</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-pink-500 mr-2 mt-1" />
              <span className="text-gray-600">Weekly follow-up sessions are essential for optimal results</span>
            </li>
          </ul>
        </div>

        {/* Results Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Real Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="bg-pink-50 rounded-xl p-6 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedResult(index)}
              >
                <div className="relative aspect-[4/3] mb-4">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="relative">
                      <img 
                        src={result.before} 
                        alt={`Before ${result.area}`}
                        className="rounded-lg object-cover w-full h-full"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 text-sm rounded">
                        Before
                      </span>
                    </div>
                    <div className="relative">
                      <img 
                        src={result.after} 
                        alt={`After ${result.area}`}
                        className="rounded-lg object-cover w-full h-full"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 text-sm rounded">
                        After
                      </span>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{result.area}</h4>
                <div className="flex items-center text-gray-600 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {result.sessions} Sessions
                  </span>
                  <span className="flex items-center">
                    <Timer className="w-4 h-4 mr-1" />
                    {result.timeframe}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-pink-100 rounded-xl overflow-hidden"
                initial={false}
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between bg-pink-50 hover:bg-pink-100 transition"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-semibold text-left">{faq.question}</span>
                  {expandedFaq === index ? (
                    <Minus className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-white">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <motion.div
            className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl p-8"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="mb-6">Book your consultation today and discover how our treatments can help you achieve your goals.</p>
            <motion.button
              className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold flex items-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </section>

        {/* Results Modal */}
        <AnimatePresence>
          {selectedResult !== null && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResult(null)}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-4xl w-full p-6"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                {/* Modal content */}
                <div className="grid grid-cols-2 gap-8">
                  <img 
                    src={results[selectedResult].before}
                    alt="Before"
                    className="rounded-lg w-full"
                  />
                  <img 
                    src={results[selectedResult].after}
                    alt="After"
                    className="rounded-lg w-full"
                  />
                </div>
                {/* Add more details about the specific result */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 