import { Container, Nav, Navbar } from 'react-bootstrap';


export const NavbarHome = () => {
  return (
    <Navbar id="navbar nav-transparent" expand="lg">
      <Container>
        <Navbar.Brand href="#inicio" >
          <img src="/src/assets/Logos/Letra alma condor en transparente (1).png" alt="Alma Condor logo" className="logoAlmaCondor" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="d-flex justify-content-center">
          <Nav>
            <Nav.Link href="#presentaciones">PRESENTACIONES</Nav.Link>
            <Nav.Link href="#galeria">GALERÍA</Nav.Link>
            <Nav.Link href="#blog-andino">BLOG ANDINO</Nav.Link>
            <Nav.Link href="#tienta-andina">TIENDA ANDINA</Nav.Link>
            <Nav.Link href="#nosotros">NOSOTROS</Nav.Link>
            <Nav.Link href="#contacto">CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

