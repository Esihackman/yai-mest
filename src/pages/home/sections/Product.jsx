import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Chip, IconButton, Tooltip } from '@mui/material';
import { Close, ArrowForward, CheckCircle, Info, Star } from '@mui/icons-material';

export default function Product() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [activeTab, setActiveTab] = useState('specifications');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedFeature]);

  const features = [
    {
      id: 1,
      title: 'Real-Time Location Tracking',
      description:
        'Stay updated with the exact location of workers in real time, ensuring faster emergency responses and improved operational efficiency.',
      icon: '📍',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
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
      bgColor: 'bg-amber-50',
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
      bgColor: 'bg-green-50',
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Innovative Safety Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Assuah Robotics' safety helmets combine cutting-edge technology with robust protection,
            setting new standards in construction and industrial safety.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={feature.id}
              className={`group relative ${feature.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-transparent hover:border-gray-200`}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className="p-8">
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-md`}>
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
                  <Button 
                    onClick={() => setSelectedFeature(feature)}
                    variant="text"
                    color="primary"
                    endIcon={<ArrowForward />}
                    className="font-semibold group-hover:text-blue-700 transition-colors duration-300"
                  >
                    Learn more
                  </Button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedFeature(null);
            }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white p-6 border-b border-gray-100 rounded-t-2xl z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedFeature.gradient} flex items-center justify-center mr-4 shadow-md`}>
                      <span className="text-2xl">{selectedFeature.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{selectedFeature.title}</h3>
                  </div>
                  <IconButton 
                    onClick={() => setSelectedFeature(null)}
                    size="small"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Close />
                  </IconButton>
                </div>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
                <p className="text-gray-600 mb-8 text-lg">{selectedFeature.description}</p>
                
                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-6">
                  <button
                    className={`px-4 py-2 font-medium ${activeTab === 'specifications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('specifications')}
                  >
                    Specifications
                  </button>
                  <button
                    className={`px-4 py-2 font-medium ${activeTab === 'benefits' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('benefits')}
                  >
                    Benefits
                  </button>
                  <button
                    className={`px-4 py-2 font-medium ${activeTab === 'technical' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('technical')}
                  >
                    Technical Specs
                  </button>
                </div>
                
                <div className="space-y-8">
                  {/* Specifications Tab */}
                  {activeTab === 'specifications' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <Info className="mr-2 text-blue-500" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedFeature.details.specifications.map((spec, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                            <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" fontSize="small" />
                            <span className="text-gray-700">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Benefits Tab */}
                  {activeTab === 'benefits' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <Star className="mr-2 text-amber-500" />
                        Benefits
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedFeature.details.benefits.map((benefit, index) => (
                          <div key={index} className="bg-blue-50 p-4 rounded-lg flex items-start">
                            <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0">
                              <CheckCircle className="text-blue-500" fontSize="small" />
                            </div>
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Technical Specs Tab */}
                  {activeTab === 'technical' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <Info className="mr-2 text-gray-500" />
                        Technical Specifications
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(selectedFeature.details.technicalSpecs).map(([key, value]) => (
                          <div key={key} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <div className="text-sm text-gray-500 capitalize mb-1">{key}</div>
                            <div className="text-gray-800 font-medium">{value}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="sticky bottom-0 bg-white p-6 border-t border-gray-100 rounded-b-2xl">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="flex items-center">
                    <Tooltip title="Available for order">
                      <Chip 
                        label="In Stock" 
                        color="success" 
                        size="small" 
                        className="mr-3"
                      />
                    </Tooltip>
                    <span className="text-gray-600">Compatible with all AssuahGuard models</span>
                  </div>
                  <Button 
                    onClick={() => setSelectedFeature(null)}
                    variant="contained"
                    color="primary"
                    className="py-2 px-6 rounded-lg"
                  >
                    Close Details
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .group:nth-child(1):hover .absolute.bottom-0 {
          background-image: linear-gradient(to right, #2563eb, #1d4ed8);
        }
        .group:nth-child(2):hover .absolute.bottom-0 {
          background-image: linear-gradient(to right, #f59e0b, #d97706);
        }
        .group:nth-child(3):hover .absolute.bottom-0 {
          background-image: linear-gradient(to right, #10b981, #059669);
        }
      `}</style>
    </section>
  );
}