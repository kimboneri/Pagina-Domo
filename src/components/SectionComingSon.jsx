import CarruselPubli from "./CarruselPubli";
import { proximamente } from "../db/proximamente";

const SectionComingSon = () => {
  return (
    <section className="container mx-auto   my-[200px]  ">
   
        <h2 className=" mb-10  text-center text-[55px] text-[#3a7a9dd7] font-Minecrafter ">
          Proximamente
        </h2>
        <CarruselPubli
          
          slides={proximamente}
          perView={2}
          arrows={true}
          autoplay={false}
        />
    
    </section>
  );
};

export default SectionComingSon;
