import React, { Component } from 'react';
import { Button, Container, Modal, Row, Col } from 'react-bootstrap';

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
                    <Container>
                        {
                            this.props.matches.map((requirement, index) => (

                                <Row title={requirement.text}>
                                    <Col><a target="_blank" rel="noopener noreferrer"  href={"/report/"+requirement.uuid}>{requirement.serial.classification+requirement.serial.crc+requirement.serial.serialNumber+requirement.serial.year}</a></Col>
                                    <Col><b>Score: </b> { Math.round(requirement.score[0] * 1000) / 10 + "%"}</Col>
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