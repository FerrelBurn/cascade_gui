import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner, Row, Col } from 'react-bootstrap';

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

            <Row style={{padding:"1em"}}>

                <Col sm={{ span: 8}} md={{ span: 6, offset: 3 }} key={this.props.requirement.req_id}>


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
                </Col>
                <Col>
                    <Row>
                        <Col md={{ span: 1}}>
                            <Button value={this.props.key} onClick={this.handleClick} style={{ margin: '1em' }}>
                            {this.props.loading && <span><Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                   />Working...</span>}{!this.props.loading && <span>Match</span>}</Button>
                        </Col>

                    </Row>

                </Col>


            </Row >
        );
    }
}

export default RequirementSummary;