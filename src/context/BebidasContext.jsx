import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BebidasContext = createContext();

export const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [bebidaId, setBebidaId] = useState("");
  const [bebida, setBebida] = useState({});

  const handleModalClick = () => {
    setModal(!modal);
  };

  const consultarBebidas = async ({ bebida, categoria }) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${bebida}&c=${categoria}`;

      const { data } = await axios(url);

      setBebidas(data.drinks);
    } catch (err) {
      console.log(err);
    }
  };

  const obtenerBebida = async () => {
    if(!bebidaId) return;
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;
      const { data } = await axios(url);
      setBebida(data.drinks[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    obtenerBebida();
  }, [bebidaId]);

  return (
    <BebidasContext.Provider
      value={{
        consultarBebidas,
        bebidas,
        handleModalClick,
        modal,
        bebida,
        setBebidaId,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};
