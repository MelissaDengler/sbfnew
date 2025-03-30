import { useState } from 'react';
import { BookingCalendar } from '../components/booking/BookingCalendar';
import { MapPin, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const locations = [
  {
    id: 'johannesburg',
    name: 'Johannesburg',
    address: '42 Blanca Avenue, Northcliff',
    hours: '07:30 - 18:00',
    image: '/images/locations/johannesburg.jpg'
  },
  {
    id: 'capetown',
    name: 'Cape Town',
    address: '30 Oxford Street, Durbanville',
    hours: '08:00 - 17:00',
    image: '/images/locations/capetown.jpg'
  }
];

export default function Booking() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  return (
    <div className="bg-pink-50 min-h-screen">
      <section className="py-16 bg-gradient-to-b from-pink-50 to-pink-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Book Your Appointment</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose your preferred location and time for your treatment. Our team will confirm your appointment within 24 hours.
          </p>

          {/* Location Selection */}
          {!selectedLocation ? (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center">Select Location</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {locations.map(location => (
                  <motion.div
                    key={location.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedLocation(location.id)}
                  >
                    <div className="relative h-48">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-semibold mb-1">{location.name}</h3>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {location.address}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-white">
                      <div className="flex items-center justify-between text-gray-600">
                        <span>Opening Hours</span>
                        <span>{location.hours}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="max-w-4xl mx-auto mb-8">
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="text-pink-500 hover:text-pink-600 flex items-center"
                >
                  <ArrowLeft className="w-5 h-5 mr-1" />
                  Change Location
                </button>
              </div>
              <BookingCalendar location={selectedLocation} />
            </>
          )}
        </div>
      </section>
    </div>
  );
} 