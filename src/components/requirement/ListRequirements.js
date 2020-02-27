import React, { Component } from 'react';
import RequirementSummary from './RequirementSummary';
import { Button, Spinner, InputGroup, FormControl, Modal } from 'react-bootstrap';
import axios from 'axios';
import ReportMatchModal from './ReportMatchModal';


class ListRequirements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requirement: '',
            reqValue: '',
            req_id: '',
            matchModalShow: false,
            loading: false,
            matches: []
        }
        this.match = this.match.bind(this);
        this.saveAndMatch = this.saveAndMatch.bind(this);
        this.save = this.save.bind(this);

    }
    match(requirement) {
        let self = this;
        // console.log(requirement)
        this.setState({ loading: true })
        // create a new XMLHttpRequest


        axios.post("/peruse/read/v2", requirement)
            .then((response) => {

                // self.match(response.data);
                // console.log(response)
                if (response.data.length > 0) {
                    self.setState({ 
                        matchModalShow: true,
                        matches:response.data 
                    })
                }
                self.setState({ loading: false })
            })
            .catch((error) => console.error(error))
    }
    setModalShow(value) {
        this.setState({ matchModalShow: value })
    }
    

    save() {
        let reqId = this.state.req_id
        let requirement = this.state.reqValue
        let req = { "req_id": reqId, "text": requirement }
        // console.log("reqid: " + reqId)
        // console.log("requirement: " + requirement)
        // create a new XMLHttpRequest
        let self = this;

        axios.post("/peruse/addrequirement", req)
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
        // console.log(val)
        this.setState({ reqValue: val })
    }
    updateReq_id = event => {
        var val = event.target.value;
        // console.log(val)
        this.setState({ req_id: val })
    }
    render() {
        let matchModalClose = () => this.setState({matchModalShow:false})
        return (
           
            <div className="container-fluid" >
                 {/* {console.log(this.props)} */}
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
                                <Button onClick={this.saveAndMatch} style={{ marginLeft: '1em' }}>
                                    {this.state.loading && <span><Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />Working...</span>}{!this.state.loading && <span>Match</span>}Add/Match</Button>
                            </div>

                        </div>

                    </div>
                </div>

                {
                    this.props.requirements.map((requirement, index) => (

                        <RequirementSummary
                            requirement={requirement}
                            key={index}
                            matchFunction={this.match}
                            loading={this.state.loading}
                        />

                    ))
                }
                <ReportMatchModal
                    show={this.state.matchModalShow}
                    onHide={matchModalClose}
                    matches={this.state.matches}></ReportMatchModal>
            </div>);
    }

}


export default ListRequirements; 