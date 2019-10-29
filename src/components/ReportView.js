import React from 'react';


const ReportView = (props) => (
    <div >
        {
            <div className="card" >
                <div className="card-header">
                    {props.report.summary}
                </div>
                <div className="cardBody">
                    <p className="card-text">
                        {props.report.text}
                    </p>

                </div>
            </div>
        }
    </div>
)

export default ReportView;