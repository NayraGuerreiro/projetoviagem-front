import { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [form, setForm] = useState({
    nome: "",
    idade: 0,
    destino: "",
    data: "",
    expectativas: "",
  });

  return (
    <div>
      <h1>Planeje sua Viagem</h1>

      <form>
        <label htmlFor="input-form-nome">Nome:</label>
        <input id="input-form-nome" name="nome" value={form.name} />

        <label htmlFor="input-form-idade">Idade:</label>
        <input
          id="input-form-idade"
          type="number"
          name="idade"
          value={form.idade}
        />

        <label htmlFor="input-form-destino">Destino:</label>
        <input id="input-form-destino" name="destino" value={form.destino} />

        <label htmlFor="input-form-quando">Data:</label>
        <input
          id="input-form-quando"
          type="date"
          name="data"
          value={form.data}
        />

        <label htmlFor="input-form-expectativas">Expectativas:</label>
        <input
          id="input-form-expectativas"
          name="expectativas"
          value={form.expectativas}
        />
      </form>

      <Link>
        <button>Salvar</button>
      </Link>
    </div>
  );
}

export default Form;
