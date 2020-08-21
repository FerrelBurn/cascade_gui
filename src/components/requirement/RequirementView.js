import React from 'react';
import { Card } from 'react-bootstrap';
const RequirementView = (props) => {
    return (
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
    );
}

export default RequirementView;
