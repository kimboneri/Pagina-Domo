import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Banner, Login, Register, SignOff } from "../components";
import {
  HomePages,
  AccesoriosPages,
  ConsolePages,
  JuegosPages,
  MapPages,
} from "../pages";

const AppRouter = () => {
  return (
    
      <Router>
        <Routes>
          <Route
            path="/inicio"
            element={
              <Banner>
                <HomePages />
              </Banner>
            }
          />
          <Route
            path="/login"
            element={
              <Banner>
                <Login />
              </Banner>
            }
          />
          <Route
            path="/register"
            element={
              <Banner>
                <Register />
              </Banner>
            }
          />
          <Route
            path="/cerrarSesion"
            element={
              <Banner>
                <SignOff />
              </Banner>
            }
          />
          <Route
            path="/*"
            element={
              <Banner>
                <HomePages />
              </Banner>
            }
          />
          <Route path="/mapa" element={<MapPages />} />

          <Route path="/accesorios" element={<AccesoriosPages />} />

          <Route path="/accesorios/:category" element={<AccesoriosPages />} />

          <Route path="/consolas" element={<ConsolePages />} />
          <Route path="/consolas/:category" element={<ConsolePages />} />

          <Route path="/juegos" element={<JuegosPages />} />
          <Route path="/juegos/:category" element={<JuegosPages />} />
        </Routes>
      </Router>
   
  );
};

export default AppRouter;
