import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class RequirementSummary extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        console.log(this.props)
        return ( 
            
            <div className=" row mb-3">

            <div className=" col media py-3" key={this.props.requirements.req_id}>
             

                <div className=" media-body">
                    <div className="d-flex">
                        <span>{this.props.requirement.req_id}</span>
                        
                    </div>
                    <Link to={`/requirement/${this.props.requirement.req_id}`}>
                        <div className="">
                            <span className="label-item">Req ID: </span>
                            <span>{this.props.requirement.req_id} </span>
                        </div>
                    </Link>
                    <div className="apt-notes">{this.props.requirement.text}</div>
                </div>
            </div>


        </div >
         );
    }
}
 
export default RequirementSummary;