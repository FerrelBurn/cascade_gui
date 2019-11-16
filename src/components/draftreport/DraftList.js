import React, { Component } from 'react';
import DraftSummary from './DraftSummary';

const DraftList = (props) => {
    // console.log("draft list")
    console.log(props);
    return (
        <div className="container-fluid" >
            {
              
                props.reports.map((report, index) => (

                    <DraftSummary
                        report={report}
                        key={index}
                        arrayIndex={index}
                        sidePaneOpen={props.sidePaneOpen}
                        handleClick={props.handleClick}
                    />

                ))
            }
        </div>
        );
}

export default DraftList;