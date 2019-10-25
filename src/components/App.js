import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/App.css';

import AddReporting from './AddReporting';
import Home from './Home';
import AddRequirement from './AddRequirement';
import ListReports from './ListReports';
import ListRequirements from './ListRequirements';
import Navigation from './Navigation';
import { Nav, Navbar, NavItem, NavbarBrand } from "react-bootstrap";

import { Link } from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      reports: [],
      lastIndex: 0
    };
  }
  componentDidMount() {
    // fetch('./data.json')
    //   .then(response => response.json())
    //   .then(result => {
    //     const rpts = result.map(item => {
    //       item.reportId = this.state.lastIndex;
    //       this.setState({ lastIndex: this.state.lastIndex + 1 });
    //       return item;
    //     });

    //     this.setState({
    //       reports: rpts
    //     });
    //   });


  }
  render() {

    return (
      

        <Router>
          <Navbar fixed="top" color="337ab7" bg="primary"  >
            
              <NavbarBrand>
                <Link className="text-white navbar-brand" to="/"><h1>Cascade</h1></Link>
              </NavbarBrand>
              <Navigation/>
          </Navbar>
          {/* <nav className="navbar fixed-top navbar-light bg-primary" >

            
            
            <a className="navbar-brand text-white" >
              <h4>Cascade</h4>
            </a>
              <Navigation />
           

          </nav> */}
          <main className="page bg-white" id="petratings">
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/list-reports" component={ListReports} />
                    <Route path="/list-requirements" component={ListRequirements} />
                    <Route path="/add-report" component={AddReporting} />
                    <Route path="/add-requirement" component={AddRequirement} />
                  </Switch>
                  <div className="container">

                    {/* <AddReporting />
                  <AddRequirement />
                  <ListReports reports={this.state.reports} /> */}
                    {/* <div>Search Appointments</div>
              <div>List Appointments</div>  */}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Router>
      
    );
  }
}

export default App;
