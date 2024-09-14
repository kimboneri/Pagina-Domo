import { useContext } from "react";
import { BdContext } from "../context/bdProvider";
import { Link } from "react-router-dom";

const Authentication = () => {
  const { login } = useContext(BdContext);

  return (
    <>
      <div className="flex justify-center place-items-center gap-2">
        <img src="/assets/icon/loginIcon.png" alt="registro de usuario" className="h-7 w-7" />
        <div className="flex flex-col  ">
          
            <Link to="/login">
              {login ? "Hola: " +  login.name : "Iniciar Sesión"}
            </Link>
          
          {login ? <Link to="/cerrarSesion">Cerrar Sesión</Link> : null}
        </div>
      </div>
    </>
  );
};

export default Authentication;
