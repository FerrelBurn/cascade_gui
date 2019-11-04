import React from 'react';

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
