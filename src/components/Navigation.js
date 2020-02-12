import React from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap";

const Navigation = (props) => (
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

            <NavItem>
                <Nav.Link href="/list-reports">List Reports</Nav.Link>
            </NavItem>
            <NavItem>
                <Nav.Link href="/list-requirements">List Requirements</Nav.Link>
            </NavItem>
            <NavItem>
                <Nav.Link href="/add-report">Add Report</Nav.Link>
            </NavItem>
            <NavItem>
                <Nav.Link href="/add-requirement">Add Requirement</Nav.Link>
            </NavItem>
            <NavItem>
                <Nav.Link href="/list-drafts">Draft Queue</Nav.Link>
            </NavItem>
            <NavItem>
                <Nav.Link href="/collection-management">Collection Management</Nav.Link>
            </NavItem>
            <NavItem>
                <Nav.Link href="/req-cross-walk">Requirement Crosswalk</Nav.Link>
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