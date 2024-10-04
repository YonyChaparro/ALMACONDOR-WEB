import Card from "react-bootstrap/Card";
import { EventItem } from "./EventItem";


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

export const ConcertCard = () => {
  return (
    <>
      <Card style={{ width: "" }} className="transparent">
        <Card.Body className="cardBodyConciertos">
          <Card.Title>
            <h2>PRÓXIMOS CONCIERTOS</h2>
            <hr className="titleLine"></hr>
          </Card.Title>
          {
            events.map((event) => (
              <EventItem key={event.id} event={event} />
            ))
          }
        </Card.Body>
      </Card>
    </>
  );
};
