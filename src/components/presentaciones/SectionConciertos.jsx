import { Container, Row, Col } from "react-bootstrap";
import { ConcertCard } from "./ConcertCard";
import { PosterPresentation } from "./PosterPresentation";

export const SectionConciertos = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4} className="center">
            <PosterPresentation />
          </Col>
          <Col xs={12} md={8} >
            <ConcertCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};
