import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, useMatch } from 'react-router';
import '../assets/Header.css';

function Header() {
  const match = useMatch('/categorie/:category');

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container className="d-flex justify-content-between align-items-center">
          {match ? (
            <span className="me-3 fw-bold">
              Catégorie : {match.params.category}
            </span>
          ) : (
            <span className="me-3 fw-bold">&nbsp;</span>
          )}

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