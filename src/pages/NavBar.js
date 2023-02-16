import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/form">Programe sua Viagem</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/viewForm">Viagens Programadas</Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
