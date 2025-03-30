import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Phone, Mail, Instagram, Facebook } from 'lucide-react';

interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500';
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-50 w-full border-b border-pink-100 bg-pink-50/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-pink-500" />
              <span className="text-xl font-bold">
                <span className="text-pink-500">Skin</span> & <span>Body</span>
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/services" className={`transition ${isActive('/services')}`}>
                Services
              </Link>
              <Link to="/about" className={`transition ${isActive('/about')}`}>
                About
              </Link>
              <Link to="/contact" className={`transition ${isActive('/contact')}`}>
                Contact
              </Link>
              <Link 
                to="/booking" 
                className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
              >
                Book Now
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gradient-to-b from-pink-50 to-pink-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a href="tel:+27123456789" className="flex items-center text-gray-600 hover:text-pink-500">
                  <Phone className="w-4 h-4 mr-2" />
                  +27 12 345 6789
                </a>
                <a href="mailto:info@skinbody.com" className="flex items-center text-gray-600 hover:text-pink-500">
                  <Mail className="w-4 h-4 mr-2" />
                  info@skinbody.com
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
                <a href="#" className="block text-gray-600 hover:text-pink-500">Terms & Conditions</a>
                <a href="#" className="block text-gray-600 hover:text-pink-500">Privacy Policy</a>
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
            <p>© {new Date().getFullYear()} Skin & Body Fitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 