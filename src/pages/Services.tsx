import { useState } from 'react';
import { PriceList } from '../components/pricing/PriceList';
import { InjectionGuide } from '../components/treatments/InjectionGuide';
import { NutritionGuide } from '../components/health/NutritionGuide';
import { SEO } from '../components/shared/SEO';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'prices' | 'injections' | 'nutrition'>('prices');

  return (
    <>
      <SEO page="services" />
      <div className="bg-pink-50">
        <section className="py-16 bg-gradient-to-b from-pink-50 to-pink-100">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Experience premium body transformation treatments with proven results. All our services are performed by certified professionals using state-of-the-art equipment.
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-full p-1 shadow-lg">
                <button
                  onClick={() => setActiveTab('prices')}
                  className={`px-6 py-2 rounded-full transition ${
                    activeTab === 'prices' 
                      ? 'bg-pink-500 text-white' 
                      : 'text-gray-600 hover:text-pink-500'
                  }`}
                >
                  Price List
                </button>
                <button
                  onClick={() => setActiveTab('injections')}
                  className={`px-6 py-2 rounded-full transition ${
                    activeTab === 'injections' 
                      ? 'bg-pink-500 text-white' 
                      : 'text-gray-600 hover:text-pink-500'
                  }`}
                >
                  Injection Guide
                </button>
                <button
                  onClick={() => setActiveTab('nutrition')}
                  className={`px-6 py-2 rounded-full transition ${
                    activeTab === 'nutrition' 
                      ? 'bg-pink-500 text-white' 
                      : 'text-gray-600 hover:text-pink-500'
                  }`}
                >
                  Nutrition & Detox
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {activeTab === 'prices' && <PriceList />}
        {activeTab === 'injections' && <InjectionGuide />}
        {activeTab === 'nutrition' && <NutritionGuide />}
      </div>
    </>
  );
} 