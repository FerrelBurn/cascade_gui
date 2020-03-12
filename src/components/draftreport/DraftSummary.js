import React from 'react';
import { Row, Col } from 'react-bootstrap'
// import { FaFile, FaEdit, FaTags } from "react-icons/fa";

import { Link } from 'react-router-dom';
const DraftSummary = (props) => {
  
    return (
        <Row>

            <Col md={{ span: 6, offset: 3 }} key={props.report.reportId}>
               

                <div  className=" media-body">
                    <div className="d-flex">
                        <span >{props.report.crc}</span>
                        <span className=" ml-auto">{props.report.acqDate}</span>
                    </div>
                    <Link alt="view report"
                        title="view report"
                        to={`/draft/${props.report.uuid}`} >
                        <div className="">
                           
                            <h5>{props.report.subject} </h5>
                        </div>
                    </Link>
                    <div className="apt-notes">{props.report.text.substring(0, 150)+"..."}</div>
                  
                </div>
            </Col>
           
           


        </Row >

    );
}

export default DraftSummary;