import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const ReportView = (report) => (
    <Link to={`/report/${report.report.id}`}>
        <div className="card">
            
        </div>

    </Link>
)

export default ReportView;