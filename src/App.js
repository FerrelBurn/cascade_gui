import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import '../css/App.css';

import AddReporting from './components/AddReporting';
import Home from './components/Home';
import AddRequirement from './components/AddRequirement';
import ListReports from './components/ListReports';
import ListRequirements from './components/ListRequirements';
import Navigation from './components/Navigation';
import DraftList from './components/DraftList';
import { Nav, Navbar, NavItem, NavbarBrand } from "react-bootstrap";

import { Link } from 'react-router-dom';
import data from './data/data.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      reports: [],
      lastIndex: 0,
      reports: data
    };
  }
  componentWillMount(){
    this.setState({
      reports: data
    })
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
        <div className="container">
          <header>
            <Navbar fixed="top" color="337ab7" bg="dark"  >

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
                <Route path="/list-reports" component={ListReports} />
                <Route path="/list-requirements" component={ListRequirements} />
                <Route path="/add-report" component={AddReporting} />
                <Route path="/add-requirement" component={AddRequirement} />
                <Route path="/list-drafts" component={DraftList} />
              </Switch>

            </div>
          </main>

        </div>
      </Router >

    );
  }
}

export default App;
