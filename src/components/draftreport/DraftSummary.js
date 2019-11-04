import React from 'react';
import { FaFile, FaEdit, FaTags } from "react-icons/fa";
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

import { Link } from 'react-router-dom';
const DraftSummary = (props) => {
    return (
        <div className=" row mb-3">

            <div className=" col media py-3" key={props.report.reportId}>
                {/* <div className="mr-3">
          <button className="pet-delete btn btn-sm btn-danger">X</button>
      </div> */}

                <div className=" media-body">
                    <div className="pet-head d-flex">
                        <span className="pet-name">{props.report.crc}</span>
                        <span className="apt-date ml-auto">{props.report.acqDate}</span>
                    </div>
                    <Link alt="view report" title="view report" to={`/report/${props.report.id}`}>
                        <div className="">
                            <span className="label-item">Subj: </span>
                            <span>{props.report.subject} </span>
                        </div>
                    </Link>
                    <div className="apt-notes">{props.report.text}</div>
                    <Link alt="download original report" title="download original file" >
                        <span><FaFile /> report.docx</span>
                    </Link>
                </div>
            </div>
            <div className="col" >
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <Link alt="edit" title="edit" to={`/report/${props.report.id}`}><FaEdit /></Link>
                        </div>
                        <div className="row">
                           <SlidingPane <Link alt="match to requirements" title="match to requirements" to={`/report/${props.report.id}`}><FaTags /></Link>
                        </div>
                    </div>



                </div>
            </div>


        </div >

    );
}

export default DraftSummary;