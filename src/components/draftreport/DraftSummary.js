import React from 'react';
// import { FaFile, FaEdit, FaTags } from "react-icons/fa";

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
                        <span >{props.report.crc}</span>
                        <span className=" ml-auto">{props.report.acqDate}</span>
                    </div>
                    <Link alt="view report"
                        title="view report"
                        to={`/draft/${props.index}`} >
                        <div className="">
                           
                            <h5>{props.report.subject} </h5>
                        </div>
                    </Link>
                    <div className="apt-notes">{props.report.text.substring(0, 150)+"..."}</div>
                    {/* <Link to={`/report/download/${props.report.id}`}
                        alt="download original report"
                        title="download original file" >
                        <span><FaFile /> report.docx</span>
                    </Link> */}
                </div>
            </div>
            {/* <div className="col-1" >
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
            </div> */}
           


        </div >

    );
}

export default DraftSummary;