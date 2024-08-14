import { useEffect, useRef, useState } from "react";
import { ProgessBar } from "./ProgessBar";
import audioFile from "../../assets/audio/10075.mp3";
import { Stack, ListGroup, Container, Row, Col } from 'react-bootstrap';

export const Controls = () => {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }
    const handleProgressClick = (e) => {
        const progressBar = e.currentTarget;
        // console.log((e.nativeEvent.offsetX / progressBar.offsetWidth) * duration);
        const newTime = (e.nativeEvent.offsetX / progressBar.offsetWidth) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };
    const onTimeUpdate = () => {
        const audio = audioRef.current;
        // console.log(audio.currentTime);
        setCurrentTime(audio.currentTime);
    };
    const onLoadedMetadata = () => {
        const audio = audioRef.current;

        setDuration(audio.duration);
    };
    useEffect(() => {
        onLoadedMetadata();
        onTimeUpdate();
    }, []);

    return (
        <>

            <audio
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={onLoadedMetadata}
                src={audioFile}
                ref={audioRef}
            // onEnded={songEndHandler}
            ></audio>
            <ProgessBar currentTime={currentTime} duration={duration} handleProgressClick={handleProgressClick} />

            <Stack className="justify-content-center" direction="horizontal">
                <button className="btn icon p-0 m-0">
                    <i className=" bi-skip-start-circle"></i>
                </button>
                <button className="btn icon-player py-0 m-0" onClick={playSongHandler}>
                    {isPlaying ? <i className="bi bi-pause-circle"></i>
                        : <i className="bi bi-play-circle"></i>}
                </button>
                <button className="btn icon  p-0 m-0">
                    <i className="bi bi-skip-end-circle"></i>
                </button>
            </Stack>
        </>
    )
}
