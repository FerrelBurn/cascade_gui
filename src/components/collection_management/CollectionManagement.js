import React, { Component } from 'react';
import Requirement from './Requirement';
import MatchedRequirement from './MatchedRequirement';

class CollectionManagement extends Component {
    constructor(props) {
        super(props);
        // this.props.requirements = {"requirement":{"uuid":"123123123", "matches":[{"uuid":"34454234356"},{"uuid":"2567654345654"}]}}

        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid" >
                {
                    this.props.requirements.map((requirement) => (

                        <Requirement />

                    ))
                }
            </div>);
    }
}

export default CollectionManagement;