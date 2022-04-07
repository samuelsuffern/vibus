import React from "react";
import { Navbar, NavDropdown } from 'react-bootstrap';

// create navbar bootstrap component
const LNavbar = ({ title }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavDropdown title="Seleccione la parada deseada" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" onClick={console.log("Clicking")}>C1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default LNavbar;

