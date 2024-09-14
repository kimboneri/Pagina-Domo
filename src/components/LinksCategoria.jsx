
const LinksCategoria = ({nombre,onClick}) => {
  return (
    <p className=" cursor-pointer" onClick={onClick}>{nombre}</p>
  )
}

export default LinksCategoria