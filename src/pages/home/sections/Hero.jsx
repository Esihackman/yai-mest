import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Button, Box, Typography, Container } from '@mui/material';
import { Engineering, LocationOn, WbSunny, Speed } from '@mui/icons-material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import images
import HelmetImage from '../../../images/helmet1.png';
import WorkersImage from '../../../images/helmet2.png';
import NightSiteImage from '../../../images/helmet3.png';

const slides = [
  {
    id: 1,
    title: 'Electronic Safety Innovations',
    subtitle: 'By John Assuah, Electrical Engineer',
    description:
      'Custom-designed electronic circuits with real-time location tracking and sensor technology for maximum worker protection.',
    image: HelmetImage,
    icon: <Engineering fontSize="large" />,
    color: 'blue',
    stats: [
      { value: '78%', label: 'Incident Reduction' },
      { value: '1m', label: 'Tracking Accuracy' },
      { value: '48h', label: 'Battery Life' }
    ]
  },
  {
    id: 2,
    title: 'Proprietary IC Programming',
    subtitle: 'Advanced Circuit Design',
    description:
      'Leveraging 12+ years of IC programming expertise to create intelligent safety systems that respond in milliseconds to potential hazards.',
    image: WorkersImage,
    icon: <Speed fontSize="large" />,
    color: 'amber',
    stats: [
      { value: '0.5s', label: 'Response Time' },
      { value: '99.8%', label: 'Reliability' },
      { value: '4G/BT', label: 'Connectivity' }
    ]
  },
  {
    id: 3,
    title: 'Smart Sensor Technology',
    subtitle: 'Environmental Awareness',
    description:
      'Custom-designed sensor arrays automatically detect environmental conditions and adjust safety parameters for optimal worker protection.',
    image: NightSiteImage,
    icon: <WbSunny fontSize="large" />,
    color: 'green',
    stats: [
      { value: '100%', label: 'Low-light Detection' },
      { value: '12+', label: 'Sensor Types' },
      { value: '360°', label: 'Coverage' }
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
      {/* Animated background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTJjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTJjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTEyLTI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEyYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEyYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] bg-repeat animate-pulse" style={{ animationDuration: '15s' }}></div>
      </div>

      {/* Circuit board pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NiIgaGVpZ2h0PSI4NiI+CjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIj4KPHBhdGggZD0iTTQzLDM1IEw0Myw1MSI+PC9wYXRoPgo8cGF0aCBkPSJNNTEsNDMgTDM1LDQzIj48L3BhdGg+CjxwYXRoIGQ9Ik0zMCwzMCBMNTYsNTYiPjwvcGF0aD4KPHBhdGggZD0iTTU2LDMwIEwzMCw1NiI+PC9wYXRoPgo8Y2lyY2xlIGN4PSI0MyIgY3k9IjQzIiByPSIyMCI+PC9jaXJjbGU+CjxjaXJjbGUgY3g9IjQzIiBjeT0iNDMiIHI9IjEwIj48L2NpcmNsZT4KPGNpcmNsZSBjeD0iNDMiIGN5PSI0MyIgcj0iMyI+PC9jaXJjbGU+CjwvZz4KPC9zdmc+')] bg-repeat"></div>

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
              
              {/* Animated circuit lines */}
              <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M0,50 Q150,25 300,50 T600,50" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{ animationDuration: '4s' }}
                  />
                  <path 
                    d="M0,100 Q200,75 400,100 T800,100" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{ animationDuration: '6s' }}
                  />
                  <path 
                    d="M0,150 Q250,125 500,150 T1000,150" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{ animationDuration: '5s' }}
                  />
                </svg>
              </div>

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
                        Electronic Safety Metrics
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
                          <LocationOn className="text-white/60 mr-2" fontSize="small" />
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

        {/* Custom navigation buttons */}
        <div className="swiper-button-prev !text-white after:!text-lg hover:scale-110 transition-transform duration-300"></div>
        <div className="swiper-button-next !text-white after:!text-lg hover:scale-110 transition-transform duration-300"></div>
        
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
          
          /* Animated gradient background */
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </section>
  );
}