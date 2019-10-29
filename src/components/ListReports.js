import React from 'react';
// import { FaFile } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import ReportView from './ReportView';
import ReportSummary from './ReportSummary';

const ListReports = (props) => {
 
  return (
    <div className="container" >
      {
        props.reports.map((report) => (
         
          <ReportSummary
            report={report}
            key={report.id}
          />
        
        ))
      }
    </div>
  )
}

export default ListReports;
