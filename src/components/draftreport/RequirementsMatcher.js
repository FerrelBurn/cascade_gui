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
        {console.log(props)}
            <span  variant="primary" onClick={handleShow}>
                {props.text}
        </span>
           
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
              <Modal.Title>{props.matches.length} requirement matches</Modal.Title> 
                </Modal.Header>
                <Modal.Body>
                    <MatchesView matches={props.matches} currentIndex={props.currentIndex}/>
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