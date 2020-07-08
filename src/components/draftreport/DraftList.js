import React from 'react';
import DraftSummary from './DraftSummary';

const DraftList = (props) => {

    return (
        <div className="container-fluid">
            {
              
                props.reports.map((report, index) => (

                    <DraftSummary
                        report={report}
                        index={index}
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
