import api from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [travels, setTravels] = useState([]);
  console.log(travels);

  useEffect(() => {
    async function fetchTravels() {
      try {
        const response = await api.get("/travels");
        setTravels(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTravels();
  }, []);
  return (
    <>
      <h1> Qual o segredo da felicidade?</h1>
      <h2>
        Descubra viajando para os países com maior índice de felicidade do mundo
      </h2>

      {travels.map((currentCountry) => {
        return (
          <div key={currentCountry.id}>
            <h2>{currentCountry.attributes.country}</h2>
            <img src={currentCountry.attributes.image} alt="foto da cidade" />
            <p>
              <strong>Idioma:</strong> {currentCountry.attributes.language}
            </p>
            <p>
              <strong>Moeda:</strong> {currentCountry.attributes.currency}
            </p>
            <p>
              <strong>População:</strong> {currentCountry.attributes.population}
            </p>
            <p>
              <strong>Fronteiras:</strong> {currentCountry.attributes.borders}
            </p>
            <p>
              <strong>Principais Pontos Turísticos: </strong>
              {currentCountry.attributes.sightseeing}
            </p>
            <p>
              <strong>Descrição:</strong>
              {currentCountry.attributes.description}
            </p>
            <Link to="/form">
              <button>Quero fazer essa viagem!</button>
            </Link>
          </div>
        );
      })}
    </>
  );
}
export default Home;
