import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { format } from 'date-fns';
import { 
  Calendar, Clock, User, Mail, Phone, MapPin, Check, AlertCircle, 
  ChevronRight, Download, Share2, Bell, Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  location: string;
}

// Add service interface
interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 'fat-freezing',
    name: 'Fat Freezing',
    duration: '45 min',
    price: 'R1,500',
    description: 'Non-invasive fat reduction treatment targeting specific areas',
    image: '/images/services/fat-freezing.jpg'
  },
  {
    id: 'body-sculpting',
    name: 'Body Sculpting',
    duration: '60 min',
    price: 'R2,000',
    description: 'Advanced body contouring and toning treatment',
    image: '/images/services/body-sculpting.jpg'
  },
  // ... add other services
];

const availableTimes = [
  "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"
];

interface BookingCalendarProps {
  location: string;
}

// Add validation types
interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  datetime?: string;
}

// Add booking steps
type BookingStep = 'date' | 'service' | 'details' | 'confirmation';

export function BookingCalendar({ location }: BookingCalendarProps) {
  const [currentStep, setCurrentStep] = useState<BookingStep>('date');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    location
  });
  const [availableSlots, setAvailableSlots] = useState<string[]>(availableTimes);

  // Customize calendar colors based on location
  const calendarColors = {
    johannesburg: {
      primary: '#ec4899',
      secondary: '#fce7f3',
      highlight: '#fbcfe8'
    },
    capetown: {
      primary: '#ec4899',
      secondary: '#fce7f3',
      highlight: '#fbcfe8'
    }
  };

  const colors = calendarColors[location as keyof typeof calendarColors];

  const handleDateClick = (arg: { dateStr: string }) => {
    setSelectedDate(new Date(arg.dateStr));
    setFormData(prev => ({ ...prev, date: arg.dateStr }));
    setShowForm(true);
  };

  // Enhanced validation
  const validateForm = (data: BookingFormData) => {
    const errors: ValidationErrors = {};
    
    // Name validation
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    } else if (data.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Invalid email format';
    }
    
    // Phone validation
    if (!data.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^(?:\+27|0)[6-8][0-9]{8}$/.test(data.phone.replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid South African phone number';
    }
    
    // Service validation
    if (!data.service) {
      errors.service = 'Please select a service';
    }
    
    // Date/Time validation
    if (!data.date || !data.time) {
      errors.datetime = 'Please select both date and time';
    }
    
    return errors;
  };

  // Handle step navigation
  const nextStep = () => {
    if (currentStep === 'details' && !validateForm(formData)) {
      return;
    }
    
    const steps: BookingStep[] = ['date', 'service', 'details', 'confirmation'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    const steps: BookingStep[] = ['date', 'service', 'details', 'confirmation'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  // Enhanced submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm(formData)) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success - show confirmation
      setCurrentStep('confirmation');
    } catch (error) {
      setErrors({ ...errors, submit: 'Failed to submit booking. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Service selection step
  const ServiceSelection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Select Your Treatment</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className={`relative rounded-xl overflow-hidden cursor-pointer transition-all ${
              formData.service === service.id 
                ? 'ring-2 ring-pink-500 shadow-lg' 
                : 'hover:shadow-md'
            }`}
            onClick={() => setFormData({ ...formData, service: service.id })}
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-video relative">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <div className="flex items-center text-sm space-x-4">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </span>
                  <span>{service.price}</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  // Enhanced confirmation page
  const ConfirmationPage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto text-center space-y-8"
    >
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <Check className="w-10 h-10 text-green-500" />
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600">
          Your appointment has been scheduled successfully.
        </p>
      </div>

      <div className="bg-pink-50 rounded-xl p-6 text-left">
        <h3 className="font-semibold mb-4">Appointment Details</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <Calendar className="w-5 h-5 text-pink-500 mr-3 mt-1" />
            <div>
              <p className="font-medium">Date & Time</p>
              <p className="text-gray-600">
                {format(new Date(formData.date), 'MMMM do, yyyy')} at {formData.time}
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-pink-500 mr-3 mt-1" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-gray-600 capitalize">{location} Branch</p>
            </div>
          </div>
          <div className="flex items-start">
            <Info className="w-5 h-5 text-pink-500 mr-3 mt-1" />
            <div>
              <p className="font-medium">Treatment</p>
              <p className="text-gray-600">
                {services.find(s => s.id === formData.service)?.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => {
            // Generate and download calendar invite
            const event = {
              title: `Treatment at Skin & Body Fitness`,
              start: new Date(`${formData.date}T${formData.time}`),
              duration: '1:00',
              description: 'Your treatment appointment',
              location: location === 'johannesburg' 
                ? '42 Blanca Avenue, Northcliff' 
                : '30 Oxford Street, Durbanville'
            };
            // Add calendar download logic
          }}
          className="flex items-center px-4 py-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Add to Calendar
        </button>
        <button
          onClick={() => {
            // Share appointment details
            if (navigator.share) {
              navigator.share({
                title: 'My Treatment Appointment',
                text: `My appointment is scheduled for ${format(new Date(formData.date), 'MMMM do, yyyy')} at ${formData.time}`
              });
            }
          }}
          className="flex items-center px-4 py-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition"
        >
          <Share2 className="w-5 h-5 mr-2" />
          Share
        </button>
      </div>

      <div className="text-sm text-gray-500">
        <Bell className="w-4 h-4 inline-block mr-1" />
        You will receive a confirmation email shortly
      </div>
    </motion.div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          {['date', 'service', 'details', 'confirmation'].map((step, index) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === step
                    ? 'bg-pink-500 text-white'
                    : index < ['date', 'service', 'details', 'confirmation'].indexOf(currentStep)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index < ['date', 'service', 'details', 'confirmation'].indexOf(currentStep) ? (
                  <Check className="w-4 h-4" />
                ) : (
                  index + 1
                )}
              </div>
              {index < 3 && (
                <div
                  className={`w-16 h-1 ${
                    index < ['date', 'service', 'details', 'confirmation'].indexOf(currentStep)
                      ? 'bg-green-500'
                      : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {currentStep === 'date' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Select Date & Time</h2>
              <div className="mb-8">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView="timeGridWeek"
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek'
                  }}
                  slotMinTime="07:00:00"
                  slotMaxTime="19:00:00"
                  allDaySlot={false}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  weekends={true}
                  select={(info) => {
                    setSelectedDate(info.start);
                    setShowForm(true);
                  }}
                  eventClick={(info) => {
                    // Handle existing booking click
                  }}
                  slotLabelFormat={{
                    hour: 'numeric',
                    minute: '2-digit',
                    meridiem: 'short'
                  }}
                  // Custom styling
                  height="auto"
                  themeSystem="standard"
                  selectConstraint={{
                    startTime: '07:00',
                    endTime: '19:00',
                    dows: [0, 1, 2, 3, 4, 5]
                  }}
                  slotEventOverlap={false}
                  eventBackgroundColor={colors.primary}
                  eventBorderColor={colors.primary}
                  eventTextColor="#ffffff"
                  selectBackgroundColor={colors.highlight}
                  selectBorderColor={colors.primary}
                  dayCellBackgroundColor={colors.secondary}
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={nextStep}
                  className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition flex items-center"
                  disabled={!selectedDate}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 'service' && (
            <ServiceSelection />
          )}

          {currentStep === 'details' && (
            <div className="space-y-6">
              {/* Enhanced form with validation */}
            </div>
          )}

          {currentStep === 'confirmation' && (
            <ConfirmationPage />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {currentStep !== 'confirmation' && currentStep !== 'date' && (
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            className="text-gray-600 hover:text-gray-800 transition"
          >
            Back
          </button>
          <button
            onClick={currentStep === 'details' ? handleSubmit : nextStep}
            className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : currentStep === 'details' ? 'Confirm Booking' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
} 