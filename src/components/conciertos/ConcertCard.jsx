import Card from "react-bootstrap/Card";
import { EventItem } from "./EventItem";

export const ConcertCard = () => {
  return (
    <div className="ConcertCard">
      <Card style={{ width: "35rem" }} className="round-me d-none d-sm-block">
        <Card.Body className="cardBodyConciertos">
          <Card.Title>
            <h2>PRÓXIMOS CONCIERTOS</h2>
          </Card.Title>
          <hr className="titleLine"></hr>
          <EventItem />
        </Card.Body>
      </Card>
    </div>
  );
};
