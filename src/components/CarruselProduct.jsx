import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";

const CarruselProduct = ({ slides, perView, arrows, autoplay }) => {

  const mover = (e)=> {
    e.target.style.transform = "scale(1.1)";
    e.target.style.overflow = "hidden"; 
    e.target.style.transition = "all 0.5s ease-in-out";
  }

  const retornar = (e)=> {
    e.target.style.transform = "scale(1)";

  }
  return (
    <div  className="swiper-container ">
      <Swiper
      
        autoplay={autoplay}
        navigation={arrows}
        modules={[Navigation, Autoplay]}
        className="swiper-slider"
        spaceBetween={50}
        slidesPerView={perView}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide) => (
          <SwiperSlide  className="swiper-slide " key={slide.id}>
     

            <img className="p-[20px]" onMouseOver={mover} onMouseOut={retornar} src={slide.img} />
          
            <p className="font-bold pt-5 ">{slide.name}</p>
            <span className="text-[25px]  font-LilitaOne">S/{slide.precio}</span>
              
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CarruselProduct;
