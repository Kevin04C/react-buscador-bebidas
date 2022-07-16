import { Col, Card,Button } from 'react-bootstrap'
import { useBebidas } from '../hooks/useBebidas'

export const Bebida = ({strDrink,strDrinkThumb, idDrink}) => {

  const { handleModalClick, setBebidaId } = useBebidas()

  return (
    <Col md={6} lg={3} className='mb-3'>
      <Card>
        <Card.Img 
          variant='top'
          src={strDrinkThumb}
          alt={`Imagen de ${strDrink}`} 
        />
        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>
          <Button
            variant='warning'
            className='w-100 text-uppercase'
            onClick={() => {
              handleModalClick()
              setBebidaId(idDrink)
            }}
          >
            Ver Recetas
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
