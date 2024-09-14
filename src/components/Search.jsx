import { useState, useEffect } from "react";
import { accesorios } from "../db/accesorios";


const Search = () => {
  const [AllProducts, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  console.log(accesorios);

  const handleChange = (e) => {
    const input = e.target.value;
    setSearch(e.target.value);
    if (input) {
      setProducts(
        accesorios.filter((data) =>
          data.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else {
      setProducts([]);
    }
  };

  

  return (
    <div>
      <input
        onChange={handleChange}
        value={search}
        type="text"
        placeholder="Buscar..."
        id="search-input"
        className=" h-7 outline-none rounded-lg px-2 py-4   bg-[#3a7a9dd7]"
      />
    <div className={` absolute ${AllProducts.length ? "flex":"hidden"}  flex-col gap-3 p-[15px] bg-[#3a7a9dd7] rounded-lg mt-[20px] w-auto max-h-[430px]   overflow-y-scroll`}  > 
        {AllProducts.map((producto) => (
          <div
            key={producto.id}
            className="realtive w-auto flex p-[20px] bg-[#253242e9]  gap-3 "
          >
            <img
              src={producto.img[0]}
              alt={producto.marca}
              className="w-[150px] h-auto object-cover"
            />
            <div>
              <p className="text-[20px]">{producto.name}</p>
              <span className="block pb-2">S/{producto.precio}</span>

              <button className=" font-Minecrafter  bg-[#1c232be9] text-[15px]  rounded-lg px-4 py-2     ">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div> 
      
     
    </div>
  );
};

export default Search;
