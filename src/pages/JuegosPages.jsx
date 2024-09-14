import { Header, Footer } from "../layout";
import { useState } from "react";
import { Products, Filters, LinksCategoria, Paginacion } from "../components";

import { juegos } from "../db/juegos";
const JuegosPages = () => {
  const [AllProducts, setAllProducts] = useState(juegos);
  const [dataQt, setDataQt] = useState(12);
  const [PaginaInicial, setPaginaInicial] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const FilterCategories = (e) => {
    const category = e.target.textContent;
    setSelectedCategory(category);

    const filterData = juegos.filter((items) => items.marca === category);
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
        ? juegos.filter((item) => item.marca === selectedCategory)
        : juegos;
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
          <Filters nombreCategoria="Juegos" ruta="/juegos" filtrado={filtrado}>
            <LinksCategoria nombre="ps4" onClick={FilterCategories} />
            <LinksCategoria nombre="ps5" onClick={FilterCategories} />
            <LinksCategoria nombre="xbox" onClick={FilterCategories} />
            <LinksCategoria nombre="nintendo" onClick={FilterCategories} />
          </Filters>
          <div>
            <Products data={nData} />
            <Paginacion
              PaginaInicial={PaginaInicial}
              data={dataQt}
              totalItems={AllProducts.length}
              setPaginaInicial={setPaginaInicial}
            />
          </div>
        </div>
      
      <Footer />
    </>
  );
};

export default JuegosPages;
