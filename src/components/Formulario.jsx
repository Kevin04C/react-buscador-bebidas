import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import { useCategoria } from "../hooks/useCategoria";
import { useBebidas } from '../hooks/useBebidas'

export const Formulario = () => {

  const { categorias } = useCategoria();
  const { consultarBebidas } = useBebidas();

  const [busquedad, setBusquedad] = useState({
    bebida: "",
    categoria: "",
  });

  const [alerta, setAlerta] = useState(false);

  const handleChangeFormulario = (e) => {
    setBusquedad({
      ...busquedad,
      [e.target.name]: e.target.value,
    });
  };

  const { bebida, categoria } = busquedad;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busquedad).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    setAlerta(false);
    consultarBebidas(busquedad)
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alerta && <Alert 
        variant="danger" 
        className="text-center"
        show={true}
      >
        Todos los campos son obligatorios
      </Alert>}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="bebida">Nombre bebida</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Tequilla, Vodka, Etc"
              name="bebida"
              id="bebida"
              value={bebida}
              onChange={handleChangeFormulario}
              autoComplete="off"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="categoria">Categoría bebida</Form.Label>
            <Form.Select
              id="categoria"
              name="categoria"
              value={categoria}
              onChange={handleChangeFormulario}
            >
              <option>- - Selecione categoría - -</option>

              {categorias.map((categoria) => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end mt-2">
        <Col md={3}>
          <Button className="w-100" variant="danger" type="submit">
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
