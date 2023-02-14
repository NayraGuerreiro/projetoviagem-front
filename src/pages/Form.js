import { Link } from "react-router-dom";
import api from "../utils/api";
function Form() {
  return (
    <div>
      <h1>Planeje sua Viagem</h1>

      <form>
        <label htmlFor="input-form-nome">Nome:</label>
        <input id="input-form-nome" />

        <label htmlFor="input-form-idade">Idade:</label>
        <input id="input-form-idade" />

        <label htmlFor="input-form-destino">Destino:</label>
        <input id="input-form-destino" />

        <label htmlFor="input-form-quando">Data:</label>
        <input id="input-form-quando" />

        <label htmlFor="input-form-expectativas">Expectativas:</label>
        <input id="input-form-expectativas" />
      </form>

      <Link>
        <button>Salvar</button>
      </Link>
    </div>
  );
}

export default Form;
