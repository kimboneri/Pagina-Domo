import { BdContext } from "../context/bdProvider";
import { useContext, useEffect } from "react";

import { Header } from "../layout";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const {
    handleSubmit,
    validateRegister,
    setValidateRegister,
    registerAttempted,
    setLoginAttempted,
    repeatRegister,
  } = useContext(BdContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (validateRegister) {
      setTimeout(() => navigate("/login"), 2000);
      setValidateRegister(false);
      setLoginAttempted(undefined);
    }
  }, [validateRegister]);

  return (
    <>
      <Header />
      <div
        className={`fixed  inset-0 m-auto w-full h-full rounded-lg flex   flex-col items-center justify-center backdrop-blur-lg `}
      >
        <div className="relative w-[450px] h-[450px] flex flex-col items-center justify-center rounded-lg bg-[#1c232bf8]">
          <Link
            to="/inicio"
            className="absolute top-0  right-2 text-[#3a7a9d] rounded-lg px-4  text-[35px]"
          >
            x
          </Link>
          <h2 className="text-center font-Minecrafter pb-4 text-[35px]">
            Registrate
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col  gap-3 ">
            <input
              type="name"
              placeholder="Ingrese su nombre"
              className=" h-7 w-[350px] outline-none rounded-lg px-2 py-4 bg-[#3a7a9dd7]"
              name="name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Ingrese su email "
              className="h-7 w-[350px] outline-none rounded-lg px-2 py-4  bg-[#3a7a9dd7]"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Ingresa una contraseña"
              className="h-7 w-[350px] outline-none rounded-lg px-2 py-4 mb-4  bg-[#3a7a9dd7]"
              required
            />
            <button
              type="submit"
              className=" #36383aab  text-[20px] rounded-lg px-4 py-2 btn "
            >
              Regristrarme
            </button>
          </form>

          {repeatRegister ? (
            <div
              role="alert"
              className={`${
                repeatRegister ? "flex" : "hidden"
              }   w-auto mt-5 alert alert-warning`}
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>La cuenta ya existe</span>
            </div>
          ) : (
            <div
              role="alert"
              className={`${
                !validateRegister && registerAttempted ? "flex" : "hidden"
              }   w-auto mt-5 alert alert-success`}
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
export default Register;
