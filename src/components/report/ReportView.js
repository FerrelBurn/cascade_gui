import React from 'react';
import ReportEnclosure from './ReportEnclosure';
import ReportComment from './ReportComment';

const ReportView = (props) => (
    <div >
        {
            <div className="card" >
                <div className="card-header  d-flex">
                    <span>
                        <b> Serial Number:</b> {props.report.serial.classification} {props.report.serial.crc} {props.report.serial.serialNumber} {props.report.serial.year}
                    </span>
                    <span className="ml-auto"> <b>Acquisition Date:</b> {props.report.acqDate}</span>
                </div>
                <div className="cardBody">
                    <p className="card-text">
                        <b>ACQ: </b>{props.report.acq}
                    </p>
                    <p className="card-text">
                        <b>DISSEM: </b>{props.report.dissem}
                    </p>
                    <p className="card-text">
                        <b>IPSP: </b>{props.report.ipsp}
                    </p>
                    <p className="card-text">
                        <b>Country: </b>{props.report.country.trigraph}
                    </p>
                    <p className="card-text">
                        <b>Subject: </b>{props.report.subject}
                    </p>
                    <p className="card-text">
                        <b>Summary: </b>{props.report.summary}
                    </p>
                    <p className="card-text">
                        <b>Text:</b> {props.report.text}
                    </p>
                    {
                        props.report.comments.map((comment) => (
                            <ReportComment comment={comment} />
                        ))
                    }
                    {
                        props.report.encl.map((encl) => (
                            <ReportEnclosure encl={encl} />
                        ))
                    }

                </div>
            </div>
        }
    </div>
)

export default ReportView;