import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CategoriaContext = createContext();

export const CategoriaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  const obtenerCategorias = async () => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
      `;
      const { data } = await axios(url);
      setCategorias(data.drinks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <CategoriaContext.Provider
      value={{
        categorias,
      }}
    >
      {children}
    </CategoriaContext.Provider>
  );
};
