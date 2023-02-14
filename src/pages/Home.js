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
      <h1> Titulo</h1>

      {travels.map((currentCountry) => {
        return (
          <>
            <strong key={currentCountry.id}>
              {currentCountry.attributes.country}
            </strong>
            <img src={currentCountry.attributes.image} alt="foto da cidade" />
            <Link to="/form">
              <button>Quero fazer essa viagem!</button>
            </Link>
          </>
        );
      })}
    </>
  );
}
export default Home;
