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
export const CarrouselInterval = ({ timeInterval, classname, imagenes, animation }) => {
    return (
        <Carousel className={classname}>
            {
                images.map((image, index) => (
                    <Carousel.Item key={index} interval={timeInterval ? timeInterval : 1000}>
                        <Image src={image} fluid className='' />
                    </Carousel.Item>))
            }
        </Carousel>
    );
}
