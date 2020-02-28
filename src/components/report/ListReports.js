import React, { Component } from 'react';
import { Button, Spinner, FormControl } from 'react-bootstrap';
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
      <div className="container-fluid" >
        {/* {console.log(props)} */}
        < div className="row" style={{ marginBottom: '4em' }}  >
          <FormControl onChange={this.handleSearch} type="text" placeholder="Search Report Subj" />
        </div >
        {

          this.state.filteredReps.map((report, index) => (

            <ReportSummary
              report={report}
              key={report.id}
              index={index}
            />

          ))
        }
      </div >
    )
  }
}

export default ListReports;
