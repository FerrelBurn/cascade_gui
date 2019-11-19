// import React from 'react';
// import {Modal, Button} from 'react-bootstrap/Modal';
import React, {Component} from 'react';
import { Modal, Button } from 'react-bootstrap';
import MatchesView from './MatchesView';

import { FaCheck, FaRegWindowClose } from "react-icons/fa";


class RequirmentsMatcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            setShow: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    handleClose(e) {
       this.setState({ show: false  });
    }
    handleShow(e) {
        alert(this.props.currentIndex)
        console.log(e)
       this.setState({ show: true  });
    }
    render() {
        return (
                    <>
            
                        <span variant="primary" onClick={this.handleShow}>
                            {this.props.text}
                    </span>
            
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                          <Modal.Title>{this.props.matches.length} requirement matches</Modal.Title> 
                            </Modal.Header>
                            <Modal.Body>
                                <MatchesView matches={this.props.matches} currentIndex={this.props.currentIndex}/>
                                </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                  <FaCheck color="green"/> 
                        </Button>
                                <Button variant="primary" onClick={this.handleClose}>
                                   <FaRegWindowClose color="red"/> 
                        </Button>
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