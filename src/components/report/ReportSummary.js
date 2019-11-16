import React from 'react';
import { FaFile } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ReportSummary = (props) => {
  
    return (
        <div className=" row mb-3">

            <div className=" col media py-3" key={props.report.reportId}>
             

                <div className=" media-body">
                    <div className="pet-head d-flex">
                        <span className="pet-name">{props.report.crc}</span>
                        <span className="apt-date ml-auto">{props.report.acqDate}</span>
                    </div>
                    <Link to={`/report/${props.report.id}`}>
                        <div className="">
                            <span className="label-item">Subj: </span>
                            <span>{props.report.subject} </span>
                        </div>
                    </Link>
                    <div className="apt-notes">{props.report.text}</div>
                    <a href="#"><span><FaFile /> report.docx</span></a>
                </div>
            </div>


        </div >
    );
}

export default ReportSummary;