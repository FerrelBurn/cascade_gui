import React from 'react';
import { FaFile, FaEdit, FaTags } from "react-icons/fa";

import { Link } from 'react-router-dom';
const DraftSummary = (props) => {
    return (
        <div className=" row mb-3" >

            <div className=" col-11 media py-3" key={props.report.reportId}>
                {/* <div className="mr-3">
          <button className="pet-delete btn btn-sm btn-danger">X</button>
      </div> */}

                <div className=" media-body">
                    <div className="pet-head d-flex">
                        <span className="pet-name">{props.report.crc}</span>
                        <span className="apt-date ml-auto">{props.report.acqDate}</span>
                    </div>
                    <Link alt="view report"
                        title="view report"
                        to={`/draft/${props.report.id}`}>
                        <div className="">
                            <span className="label-item">Subj: </span>
                            <span>{props.report.subject} </span>
                        </div>
                    </Link>
                    <div className="apt-notes">{props.report.text}</div>
                    <Link to={`/report/download/${props.report.id}`}
                        alt="download original report"
                        title="download original file" >
                        <span><FaFile /> report.docx</span>
                    </Link>
                </div>
            </div>
            <div className="col-1" >
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <Link alt="edit" title="edit" to={`/report/${props.report.id}`}><FaEdit /></Link>
                        </div>
                        <div className="row">
                        <FaTags title="Match requirements"  />
                        </div>
                    </div>



                </div>
            </div>
           


        </div >

    );
}

export default DraftSummary;