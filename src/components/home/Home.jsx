import { CardPlayer } from "../player/CardPlayer"
import { NavbarHome } from "./Navbar"


import { Container, Row, Col } from 'react-bootstrap';


export const Home = ({ props }) => {
    return (
        <>
            <NavbarHome />

            <Container>
                <Row >
                    <Col sm={8}>
                        <div>Alma Condor</div>
                        <div>{props}</div>
                        <button type="button" class="btn btn-primary">Primary</button>
                    </Col>
                    <Col sm={4} className="d-flex align-items-center justify-content-center vh100m">
                        <CardPlayer />
                    </Col>

                </Row>
            </Container>
        </>
    )
}
