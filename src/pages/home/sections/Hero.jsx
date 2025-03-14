import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Button, Box, Typography, Container } from '@mui/material';
import { WaterDrop, Sanitizer, BubbleChart, ElectricBolt, Speed, TouchApp } from '@mui/icons-material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import handwashImage1 from '../../../images/washing1.png';
import handwashImage2 from '../../../images/washing4.png';
import handwashImage3 from '../../../images/washing3.png';

const slides = [
  {
    id: 1,
    title: 'Intelligent Hand Washing Machine',
    subtitle: 'By John Assuah, Electronic Engineer',
    description:
      'The Intelligent Hand Washing Machine delivers high performance, sustainability, and long-term reliability while maintaining top-tier hygiene standards.',
    image: handwashImage1,
    icon: <Sanitizer fontSize="large" />,
    color: 'blue',
    stats: [
      { value: '99.9%', label: 'Germ Reduction' },
      { value: '40%', label: 'Water Savings' },
      { value: '2s', label: 'Response Time' }
    ]
  },
  {
    id: 2,
    title: ' Smart Lighting & LCD Display',
    description:
      ' Illuminates in the dark and provides step-by-step guidance.',
    image: handwashImage2,
    icon: <TouchApp fontSize="large" />,
    color: 'amber',
    stats: [
      { value: '0.5s', label: 'Detection Time' },
      { value: '99.9%', label: 'Reliability' },
      { value: 'IoT', label: 'Connectivity' }
    ]
  },
  {
    id: 3,
    title: ' Auto Soap & Water Dispensing ',
    subtitle: 'Eco-Friendly Innovation',
    description:
      ' Ensures proper handwashing with minimal waste.',
    image: handwashImage3,
    icon: <WaterDrop fontSize="large" />,
    color: 'green',
    stats: [
      { value: '60%', label: 'Energy Efficient' },
      { value: '12+', label: 'Smart Features' },
      { value: '24/7', label: 'Monitoring' }
    ]
  }
];


export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const getColorClass = (color) => {
    const colors = {
      blue: 'from-blue-600 to-blue-800',
      amber: 'from-amber-600 to-amber-800',
      green: 'from-green-600 to-green-800'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="home" className="w-full h-[600px] md:h-[500px] relative bg-gray-900 overflow-hidden">
      {/* Main slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} bg-white/70 hover:bg-white transition-all duration-300"></span>`;
          },
        }}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        className="h-full relative z-10"
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slide.image})`,
                backgroundSize: 'cover',
              }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${getColorClass(slide.color)} opacity-40`} />
              <Container maxWidth="lg" className="relative z-20 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                  {/* Left side content */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-left"
                  >
                    <div className="flex items-center mb-3">
                      <div className={`flex items-center justify-center p-2 rounded-full bg-gradient-to-r ${getColorClass(slide.color)} shadow-lg mr-3`}>
                        {React.cloneElement(slide.icon, { fontSize: 'small' })}
                      </div>
                      <Typography variant="subtitle2" className="text-white/80 tracking-wider">
                        {slide.subtitle}
                      </Typography>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <Typography 
                        variant="h3" 
                        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white"
                        sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                      >
                        {slide.title}
                      </Typography>
                      
                      <Typography 
                        variant="body1" 
                        className="text-white/90 mb-4 max-w-xl"
                        sx={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}
                      >
                        {slide.description}
                      </Typography>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="flex gap-3"
                    >
                    </motion.div>
                  </motion.div>
                  
                  {/* Right side stats */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hidden md:block"
                  >
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-5 border border-white/10 shadow-xl">
                      <Typography variant="subtitle2" className="text-white/80 mb-4 font-medium">
                        Intelligent Handwashing Metrics
                      </Typography>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {slide.stats.map((stat, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                            className="text-center"
                          >
                            <Typography 
                              variant="h4" 
                              className={`font-bold mb-0`}
                              sx={{ 
                                background: `linear-gradient(to right, ${
                                  slide.color === 'blue' ? '#60A5FA, #3B82F6' : 
                                  slide.color === 'amber' ? '#FCD34D, #F59E0B' : 
                                  '#34D399, #10B981'
                                })`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                              }}
                            >
                              {stat.value}
                            </Typography>
                            <Typography variant="caption" className="text-white/70">
                              {stat.label}
                            </Typography>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex items-center">
                          <ElectricBolt className="text-white/60 mr-2" fontSize="small" />
                          <Typography variant="caption" className="text-white/80">
                            Designed & Engineered in Sekondi-Takoradi, Ghana
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <div 
              key={index}
              className={`h-1 transition-all duration-500 rounded-full ${
                index === activeIndex 
                  ? 'w-6 bg-white' 
                  : 'w-2 bg-white/40'
              }`}
            ></div>
          ))}
        </div>
      </Swiper>

      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(2rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            margin: 0 4px !important;
          }

          .swiper-button-prev,
          .swiper-button-next {
            width: 36px !important;
            height: 36px !important;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
          
          /* Water droplet animation */
          @keyframes droplet {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.7;
            }
            70% {
              transform: translateY(30px) scale(0.9);
              opacity: 0.5;
            }
            100% {
              transform: translateY(40px) scale(0.8);
              opacity: 0;
            }
          }
          
          .droplet {
            animation: droplet 2s infinite;
          }
        `}
      </style>
    </section>
  );
}