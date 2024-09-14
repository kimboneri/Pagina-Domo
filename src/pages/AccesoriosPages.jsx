import { Header, Footer, Main } from "../layout";
import { useState } from "react";
import { Products, Filters, Paginacion, LinksCategoria } from "../components";
import { accesorios } from "../db/accesorios";

const AccesoriosPages = () => {
  const [AllProducts, setAllProducts] = useState(accesorios);
  const [dataQt, setDataQt] = useState(12);
  const [PaginaInicial, setPaginaInicial] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const FilterCategories = (e) => {
    const category = e.target.textContent;
    setSelectedCategory(category);

    const filterData = accesorios.filter((items) => items.tipo === category);
    console.log(filterData.length);
    console.log(filterData);
    setAllProducts(filterData);
    setPaginaInicial(1);
  };
  const filtrado = (orden) => {
    let sorted = [...AllProducts];
    if (orden === "altoBajo") {
      const filterData = sorted.sort((a, b) => b.precio - a.precio);
      console.log("predetermiando");
      setAllProducts(filterData);
    } else if (orden === "bajoAlto") {
      const filterData = sorted.sort((a, b) => a.precio - b.precio);
      setAllProducts(filterData);
    } else {
      sorted = selectedCategory
        ? accesorios.filter((item) => item.tipo === selectedCategory)
        : accesorios;
    }

    setAllProducts(sorted);
  };
  const indexFin = PaginaInicial * dataQt;
  const indexIni = indexFin - dataQt;
  const nData = AllProducts.slice(indexIni, indexFin);

  return (
    <>
      <Header />
   

    
      <div className="container mx-auto flex   justify-between ">
        <Filters
          nombreCategoria="Accesorios"
          ruta="/accesorios"
          filtrado={filtrado}
        >
          <LinksCategoria nombre="audifonos" onClick={FilterCategories} />
          <LinksCategoria nombre="cargadores" onClick={FilterCategories} />
          <LinksCategoria nombre="mandos" onClick={FilterCategories} />
          <LinksCategoria nombre="sillas" onClick={FilterCategories} />
        </Filters>
        <div>
          <Products data={nData} />

          <Paginacion
            PaginaInicial={PaginaInicial}
            data={dataQt}
            totalItems={AllProducts.length}
            setPaginaInicial={setPaginaInicial}
            filtrado={filtrado}
          />
        </div>
      </div>
   
      <Footer />
    </>
  );
};

export default AccesoriosPages;
