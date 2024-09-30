import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const images = [
    "https://via.placeholder.com/230",
    "https://via.placeholder.com/230",
    "https://via.placeholder.com/230",
    "https://via.placeholder.com/230",
    "https://via.placeholder.com/230",
    "https://via.placeholder.com/230",
    "https://via.placeholder.com/230",
    "https://via.placeholder.com/230",
    "https://via.placeholder.com/230",
]
export const CarrouselInterval = () => {
    return (
        <Carousel className='' >
            {
                images.map((image, index) => (
                    <Carousel.Item key={index} interval={1000}>
                        <Image src={image} fluid className='' />
                    </Carousel.Item>))
            }
        </Carousel>
    );
}
