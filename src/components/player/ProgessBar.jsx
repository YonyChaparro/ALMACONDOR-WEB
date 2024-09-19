import React from 'react'
import { Stack, ListGroup, ProgressBar, Row, Col } from 'react-bootstrap';

export const ProgessBar = ({ currentTime, duration, handleProgressClick }) => {
    return (
        <>
            <div className="d-flex">
                <span className="mx-auto">Song Name</span>
            </div>
            <Row className="align-items-center">
                <Col className="d-flex justify-content-center " style={{
                    maxWidth: "20%"
                }}>
                    <span className="" style={{ fontSize: ".5rem" }}>{Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)}</span>
                </Col>
                <Col className="align-items-center px-0">
                    {/* <div className="progress" onClick={handleProgressClick} role="progressbar" style={{ height: ".25rem" }} aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar" style={{ width: `${Math.floor((currentTime / duration) * 100)}%`, backgroundColor: "black" }}></div>
                    </div> */}
                    <ProgressBar
                        now={Math.floor((currentTime / duration) * 100)}
                        onClick={handleProgressClick}
                        style={{ cursor: 'pointer', height: ".25rem" }}
                    />
                </Col>
                <Col className="d-flex justify-content-center " style={{
                    maxWidth: "20%"
                }}>
                    <span className="" style={{ fontSize: ".5rem" }}>{Math.floor(duration / 60)}:{('0' + Math.floor(duration % 60)).slice(-2)}</span>
                </Col>
            </Row>
        </>
    )
}
