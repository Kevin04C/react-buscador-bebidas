import { useContext } from 'react';
import { CategoriaContext } from '../context/CategoriasContext';


export const useCategoria = () => {
  return useContext(CategoriaContext)
}