import api from "../utils/api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DetailsForm() {
  const params = useParams();
  const [form, setForms] = useState({});
  const [formEdit, setFormEdit] = useState({});
  const [reload, setReload] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchForms() {
      try {
        const response = await api.get(`/forms/${params.formID}`);
        setForms(response.data.data.attributes);
        setFormEdit(response.data.data.attributes);

        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchForms();
  }, [reload]);

  function handleChange(e) {
    setFormEdit({ ...formEdit, [e.target.name]: e.target.value });
  }

  function handleClick() {
    setShowEdit(!showEdit);
  }

  async function handleSubmit(e) {
    console.log(formEdit);

    try {
      e.preventDefault();
      const infosForAPI = { data: { ...formEdit } };
      console.log(infosForAPI);
      await api.put(`/forms/${params.formID}`, infosForAPI);
      setReload(!reload);
      setShowEdit(false);
    } catch (err) {
      console.log(err);
    }
  }
  console.log(formEdit);
  console.log(showEdit);

  async function handleDelete(e) {
    try {
      e.preventDefault();
      await api.delete(`/forms/${params.formID}`);
      navigate("/viewForm");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {showEdit === false && (
        <div className="form-final">
          <h1>Sua Viagem Programada</h1>
          <p>Nome:{form.nome}</p>
          <p>Idade:{form.idade}</p>
          <p>Destino:{form.destino}</p>
          <p>Data:{form.quando}</p>
          <p>Expectativas:{form.expectativas}</p>
          <button onClick={handleClick}>Editar</button>
        </div>
      )}

      {showEdit === true && (
        <div className="form-edit">
          <p>Edite aqui sua viagem</p>
          <form>
            <label htmlFor="input-form-nome">Nome:</label>
            <input
              id="input-form-nome"
              name="nome"
              value={formEdit.nome}
              onChange={handleChange}
            />

            <label htmlFor="input-form-idade">Idade:</label>
            <input
              id="input-form-idade"
              type="number"
              name="idade"
              value={formEdit.idade}
              onChange={handleChange}
            />

            <label htmlFor="input-form-destino">Destino:</label>
            <input
              id="input-form-destino"
              name="destino"
              value={formEdit.destino}
              onChange={handleChange}
            />

            <label htmlFor="input-form-quando">Data:</label>
            <input
              id="input-form-quando"
              type="date"
              name="quando"
              value={formEdit.quando}
              onChange={handleChange}
            />

            <label htmlFor="input-form-expectativas">Expectativas:</label>
            <input
              id="input-form-expectativas"
              name="expectativas"
              value={formEdit.expectativas}
              onChange={handleChange}
            />

            <button type="submit" onClick={handleSubmit}>
              Salvar
            </button>
            <button onClick={handleDelete}>Deletar</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default DetailsForm;
