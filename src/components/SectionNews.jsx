import CarruselProduct from "./CarruselProduct";
import { ultimosLanzamientos } from "../db/ultimosLanzamientos";

const SectionNews = () => {
  return (
    <section className="container mx-auto   my-[200px]  ">
      <h2 className="mb-16 text-center text-[55px] text-[#3a7a9dd7] font-Minecrafter ">Ultimos Lanzamientos</h2>
      <CarruselProduct slides={ultimosLanzamientos} perView={4} arrows={true} autoplay={false}/>
       
    </section>
  );
};

export default SectionNews;
