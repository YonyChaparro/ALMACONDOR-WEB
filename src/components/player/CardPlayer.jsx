import Button from 'react-bootstrap/Button';
import { Card, Image, Row, Col } from 'react-bootstrap';
import { Player } from './Player';
import { Controls } from './Controls';


export const CardPlayer = () => {
    return (
        <>
            <div className='player'>

                <Card style={{ width: '' }} className='round-me '>
                    <div className='square p-4 '>
                        <Image className='square-img' rounded={true} fluid={true} src="../../../legacy/src/fondo.png" />
                    </div>
                    <Card.Body className='pt-0'>
                        <Player />
                    </Card.Body>
                </Card>
            </div>


            <div className="d-flex flex-row px-2 mx-2 rounded round-me playermini">
                <div className='d-flex w-25 align-items-center p-2'>
                    <Image className='square' rounded={true} fluid={true} src="../../../legacy/src/fondo.png" />
                </div>
                <Card.Body className='pt-0'>
                    <Controls />
                </Card.Body>
            </div>
        </>
    );
}
