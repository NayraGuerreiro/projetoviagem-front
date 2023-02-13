import api from "../utils/api";
import { useState, useEffect } from "react";

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
  return <h1> Titulo</h1>;
}
export default Home;
