// import React from 'react';
// import {Modal, Button} from 'react-bootstrap/Modal';
import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import MatchesView from './MatchesView';

import { MdCheck, MdCancel } from "react-icons/md";
import "./fixedSizedModal.css";

class RequirmentsMatcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            setShow: false
        }
        
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleAccept = this.handleAccept.bind(this);

    }
    handleClose(e) {
        this.setState({ show: false });
    }
    handleAccept(e){
        this.props.handleAddRequirement(this.props.matches[this.props.currentIndex]);
    }
    handleShow(e) {
       
        this.setState({ show: true });
    }
    render() {
        return (
            <>

                <span variant="primary" onClick={this.handleShow}>
                    {this.props.text}
                </span>

                <Modal size="md"  centered="true" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        {/* <Modal.Title>{this.props.matches.length} requirement matches</Modal.Title> */}
                        <Button variant="success" className="mr-1" onClick={this.handleAccept}>
                            <MdCheck color="green" /> Accept 
                        </Button>
                        <Button variant="danger" className="mr-1" onClick={this.handleClose}>
                            <MdCancel /> Decline 
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        <MatchesView matches={this.props.matches} currentIndex={this.props.currentIndex} />
                    </Modal.Body>
                    <Modal.Footer>
                        
                    </Modal.Footer>
                </Modal>
            </>
        );

    }
}

export default RequirmentsMatcher;

// function RequirmentsMatcher(props) {


//     const [show, setShow] = React.useState(false);

//     const handleClose = () => {
//         handleIndex
//         alert(props.currentIndex)
//         setShow(false)
//     };
//     const handleIndex = (e) =>{
//         alert("handleIndex")
//         console.log(e);
//     }
//     const handleShow = () => setShow(true);

//     return (
//         <>

//             <span variant="primary" onClick={handleShow}>
//                 {props.text}
//         </span>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//               <Modal.Title>{props.matches.length} requirement matches</Modal.Title> 
//                 </Modal.Header>
//                 <Modal.Body>
//                     <MatchesView matches={props.matches} currentIndex={props.currentIndex}/>
//                     </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//             </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//             </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );

// }

//  export default RequirmentsMatcher;