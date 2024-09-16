import { Container, Nav, Navbar } from 'react-bootstrap';


export const NavbarHome = () => {
  return (
    <Navbar id="navbar" expand="lg" className='fixed-top'>
      <Container className="d-flex justify-content-center fixed-top" >
        <Navbar.Brand href="#home" >
          <img src="/src/assets/Logos/Letra alma condor en transparente (1).png" alt="Alma Condor logo" className="logoAlmaCondor" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" >
          <Nav className="d-flex align-items-center" id="navbar-nav-Yony">
            <Nav.Link href="#presentation">PRESENTACIONES</Nav.Link>
            <Nav.Link href="#galeria">GALERÍA</Nav.Link>
            <Nav.Link href="#blog-andino">BLOG ANDINO</Nav.Link>
            <Nav.Link href="#tienda-andina" id="tienda-andina">TIENDA ANDINA</Nav.Link>
            <Nav.Link href="#nosotros">NOSOTROS</Nav.Link>
            <Nav.Link href="#contacto">CONTACTO</Nav.Link>
            <div className="animation start-home"></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}