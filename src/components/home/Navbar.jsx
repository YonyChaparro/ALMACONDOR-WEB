import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavbarHome = () => {
    return (
    <Navbar id="navbar" expand="lg">
      <Container>

        <Navbar.Brand href="#inicio" >
        <img  src="/src/assets/Logos/Letra alma condor en transparente (1).png" alt="Alma Condor logo" id="logoAlmaCondor" className="logoAlmaCondor"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto d-flex aling-items-center justify-content-center">
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

