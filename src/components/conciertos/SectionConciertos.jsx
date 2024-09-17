import { Container, Row, Col } from "react-bootstrap";
import { ConcertCard } from "./ConcertCard";

export const SectionConciertos = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            <ConcertCard />
          </Col>
          <Col
            sm={4}
            className="d-flex align-items-center justify-content-center"
          ></Col>
        </Row>
      </Container>
    </>
  );
};
