
import { Link } from "react-router-dom";

const Filters = ({ children, nombreCategoria, ruta,filtrado }) => {
  return (
    <aside className=" mr-10 max-w-[700px]">
      <div className=" bg-[#253242e9] shadow-lg p-5 mb-3 h-auto">
        <Link
          className=" font-Minecrafter text-[25px] cursor-pointer"
          to={ruta}
        >
          {nombreCategoria}
        </Link>
        <ul className="flex flex-col gap-2 ">{children}</ul>
      </div>
      <div className="bg-[#253242e9] flex flex-col gap-3 shadow-lg  p-5 h-auto">
        <button onClick={()=>filtrado('default')}  className="btn flex justify-start w-[240px]">Orden Prederterminado</button>
        <button onClick={()=>filtrado('bajoAlto')}  className="btn flex justify-start w-[240px]">Orden por precios: bajo a alto</button>
        <button onClick={()=>filtrado('altoBajo')}  className="btn flex justify-start w-[240px]">Orden por precios: alto a bajo</button>
      </div>
    </aside>
  );
};

export default Filters;
