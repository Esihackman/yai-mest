import { useState } from 'react';
import { Check } from 'lucide-react';
import HelmetImage1 from '../../../images/showhelmet3.png';
import HelmetImage2 from '../../../images/showhelmet2.png';
import HelmetImage3 from '../../../images/showhelmet1.png';

export default function ShowcaseSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      image: HelmetImage1,
      title: "Real-Time Tracking",
      description: "Stay updated with precise real-time location tracking, ensuring fast emergency responses when it matters most.",
      features: ["GPS Integration", "Live Updates", "Emergency Alerts"]
    },
    {
      image: HelmetImage2,
      title: "Low-Light Sensors",
      description: "Improve visibility in dim environments with automatic low-light sensors, enhancing safety during nighttime operations.",
      features: ["Automatic Adjustment", "Night Vision", "LED Indicators"]
    },
    {
      image: HelmetImage3,
      title: "Durable Design",
      description: "Built for tough environments, the helmets combine durability with cutting-edge technology for maximum protection.",
      features: ["Impact Resistant", "Weather Proof", "Comfort Fit"]
    }
  ];

  return (
    <section
      id="showcase"
      className="w-full py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-600 mb-4 tracking-tight">
            Product Showcase
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the next generation of safety equipment with our innovative helmet technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3 group-hover:text-white relative z-10">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-white/90 relative z-10">
                    {card.description}
                  </p>
                  
                  <div className="space-y-2 relative z-10">
                    {card.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-sm text-gray-500 group-hover:text-white/80"
                      >
                        <Check className="w-4 h-4 mr-2 text-blue-500 group-hover:text-white" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform origin-left transition-transform duration-300 ${
                  hoveredCard === index ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}