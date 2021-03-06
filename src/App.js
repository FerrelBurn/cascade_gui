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
import { Navbar, NavbarBrand, Alert, Col, Row, Tab, Tabs } from "react-bootstrap";

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
import { ResponsiveNeoGraph } from "./components/neo4j/NeoGraph";
import config from "./config";


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
    this.componentDidMount();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate() {
    console.log("component did update")
  }
  componentDidMount() {
    console.log("component did mount")
    this.getReports();
    this.getRequirements();
  }

  getFakeData() {
    this.setState({
      reports: data1,
      drafts: data1
    })

  }

  uploadRequirements(payload) {
    axios.post("/peruse/provide_queries", payload)
      .then((response) => {

      })
  }

  getRequirements() {

    axios.get("/peruse/listreqs")
      .then((res) => {

        this.setState({ requirements: res.data });

      })

  }
  getReports() {

    axios.get("/peruse/listreps")
      .then((res) => {
        let drafts = []
        let prelimdrafts = res.data.filter(obj => obj.status === "draft");
        if (prelimdrafts.length > 0) {
          drafts = prelimdrafts;
        }
        let reports = []
        let prelim_reports = res.data.filter(obj => obj.status !== "draft");
        if (prelim_reports.length > 0) {
          reports = prelim_reports;
        }
        this.setState({
          reports: reports,
          drafts: drafts
        });
      })


  }
  handleClick(e) {

    this.setState({
      sidePaneOpen: !this.state.sidePaneOpen

    })
  }

  render() {
    const { reports, requirements } = this.state
    if (!reports[0] || !requirements[0]) {
      return <div>Hold tight while items are being fetched...</div>;
    }
    return (


      <Router>
        <div className="container-fluid">

          <header>
            {/* <Navbar fixed="top" bg="light" className="text-center">
              <span className="text-muted text-center">UNCLASSIFIED // CUI</span>
            </Navbar> */}
            <Navbar fixed="top" color="337ab7" bg="dark" className="navbar-dark bg-dark" >

              <NavbarBrand>

                <Link className="text-white navbar-brand" to="/">
                  <h1><font color="37eb34">CASCADE</font></h1>
                </Link>
              </NavbarBrand>

              <Navigation />
              <Navbar.Text>UNCLASSIFIED // CUI</Navbar.Text>
            </Navbar>
          </header>


          <main role="main" className="container-fluid" style={{ marginTop: '1em' }} id="petratings">


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
            <div className="container-fluid">
              {/* <Col style={{border:"1px solid orange"}} md={{ span: 10, offset: 1 }}>
                <Row style={{border:"3px solid pink"}} >
                  <Col xs={{ span: 7, offset: 3 }} md={{ span: 7, offset: 3 }} lg={{ span: 7, offset: 3 }} className=""> */}
              <Switch>
                <Route exact path="/" render={(props) => (
                  <Home />
                )} />
                <Route exact path="/list-reports" render={(props) => (
                  <ListReports reports={this.state.reports} />
                )} />
                {/* <Route path="/list-reports" component={ListReports} /> */}
                <Route path="/list-requirements" render={(props) => (
                  <ListRequirements updateRequirements={this.getRequirements} requirements={this.state.requirements} />
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

                  let uuid = props.location.pathname.replace('/report/', '');
                  let report = this.state.reports.find(obj => obj.uuid === uuid)

                  if (!report) { 
                      report = this.state.drafts.find(obj => obj.uuid === uuid)
                  }

                  let initial_cypher = 'MATCH (n:Report)-[rel*0..2]-(n2) WHERE n.uuid = "'+report.uuid+'" RETURN n, rel, n2'
                  if (report) { 
                    return (
                        <Col md={{ span: 8, offset: 2 }}>
                          <Tabs defaultActiveKey="report">
                            <Tab eventKey="report" title="Report">
                              <ReportView
                                report={report}
                              />
                            </Tab>
                            <Tab eventKey="neo4j" title="Relationships">
                              <ResponsiveNeoGraph
                                containerId={"id0"}
                                neo4jUri={config.neo4j.URI}
                                neo4jUser={config.neo4j.USER}
                                neo4jPassword={config.neo4j.PASS}
                                initial_cypher={initial_cypher}
                              />
                            </Tab>
                          </Tabs>
                        </Col>
                    )
                  }
                  return (
                  <div className="alert">
                      <Alert variant='secondary'>
                          Report {uuid} does not exist.
                      </Alert>
                  </div>
                  )
                }} />
                <Route path="/requirement/:id" render={(props) => {
                  let req_id = props.location.pathname.replace('/requirement/', '');
                  let requirement = this.state.requirements.find(obj => obj.req_id === req_id)
                  let initial_cypher = 'MATCH (n:Requirement)-[rel*0..2]-(n2) WHERE n.uuid = "'+requirement.uuid+'" RETURN n, rel, n2'
                  return (
                      <Col md={{ span: 8, offset: 2 }}>
                        <Tabs defaultActiveKey="requirement">
                          <Tab eventKey="requirement" title="Requirement">
                            <RequirementView
                              requirement={requirement}
                            />
                          </Tab>
                          <Tab eventKey="neo4j" title="Relationships">
                            <ResponsiveNeoGraph
                              containerId={"id0"}
                              neo4jUri={config.neo4j.URI}
                              neo4jUser={config.neo4j.USER}
                              neo4jPassword={config.neo4j.PASS}
                              initial_cypher={initial_cypher}
                            />
                          </Tab>
                        </Tabs>
                      </Col>
                  )
                }} />
                <Route path="/draft/:id" render={(props) => {
                  let uuid = props.location.pathname.replace('/draft/', '');
                  let report = this.state.drafts.find(obj => obj.uuid === uuid)
                  let initial_cypher = 'MATCH (n:Report)-[rel*0..2]-(n2) WHERE n.uuid = "'+report.uuid+'" RETURN n, rel, n2'
                  // let reportPosition = props.location.pathname.replace('/draft/', '');
                  return (
                        <Col md={{ span: 8, offset: 2 }}>
                          <Tabs defaultActiveKey="report">
                            <Tab eventKey="report" title="Report">
                              <DraftView
                                report={report}
                              />
                          </Tab>
                          <Tab eventKey="neo4j" title="Relationships">
                            <ResponsiveNeoGraph
                              containerId={"id0"}
                              neo4jUri={config.neo4j.URI}
                              neo4jUser={config.neo4j.USER}
                              neo4jPassword={config.neo4j.PASS}
                              initial_cypher={initial_cypher}
                            />
                          </Tab>
                        </Tabs>
                      </Col>
                  )
                }} />
              </Switch>
              {/* </Col>
                </Row>
              </Col> */}
            </div>
          </main>

        </div>
      </Router >

    );
  }
}

export default App;
