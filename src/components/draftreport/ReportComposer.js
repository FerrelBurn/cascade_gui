import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios';

class ReportComposer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classification: "UNCLASSIFIED",
            crc: "323",
            serialNumber: "131",
            year: "2020",
            subject: "",
            text: ""
        }
        this.save = this.save.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { target: { name, value } } = event
        this.setState({ [name]: value })

    }
    save(e) {

        e.preventDefault();
        e.stopPropagation();

        const data = {};
        data.serial = {};
        data.serial.classification = this.state.classification;

        data.serial.crc = this.state.crc;
        data.serial.serialNumber = this.state.serialNumber;
        data.serial.year = this.state.year
        data.subject = this.state.subject;
        data.text = this.state.text;
        data.acqDate = new Date().toISOString().split('.')[0]+"Z";
        console.log(data)
        axios.post("/peruse/addreport", data, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {

            })
    }
    render() {
        return (
            < >


                <Form onSubmit={this.save} >
                    <Row>

                        <Col md={{ span: 2, offset: 1 }}>
                            <Row>
                                <Form.Group controlId="classification">
                                    <Form.Label>Classification</Form.Label>
                                    <Form.Control name="classification" onChange={this.handleChange} size="sm" type="text" value={this.state.classification} placeholder="UNCLASSIFIED" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group controlId="crc">
                                    <Form.Label>CRC</Form.Label>
                                    <Form.Control name="crc" onChange={this.handleChange} size="sm" type="text" value={this.state.crc} placeholder="323" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group controlId="serialNumber">
                                    <Form.Label>Serial Number</Form.Label>
                                    <Form.Control name="serialNumber" onChange={this.handleChange} size="sm" type="text" value={this.state.serialNumber} placeholder="831" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group controlId="year">
                                    <Form.Label>Year</Form.Label>
                                    <Form.Control name="year" onChange={this.handleChange} size="sm" type="text" value={this.state.year} placeholder="2020" />
                                </Form.Group>
                            </Row>

                        </Col>
                        <Col md={{ span: 5 }}>
                            <Row >
                                <Col md={12} >
                                    <Form.Group controlId="subject">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control name="subject" onChange={this.handleChange} value={this.state.subject} placeholder="Subj..." />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row >
                                <Col md={12} >
                                    <Form.Group controlId="text">
                                        <Form.Label>Report Text</Form.Label>
                                        <Form.Control name="text" onChange={this.handleChange} as="textarea" rows="10" value={this.state.text} placeholder="Report text..." />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={{ span: 3, offset: 1 }} style={{ border: "1px dashed blue" }}>
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