
import { useRef, useState } from "react";
import { Stack, ListGroup, Container, Row, Col } from 'react-bootstrap';
import { Controls } from "./Controls";

export const Player = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }
    return (
        <>
            <Controls />
            <ListGroup className="transparent p-0 font-medium">
                <ListGroup.Item className="d-flex p-0 transparent icon align-items-center" action>
                    <i className="px-2 bi bi-play-circle"></i>
                    <span>Cras justo odio</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex p-0 transparent icon align-items-center" action>
                    <i className="px-2 bi bi-play-circle"></i><span>Dapibus ac facilisis in</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex p-0 transparent icon align-items-center" action>
                    <i className="px-2 bi bi-play-circle"></i><span>Morbi leo risus</span>
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}
