import { Container, Row, Col } from "react-bootstrap";
import { ConcertCard } from "./ConcertCard";
// import { PosterPresentation } from "./PosterPresentation";

export const SectionConciertos = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>
            <ConcertCard />
          </Col>
          <Col sm={6}>
          {/* <PosterPresentation /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};
