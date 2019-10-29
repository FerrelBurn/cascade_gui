import React from 'react';

const ReportEnclosure = (props) => {
  
    return (
        <div key={props.encl.id}>
            <div className="card-header  d-flex">
                <b>  Enclosure</b>
            </div>
            <div className="card-text">
                <p className="card-text">
                    <b>Classification: </b>
                    {props.encl.enclosureClassification}
                </p>
                <p className="card-text">
                    <b>Description: </b>
                    {props.encl.enclosureDescription}
                </p>
            </div>
        </div>
    );
}

export default ReportEnclosure;