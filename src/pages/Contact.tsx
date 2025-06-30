import { Phone, Mail, MapPin, Clock, Send, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/shared/SEO';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  branch: 'johannesburg' | 'capetown';
  notes: string;
}

const services = [
  "Endermologie (vacuum suction slimming/shaping machine)",
  "Sauna Dome / Sauna blanket (infra-red)",
  "EMS or Faradic",
  "Fat Dissolving Injections",
  "Chilli Wraps in Sauna"
];

export default function Contact() {
  const [messageForm, setMessageForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [bookingForm, setBookingForm] = useState<BookingData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    branch: 'johannesburg',
    notes: ''
  });

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission
    console.log('Message submitted:', messageForm);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', bookingForm);
  };

  return (
    <>
      <SEO 
        page="contact" 
        customTitle="Contact Us | Skin & Body Fitness - Book or Enquire" 
        customDescription="Contact Skin & Body Fitness for bookings, questions, or more information about our slimming and wellness treatments. We're here to help you on your journey!" 
      />
      <main className="relative bg-pink-50/95 min-h-screen">
        <section className="py-20 bg-gradient-to-b from-pink-50 to-pink-100">
          <div className="container mx-auto px-4 sm:max-w-full max-w-5xl">
            {/* Quick Message Section */}
            <div className="bg-pink-50/95 rounded-3xl shadow-2xl border-2 border-pink-100 p-4 sm:p-8 md:p-14">
              <div className="text-center mb-14">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-base sm:text-lg text-gray-600">
                  Send Us A Quick Message Below<br />
                  OR <Link to="/booking" className="text-pink-500 hover:text-pink-600 font-semibold">CLICK HERE</Link> to book an appointment.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <form onSubmit={handleMessageSubmit} className="space-y-7 max-w-2xl mx-auto w-full">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-3 rounded-xl border focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white shadow-sm"
                      value={messageForm.name}
                      onChange={e => setMessageForm(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full px-5 py-3 rounded-xl border focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white shadow-sm"
                      value={messageForm.email}
                      onChange={e => setMessageForm(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-5 py-3 rounded-xl border focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white shadow-sm"
                      value={messageForm.phone}
                      onChange={e => setMessageForm(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your Message Subject</label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-3 rounded-xl border focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white shadow-sm"
                      value={messageForm.subject}
                      onChange={e => setMessageForm(prev => ({ ...prev, subject: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-5 py-3 rounded-xl border focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white shadow-sm"
                      value={messageForm.message}
                      onChange={e => setMessageForm(prev => ({ ...prev, message: e.target.value }))}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition flex items-center justify-center text-lg font-semibold shadow-md"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>

                <div className="space-y-8 max-w-lg mx-auto w-full">
                  {/* Johannesburg Branch */}
                  <div className="bg-white p-7 rounded-2xl shadow-xl border border-pink-100">
                    <h3 className="text-2xl font-semibold mb-4 text-pink-500">Johannesburg Branch</h3>
                    <div className="space-y-3">
                      <p className="flex items-center text-gray-600">
                        <Phone className="w-5 h-5 text-pink-500 mr-2" />
                        068 577 3071
                      </p>
                      <p className="flex items-center text-gray-600">
                        <Mail className="w-5 h-5 text-pink-500 mr-2" />
                        Skinandbodyfitness@gmail.com
                      </p>
                      <p className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 text-pink-500 mr-2" />
                        42 Blanca Avenue, Northcliff, 1709, Johannesburg
                      </p>
                    </div>
                  </div>
                  {/* Cape Town Branch */}
                  <div className="bg-white p-7 rounded-2xl shadow-xl border border-pink-100">
                    <h3 className="text-2xl font-semibold mb-4 text-pink-500">Cape Town Branch</h3>
                    <div className="space-y-3">
                      <p className="flex items-center text-gray-600">
                        <Phone className="w-5 h-5 text-pink-500 mr-2" />
                        081 330 0683
                      </p>
                      <p className="flex items-center text-gray-600">
                        <Mail className="w-5 h-5 text-pink-500 mr-2" />
                        Skinandbodyfitness@gmail.com
                      </p>
                      <p className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 text-pink-500 mr-2" />
                        Unit 14, 20 Bella Rosa St, Rosenpark, Cape Town, 7550
                      </p>
                    </div>
                  </div>
                  {/* Operating Hours */}
                  <div className="bg-white p-7 rounded-2xl shadow-xl border border-pink-100">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center text-pink-500">
                      <Clock className="w-5 h-5 text-pink-500 mr-2" />
                      Operating Hours
                    </h3>
                    <div className="space-y-2">
                      <p className="flex justify-between text-gray-600">
                        <span>Monday - Friday</span>
                        <span>7:30am to 6:00pm</span>
                      </p>
                      <p className="flex justify-between text-gray-600">
                        <span>Saturday</span>
                        <span>8:00am to 4:00pm</span>
                      </p>
                      <p className="flex justify-between text-gray-600">
                        <span>Sunday</span>
                        <span>CLOSED</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <section className="mt-24">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-2">Find Us</h2>
                <p className="text-gray-600 text-lg">Our branches are conveniently located in Johannesburg and Cape Town</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl border-2 border-pink-100">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.699858182852!2d27.9661!3d-26.1461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a1d%3A0x1284ae63eef5bad7!2s42%20Blanca%20Ave%2C%20Northcliff%2C%20Randburg%2C%202195!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl border-2 border-pink-100">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.576184657641!2d18.6381!3d-33.8707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d1e2e2e2e2e%3A0x1234567890abcdef!2sUnit%2014%2C%2020%20Bella%20Rosa%20St%2C%20Rosenpark%2C%20Cape%20Town%2C%207550!5e0!3m2!1sen!2sza!4v1710000000000!5m2!1sen!2sza"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
} 