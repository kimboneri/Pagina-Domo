import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center gap-10 font-Minecrafter text-[20px]   ">
      <NavLink to="/inicio">INICIO</NavLink>
      <div className="dropdown dropdown-hover ">
        <NavLink to="/consolas">CONSOLAS</NavLink>
        <ul className="dropdown-content menu flex flex-col  gap-3 text-[17px]    rounded-lg z-[1] w-auto bg-[#3a7a9dd7]  ">
          <li className=" hover:bg-[#36383aab] rounded-lg ">
            <NavLink to={"/consolas/ps5"}>PS5</NavLink>
          </li>
          <li className=" hover:bg-[#36383aab] rounded-lg ">
            <NavLink to={"/consolas/ps4"}>PS4</NavLink>
          </li>
          <li className=" hover:bg-[#36383aab] rounded-lg ">
            <NavLink to={"/consolas/nintendo"}>NINTENDO</NavLink>
          </li>
          <li className=" hover:bg-[#36383aab] rounded-lg ">
            <NavLink to={"/consolas/xbox"}>XBOX</NavLink>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-hover ">
        <NavLink to="/juegos">JUEGOS</NavLink>
        <ul className="dropdown-content menu flex flex-col gap-3 text-[17px] rounded-lg z-[1] w-auto  bg-[#3a7a9dd7] ">
          <li className=" hover:bg-[#36383aab] rounded-lg ">
            <NavLink to={"/juegos/ps4"}>PS4</NavLink>
          </li>
          <li className=" hover:bg-[#36383aab] rounded-lg ">
            <NavLink to={"/juegos/ps5"}>PS5</NavLink>
          </li>
          <li className=" hover:bg-[#36383aab] rounded-lg ">
            <NavLink to={"/juegos/xbox"}>XBOX ONE</NavLink>
          </li>
          <li className=" hover:bg-[#36383aab] rounded-lg ">
            <NavLink to={"/juegos/nintendo"}>NINTENDO</NavLink>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-hover ">
        <NavLink to="/accesorios">ACCESORIOS</NavLink>
        <ul className="dropdown-content menu flex flex-col gap-3  text-[17px]  rounded-lg z-[1] w-auto bg-[#3a7a9dd7]">
          <li className=" hover:bg-[#36383aab] rounded-lg ">
            <NavLink to={"/accesorios/sillas-gamer"}>SILLAS GAMER</NavLink>
          </li>
          <li className=" hover:bg-[#36383aab] rounded-lg ">
            <NavLink to={"/accesorios/audifonos"}>AUDIFONOS</NavLink>
          </li>
          <li className=" hover:bg-[#36383aab] rounded-lg ">
            <NavLink to={"/accesorios/mandos"}>MANDOS</NavLink>
          </li>
          <li className=" hover:bg-[#36383aab] rounded-lg">
            <NavLink to={"/accesorios/cargadores"}>CARGADORES/CABLES</NavLink>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Nav;
