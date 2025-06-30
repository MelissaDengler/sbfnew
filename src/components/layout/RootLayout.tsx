import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Heart, Phone, Mail, Instagram, Facebook, Menu, X, 
  ChevronDown, Home, Sparkles, Users, Calendar, Info, Droplet, Zap, Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      path: '/',
      icon: <Home className="w-5 h-5" />
    },
    { 
      name: 'Services', 
      path: '/services',
      icon: <Sparkles className="w-5 h-5" />,
      dropdownItems: [
        { 
          name: 'Faradic', 
          path: '/services#fat-freezing',
          description: 'Non-invasive fat reduction',
          icon: <Droplet className="w-5 h-5 text-pink-400" />
        },
        { 
          name: 'Body Sculpting', 
          path: '/services#body-sculpting',
          description: 'Advanced body contouring',
          icon: <Zap className="w-5 h-5 text-pink-400" />
        },
        { 
          name: 'Skin Tightening', 
          path: '/services#skin-tightening',
          description: 'Firm and tone your skin',
          icon: <Star className="w-5 h-5 text-pink-400" />
        },
      ]
    },
    { 
      name: 'About', 
      path: '/about',
      icon: <Users className="w-5 h-5" />
    },
    { 
      name: 'Book Now', 
      path: '/booking',
      icon: <Calendar className="w-5 h-5" />
    },
    { 
      name: 'Contact', 
      path: '/contact',
      icon: <Mail className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-pink-500 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span className="font-semibold mr-1">CT:</span>
              <a href="tel:+27813300683" className="hover:text-pink-100">081 330 0683</a>
            </span>
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span className="font-semibold mr-1">JHB:</span>
              <a href="tel:+27685995717" className="hover:text-pink-100">068 599 5717</a>
            </span>
            <a href="mailto:skinandbodyfitnessct@gmail.co.za" className="flex items-center hover:text-pink-100">
              <Mail className="w-4 h-4 mr-1" />
              skinandbodyfitnessct@gmail.co.za
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-pink-100">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-pink-100">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-lg'
        }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-pink-500" />
              <span className="font-bold text-xl">Skin and Body Fitness</span>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-full flex items-center space-x-1 transition-all ${
                      location.pathname === item.path
                        ? 'bg-pink-500 text-white'
                        : 'hover:bg-pink-50 text-gray-700 hover:text-pink-500'
                    }`}
                    onMouseEnter={() => item.dropdownItems && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.dropdownItems && (
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Enhanced Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdownItems && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-64 py-3 mt-2 bg-white rounded-2xl shadow-xl border border-pink-100"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdownItems.map((dropdownItem, index) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block transition-all hover:bg-pink-50"
                          >
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="px-4 py-3"
                            >
                              <div className="flex items-center">
                                {dropdownItem.icon}
                                <span className="ml-3 font-medium">{dropdownItem.name}</span>
                              </div>
                              <p className="mt-1 text-sm text-gray-500 ml-8">
                                {dropdownItem.description}
                              </p>
                            </motion.div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-pink-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </nav>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 20 }}
                className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                  <h2 className="font-semibold text-lg">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-pink-50 text-gray-500"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="py-4 px-3 space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => {
                          if (item.dropdownItems) {
                            setMobileDropdown(
                              mobileDropdown === item.name ? null : item.name
                            );
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                          location.pathname === item.path
                            ? 'bg-pink-50 text-pink-500'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        {item.dropdownItems && (
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                            mobileDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        )}
                      </button>

                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {item.dropdownItems && mobileDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-12 pr-3 overflow-hidden"
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className="flex items-start space-x-3 p-3 rounded-xl hover:bg-pink-50 transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.icon}
                                <div>
                                  <p className="font-medium">{dropdownItem.name}</p>
                                  <p className="text-sm text-gray-500">
                                    {dropdownItem.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gradient-to-b from-pink-50 to-pink-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 hover:text-pink-500">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-semibold mr-1">Cape Town:</span>
                  <a href="tel:+27813300683" className="hover:text-pink-500">081 330 0683</a>
                </div>
                <div className="flex items-center text-gray-600 hover:text-pink-500">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-semibold mr-1">Johannesburg:</span>
                  <a href="tel:+27685995717" className="hover:text-pink-500">068 599 5717</a>
                </div>
                <a href="mailto:skinandbodyfitnessct@gmail.co.za" className="flex items-center text-gray-600 hover:text-pink-500">
                  <Mail className="w-4 h-4 mr-2" />
                  skinandbodyfitnessct@gmail.co.za
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/terms" className="block text-gray-600 hover:text-pink-500">Terms & Conditions</a>
                <a href="/privacy" className="block text-gray-600 hover:text-pink-500">Privacy Policy</a>
                <a href="#" className="block text-gray-600 hover:text-pink-500">FAQ</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>© {new Date().getFullYear()} Skin and Body Fitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 