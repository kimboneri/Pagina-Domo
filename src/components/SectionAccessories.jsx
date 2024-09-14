
import { mandosPruebas } from "../db/mandosPruebas"
import CarruselProduct from "./CarruselProduct"
const SectionAccessories = () => {
  return (
    <section className="container  mx-auto mt-10 my-[200px]">
        <h2 className="mb-10 text-center text-[55px] text-[#3a7a9dd7] font-Minecrafter ">
          Accessorios
        </h2>
        <CarruselProduct slides={mandosPruebas} perView={3} arrows={true} autoplay={false} />
    </section>
  )
}

export default SectionAccessories