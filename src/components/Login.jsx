import { Header } from "../layout";
import { Link, useNavigate } from "react-router-dom";
import { BdContext } from "../context/bdProvider";
import { useContext, useEffect } from "react";

const Login = () => {
  const { handleLogin, validateLogin, loginAttempted, setRegisterAttempted } =
    useContext(BdContext);

  const navigate = useNavigate();

  const onClick = () => {
    setRegisterAttempted(undefined);
  };
  useEffect(() => {
    if (validateLogin) {
      setTimeout(() => navigate("/inicio"), 1000);
    }
  }, [validateLogin]);

  return (
    <>
      <Header />
      <div
        className={`fixed  inset-0 m-auto w-full h-full rounded-lg  flex  flex-col items-center justify-center backdrop-blur-lg `}
      >
        <div className="relative w-[450px] h-[460px] flex flex-col items-center justify-center rounded-lg bg-[#1c232bf8]">
          <Link
            to="/inicio"
            className="absolute top-0  right-2 text-[#3a7a9d] rounded-lg px-4  text-[35px]"
          >
            x
          </Link>
          <h2 className="text-center font-Minecrafter pb-4 text-[35px]">
            Iniciar Sesion
          </h2>
          <form onSubmit={handleLogin} className="flex flex-col  gap-3 ">
            <input
              type="email"
              name="email"
              placeholder="Ingrese su email "
              className="h-7 w-[350px] outline-none rounded-lg px-2 py-4 bg-[#3a7a9dd7]"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Ingresa una contraseña"
              className="h-7 w-[350px] outline-none rounded-lg px-2 py-4 mb-4   bg-[#3a7a9dd7]"
              required
            />
            <button
              type="submit"
              className="  text-[20px]  rounded-lg px-4 py-2 btn"
            >
              Iniciar Sesion
            </button>
          </form>
          <p className="pt-4 pb-5">
            ¿No tienes cuenta?{" "}
            <Link onClick={onClick} to="/register">
              Regístrate
            </Link>
          </p>

          <div
            role="alert"
            className={`${
              !validateLogin && loginAttempted ? "flex" : "hidden"
            } w-auto  alert alert-error`}
          >
            <span>El correo ingresado no existe </span>
            <img
              src="/assets/icon/minecraft-alert.webp"
              className="h-6 w-10 rounded-xl"
              alt="Minecraft Alert"
            />
          </div>
          {validateLogin && loginAttempted && (
            <div
              role="alert"
              className={`flex w-auto mt-5 alert alert-success`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Tu cuenta ha sido creada exitosamente!</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
