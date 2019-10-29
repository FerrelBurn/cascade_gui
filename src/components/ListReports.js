import React, { Component } from 'react';
import { FaFile } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ListReports = (reports) => {
  return (
    <Link to={`/report/${reports.report.id}`}>
      <div className="card">

      </div>

    </Link>
  );
}

export default ListReports;

 //     <div className="appointment-list item-list mb-3">
      //         {this.props.reports.map(report => (
      //             <div className="pet-item col media py-3" key={report.reportId}>
      //             {/* <div className="mr-3">
      //               <button className="pet-delete btn btn-sm btn-danger">X</button>
      //             </div> */}

      //             <div className="pet-info media-body">
      //               <div className="pet-head d-flex">
      //                 <span className="pet-name">{report.serial.crc}</span>
      //                 <span className="apt-date ml-auto">{report.acqDate}</span>
      //               </div>

      //               <div className="owner-name">
      //                 <span className="label-item">Subj: </span>
      //                 <span>{report.subject} </span>
      //               </div>
      //               <div className="apt-notes">{report.text}</div>
      //               <a href="#"><span><FaFile/> report.docx</span></a>
      //             </div>
      //           </div>
      //         ))}

      // </div>