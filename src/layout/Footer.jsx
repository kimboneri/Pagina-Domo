const redes = [
  { url: "/assets/icon/redes/facebook.png", text: "Facebook" ,link:"https://www.facebook.com"},
  { url: "/assets/icon/redes/instagram.png", text: "Instagram" ,link:"https://www.instagram.com"},
  { url: "/assets/icon/redes/whatsapp.png", text: "Whatsapp" ,link:"https://www.whatsapp.com"},
  
  
];
const Footer = () => {
  const Animacion = (e) => {
    const estilos = e.target.style
    estilos.transform = "scale(1.2) translatey(-10px) "
  
    estilos.transition = "transform 0.5s ease-in-out"

}
const retornar = (e) => {
    const estilos = e.target.style
    estilos.transform = "scale(1)"
 
}
  return (
    <footer className="relative bg-no-repeat bg-cover bg-center h-[600px] my-11">
     
      <div className="absolute inset-0 bg-banner-footer bg-fixed bg-cover bg-center opacity-70 z-[-1]"></div>

      <div className="relative container mx-auto  flex justify-between items-center   pb-10 z-10 h-full">
        <div>
          <h3 className="font-Minecrafter text-center text-[45px] pb-5">DOMO</h3>
          <ul className="flex gap-2">
            {redes.map((imagen, index) => (
              <a key={index} href={imagen.link}>
                <img
                  className="h-8 w-8"
                  onMouseOver={Animacion}
                  onMouseOut={retornar}
                  src={imagen.url}
                  alt={imagen.text}
                />
              </a>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-Minecrafter text-[#3a7a9dd7]  text-[40px]">Contactanos</h3>
          <ul >
            <li>cambios@domo.com.pe</li>
            <li>soluciones@domo.com.pe</li>
            <img
              src="/assets/icon/libro-reclamaciones.jpg"
              className="w-[100px] h-[70px] mt-5"
              alt="libro-de-reclamaciones"
            />
          </ul>
        </div>

        <div>
          <h3 className="font-Minecrafter text-[#3a7a9dd7]  text-[40px]">Informacion</h3>
          <ul className="flex flex-col gap-2">
            <li><a className="hover:text-[#fff] transition-all duration-500 ease-in-out" href="#">Acerca de DOMO</a></li>
            <li><a className="hover:text-[#fff] transition-all duration-500 ease-in-out" href="#">Nuestras Tiendas</a></li>
            <li><a className="hover:text-[#fff] transition-all duration-500 ease-in-out" href="#">Trabaja con Nosotros</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-Minecrafter text-[#3a7a9dd7] text-[40px]">Servicios</h3>
          <ul className="flex flex-col gap-2">
            <li><a className="hover:text-[#fff] transition-all duration-500 ease-in-out" href="#">Devoluciones</a></li>
            <li><a className="hover:text-[#fff] transition-all duration-500 ease-in-out" href="#">Medios de Pago</a></li>
            <li><a className="hover:text-[#fff] transition-all duration-500 ease-in-out" href="#">Preguntas Frecuentes</a></li>
          </ul>
        </div>
      </div>
      <p className=" text-center">Todos los derechos reservados Domo&copy; 2024</p>

    </footer>
  );
};

export default Footer;
