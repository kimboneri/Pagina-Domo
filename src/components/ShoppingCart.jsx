import { useState } from "react";
import { useContext } from "react";
import { BdContext } from "../context/bdProvider";
const ShoppingCart = () => {
  const { cart, removeCart, totalItemsCart, deleteCart, editQuantity } =
    useContext(BdContext);

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
    console.log("hola");
  };

  return (
    <>
      <div onClick={handleClick} className="flex place-items-center  ">
        <img
          src="/assets/icon/bolsa-de-compra.png"
          className="w-7 h-7 cursor-pointer"
          alt="bolsa de compra"
        />
        <span className="font-Minecrafter text-[22px] pl-1 pb-2 transition-all">
          {totalItemsCart > 0 ? totalItemsCart : ""}
        </span>
      </div>

      <div
        className={`absolute top-[100px]  w-[630px]  right-0 h-auto bg-[#36383acc]  flex flex-col justify-center items-center gap-3 rounded-lg z-10 p-5 
          ${
            show
              ? "translate-x-0 transition-all duration-500 ease-in-out"
              : "translate-x-[700px] transition-all duration-500 ease-in-out"
          }`}
      >
        <div>
          {cart.length === 0 ? (
            <div className="flex flex-col gap-3 justify-center items-center p-5">
              <p className=" font-Minecrafter text-[25px]">
                El carrito esta vacio
              </p>
              <img
                src="assets/icon/bolsa-de-compra.png"
                alt="bolsa de compra"
              />
            </div>
          ) : (
            <>
              <div className="overflow-y-scroll   h-[600px] flex flex-col gap-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="relative w-full flex p-[20px] bg-[#253242e9] rounded-lg gap-3"
                  >
                    <img
                      className="relative w-[25px] h-[20px] cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
                      src="assets/icon/icons8-x-96.png"
                      onClick={() => removeCart(item.id)}
                      alt=""
                    />
                    <img
                      src={item.img[0]}
                      alt={item.marca}
                      className="w-[150px] h-auto object-cover"
                    />
                    <div className="flex flex-col justify-center gap-2">
                      <p className="text-[20px]">{item.name}</p>

                      <span className="block pb-2">S/{item.precio}</span>
                      <div className="flex w-full justify-start gap-3 items-center ">

                        
                        <img className=" bg-[#525557d7]  rounded-lg cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out " src="assets/icon/boton-disminuir.png" alt="boton-disminuir" onClick={() => editQuantity(item.id, -1)} />
                        <span className="w-[20px] text-center  font-Minecrafter text-[25px] ">{item.cantidad} </span>
                       
                        <img className=" bg-[#525557d7]  rounded-lg cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out " src="assets/icon/boton-aumentar.png" alt="boton-aumentar" onClick={() => editQuantity(item.id, +1)} />
                    
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full bg-[#3a7a9dd7] rounded-lg">
                <p className="border-b-2 border-[#1c232ba1] text-[20px]">
                  Total: S/
                  {cart.reduce(
                    (total, item) => total + item.precio * item.cantidad,
                    0
                  )}
                </p>
                <div className="flex gap-4 p-5">
                  <button className="btn font-Minecrafter hover:scale-110 transition-all duration-500 ease-in-out">
                    Comprar
                  </button>
                  <button
                    onClick={deleteCart}
                    className="btn font-Minecrafter hover:scale-110 transition-all duration-500 ease-in-out"
                  >
                    Vaciar carrito
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ShoppingCart;
