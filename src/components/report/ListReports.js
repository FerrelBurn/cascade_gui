import React from 'react';

import ReportSummary from './ReportSummary';

const ListReports = (props) => {
 
  return (
    <div className="container-fluid" >
      {/* {console.log(props)} */}
      {
        props.reports.map((report, index) => (
         
          <ReportSummary
            report={report}
            key={report.id}
            index={index}
          />
        
        ))
      }
    </div>
  )
}

export default ListReports;
