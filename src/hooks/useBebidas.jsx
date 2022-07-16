import React, { useContext } from 'react'
import { BebidasContext } from '../context/BebidasContext'

export const useBebidas = () => {
  return useContext(BebidasContext)
}
