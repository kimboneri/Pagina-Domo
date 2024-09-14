  import { useContext } from "react";
  import { BdContext } from "../context/bdProvider";
  import { Link } from "react-router-dom";
  const Products = ({data}) => {
    const { addCart } = useContext(BdContext);

  


    return (
      <section>
        
        <div className="grid grid-cols-4 gap-10 ">
          {data.map((producto) => (
            <div  key={producto.id} className="flex flex-col justify-between ">
              <Link  to={`/informacion-producto`}>
              <div  className="w-[20rem] cursor-pointer hover:bg-[#3a7a9d85] transition-all duration-500 ease-in-out p-[40px] ">
                <img

                  className="w-auto h-auto hover:scale-105 transition-all duration-500 ease-in-out "
                  src={producto.img[0]}
                  alt={producto.name}
                />
              </div>
              </Link>
              
              <div className="px-2 ">
                <p className="  font-bold">{producto.name}</p>
                <span className="text-[25px] font-LilitaOne ">
                  {"S/" + producto.precio}
                </span>
                <div className="flex justify-center mt-4">
                  <button onClick={() => addCart(producto)} className=" font-Minecrafter  bg-[#55abdad7] block hover:scale-105  transition-all duration-500 ease-in-out  rounded-lg px-4 py-2 text-[#1c232be9]    ">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </section>
    );
  };

  export default Products;
