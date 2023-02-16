import api from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

function ViewForm() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    async function fetchForms() {
      try {
        const response = await api.get("/forms");
        setForms(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchForms();
  }, []);

  return (
    <>
      <h1> Viagens Programadas</h1>

      {forms.map((currentElement) => {
        console.log(currentElement);

        return (
          <Form>
            <Form.Group controlId="form-view-nome">
              <Form.Label className="mb-3">
                <b>Nome:</b>
              </Form.Label>
              <Form.Control value={currentElement.attributes.nome} />
            </Form.Group>

            <Form.Group controlId="form-view-idade">
              <Form.Label className="mb-3">
                <b>Idade:</b>
              </Form.Label>
              <Form.Control value={currentElement.attributes.idade} />
            </Form.Group>

            <Form.Group controlId="form-view-destino">
              <Form.Label className="mb-3">
                <b>Destino:</b>
              </Form.Label>
              <Form.Control value={currentElement.attributes.destino} />
            </Form.Group>

            <Form.Group controlId="form-view-quando">
              <Form.Label className="mb-3">
                <b>Data:</b>
              </Form.Label>
              <Form.Control value={currentElement.attributes.quando} />
            </Form.Group>

            <Form.Group controlId="form-view-expectativa">
              <Form.Label className="mb-3">
                <b>Expectativas:</b>
              </Form.Label>
              <Form.Control value={currentElement.attributes.expectativas} />
            </Form.Group>

            <Link to={`/detailsForm/${currentElement.id}`}>
              <button>Saiba Mais</button>
            </Link>
          </Form>
        );
      })}
    </>
  );
}
export default ViewForm;
