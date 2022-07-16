import { Modal, Image } from 'react-bootstrap'
import { useBebidas } from '../hooks/useBebidas'

export const ModalBebidas = () => {

  const { modal, handleModalClick, bebida } = useBebidas()

  console.log(bebida);

  return (
    <Modal show={modal} onHide={handleModalClick}>
      <Modal.Body>
        <Image 
          src={bebida.strDrinkThumb}
          alt={`Bebida ${bebida.strDrink}`}
          className="w-100"
        />
        <Modal.Title>{bebida.strDrink}</Modal.Title>
      </Modal.Body>
    </Modal>
  )
}
