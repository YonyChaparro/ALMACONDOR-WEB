import { Container, Row, Col } from "react-bootstrap";
import { TarjetaConciertos } from "./Tarjeta";

export const SectionConciertos = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            <TarjetaConciertos />
          </Col>
          <Col
            sm={4}
            className="d-flex align-items-center justify-content-center"
          >
          </Col>
        </Row>
      </Container>
    </>
  )
}
