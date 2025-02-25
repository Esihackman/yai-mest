import { useState } from 'react';

export default function Product() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: 'Real-Time Location Tracking',
      description:
        'Stay updated with the exact location of workers in real time, ensuring faster emergency responses and improved operational efficiency.',
      icon: '📍',
      gradient: 'from-blue-500 to-blue-600',
      details: {
        specifications: [
          'GPS and GLONASS dual positioning system',
          'Accuracy up to 1 meter',
          'Real-time updates every 30 seconds',
          'Emergency SOS beacon functionality'
        ],
        benefits: [
          'Instant worker location tracking',
          'Rapid emergency response coordination',
          'Zone-based safety alerts',
          'Historical movement data analysis'
        ],
        technicalSpecs: {
          battery: '48-hour battery life',
          range: 'Up to 2km in open areas',
          waterproof: 'IP67 rated',
          connectivity: '4G LTE & Bluetooth 5.0'
        }
      }
    },
    {
      id: 2,
      title: 'Automatic Low-Light Sensors',
      description:
        'Enhanced visibility in dimly lit environments with automatic low-light sensors, reducing risks in hazardous work areas.',
      icon: '💡',
      gradient: 'from-yellow-500 to-orange-500',
      details: {
        specifications: [
          'Ambient light detection',
          'Automatic brightness adjustment',
          'LED safety indicators',
          'Night vision compatibility'
        ],
        benefits: [
          'Enhanced visibility in dark conditions',
          'Reduced eye strain',
          'Automatic adaptation to environment',
          'Energy-efficient operation'
        ],
        technicalSpecs: {
          sensors: 'Dual photometric sensors',
          response: '< 0.5 second reaction time',
          brightness: 'Up to 1000 lumens',
          modes: '5 automatic light modes'
        }
      }
    },
    {
      id: 3,
      title: 'Durable & Comfortable Design',
      description:
        'Built with robust materials for harsh environments while maintaining comfort for all-day wear.',
      icon: '🛡️',
      gradient: 'from-green-500 to-green-600',
      details: {
        specifications: [
          'Impact-resistant shell',
          'Adjustable fit system',
          'Ventilation channels',
          'Moisture-wicking padding'
        ],
        benefits: [
          'All-day comfort',
          'Maximum protection',
          'Temperature regulation',
          'Custom fit for all sizes'
        ],
        technicalSpecs: {
          material: 'Carbon fiber composite',
          weight: '450g ± 20g',
          certification: 'EN 397 & ANSI Z89.1',
          lifespan: '5-year warranty'
        }
      }
    },
  ];

  return (
    <section id="products" className="w-full py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Innovative Safety Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Assuah Robotics' safety helmets combine cutting-edge technology with robust protection,
            setting new standards in construction and industrial safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className="p-8">
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center justify-start">
                  <button 
                    onClick={() => setSelectedFeature(feature)}
                    className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300 flex items-center"
                  >
                    Learn more
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-6 border-b border-gray-100 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedFeature.gradient} flex items-center justify-center mr-4`}>
                    <span className="text-2xl">{selectedFeature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedFeature.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedFeature(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-8">{selectedFeature.description}</p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedFeature.details.specifications.map((spec, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Benefits</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedFeature.details.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Technical Specifications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(selectedFeature.details.technicalSpecs).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-500 capitalize">{key}</div>
                        <div className="text-gray-700 font-medium">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white p-6 border-t border-gray-100 rounded-b-2xl">
              <button 
                onClick={() => setSelectedFeature(null)}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          .group:hover .absolute.bottom-0 {
            background-image: linear-gradient(to right, #2563eb, #1d4ed8);
          }
        `}
      </style>
    </section>
  );
}