import api from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
          <div>
            <p>Nome:{currentElement.attributes.nome}</p>
            <p>Idade:{currentElement.attributes.idade}</p>
            <p>Destino:{currentElement.attributes.destino}</p>
            <p>Data:{currentElement.attributes.quando}</p>
            <p>Expectativas:{currentElement.attributes.expectativas}</p>

            <Link to={`/detailsForm/${currentElement.id}`}>
              <button>Saiba Mais</button>
            </Link>
          </div>
        );
      })}
    </>
  );
}
export default ViewForm;
