import React, { Component } from 'react';
import RequirementSummary from './RequirementSummary';
import { Button, Spinner, FormControl, Row, Col } from 'react-bootstrap';
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
            matches: [],
            filteredReqs: []
        }
        this.match = this.match.bind(this);
        this.saveAndMatch = this.saveAndMatch.bind(this);
        this.save = this.save.bind(this);

    }
    componentWillMount() {
        this.setState({
            filteredReqs: this.props.requirements
        })
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
                        matches: response.data
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

        axios.post("/peruse/addrequirement", req)
            .then((response) => {

                this.props.updateReqs()

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
    handleSearch = (e) => {
        this.setState({
            requirementFilter: e.target.value
        })
        this.filterRequirements(e.target.value)
    }
    filterRequirements = (requirementFilter) => {

        let filteredReqs = this.props.requirements
        filteredReqs = filteredReqs.filter((req) => {
            let reqId = req.req_id.toLowerCase()
            return reqId.indexOf(
                requirementFilter.toLowerCase()) !== -1
        })
        this.setState({
            filteredReqs
        })
    }
    render() {
        let matchModalClose = () => this.setState({ matchModalShow: false })
        return (

            <>

                <Row style={{ marginBottom: '4em' }}  >
                    <Col sm={{ span: 8, offset: 2 }} md={{ span: 4, offset: 2 }}>
                        <FormControl onChange={this.handleSearch} type="text" placeholder="Search REQID" />
                    </Col>

                </Row>
                <Row style={{ marginBottom: '4em' }}  >
                    <Col sm={{ span: 1, offset: 2 }} md={{ span: 1, offset: 2 }}>
                        <FormControl onChange={this.updateReq_id} type="text" placeholder="Enter REQID" />
                    </Col>
                    <Col sm={{ span: 5}} md={{ span: 4 }}>
                        <FormControl onChange={this.updateReq} type="text" placeholder="Enter Requirement" />
                    </Col>
                    <Col m={{ span: 5}} md={{ span: 5 }}>
                        <Row >
                            <Col>
                                <Button onClick={this.save}>Add</Button>
                                <Button onClick={this.saveAndMatch} style={{ marginLeft: '1em' }}>
                                    {this.state.loading && <span><Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />Working...</span>}{!this.state.loading && <span>Match</span>}Add/Match</Button>
                            </Col>

                        </Row>

                    </Col>
                </Row>
               
                {
                    
                    this.state.filteredReqs.map((requirement, index) => (

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
            </>);
    }

}


export default ListRequirements; 
