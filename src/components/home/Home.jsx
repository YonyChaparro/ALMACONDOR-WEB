import { CardPlayer } from "../player/CardPlayer"
import { NavbarHome } from "./Navbar"


import { Container, Row, Col } from 'react-bootstrap';

export const Home = () => {
    return (
        <>
            <NavbarHome />
            <Container>
                <Row >
                    <Col sm={8}>{/*yoni*/}
                        <div>Alma Condor</div>
                        <button type="button" className="btn btn-primary">Primary</button>
                    </Col>
                    <Col sm={4} className="d-flex align-items-center justify-content-center vh100 p-0 m-0">
                        <CardPlayer  />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
