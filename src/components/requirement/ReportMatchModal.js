import React, { Component } from 'react';
import { Button, Container, Spinner, InputGroup, FormControl, Modal, Row, Link } from 'react-bootstrap';

class ReportMatchModal extends Component {
    constructor(props) {
        super(props);
        this.state = { matches: [] }
    }
  
    render() {
        const {isLoading, isLoaded, data } = this.props;
       
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
                    <Container>
                        {
                            this.props.matches.map((requirement, index) => (

                                <Row title={requirement.text}>
                                    <a target="_blank" href={"/report/"+requirement.uuid}>{requirement.uuid}</a>
                                </Row>

                            ))
                        }
                    </Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal >
        );
    }
}

export default ReportMatchModal;