import React from 'react';
import ReqMatch from './ReqMatch';

const MatchItem = (props) => {
    return (
        <div>
            {
                <div className="">
                    <div className="row m-2">
                        <div className="col">
                            <b>Match Type: {props.match.type}</b>
                        </div>
                    </div>
                    <div className="row m-2 " >
                        <div className="col">
                            <b> ({props.match.req_id}): </b>{props.match.reqText}
                        </div>
                        <br />
                    </div>
                    <div className="row m-2">
                        <div className="col">
                            <b> Answered by:</b> {props.match.matchText}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}


export default MatchItem;