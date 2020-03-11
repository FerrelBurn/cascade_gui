import React from 'react';
import DraftSummary from './DraftSummary';

const DraftList = (props) => {

    return (
        < >
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
        </>
        );
}

export default DraftList;