import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown } from "react-bootstrap";

const Navigation = (props) => (
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

            <NavItem>
                <Nav.Link className="text-white" href="/list-reports"><h4>List Reports</h4></Nav.Link>
            </NavItem>
            <NavItem>
                <Nav.Link className="text-white" href="/list-requirements"><h4>List Requirements</h4></Nav.Link>
            </NavItem>
            <NavItem>
                <Nav.Link className="text-white" href="/add-report"><h4>Add Report</h4></Nav.Link>
            </NavItem>
            <NavItem>
                <Nav.Link className="text-white" href="/add-requirement"><h4>Add Requirement</h4></Nav.Link>
            </NavItem>
            <NavItem>
                <Nav.Link className="text-white" href="/list-drafts"><h4>Draft Queue</h4></Nav.Link>
            </NavItem>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
        </Nav>

    </Navbar.Collapse>

);

export default Navigation;