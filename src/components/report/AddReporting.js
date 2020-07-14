import React, { Component } from 'react';
import Upload from '../Upload';
import ReportComposer from '../draftreport/ReportComposer';
import { Form, Button, Row, Col } from 'react-bootstrap';

class AddReporting extends Component {
  render() {
    return (
      <>

        <ReportComposer></ReportComposer>
        <hr/>
        <Row>
          <Col md={{ span: 3, offset: 5 }}>
            <div className="card textcenter mt-3 add-report">
              <div className="apt-addheading card-header bg-primary text-white">
                  Add Report
              </div>
              <div className="card-body">
  
                <Upload url="/nifi/reports" />
              </div>
            </div>
          </Col>
        </Row>

        

      </>
    )
  }
}

export default AddReporting; 
