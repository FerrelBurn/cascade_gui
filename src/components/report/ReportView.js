import React, { Component } from 'react';
import ReportEnclosure from './ReportEnclosure';
import ReportComment from './ReportComment';

// const ReportView = (this.props) => (
class ReportView extends Component {

    getHighlightedText(text, higlight, question) {
        // Split on higlight term and include term into parts, ignore case
        let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
        return <span> {parts.map((part, i) =>
            <span alt={question} key={i} style={part.toLowerCase() === higlight.toLowerCase() ? { fontWeight: 'bold', backgroundColor: 'yellow' } : {}}>
                {part}
            </span>)
        } </span>;
    }
    render() {
        return (
            <div className="container-fluid" >

                {

                    <div className="card" >
                        <div className="card-header  d-flex">
                            <span>
                                <b> Serial Number:</b> {this.props.report.serial.classification} {this.props.report.serial.crc} {this.props.report.serial.serialNumber} {this.props.report.serial.year}
                            </span>
                            <span className="ml-auto"> <b>Acquisition Date:</b> {this.props.report.acqDate}</span>
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
                                <b>Country: </b>{this.props.report.country.trigraph}
                            </p>
                            <p className="card-text">
                                <b>Subject: </b>{this.props.report.subject}
                            </p>
                            <p className="card-text">
                                <b>Summary: </b>{this.props.report.summary}
                            </p>
                            <p className="card-text">
                                <b>Text:</b> {this.props.report.text.split('\n').map((item, key) => {
                                    return <p key={key}>{item}<br /></p>
                                })}
                            </p>
                            {
                                this.props.report.comments.map((comment) => (
                                    <ReportComment comment={comment} />
                                ))
                            }
                            {
                                this.props.report.encl.map((encl) => (
                                    <ReportEnclosure encl={encl} />
                                ))
                            }

                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default ReportView;