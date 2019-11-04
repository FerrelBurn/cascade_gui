import React, { Component } from 'react';
import DraftSummary from './DraftSummary';

const DraftList = (props) => {
    return (
        <div className="container" >
            {
                props.reports.map((report) => (

                    <DraftSummary
                        report={report}
                        key={report.id}
                    />

                ))
            }
        </div>);
}

export default DraftList;