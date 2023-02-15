import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

function Form() {
  const [form, setForm] = useState({
    nome: "",
    idade: 0,
    destino: "",
    quando: "",
    expectativas: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const infosForAPI = { data: { ...form } };
      console.log(infosForAPI);

      await api.post("/forms", infosForAPI);
      navigate("/viewForm");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Planeje sua Viagem</h1>

      <form>
        <label htmlFor="input-form-nome">Nome:</label>
        <input
          id="input-form-nome"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <label htmlFor="input-form-idade">Idade:</label>
        <input
          id="input-form-idade"
          type="number"
          name="idade"
          value={form.idade}
          onChange={handleChange}
        />

        <label htmlFor="input-form-destino">Destino:</label>
        <input
          id="input-form-destino"
          name="destino"
          value={form.destino}
          onChange={handleChange}
        />

        <label htmlFor="input-form-quando">Data:</label>
        <input
          id="input-form-quando"
          type="date"
          name="quando"
          value={form.quando}
          onChange={handleChange}
        />

        <label htmlFor="input-form-expectativas">Expectativas:</label>
        <input
          id="input-form-expectativas"
          name="expectativas"
          value={form.expectativas}
          onChange={handleChange}
        />
        <Link>
          <button type="submit" onClick={handleSubmit}>
            Salvar
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Form;
