import React, { Component } from 'react';
// import {Modal, Button} from 'react-bootstrap/Modal';
import { Modal, Button } from 'react-bootstrap';


function RequirmentsMatcher(props) {


    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Match Requirements
        </Button>
            {
                console.log(props)
            }
            {
                console.log(props.matches[0].ml_matches.length)
            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ML matches: {props.matches.length}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default RequirmentsMatcher;