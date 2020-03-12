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
        this.updateCurrentIndex = this.updateCurrentIndex.bind(this);

    }
    handleClose(e) {
       
        this.setState({ show: false });
        this.props.handleClose()
    }
    handleAccept(e) {
        console.log(e)
       this.props.handleAddRequirement(this.props.matches[this.props.currentIndex]);
    }
    handleShow(e) {

        this.setState({ show: true });
    }
    updateCurrentIndex(index){
        console.log("update current index")
        console.log(index)
        //this.setState({currentIndex:index})

    }
    render() {
        return (
            <>


                <span onClick={this.props.handleClick}>
                    {this.props.text}
                </span>


                <Modal size="md" centered="true" show={this.props.show} onHide={this.handleClose}>
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
                        <MatchesView matches={this.props.matches} updateCurrentIndex={this.updateCurrentIndex} currentIndex={this.props.currentIndex} />
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </>
        );

    }
}

export default RequirmentsMatcher;
