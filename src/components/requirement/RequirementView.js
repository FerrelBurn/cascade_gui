import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
const RequirementView = (props) => {
    return (
            <Row>
                <Col sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
	          <Card>
                    <Card.Body>
                      <Card.Text>
                        <b>Requirement ID: </b>{props.requirement.req_id}
                      </Card.Text>
                      <Card.Text>
                        <b>Requirement Text: </b>{props.requirement.text}
                      </Card.Text>
                    </Card.Body>
	          </Card>
                </Col>
            </Row>
    );
}

export default RequirementView;
