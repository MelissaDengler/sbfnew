import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface LocationMapProps {
  address: string;
  mapUrl: string;
  phone: string;
  hours: string[];
  coordinates: {
    lat: string;
    lng: string;
  };
}

export const LocationMap = ({ address, mapUrl, phone, hours, coordinates }: LocationMapProps) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="grid md:grid-cols-2">
      {/* Map Preview - Using a static map image instead of iframe for now */}
      <div className="h-[300px] relative bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <a 
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-600 hover:text-pink-500 transition"
          >
            <MapPin className="w-12 h-12 mb-2" />
            <span className="text-sm font-medium">View on Google Maps</span>
          </a>
        </div>
        <motion.button
          className="absolute bottom-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open(mapUrl, '_blank')}
        >
          <Navigation className="w-4 h-4 mr-2" />
          Get Directions
        </motion.button>
      </div>

      {/* Location Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
          Branch Information
        </h3>
        
        <div className="space-y-6">
          <motion.div 
            className="flex items-start"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MapPin className="w-5 h-5 text-pink-500 mt-1 mr-3" />
            <div>
              <p className="font-semibold">Address</p>
              <a 
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500"
              >
                {address}
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Phone className="w-5 h-5 text-pink-500 mt-1 mr-3" />
            <div>
              <p className="font-semibold">Contact</p>
              <a 
                href={`tel:${phone}`} 
                className="text-gray-600 hover:text-pink-500"
              >
                {phone}
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Clock className="w-5 h-5 text-pink-500 mt-1 mr-3" />
            <div>
              <p className="font-semibold">Operating Hours</p>
              <ul className="text-gray-600 space-y-2">
                {hours.map((hour, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-pink-500 mr-2" />
                    {hour}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <motion.a
            href={`tel:${phone}`}
            className="flex items-center justify-center px-4 py-2 bg-pink-50 text-pink-500 rounded-full hover:bg-pink-100 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </motion.a>
          <motion.a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-pink-50 text-pink-500 rounded-full hover:bg-pink-100 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Navigation className="w-4 h-4 mr-2" />
            Navigate
          </motion.a>
        </div>
      </div>
    </div>
  </div>
); 