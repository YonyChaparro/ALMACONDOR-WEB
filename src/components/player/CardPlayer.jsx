import Button from 'react-bootstrap/Button';
import { Card, Image } from 'react-bootstrap';
import { Player } from './Player';


export const CardPlayer = () => {
    return (
        <Card style={{ width: '' }} className='round-me w-75'>
            <div className='square p-4 '>
                <Image className='square-img' rounded={true} fluid={true} src="../../../legacy/src/fondo.png" />
            </div>
            <Card.Body className='pt-0'>
                <Player />
            </Card.Body>
        </Card>
    );
}
