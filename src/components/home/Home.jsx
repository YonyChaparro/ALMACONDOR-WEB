import { ImgHomePelaos } from "./imgHome";
import { CardPlayer } from "../player/CardPlayer";
import { NavbarHome } from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { Section } from "../Section";

export const Home = () => {
    return (
        <>
            <NavbarHome />
            {/* <Container>
                <Row>
                    <Col sm={8}>
                        <ImgHomePelaos />
                    </Col>
                    <Col
                        sm={4}
                        className="d-flex align-items-center justify-content-center vh100m"
                    >
                        <CardPlayer />
                    </Col>
                </Row>
            </Container> */}
            <section id="home" className="section-fullscreen">
                <Container>
                    <Row>
                        <Col sm={8}>
                            <ImgHomePelaos />
                        </Col>
                        <Col
                            sm={4}
                            className="d-flex align-items-center justify-content-center"
                        >
                            <CardPlayer />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="presentation" className="section-fullscreen">
                <Container>
                    <Row>
                        <Col sm={8}>
                            <ImgHomePelaos />
                        </Col>
                        <Col
                            sm={4}
                            className="d-flex align-items-center justify-content-center"
                        >
                            <CardPlayer />
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    );
};
