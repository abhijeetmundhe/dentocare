import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import AppHistory from './AppHistory';

const AppNavigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navigation-bar">
                    <Nav.Link href="/">Home</Nav.Link>
                    <button className='nav-bar-btn-appointments' 
                    onClick={() => AppHistory.push('/Appointments')}>Appointments</button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(AppNavigation);