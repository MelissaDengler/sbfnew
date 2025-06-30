import { SEO } from '../components/shared/SEO';

export default function Services() {
  return (
    <>
      <SEO 
        page="services" 
        customTitle="Services & Packages | Skin & Body Fitness" 
        customDescription="Explore our advanced slimming, shaping, and wellness services and packages. Find the perfect treatment for your goals at Skin & Body Fitness." 
      />
      <main className="bg-pink-50 min-h-screen">
        <section className="py-16 bg-gradient-to-b from-pink-50 to-pink-100">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Our Services & Packages</h1>
            <p className="text-base sm:text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Experience our advanced slimming and shaping treatments, performed by certified professionals using state-of-the-art equipment. Choose from individual sessions or value-packed packages tailored to your goals.
            </p>

            {/* Individual Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col">
                <h2 className="text-xl font-semibold mb-2 text-pink-500">Endermologie</h2>
                <div className="text-lg font-bold mb-1">R450 <span className="font-normal text-sm">per session (30 min)</span></div>
                <p className="text-gray-600 flex-1">Advanced vacuum suction slimming and shaping for targeted fat reduction and cellulite smoothing.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col">
                <h2 className="text-xl font-semibold mb-2 text-pink-500">Faradic</h2>
                <div className="text-lg font-bold mb-1">R250 <span className="font-normal text-sm">per session (30 min)</span></div>
                <p className="text-gray-600 flex-1">Muscle stimulation for toning, firming, and body sculpting. Great for stubborn areas.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col">
                <h2 className="text-xl font-semibold mb-2 text-pink-500">Detox Sauna</h2>
                <div className="text-lg font-bold mb-1">R200 <span className="font-normal text-sm">per session (30 min)</span></div>
                <p className="text-gray-600 flex-1">Infrared sauna dome therapy for deep detox, calorie burn, pain relief, and improved skin tone. Unlike traditional saunas, our infrared domes penetrate deeper into your tissues, promoting cellular repair and reducing inflammation. Clients report better sleep, stress relief, improved mood, and noticeable cm loss over time. It's also a powerful immunity booster, helping your body flush out toxins naturally through sweating. Safe, effective, and deeply relaxing, each session feels like a mini wellness retreat. Book yours today and feel the difference after just one use.</p>
              </div>
            </div>

            {/* Packages */}
            <h2 className="text-3xl font-bold text-center mb-10 mt-20">Slimming Injection Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-pink-50 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">150 Fat Dissolving Injections</h3>
                <div className="text-gray-600 mb-1">45 min</div>
                <p className="text-gray-500 mb-2">Full body (size 38+). Includes x3 30 min Sauna sessions.</p>
                <div className="text-2xl font-bold text-pink-500 mb-2">ZAR 6,600</div>
              </div>
              <div className="bg-pink-50 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">100 Fat Dissolving Injections</h3>
                <div className="text-gray-600 mb-1">45 min</div>
                <p className="text-gray-500 mb-2">Full body (size 36+). Includes x3 30 min Sauna sessions.</p>
                <div className="text-2xl font-bold text-pink-500 mb-2">ZAR 5,100</div>
              </div>
              <div className="bg-pink-50 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">40 Fat Dissolving Injections</h3>
                <div className="text-gray-600 mb-1">45 min</div>
                <p className="text-gray-500 mb-2">x2 large areas (stomach & thighs, front & back). Includes x3 Sauna sessions.</p>
                <div className="text-2xl font-bold text-pink-500 mb-2">ZAR 2,890</div>
              </div>
              <div className="bg-pink-50 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">20 Fat Dissolving Injections</h3>
                <div className="text-gray-600 mb-1">35 min</div>
                <p className="text-gray-500 mb-2">For size 36+ (stomach, thighs, back, arms, multiple areas). Includes x3 30 min Sauna sessions.</p>
                <div className="text-2xl font-bold text-pink-500 mb-2">ZAR 1,590</div>
              </div>
              <div className="bg-pink-50 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">10 Slimming Injections</h3>
                <div className="text-gray-600 mb-1">35 min</div>
                <p className="text-gray-500 mb-2">For larger areas (stomach, thighs, bum, back). Includes x2 30 min Sauna sessions.</p>
                <div className="text-2xl font-bold text-pink-500 mb-2">ZAR 850</div>
              </div>
              <div className="bg-pink-50 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">6 Fat Dissolving Injections</h3>
                <div className="text-gray-600 mb-1">35 min</div>
                <p className="text-gray-500 mb-2">For small areas (arms, love handles, chin, knees, or fat deposits).</p>
              </div>
              <div className="bg-pink-50 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">Consult</h3>
                <div className="text-gray-600 mb-1">30 min</div>
                <p className="text-gray-500 mb-2">Book your free consultation and receive a complimentary 30-minute infrared sauna session to kickstart your detox. During this time, we assess your body type, target areas, and wellness goals to recommend a personalised plan, including how many natural fat-dissolving injections may be ideal for best results. It's a no-pressure, informative session designed to give you real insight into what will work for your body. Whether you're focused on slimming, reducing bloating, or improving skin tone, this is the perfect first step to a healthier, more confident you.</p>
                <div className="text-2xl font-bold text-pink-500 mb-2">Free</div>
              </div>
              <div className="bg-pink-50 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">Detox Sauna</h3>
                <div className="text-gray-600 mb-1">30 min</div>
                <p className="text-gray-500 mb-2">Experience the power of infrared sauna dome therapy—a 30 minute session can help you burn up to 600 calories while deeply detoxifying your body, boosting circulation, easing joint and muscle pain, and enhancing skin tone. Unlike traditional saunas, our infrared domes penetrate deeper into your tissues, promoting cellular repair and reducing inflammation. Clients report better sleep, stress relief, improved mood, and noticeable cm loss over time. It's also a powerful immunity booster, helping your body flush out toxins naturally through sweating. Safe, effective, and deeply relaxing, each session feels like a mini wellness retreat. Book yours today and feel the difference after just one use.</p>
                <div className="text-2xl font-bold text-pink-500 mb-2">ZAR 200</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 