import Card from "react-bootstrap/Card";

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
          <div key={event.id}>
            <div className="ItemsConciertos">
              <Card.Text className="date">
                <h1 className="day">{event.day}</h1>
                <h6 className="month">{event.month}</h6>
              </Card.Text>
              <Card.Text className="city">
                <h6>{event.city}</h6>
              </Card.Text>
              <Card.Text className="mapLink">
                <h6 className="address">{event.address}</h6>
                <Card.Link href={event.mapLink} target="_blank">
                  Ver en el Mapa
                </Card.Link>
              </Card.Text>
              <Card.Link
                className="Notification"
                target="_blank"
                href={event.notification}
              >
                Notificarme
              </Card.Link>
            </div>
            <hr className="titleLine"></hr>
          </div>
        );
      })}
    </>
  );
};
