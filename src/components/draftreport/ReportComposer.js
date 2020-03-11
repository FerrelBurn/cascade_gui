import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
class ReportComposer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            < >


                <Form >
                    <Row>
                        <Col md={{ span: 2, offset: 1 }}>
                            <Row>
                                <Form.Group controlId="classification">
                                    <Form.Label>Classification</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="UNCLASSIFIED" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group controlId="crc">
                                    <Form.Label>CRC</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="323" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group controlId="serialNumber">
                                    <Form.Label>Serial Number</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="831" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group controlId="year">
                                    <Form.Label>Year</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="2020" />
                                </Form.Group>
                            </Row>

                        </Col>
                        <Col md={{ span: 5}}>
                            <Row >
                                <Col md={12} >
                                    <Form.Group controlId="Subject">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control placeholder="Subj..." />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row >
                                <Col md={12} >
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Report Text</Form.Label>
                                        <Form.Control as="textarea" rows="10" placeholder="Report text..." />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={{ span: 3, offset: 1 }} style={{border:"1px dashed blue"}}>
                           matched results
                        </Col>

                    </Row>
                    <Row>
                        <Col md={{ span: 1, offset: 5 }}>
                            <Button variant="primary" type="submit">
                                Save
                        </Button>
                        </Col>

                    </Row>



                </Form>

            </>);
    }
}

export default ReportComposer;