import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


const events = [
  {
    id: 1,
    day: "10",
    month: "dec",
    city: "Bogotá",
    address: "CLL 45 # 30 -00",
    mapLink:
      "https://pbs.twimg.com/media/GKp6IqEXcAA687_?format=jpg&name=900x900",
    notification:
      "https://pbs.twimg.com/media/GKp6IqEXcAA687_?format=jpg&name=900x900",
  },
  {
    id: 2,
    day: "02",
    month: "nov",
    city: "Medellín",
    address: "CLL 2 # 3 -90",
    mapLink:
      "https://pbs.twimg.com/media/GKp6IqEXcAA687_?format=jpg&name=900x900",
    notification:
      "https://pbs.twimg.com/media/GKp6IqEXcAA687_?format=jpg&name=900x900",
  },
  {
    id: 3,
    day: "14",
    month: "ene",
    city: "New York",
    address: "Crra 45 # 30 -00",
    mapLink:
      "https://pbs.twimg.com/media/GKp6IqEXcAA687_?format=jpg&name=900x900",
    notification:
      "https://pbs.twimg.com/media/GKp6IqEXcAA687_?format=jpg&name=900x900",
  },
  {
    id: 4,
    day: "10",
    month: "may",
    city: "Cota",
    address: "ca 5 # 30 -00",
    mapLink:
      "https://pbs.twimg.com/media/GKp6IqEXcAA687_?format=jpg&name=900x900",
    notification:
      "https://pbs.twimg.com/media/GKp6IqEXcAA687_?format=jpg&name=900x900",
  },
  {
    id: 5,
    day: "19",
    month: "dec",
    city: "Yoplay",
    address: "Mz W Casa #6",
    mapLink:
      "https://pbs.twimg.com/media/GKp6IqEXcAA687_?format=jpg&name=900x900",
    notification:
      "https://pbs.twimg.com/media/GKp6IqEXcAA687_?format=jpg&name=900x900",
  },
];

export const EventItem = () => {
  if (!events) {
    return (
      <>
        <h1>No Hay Eventos Próximos</h1>
      </>
    );
  }
  return (
    <>
      {events.map((event) => {
        return (
          <Container key={event.id}>
            <Container className="ItemsConciertos">
              <Row>
                <Col className="date">
                  <h1 className="day">{event.day}</h1>
                  <h6 className="month">{event.month}</h6>
                </Col>
                <Col className="city">{event.city}</Col>
                <Col className="mapLink" sm={4} >
                  <h6 className="address">{event.address}</h6>
                  <Card.Link href={event.mapLink} target="_blank">
                    Ver en el Mapa
                  </Card.Link>
                </Col>
                <Col>
                  <Button variant="outline-warning" className="Notification"
                  href={event.notification}>Notificarme</Button>
                </Col>
              </Row>
            </Container>
            <hr className="titleLine"></hr>
          </Container>
        );
      })}
    </>
  );
};
