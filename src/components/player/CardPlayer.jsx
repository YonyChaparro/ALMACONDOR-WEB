import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Player } from './Player';

export const CardPlayer = () => {
    return (
        <Card style={{ width: '18rem' }} className='bg-transparent '>
            <Card.Img className='p-3 imgPlayer' variant="top" src="../../../legacy/src/fondo.png" />
            <Card.Body className=''>
                <Card.Title className='text-center'>Title</Card.Title>
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text> */}
                <Player />
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
