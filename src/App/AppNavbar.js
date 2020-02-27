import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const AppNavigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navigation-bar">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Appointments">Appointments</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(AppNavigation);