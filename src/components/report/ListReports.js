import React, { Component } from 'react';
import { Button, Spinner, FormControl, Row, Col } from 'react-bootstrap';
import ReportSummary from './ReportSummary';

class ListReports extends Component {

  constructor(props) {
    super(props);
    this.state = {
      matchModalShow: false,
      loading: false,
      matches: [],
      filteredReps: []
    }
  }
  componentWillMount() {
    this.setState({
      filteredReps: this.props.reports
    })
  }
  handleSearch = (e) => {
    this.setState({
      reportFilter: e.target.value
    })
    this.filterReports(e.target.value)
  }
  filterReports = (reportFilter) => {

    let filteredReps = this.props.reports
    filteredReps = filteredReps.filter((report) => {
      let subj = report.subject.toLowerCase()
      return subj.indexOf(
        reportFilter.toLowerCase()) !== -1
    })
    this.setState({
      filteredReps
    })
  }
  render() {
    return (
      < >
        {/* {console.log(props)} */}
        < Row style={{ marginBottom: '4em' }}  >
          <Col md={{ span: 4, offset: 3 }}>
            <FormControl onChange={this.handleSearch} type="text" placeholder="Search Report Subj" />

          </Col>

        </Row >
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            {
              this.state.filteredReps.map((report, index) => (
                <ReportSummary
                  report={report}
                  key={report.id}
                  index={index}
                />
              ))
            }
          </Col>
        </Row>

      </>
    )
  }
}

export default ListReports;
