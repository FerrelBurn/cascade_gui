import React, { Component } from 'react';
import RequirementSummary from './RequirementSummary';

class ListRequirements extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid" >
                {console.log("ListRequirements")}
                {console.log(this.props)}
                {
                    this.props.requirements.map((requirement) => (

                        <RequirementSummary
                            requirement={requirement}
                            key={requirement.req_id}
                        />

                    ))
                }
            </div>);
    }
}


export default ListRequirements; 