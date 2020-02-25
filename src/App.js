import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import '../css/App.css';

import AddReporting from './components/report/AddReporting';
import Home from './components/Home';
import AddRequirement from './components/requirement/AddRequirement';
import ListReports from './components/report/ListReports';
import ListRequirements from './components/requirement/ListRequirements';
import Navigation from './components/Navigation';
import DraftList from './components/draftreport/DraftList';
import { Navbar, NavbarBrand } from "react-bootstrap";

import { Link } from 'react-router-dom';
import data1 from './data/allreportsresponse.json';
import ReportView from './components/report/ReportView';
import RequirementView from './components/requirement/RequirementView';
import DraftView from './components/draftreport/DraftView';
import CollectionManagment from './components/collection_management/CollectionManagement';
import RequirementCrosswalk from './components/collection_management/RequirementCrosswalk';
import { FaCheck, FaWindowClose, FaTags, FaRegListAlt } from "react-icons/fa";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import axios from 'axios';
class App extends Component {
  _isMounted = false;
  constructor() {

    super();
    this.state = {
      reports: [],
      requirements: [],
      drafts: [],
      sidePaneOpen: false,
      lastIndex: 0

    };
    this.handleClick = this.handleClick.bind(this);
    this.getReports = this.getReports.bind(this);
    this.getRequirements = this.getRequirements.bind(this);
    this.getFakeData = this.getFakeData.bind(this);
    this.uploadRequirements = this.uploadRequirements.bind(this);
    // this.uploadRequirements();

  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate() {
    // this.getData("allreports");
    // this.getFakeData();


  }
  componentDidMount() {
    // this.uploadRequirements();
    this.getReports();
    this.getRequirements();
    // console.log(reports)


    // this.getFakeData()
  }

  getFakeData() {
    this.setState({
      reports: data1,
      drafts: data1
    })
    // return data1;
  }
  uploadRequirements(payload) {
    console.log("axios request")
    // axios.defaults.headers.post['Content-Type'] = 'application/json';

    const cannedpayload = [

      { "req_id": "REQ-324445-B", "text": "Are there trains or buses around?" },
      { "req_id": "REQ-324445-C", "text": "What is there to do near the hotel for fun?" }];
    // payload.push(...cannedpayload)
    axios.post("http://peruse:3005/provide_queries", payload)
      .then((response) => {
        // console.log(response.data)
        // console.log(response)
      })
  }
  getRequirements(path) {
    console.log("getRequirements")
    let self = this;
    // axios.get("http://localhost:3000/allrequirements")
    axios.get("http://peruse:3005/listreqs")
      .then((res) => {
        // console.log("respons from get data")
        this.setState({ requirements: res.data });
        self.uploadRequirements(res.data)
      })
    // const res = await fetch("http://localhost:3000/" + path)
    //   .then((res) => {
    //     return res.data
    //   })
    // const reports = await res.json();
    // this.setState({ reports: reports, drafts: reports });

  }
  getReports(path) {
    console.log("getReports")
    // axios.get("http://localhost:3000/allreports")
    axios.get("http://peruse:3005/listreps")
      .then((res) => {
        // console.log("respons from get data")
        this.setState({
          reports: res.data,
          drafts: res.data
        });
      })


  }
  handleClick(e) {

    this.setState({
      sidePaneOpen: !this.state.sidePaneOpen

    })
  }

  render() {
    return (


      <Router>
        <div className="container-fluid">
          <header>
            <Navbar fixed="top" color="337ab7" bg="dark" className="navbar-dark bg-dark" >

              <NavbarBrand>
                <Link className="text-white navbar-brand" to="/">
                  <h1><font color="37eb34">CASCADE</font></h1>
                </Link>
              </NavbarBrand>
              <Navigation />
            </Navbar>
          </header>


          <main role="main" className="container" style={{ marginTop: '1em' }} id="petratings">


            <SideNav style={{ marginTop: '5em', background: ' #555555 ' }}

              onSelect={(selected) => {
                // Add your code here
              }}
            >
              <SideNav.Toggle />

              <SideNav.Nav defaultSelected="req">
                <NavItem eventKey="req" expanded={true}>
                  <NavIcon>
                    <FaTags />
                  </NavIcon>
                  <NavText>
                    Req Counts
                    </NavText>


                  <NavItem eventKey="req/accepted">
                    <NavText>
                      <FaCheck color={'green'} /> Accepted: 5
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="req/rejected">
                    <NavText>
                      <FaWindowClose color={'red'} /> Rejected: 2
                      </NavText>
                  </NavItem>

                </NavItem>
                <NavItem eventKey="requirements" expanded={true}>
                  <NavIcon>
                    <FaRegListAlt />
                  </NavIcon>
                  <NavText>
                    Requirements
                    </NavText>
                  <NavItem eventKey="requirements/pir">
                    <NavText>
                      PIR: 3
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="requirements/cir">
                    <NavText>
                      CIR: 2
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="requirements/nir">
                    <NavText>
                      NIR: 2
                      </NavText>
                  </NavItem>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            <div className="row">
              <div className="col-md-11 offset-md-1">
                <Switch>
                  <Route exact path="/" render={(props) => (
                    <Home />
                  )} />
                  <Route exact path="/list-reports" render={(props) => (
                    <ListReports reports={this.state.reports} />
                  )} />
                  {/* <Route path="/list-reports" component={ListReports} /> */}
                  <Route path="/list-requirements" render={(props) => (
                    <ListRequirements requirements={this.state.requirements} />
                  )} />
                  <Route path="/add-report" component={AddReporting} />
                  <Route path="/add-requirement" component={AddRequirement} />

                  <Route path="/collection-management" render={(props) => (
                    <CollectionManagment matchedRequirements={this.state.matchedRequirements} />
                  )} />


                  <Route path="/req-cross-walk" component={RequirementCrosswalk} />
                  <Route exact path="/list-drafts" render={(props) => (
                    <DraftList
                      handleClick={this.handleClick}
                      sidePaneOpen={this.state.sidePaneOpen}
                      reports={this.state.drafts} />
                  )} />
                  <Route path="/report/:id" render={(props) => {

                    let reportPosition = props.location.pathname.replace('/report/', '');
                    return (
                      <ReportView
                        report={this.state.reports[reportPosition - 1]}
                      />
                    )
                  }} />
                  <Route path="/requirement/:id" render={(props) => {
                    let requirementPosition = props.location.pathname.replace('/requirement/', '');
                    return (
                      <RequirementView
                        report={this.state.requirements[requirementPosition - 1]}
                      />
                    )
                  }} />
                  <Route path="/draft/:id" render={(props) => {

                    let reportPosition = props.location.pathname.replace('/draft/', '');
                    return (
                      <DraftView
                        report={this.state.reports[reportPosition]}
                      />
                    )
                  }} />
                </Switch>
              </div>
            </div>
          </main>

        </div>
      </Router >

    );
  }
}

export default App;
