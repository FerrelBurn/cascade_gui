import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

class RequirementSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false
        }
    }
    handleClick = () => {
        this.props.matchFunction(this.props.requirement)
        this.setState({loading:true})
    }
    render() {
        // console.log(this.props.requirement)
        return (

            <div className=" row mb-3">

                <div className=" col media py-3" key={this.props.requirement.req_id}>


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
                <div className="col-md-4">
                    <div className="row">
                        <div className="col">
                            <Button value={this.props.key} onClick={this.handleClick} style={{ margin: '1em' }}>
                            {this.props.loading && <span><Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                   />Working...</span>}{!this.props.loading && <span>Match</span>}</Button>
                        </div>

                    </div>

                </div>


            </div >
        );
    }
}

export default RequirementSummary;