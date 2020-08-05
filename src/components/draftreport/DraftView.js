import React, { Component } from 'react';
import ReportEnclosure from '../report/ReportEnclosure';
import ReportComment from '../report/ReportComment';
import { Button, Spinner, Toast, Row, Col } from 'react-bootstrap';
import HighlightedText from './HighlightedText';
import axios from 'axios';
const reactStringReplace = require('react-string-replace');
// const ReportView = (this.props) => (
class DraftView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlighted: [],
            requirements: [],
            matches: [],
            loading: false,
            showtoast: false
        };
        this.spot = this.spot.bind(this);
        this.match = this.match.bind(this);
        this.addRequirement = this.addRequirement.bind(this);
        // this.tryAgain = this.tryAgain.bind(this);

    }
    componentDidMount() {

        let reportText = this.props.report.text.split('\n').map((item, key) => {
            return <p key={"text"+key}>{item}</p>
        });

        this.setState({ 
            highlighted: reportText,
            requirements: this.props.report.reqs
         });
    }
    addRequirement(requirement) {
       console.log(requirement)
        let updatedRequirements = [...this.state.requirements];
        if (updatedRequirements.indexOf(requirement.req_id) === -1) {
            updatedRequirements.push(requirement.req_id)
        } else {
            this.setShowToast(true)
        }
        this.setState({ requirements: updatedRequirements });
        axios.post("/peruse/attachreq/"+requirement.req_id+"/report/"+this.props.report.uuid)
    }

    setShowToast(val) {
        this.setState({ showtoast: val })
    }
    spot() {

        this.setState({ loading: true })
        let reportText = this.props.report.text.split('\n').map((item, key) => {
            return { "paragraph_number": key, "text": item }
        });

        // var res = this.matchRequirements(reportText)
        this.matchRequirements(reportText)
    }

    matchRequirements(payload) {
        // create a new XMLHttpRequest
        let self = this;

        axios.post("/peruse/read", payload)
            .then((response) => {

                self.match(response.data);

            })
            .catch((error) => console.error(error))

    }
    match(res) {

        /**
         * Parse AIML response for matches and create an array of them
         */

        let matches = []
        res.forEach((item) => {

            item.ml_matches.forEach((ml) => {
                let req = ml[0];
                let mlMatch = {
                    "type": "ML",
                    "req_id": req.req_id,
                    "reqText": req.text,
                    "matchText": ml[1]
                };
                matches.push(mlMatch);

            });
            item.fuzzy_matches.forEach((fuz) => {
                let req = fuz[0];
                let fuzMatch = {
                    "type": "fuzzy",
                    "req_id": req.req_id,
                    "reqText": req.text,
                    "matchText": fuz[1]
                }
                matches.push(fuzMatch);
            })
        })

        this.setState({ matches: matches });
        let hl = [];
        for (let i = 0; i < res.length; i++) {
            res[i].ml_matches.forEach(value => {
                let marker = {};

                let currentValue = value[1];

                marker.start = this.props.report.text.indexOf(currentValue);
                marker.end = marker.start + currentValue.length;
                hl.push(marker);
            });
        }

        let highlightedReport = this.props.report.text;
        hl.forEach((item, i) => {
            let ss = this.props.report.text.substring(item.start, item.end);

            highlightedReport = reactStringReplace(highlightedReport, ss, (match) => (
                <HighlightedText handleAddRequirement={this.addRequirement} 
                    highlighted={true}  matches={this.state.matches} text={match} currentIndex={i} />
            ));


        })

        highlightedReport = reactStringReplace(highlightedReport, '\n', (match, i) => (
            <p key={i}>{match}</p>
        ))
        this.setState({
            highlighted: highlightedReport,
            loading: false
        });
    }
  
    render() {

        return (
                   
                        <div className="card" >
                            {/* <Toast bg="warning" onClose={() => this.setShowToast(false)} delay={3000} autohide show={this.state.showtoast}>
                            <Toast.Body>Requirement already added</Toast.Body>
                        </Toast> */}
                            <div className="card-header">
                                <Row >
                                    <Col>
                                        <b> Serial Number:</b>
                                        {this.props.report.serial.classification}
                                        {this.props.report.serial.crc}
                                        {this.props.report.serial.serialNumber}
                                        {this.props.report.serial.year}
                                    </Col>
                                    <Col className="text-right" >
                                        <Button className="mr-1 pull-right" onClick={this.spot}>
                                            {this.state.loading && <span><Spinner
                                                as="span"
                                                animation="grow"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />Working...</span>}{!this.state.loading && <span>Match</span>}
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>Acquisition Date:</b> {this.props.report.acqDate}
                                    </Col>
                                </Row>
                                <div className="ml-auto">


                                </div>
                            </div>
                            <div className="cardBody">

                                <p className="card-text">
                                    <b>ACQ: </b>{this.props.report.acq}
                                </p>
                                <p className="card-text">
                                    <b>DISSEM: </b>{this.props.report.dissem}
                                </p>
                                <p className="card-text">
                                    <b>IPSP: </b>{this.props.report.ipsp}
                                </p>
                                <p className="card-text">
                                    <b>REQ: </b>
                                    {this.state.requirements && this.state.requirements.map((reqid, i) => (
                                        <span key={i}>{reqid} </span>
                                    ))}
                                </p>
                                <p className="card-text">
                                    <b>Country: </b>{this.props.report.country.trigraph}
                                </p>
                                <p className="card-text">
                                    <b>Subject: </b>{this.props.report.subject}
                                </p>
                                <p className="card-text">
                                    <b>Summary: </b>{this.props.report.summary}
                                </p>
                                <p className="card-text">
                                    <b>Text:</b>
                                </p>
                                <div className="card-text">
                                    <div style={{padding:"1em", margin:"1em"}}>
                                        {
                                            this.state.highlighted


                                        }
                                    </div>
                                </div>
                                {
                                    this.props.report.comments.map((comment, index) => (
                                        <ReportComment key={"comment"+index} comment={comment} />
                                    ))
                                }
                                {
                                    this.props.report.encl.map((encl, index) => (
                                        <ReportEnclosure key={"enclosure"+index} encl={encl} />
                                    ))
                                }

                            </div>
                        </div>
        )
    }

}

export default DraftView;
