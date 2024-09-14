
 const Paginacion = ({setPaginaInicial,totalItems,paginaInicial,data}) => {
  const totalPaginas = Math.ceil(totalItems / data);
  const listaPaginas = [];
  const handleClick = (e)=> {
    const input = e.target.value;
  
    setPaginaInicial(input)
 
    
}
    for (let i = 0; i < totalPaginas;i++) {
      const pageNum = i + 1;
      listaPaginas.push( <input key={i}
        onClick={ handleClick}
        className="join-item btn btn-square bg-[#3a7a9dd7]"
        type="radio"
        name="options"
        aria-label={i+1}
        checked={paginaInicial === pageNum}
        value={i+1}
        
      />
  )
    } 
   

  return (
    <div className="join flex justify-center mt-[70px] ">
       {listaPaginas}
      </div>
  )
}
export default Paginacion