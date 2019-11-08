import React, { Component } from 'react';
import DraftSummary from './DraftSummary';

const DraftList = (props) => {
    // console.log(props);
    return (
        <div className="container-fluid" >
            {
              
                props.reports.map((report) => (

                    <DraftSummary
                        report={report}
                        key={report.id}
                        sidePaneOpen={props.sidePaneOpen}
                        handleClick={props.handleClick}
                    />

                ))
            }
        </div>
        );
}

export default DraftList;