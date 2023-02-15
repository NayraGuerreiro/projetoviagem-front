import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/"> Home |</Link>
      <Link to="/form"> Programe sua Viagem |</Link>
      <Link to="/viewForm"> Viagens Programadas</Link>
    </nav>
  );
}

export default NavBar;
