import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

function Forms() {
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
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>Programe sua Viagem</h2>

            <Form>
              <Form.Group controlId="form-name">
                <Form.Label className="mb-3">
                  <b>Nome:</b>
                </Form.Label>
                <Form.Control
                  id="input-form-nome"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="form-age">
                <Form.Label className="input-form-idade">
                  <b>Idade:</b>
                </Form.Label>
                <Form.Control
                  id="input-form-idade"
                  type="number"
                  name="idade"
                  value={form.idade}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="form-destiny">
                <Form.Label className="input-form-destino">
                  <b>Destino:</b>
                </Form.Label>
                <Form.Control
                  id="input-form-destino"
                  name="destino"
                  value={form.destino}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="from-when">
                <Form.Label className="input-form-quando">
                  <b>Data:</b>
                </Form.Label>
                <Form.Control
                  id="input-form-quando"
                  type="date"
                  name="quando"
                  value={form.quando}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="form-expec">
                <Form.Label className="input-form-expectativas">
                  <b>Expectativas:</b>
                </Form.Label>
                <Form.Control
                  id="input-form-expectativas"
                  name="expectativas"
                  value={form.expectativas}
                  onChange={handleChange}
                />
              </Form.Group>

              <br></br>
              <button type="submit" onClick={handleSubmit}>
                Salvar
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forms;
