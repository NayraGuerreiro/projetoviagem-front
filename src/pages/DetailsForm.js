import api from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailsForm() {
  const params = useParams();
  const [form, setForms] = useState({});

  useEffect(() => {
    async function fetchForms() {
      try {
        const response = await api.get(`/forms/${params.formID}`);
        setForms(response.data.data.attributes);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchForms();
  }, []);

  return (
    <div>
      <h1>Sua Viagem Programada</h1>
      <p>Nome:{form.nome}</p>
      <p>Idade:{form.idade}</p>
      <p>Destino:{form.destino}</p>
      <p>Data:{form.quando}</p>
      <p>Expectativas:{form.expectativas}</p>
      <button>Editar</button> <button>Deletar</button> <br></br>
    </div>
  );
}
export default DetailsForm;
