import { Link,useNavigate } from "react-router-dom";
import { Header } from "../layout";
import { BdContext } from "../context/bdProvider";
import { useContext } from "react";

const SignOff = () => {
  const {setLogin,setLoginAttempted,setRegisterAttempted,setValidateLogin} = useContext(BdContext);


  const navigate = useNavigate(); 
  const handleCerrarSesion = () => {
    setLogin(null);
    setLoginAttempted(undefined);
    setRegisterAttempted(undefined);
    setValidateLogin(undefined);
    navigate("/inicio");
  };

  return (
    <>
    <Header/>
      <div
        className={`fixed  inset-0 m-auto w-full h-full rounded-lg flex   flex-col items-center justify-center backdrop-blur-lg `}
      >
        <div className="relative w-[780px] h-[230px] flex flex-col items-center pt-5 rounded-lg bg-[#1c232bf8]">
          <h2 className="font-Minecrafter text-[30px]">
            Estas seguro que deseas cerrar sesion
          </h2>
          <div className="flex mt-14 gap-[100px]">
            <Link to={"/inicio"} onClick={handleCerrarSesion} className="rounded-lg px-4 py-2 btn w-[100px]">SI</Link>
            <Link to={"/inicio"} className="rounded-lg px-4 py-2 btn w-[100px] ">NO</Link>
          </div>

          <div className="shad"></div>
        </div>
      </div>
    </>
  );
};

export default SignOff;
