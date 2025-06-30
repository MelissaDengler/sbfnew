import { SEO } from '../components/shared/SEO';

const services = [
  {
    title: 'Endermologie',
    description: 'Vacuum suction slimming/shaping machine for targeted body contouring and cellulite reduction.'
  },
  {
    title: 'Sauna Dome / Sauna Blanket (Infra-red)',
    description: 'Infra-red sauna treatments for detoxification, relaxation, and enhanced slimming.'
  },
  {
    title: 'EMS or Faradic',
    description: 'Electrical muscle stimulation (EMS) or Faradic treatments to tone and sculpt muscles.'
  },
  {
    title: 'Fat Dissolving Injections',
    description: 'Non-surgical injections to target and dissolve stubborn fat deposits.'
  },
  {
    title: 'Chilli Wraps in Sauna',
    description: 'Chilli-infused body wraps combined with sauna for maximum slimming and detox results.'
  }
];

export default function Services() {
  return (
    <>
      <SEO page="services" />
      <div className="bg-pink-50 min-h-screen">
        <section className="py-16 bg-gradient-to-b from-pink-50 to-pink-100">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Experience our advanced slimming and shaping treatments, performed by certified professionals using state-of-the-art equipment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-pink-100 hover:shadow-xl transition">
                  <h2 className="text-2xl font-semibold mb-3 text-pink-500">{service.title}</h2>
                  <p className="text-gray-700 mb-2">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 