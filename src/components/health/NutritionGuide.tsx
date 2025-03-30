import { useState, useEffect } from 'react';
import { 
  Leaf, Apple, Droplet, Download, Book, Filter, 
  Heart, AlertCircle, ChevronRight, ExternalLink, X,
  ZoomIn, Share2, ArrowLeft, ArrowRight, Download as DownloadIcon,
  Search, Tag, BookmarkPlus, Info, Menu, X as Close, Share, Bookmark, ArrowUp,
  Calendar, Clock, Bell, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

interface BloodTypeFood {
  beneficial: string[];
  avoid: string[];
  neutral: string[];
}

const bloodTypeDiet: Record<string, BloodTypeFood> = {
  'A': {
    beneficial: ['Vegetables', 'Tofu', 'Fish', 'Legumes', 'Whole Grains'],
    avoid: ['Red Meat', 'Dairy', 'Kidney Beans', 'Lima Beans', 'Wheat'],
    neutral: ['Turkey', 'Chicken', 'Eggs', 'Most Fruits']
  },
  'B': {
    beneficial: ['Green Vegetables', 'Eggs', 'Low-Fat Dairy', 'Meat', 'Fish'],
    avoid: ['Corn', 'Lentils', 'Peanuts', 'Sesame Seeds', 'Wheat'],
    neutral: ['Most Fruits', 'Almond Milk', 'Rice']
  },
  'AB': {
    beneficial: ['Tofu', 'Seafood', 'Dairy', 'Green Vegetables', 'Kelp'],
    avoid: ['Red Meat', 'Kidney Beans', 'Seeds', 'Corn', 'Buckwheat'],
    neutral: ['Eggs', 'Most Fruits', 'Most Vegetables']
  },
  'O': {
    beneficial: ['Lean Meat', 'Fish', 'Vegetables', 'Fruits', 'Eggs'],
    avoid: ['Wheat', 'Corn', 'Dairy', 'Beans', 'Lentils'],
    neutral: ['Rice', 'Most Vegetables', 'Most Fruits']
  }
};

const detoxTips = [
  {
    title: "Morning Routine",
    description: "Start your day with warm lemon water to kickstart your metabolism and support detoxification.",
    icon: <Droplet className="w-6 h-6" />
  },
  {
    title: "Hydration",
    description: "Drink at least 2-3 liters of water daily to help flush toxins and support lymphatic drainage.",
    icon: <Droplet className="w-6 h-6" />
  },
  {
    title: "Nutrition",
    description: "Focus on whole, unprocessed foods and include plenty of fiber-rich vegetables and fruits.",
    icon: <Apple className="w-6 h-6" />
  },
  {
    title: "Herbal Support",
    description: "Consider incorporating detox-supporting herbs like dandelion root, milk thistle, and green tea.",
    icon: <Leaf className="w-6 h-6" />
  }
];

// Add image descriptions
const nutritionImages = {
  detox: {
    guide: {
      src: '/images/detox/detox-guide.jpg',
      title: 'Detox Guide',
      description: 'Complete guide to our detoxification program',
      downloadable: true
    },
    tips: {
      src: '/images/detox/detox-tips.jpg',
      title: 'Detox Tips',
      description: 'Essential tips for effective detoxification',
      downloadable: true
    },
    process: {
      src: '/images/detox/detox-process.jpg',
      title: 'Detox Process',
      description: 'Step-by-step detoxification process',
      downloadable: true
    }
  },
  healthyEating: {
    plan: {
      src: '/images/eating/healthy-eating-plan.jpg',
      title: 'Healthy Eating Plan',
      description: 'Comprehensive nutrition plan for optimal results',
      downloadable: true
    },
    guidelines: {
      src: '/images/eating/eating-guidelines.jpg',
      title: 'Eating Guidelines',
      description: 'Important guidelines for healthy eating',
      downloadable: true
    },
    mealPrep: {
      src: '/images/eating/meal-prep.jpg',
      title: 'Meal Preparation',
      description: 'Tips for effective meal preparation',
      downloadable: true
    }
  }
};

// Add reminder interface
interface Reminder {
  id: string;
  title: string;
  date: string;
  type: 'detox' | 'nutrition';
}

export function NutritionGuide() {
  const [selectedBloodType, setSelectedBloodType] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'detox' | 'diet'>('all');
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [savedItems, setSavedItems] = useState<string[]>([]);
  const [showReminder, setShowReminder] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('resources');

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const allImages = Object.values(nutritionImages)
    .flatMap(category => Object.values(category));

  // Filter images based on search and category
  const filteredImages = Object.entries(nutritionImages)
    .flatMap(([category, images]) =>
      Object.entries(images)
        .filter(([_, image]) => 
          (activeCategory === 'all' || category === activeCategory) &&
          (image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           image.description.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .map(([key, image]) => ({ ...image, category, key }))
    );

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  // Mobile menu sections
  const menuSections = [
    { id: 'resources', label: 'Resources' },
    { id: 'detox', label: 'Detox Guide' },
    { id: 'bloodtype', label: 'Blood Type Diet' },
    { id: 'saved', label: 'Saved Items' }
  ];

  // Handle save/bookmark
  const toggleSave = (imageId: string) => {
    setSavedItems(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-pink-100">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 hover:bg-pink-50 rounded-lg"
          >
            <Menu className="w-6 h-6 text-pink-500" />
          </button>
          <h1 className="text-lg font-semibold text-pink-500">Wellness Guide</h1>
          <button
            onClick={() => setShowReminder(true)}
            className="p-2 hover:bg-pink-50 rounded-lg"
          >
            <Bell className="w-6 h-6 text-pink-500" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-3/4 max-w-sm bg-white"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <div className="p-4 border-b border-pink-100 flex justify-between items-center">
                <h2 className="font-semibold text-pink-500">Menu</h2>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <Close className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              <div className="p-4 space-y-4">
                {menuSections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg transition ${
                      activeSection === section.id
                        ? 'bg-pink-50 text-pink-500'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reminder Modal */}
      <AnimatePresence>
        {showReminder && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowReminder(false)} />
            <motion.div
              className="relative bg-white rounded-2xl p-6 w-full max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h3 className="text-xl font-semibold mb-4">Set Reminder</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reminder Type
                  </label>
                  <select className="w-full p-2 border rounded-lg">
                    <option value="detox">Detox Session</option>
                    <option value="nutrition">Nutrition Plan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <button
                  className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
                  onClick={() => setShowReminder(false)}
                >
                  Set Reminder
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content with Mobile Padding */}
      <div className="pt-16 lg:pt-0">
        {/* Floating Navigation */}
        <motion.div 
          className="fixed bottom-8 right-8 z-50"
          style={{ opacity }}
        >
          <motion.button
            className="bg-pink-500 text-white p-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Responsive Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full px-4 py-3 rounded-full border-2 border-pink-100 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none"
            />
          </div>

          {/* Mobile-optimized grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${image.category}-${image.key}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div 
                    className="aspect-[4/3] cursor-pointer"
                    onClick={() => {
                      setSelectedImage(image.src);
                      setCurrentImageIndex(allImages.findIndex(img => img.src === image.src));
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-gray-600 mb-4">{image.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => setSelectedImage(image.src)}
                        className="text-pink-500 hover:text-pink-600 flex items-center"
                      >
                        <ZoomIn className="w-5 h-5 mr-1" />
                        View
                      </button>
                      
                      {image.downloadable && (
                        <button
                          onClick={() => window.open(image.src, '_blank')}
                          className="text-pink-500 hover:text-pink-600 flex items-center"
                        >
                          <DownloadIcon className="w-5 h-5 mr-1" />
                          Download
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowTooltip(true)}
                    >
                      <Info className="w-5 h-5 text-pink-500" />
                    </motion.button>
                    <motion.button
                      className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <BookmarkPlus className="w-5 h-5 text-pink-500" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full border-2 border-pink-100 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="flex justify-center gap-4">
              {['all', 'detox', 'diet'].map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category as any)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === category
                      ? 'bg-pink-500 text-white'
                      : 'bg-pink-50 text-gray-600 hover:bg-pink-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Enhanced Image Gallery */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${image.category}-${image.key}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div 
                    className="aspect-[4/3] cursor-pointer"
                    onClick={() => {
                      setSelectedImage(image.src);
                      setCurrentImageIndex(allImages.findIndex(img => img.src === image.src));
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-gray-600 mb-4">{image.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => setSelectedImage(image.src)}
                        className="text-pink-500 hover:text-pink-600 flex items-center"
                      >
                        <ZoomIn className="w-5 h-5 mr-1" />
                        View
                      </button>
                      
                      {image.downloadable && (
                        <button
                          onClick={() => window.open(image.src, '_blank')}
                          className="text-pink-500 hover:text-pink-600 flex items-center"
                        >
                          <DownloadIcon className="w-5 h-5 mr-1" />
                          Download
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowTooltip(true)}
                    >
                      <Info className="w-5 h-5 text-pink-500" />
                    </motion.button>
                    <motion.button
                      className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <BookmarkPlus className="w-5 h-5 text-pink-500" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Detox Guide Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Detox & Nutrition Guide</h2>
            
            {/* Existing Detox Tips */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {detoxTips.map((tip, index) => (
                <motion.div
                  key={index}
                  className="bg-pink-50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="text-pink-500 mr-4">{tip.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-2">{tip.title}</h3>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Blood Type Diet Guide */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Blood Type Diet Guide</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.keys(bloodTypeDiet).map((type) => (
                <motion.button
                  key={type}
                  className={`p-4 rounded-xl transition ${
                    selectedBloodType === type 
                      ? 'bg-pink-500 text-white' 
                      : 'bg-pink-50 text-gray-700 hover:bg-pink-100'
                  }`}
                  onClick={() => setSelectedBloodType(type)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Type {type}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {selectedBloodType && (
                <motion.div
                  key={selectedBloodType}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-pink-50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold mb-6">Blood Type {selectedBloodType} Diet</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                        <Heart className="w-5 h-5 mr-2" />
                        Beneficial Foods
                      </h4>
                      <ul className="space-y-2">
                        {bloodTypeDiet[selectedBloodType].beneficial.map((food, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <ChevronRight className="w-4 h-4 text-green-500 mr-2" />
                            {food}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        Foods to Avoid
                      </h4>
                      <ul className="space-y-2">
                        {bloodTypeDiet[selectedBloodType].avoid.map((food, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <ChevronRight className="w-4 h-4 text-red-500 mr-2" />
                            {food}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-600 mb-3 flex items-center">
                        <Filter className="w-5 h-5 mr-2" />
                        Neutral Foods
                      </h4>
                      <ul className="space-y-2">
                        {bloodTypeDiet[selectedBloodType].neutral.map((food, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <ChevronRight className="w-4 h-4 text-gray-400 mr-2" />
                            {food}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Additional Resources */}
          <section>
            <h3 className="text-2xl font-bold mb-6 text-center">Additional Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.a
                href="/lib/shopping-list.pdf"
                target="_blank"
                className="flex items-center p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition"
                whileHover={{ scale: 1.02 }}
              >
                <ExternalLink className="w-6 h-6 text-pink-500 mr-4" />
                <div>
                  <h4 className="font-semibold">Shopping List</h4>
                  <p className="text-sm text-gray-600">Printable shopping list by blood type</p>
                </div>
              </motion.a>

              <motion.a
                href="/lib/recipe-book.pdf"
                target="_blank"
                className="flex items-center p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition"
                whileHover={{ scale: 1.02 }}
              >
                <Book className="w-6 h-6 text-pink-500 mr-4" />
                <div>
                  <h4 className="font-semibold">Recipe Book</h4>
                  <p className="text-sm text-gray-600">Healthy recipes for all blood types</p>
                </div>
              </motion.a>
            </div>
          </section>
        </div>

        {/* Enhanced Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <motion.div
                  className="relative max-w-7xl w-full bg-white rounded-2xl overflow-hidden"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={e => e.stopPropagation()}
                >
                  <div className="relative">
                    <img
                      src={allImages[currentImageIndex].src}
                      alt={allImages[currentImageIndex].title}
                      className={`w-full h-auto transition-transform duration-300 ${
                        isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                      }`}
                      onClick={() => setIsZoomed(!isZoomed)}
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-xl font-semibold mb-2">
                        {allImages[currentImageIndex].title}
                      </h3>
                      <p className="text-white/80">
                        {allImages[currentImageIndex].description}
                      </p>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm"
                      onClick={handlePrevImage}
                    >
                      <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm"
                      onClick={handleNextImage}
                    >
                      <ArrowRight className="w-6 h-6 text-white" />
                    </button>
                  </div>

                  {/* Modal Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm"
                      onClick={() => window.open(selectedImage, '_blank')}
                    >
                      <DownloadIcon className="w-6 h-6 text-white" />
                    </button>
                    <button
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm"
                      onClick={() => setSelectedImage(null)}
                    >
                      <X className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTooltip(false)}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 max-w-md mx-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <h3 className="text-xl font-semibold mb-4">About This Resource</h3>
                <p className="text-gray-600 mb-4">
                  This guide provides detailed information about nutrition and detox practices.
                  Download and save it for offline access.
                </p>
                <button
                  className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
                  onClick={() => setShowTooltip(false)}
                >
                  Got it
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 px-4 py-3">
        <div className="flex justify-around">
          <button className="flex flex-col items-center text-pink-500">
            <Share className="w-6 h-6" />
            <span className="text-xs mt-1">Share</span>
          </button>
          <button className="flex flex-col items-center text-pink-500">
            <Bookmark className="w-6 h-6" />
            <span className="text-xs mt-1">Saved</span>
          </button>
          <button 
            className="flex flex-col items-center text-pink-500"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp className="w-6 h-6" />
            <span className="text-xs mt-1">Top</span>
          </button>
        </div>
      </div>
    </div>
  );
} 