import { ImgHome } from "./ImgHome";
import { CardPlayer } from "../player/CardPlayer";
import { NavbarHome } from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
    return (
        <>
            <NavbarHome />
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <ImgHome />
                    </Col>
                    <Col xs={12} md={4}
                        className=""
                    >
                        <CardPlayer />
                    </Col>
                </Row>
            </Container>

        </>
    );
};
