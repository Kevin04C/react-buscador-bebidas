import React from 'react'
import { Container } from 'react-bootstrap'
import { Formulario } from './components/Formulario'
import { CategoriaProvider } from './context/CategoriasContext'
import { BebidasProvider } from './context/BebidasContext'
import { ListadoBebidas } from './components/ListadoBebidas'
import { ModalBebidas } from './components/ModalBebidas'


const App = () => {
  return (
    <CategoriaProvider>
      <BebidasProvider>
        <header className='py-3'>
          <h1>Buscador de Bebidas</h1>
        </header>
        <Container className='mt-5'>
          <Formulario/>
          <ListadoBebidas />
          <ModalBebidas />
        </Container>
      </BebidasProvider>
    </CategoriaProvider>
  )
}

export default App