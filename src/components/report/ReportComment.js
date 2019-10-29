import React from 'react';

const ReportComment = (props) => {
    console.log(props)
    return (
        <div key={props.comment.id}>
            <div className="card-header  d-flex">
                <b>Comment</b>
            </div>
            <div className="card-text">
                <p className="card-text">
                    <b>Comment: </b>
                    {props.comment.comment}
                </p>
                <p className="card-text">
                    <b>DOI: </b>
                    {props.comment.doi}
                </p>
                <p className="card-text">
                    <b>REQS: </b>
                    {props.comment.reqs}
                </p>
                <p className="card-text">
                    <b>Source: </b>
                    {props.comment.source}
                </p>
                <p className="card-text">
                    <b>Summary: </b>
                    {props.comment.summary}
                </p>
                <p className="card-text">
                    <b>Text: </b>
                    {props.comment.text}
                </p>
            </div>
        </div>

    );
}

export default ReportComment;