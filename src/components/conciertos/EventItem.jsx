import Card from "react-bootstrap/Card";

const events = [
  {
    id: 1,
    day: "10",
    month: "dec",
    city: "Bogotá",
    address: "CLL 45 # 30 -00",
    mapLink:
      "https://www.google.com/maps/place/Transmilenio+Calle+45/@4.6327446,-74.0806,15z/data=!4m10!1m2!2m1!1sCLL+45+%23+30+-00!3m6!1s0x8e3f9a2f23a880b7:0x65205751668c33e!8m2!3d4.6326601!4d-74.0676599!15sCg9DTEwgNDUgIyAzMCAtMDBaDiIMY2xsIDQ1IDMwIDAwkgEWdHJhbnNwb3J0YXRpb25fc2VydmljZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSeGExbG1SM04zUlJBQuABAA!16zL20vMGRtbnRz?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
    notification:
      "https://www.google.com/maps/place/Transmilenio+Calle+45/@4.6327446,-74.0806,15z/data=!4m10!1m2!2m1!1sCLL+45+%23+30+-00!3m6!1s0x8e3f9a2f23a880b7:0x65205751668c33e!8m2!3d4.6326601!4d-74.0676599!15sCg9DTEwgNDUgIyAzMCAtMDBaDiIMY2xsIDQ1IDMwIDAwkgEWdHJhbnNwb3J0YXRpb25fc2VydmljZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSeGExbG1SM04zUlJBQuABAA!16zL20vMGRtbnRz?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 2,
    day: "02",
    month: "nov",
    city: "Medellín",
    address: "CLL 2 # 3 -90",
    mapLink:
      "https://www.google.com/maps/place/Avenida+calle+3+%23+53f36/@4.6187346,-74.1373375,15z/data=!4m10!1m2!2m1!1sCLL+2+%23+3+-90!3m6!1s0x8e3f99a4f166321b:0x8b654ca66cac08bf!8m2!3d4.6187346!4d-74.1182831!15sCg1DTEwgMiAjIDMgLTkwWgwiCmNsbCAyIDMgOTCSARJhcGFydG1lbnRfYnVpbGRpbmeaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTmtjVWxZVFhaUlJSQULgAQA!16s%2Fg%2F11krd1ztvc?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
    notification:
      "https://www.google.com/maps/place/Avenida+calle+3+%23+53f36/@4.6187346,-74.1373375,15z/data=!4m10!1m2!2m1!1sCLL+2+%23+3+-90!3m6!1s0x8e3f99a4f166321b:0x8b654ca66cac08bf!8m2!3d4.6187346!4d-74.1182831!15sCg1DTEwgMiAjIDMgLTkwWgwiCmNsbCAyIDMgOTCSARJhcGFydG1lbnRfYnVpbGRpbmeaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTmtjVWxZVFhaUlJSQULgAQA!16s%2Fg%2F11krd1ztvc?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 3,
    day: "14",
    month: "ene",
    city: "New York",
    address: "Crra 45 # 30 -00",
    mapLink:
      "https://www.google.com/maps/place/Plaza+de+Mercado+Paloquemao/@4.617708,-74.0946797,15z/data=!4m9!1m2!2m1!1sCLL+2+%23+3+-90!3m5!1s0x8e3f9970bb83e525:0x435d3ffed7588374!8m2!3d4.6157346!4d-74.0844941!16s%2Fg%2F1thy0vt0?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
    notification:
      "https://www.google.com/maps/place/Plaza+de+Mercado+Paloquemao/@4.617708,-74.0946797,15z/data=!4m9!1m2!2m1!1sCLL+2+%23+3+-90!3m5!1s0x8e3f9970bb83e525:0x435d3ffed7588374!8m2!3d4.6157346!4d-74.0844941!16s%2Fg%2F1thy0vt0?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 4,
    day: "10",
    month: "may",
    city: "Cota",
    address: "ca 5 # 30 -00",
    mapLink:
      "https://www.google.com/maps/place/Museo+Nacional+de+Colombia/@4.6282308,-74.0878132,15z/data=!4m9!1m2!2m1!1sCLL+2+%23+3+-90!3m5!1s0x8e3f998484277acf:0x3bab23efae829923!8m2!3d4.6156087!4d-74.0686072!16s%2Fm%2F026bn10?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
    notification:
      "https://www.google.com/maps/place/Museo+Nacional+de+Colombia/@4.6282308,-74.0878132,15z/data=!4m9!1m2!2m1!1sCLL+2+%23+3+-90!3m5!1s0x8e3f998484277acf:0x3bab23efae829923!8m2!3d4.6156087!4d-74.0686072!16s%2Fm%2F026bn10?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 5,
    day: "19",
    month: "dec",
    city: "Yoplay",
    address: "Mz W Casa #6",
    mapLink:
      "https://www.google.com/maps/place/Museo+Nacional+de+Colombia/@4.6282308,-74.0878132,15z/data=!4m9!1m2!2m1!1sCLL+2+%23+3+-90!3m5!1s0x8e3f998484277acf:0x3bab23efae829923!8m2!3d4.6156087!4d-74.0686072!16s%2Fm%2F026bn10?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
    notification:
      "https://www.google.com/maps/place/Museo+Nacional+de+Colombia/@4.6282308,-74.0878132,15z/data=!4m9!1m2!2m1!1sCLL+2+%23+3+-90!3m5!1s0x8e3f998484277acf:0x3bab23efae829923!8m2!3d4.6156087!4d-74.0686072!16s%2Fm%2F026bn10?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
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
