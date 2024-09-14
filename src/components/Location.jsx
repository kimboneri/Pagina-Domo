import { Link } from "react-router-dom"


const Location = () => {
  const Animacion = (e) => {
    const estilos = e.target.style
    estilos.transform = "scale(1.2) translatey(-5px) "
  
    estilos.transition = "transform 0.5s ease-in-out"

}
const retornar = (e) => {
    const estilos = e.target.style
    estilos.transform = "scale(1)"
 
}
  return (
    <div className="flex place-items-center">
        <Link to={"/mapa"}><img src="../assets/icon/ubicacion.png" className="w-7 h-7  " onMouseOver={Animacion}
                  onMouseOut={retornar} alt="localizacion" /></Link> 
    </div>
  )
}

export default Location