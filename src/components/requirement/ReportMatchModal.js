import React, { Component } from 'react';
import { Button, Spinner, InputGroup, FormControl, Modal, Row, Link } from 'react-bootstrap';

class ReportMatchModal extends Component {
    constructor(props) {
        super(props);
        this.state = { matches: [] }
    }
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Matching Reports
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Reports</h4>
                    <p>
                        {
                            this.props.matches.map((requirement, index) => (

                                <Row title={requirement.text}>
                                    <a href="#">{requirement.uuid}</a>
                                </Row>

                            ))
                        }

                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal >
        );
    }
}

export default ReportMatchModal;