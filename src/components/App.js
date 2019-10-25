import React, { Component } from 'react';
import '../css/App.css';

import AddReporting from './AddReporting';
import ListReports from './ListReports';

class App extends Component {

  constructor(){
    super();
    this.state = {
      reports: []
    };
  }
componentDidMount(){
  fetch('./data.json')
    .then(response => response.json())
    .then(result => {
      const rpts = result.map(item => {
        return item;
      });

      this.setState({
        reports: rpts
      });
    });

  
}
  render() {

   

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
           
                <AddReporting />
                <ListReports reports={this.state.reports}/>
                {/* <div>Search Appointments</div>
              <div>List Appointments</div>  */}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
