import { Header, Main, Footer } from "../layout";
import { useState,useEffect } from "react";
import { Products, Filters, LinksCategoria, Paginacion } from "../components";
import { useParams } from 'react-router-dom';
import { consola } from "../db/consola";
const ConsolePages = () => {
  const { category } = useParams();
  const [AllProducts,setAllProducts] = useState(consola)
  const [dataQt, setDataQt] = useState(12);
  const [PaginaInicial, setPaginaInicial] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (category) {
      const filterData = consola.filter((item) => item.marca === category);
      setAllProducts(filterData);
    } else {
      setAllProducts(consola); // Si no hay categoría, muestra todos los productos
    }
  }, [category]);

  const FilterCategories = (e) => {
    const category = e.target.textContent;
    setSelectedCategory(category);

    const filterData = consola.filter((items) => items.marca === category);
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
        ? consola.filter((item) => item.marca === selectedCategory)
        : consola;
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
          <Filters nombreCategoria="Consolas" ruta="/consolas" filtrado={filtrado}>
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

export default ConsolePages;
