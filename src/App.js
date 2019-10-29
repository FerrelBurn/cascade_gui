import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import '../css/App.css';

import AddReporting from './components/report/AddReporting';
import Home from './components/Home';
import AddRequirement from './components/requirement/AddRequirement';
import ListReports from './components/report/ListReports';
import ListRequirements from './components/requirement/ListRequirements';
import Navigation from './components/Navigation';
import DraftList from './components/DraftList';
import { Navbar, NavbarBrand } from "react-bootstrap";

import { Link } from 'react-router-dom';
import data from './data/data.json';
import ReportView from './components/report/ReportView';

class App extends Component {

  constructor() {
  
    super();
    this.state = {
      reports: data,
      lastIndex: 0

    };


  }

  componentDidMount() {
    this.setState({
      reports: data
    })
   

  }
  render() {
    return (


      <Router>
        <div className="container">
          <header>
            <Navbar fixed="top" color="337ab7" bg="dark" className="navbar-dark bg-dark" >

              <NavbarBrand>
                <Link className="text-white navbar-brand" to="/"><h1><font color="37eb34">Cascade</font></h1></Link>
              </NavbarBrand>
              <Navigation />
            </Navbar>
          </header>
          {/* <nav className="navbar fixed-top navbar-light bg-primary" >

            
            
            <a className="navbar-brand text-white" >
              <h4>Cascade</h4>
            </a>
              <Navigation />
           

          </nav> */}
          <main role="main" className="page  flex-shrink-0" id="petratings">
            <div className="container">
              <Switch>
                <Route exact path="/" render={(props) => (
                  <Home />
                )} />
                <Route exact path="/list-reports" render={(props) => (
                  <ListReports reports={this.state.reports} />
                )} />
                {/* <Route path="/list-reports" component={ListReports} /> */}
                <Route path="/list-requirements" component={ListRequirements} />
                <Route path="/add-report" component={AddReporting} />
                <Route path="/add-requirement" component={AddRequirement} />
                <Route path="/list-drafts" component={DraftList} />
                <Route path="/report/:id" render={(props) => {

                  let reportPosition = props.location.pathname.replace('/report/', '');
                  return (
                    <ReportView
                      report={this.state.reports[reportPosition]}
                    />
                  )
                }} />
              </Switch>

            </div>
          </main>

        </div>
      </Router >

    );
  }
}

export default App;
