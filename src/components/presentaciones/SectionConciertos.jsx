import { Container, Row, Col } from "react-bootstrap";
import { ConcertCard } from "./ConcertCard";
// import { PosterPresentation } from "./PosterPresentation";

export const SectionConciertos = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <ConcertCard />
          </Col>
          <Col xs={12} md={8}>
          {/* <PosterPresentation /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};
