
import Card from 'react-bootstrap/Card';
import { EventItem } from './EventItem';

export const TarjetaConciertos = () => {
  return (
    <div className="TarjetaConciertos">
      <Card  style={{ width: '35rem' }} className='round-me d-none d-sm-block'>
      <Card.Body className='cardBodyConciertos'>
        <Card.Title><h2>PRÓXIMOS CONCIERTOS</h2></Card.Title>
        <h1 className='titleLine'></h1>
        <EventItem/>
        <EventItem/>
        <EventItem/>
        <EventItem/>
        <EventItem/>
      </Card.Body >
    </Card>
    </div>
  )
}


