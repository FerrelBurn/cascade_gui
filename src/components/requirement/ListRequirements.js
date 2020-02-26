import React, { Component } from 'react';
import RequirementSummary from './RequirementSummary';
import { Button, Spinner, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';


class ListRequirements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requirement: '',
            reqValue: '',
            req_id: ''
        }
        this.match = this.match.bind(this);
        this.saveAndMatch = this.saveAndMatch.bind(this);
        this.save = this.save.bind(this);

    }
    match(requirement) {
        console.log(requirement)
        // create a new XMLHttpRequest
        let self = this;

        axios.post("http://208.188.184.42:3005/read/v2", requirement)
            .then((response) => {

                // self.match(response.data);
                console.log(response)

            })
            .catch((error) => console.error(error))
    }
    save() {
        let reqId = this.state.req_id
        let requirement = this.state.reqValue
        let req = { "req_id": reqId, "text": requirement }
        console.log("reqid: " + reqId)
        console.log("requirement: " + requirement)
        // create a new XMLHttpRequest
        let self = this;

        axios.post("http://208.188.184.42:3005/addrequirement", req)
            .then((response) => {

                self.match(response.data);

            })
            .catch((error) => console.error(error))
    }
    saveAndMatch() {

        let requirement = this.state.reqValue
        this.save();
        this.match(requirement);
    }
    updateReq = event => {
        var val = event.target.value;
        console.log(val)
        this.setState({ reqValue: val })
    }
    updateReq_id = event => {
        var val = event.target.value;
        console.log(val)
        this.setState({ req_id: val })
    }
    render() {
        return (
            <div className="container-fluid" >
                {/* {console.log("ListRequirements")}
                {console.log(this.props.requirements)} */}
                {/* style={{ border: '1px solid black'}} */}
                <div className="row" style={{ marginBottom: '4em' }}  >
                    <div className="col-md-2">
                        <FormControl onChange={this.updateReq_id} type="text" placeholder="Enter REQID" />
                    </div>
                    <div className="col-md-6">
                        <FormControl onChange={this.updateReq} type="text" placeholder="Enter Requirement" />
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col">
                                <Button onClick={this.save}>Add</Button>
                                <Button onClick={this.saveAndMatch} style={{ marginLeft: '1em' }}>Add/Match</Button>
                            </div>

                        </div>

                    </div>
                </div>

                {
                    this.props.requirements.map((requirement) => (

                        <RequirementSummary
                            requirement={requirement}
                            key={requirement.req_id}
                            matchFunction={this.match}
                        />

                    ))
                }
            </div>);
    }

}


export default ListRequirements; 