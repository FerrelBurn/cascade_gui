import React from 'react';
// import {Modal, Button} from 'react-bootstrap/Modal';
import { Modal, Button } from 'react-bootstrap';
import MatchesView from './MatchesView';


function RequirmentsMatcher(props) {


    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Match Requirements
        </Button>
           
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
              <Modal.Title>8</Modal.Title> 
                </Modal.Header>
                <Modal.Body>
                    <MatchesView matches={props.matches}/>
                    </Modal.Body>
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