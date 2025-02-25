import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import HelmetImage from '../../../images/helmet1.png';
import WorkersImage from '../../../images/helmet2.png';
import NightSiteImage from '../../../images/helmet3.png';

const slides = [
  {
    id: 1,
    title: 'Innovative Safety Helmets',
    description:
      'Advanced helmets with real-time location tracking and low-light sensors for maximum worker safety.',
    image: HelmetImage,
  },
  {
    id: 2,
    title: 'Real-Time Tracking in Action',
    description:
      'Experience live tracking data that ensures faster emergency responses in hazardous environments.',
    image: WorkersImage,
  },
  {
    id: 3,
    title: 'Enhanced Visibility at Night',
    description:
      'Automatic low-light sensors for better visibility, improving safety in dimly lit industrial settings.',
    image: NightSiteImage,
  },
];

export default function HeroSection() {
  return (
    <section id="hero" className="w-full h-[90vh] pt-6 relative bg-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-[90vh] bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center text-center transition-all duration-500"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
                backgroundSize: 'cover',
              }}
            >
              <h2 className="relative z-20 text-white text-2xl md:text-5xl font-extrabold mb-4 animate-fadeIn drop-shadow-lg" style={{ fontFamily: 'Times New Roman' }}>
                {slide.title}
              </h2>
              <p className="relative z-20 text-white text-lg md:text-2xl px-4 animate-fadeIn leading-relaxed drop-shadow-md" style={{ fontFamily: 'Times New Roman' }}>
                {slide.description}
              </p>
              {/* <button className="relative z-20 mt-6 px-6 py-3 bg-[#009c4a] text-white rounded-full shadow-lg hover:bg-[#007a3a] transition-transform transform hover:scale-105" style={{ fontFamily: 'Times New Roman' }}>
                Learn More
              </button> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
