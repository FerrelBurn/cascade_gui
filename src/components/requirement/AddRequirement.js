import React, {Component} from 'react';
import Upload from '../Upload';
import { Row, Col } from 'react-bootstrap';

class AddRequirement extends Component{
    render(){
        return (        
	<>
          <Row>
            <Col md={{ span: 3, offset: 5 }}>
              <div className="card textcenter mt-3">
                <div className="apt-addheading card-header bg-primary text-white">
                  Add Requirement
                </div>
        
                <div className="card-body">
                  <Upload url="/nifi/requirements" />
                </div>
              </div>
            </Col>
          </Row>
	</>
	)
    }
}

export default AddRequirement; 
