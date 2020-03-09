import React from 'react';
import { Row, Col } from 'react-bootstrap';
const RequirementView = (props) => {
    return (
        <div className="container">
            <Row>
                {console.log(props)}
                <Col>
                    <b>Requirement ID: </b>{props.requirement.req_id}
                </Col>
            </Row>
            <Row>
                {console.log(props)}
                <Col>
                    <b>Requirement Text: </b>{props.requirement.text}
                </Col>
            </Row>
        </div>
    );
}

export default RequirementView;