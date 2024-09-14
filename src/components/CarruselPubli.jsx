import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";

const CarruselPubli = ({ slides, perView, arrows, autoplay }) => {
  const [activeSlide, setActiveSlide] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveSlide(index);
  };

  const handleMouseLeave = () => {
    setActiveSlide(null);
  };

  return (
    <div className="swiper-container">
      <Swiper
        autoplay={autoplay}
        navigation={arrows}
        modules={[Navigation, Autoplay]}
        className="swiper-slider"
        spaceBetween={50}
        slidesPerView={perView}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="swiper-slide relative" key={slide.id}>
            <p className="font-Minecrafter text-center py-2 bg-[#1c232be9]">
              {slide.descripcion}
            </p>
            <div 
              className="relative w-full h-full"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img 
                className="w-full h-full object-cover " 
                src={slide.img} 
                alt="Imagen de trailer" 
              />
              {activeSlide === index && (
                <iframe 
                  className="absolute rounded-lg top-0 left-0 w-full h-full " 
                  src={`${slide.trailerUrl}?autoplay=1`} 
                  title="YouTube video player" 
                   
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarruselPubli;
