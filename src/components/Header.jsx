import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router';
import '../assets/Header.css';

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>
                Accueil
              </Nav.Link>
              <Nav.Link as={NavLink} to="/vetements">
                Vêtements
              </Nav.Link>
              <Nav.Link as={NavLink} to="/chaussures">
                Chaussures
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
