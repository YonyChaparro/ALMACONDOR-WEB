import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';



export const EventItem = ({ event }) => {
  if (!event) {
    return (
      <>
        <h1>No Hay Eventos Próximos</h1>
      </>
    );
  }
  return (
    <Container className="ItemsConciertos">
      <Row>
        <Col className="text-center" xs={3} lg={2}>
          <h1 className="day">{event.day}</h1>
          <h6 className="month">{event.month}</h6>
        </Col>
        <Col className="center" xs={3} lg={2}>{event.city}</Col>
        <Col className="text-center" xs={6} lg={4}>
          <p className="">{event.address}</p>
          <Card.Link href={event.mapLink} target="_blank" className="mapLink">
            Ver en el Mapa
          </Card.Link>
        </Col>
        <Col xs={12} lg={4} className="center">
          <Button variant="outline-warning" className="notification"
            href={event.notification}>Notificarme</Button>
        </Col>
      </Row>
      <hr className="titleLine"></hr>
    </Container>
  );
};
