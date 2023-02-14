import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/form">Formulario</Link>
    </nav>
  );
}

export default NavBar;
