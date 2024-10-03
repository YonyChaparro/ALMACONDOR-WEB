import { Col, Container, Image, Row } from 'react-bootstrap'
import { CarrouselInterval } from './CarrouselInterval'

const images = [
    "https://via.placeholder.com/230",
    "https://via.placeholder.com/230",
    "https://via.placeholder.com/230",
    "https://via.placeholder.com/230",
    "https://via.placeholder.com/230",
    "https://via.placeholder.com/230",
]

export const Gallery = () => {
    return (
        <>
            <Container className='mt-5 pt-5 gallery'>
                <Row className='g-4'>
                    {
                        images.map((image, index) => (
                            <Col sm={6} md={6} lg={4} xl={3} key={index} className='d-flex justify-content-center'>
                                <Image src={image} thumbnail className='hover-image' />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            <Container className='mx-auto carrousel'>
                <CarrouselInterval />
            </Container>
        </>
    )
}
