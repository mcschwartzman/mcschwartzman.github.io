import React, { Component } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';


class Homebar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Mathew Schwartzman</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/#/resume">Resume</Nav.Link>
                            <Nav.Link href="/#/gallery">Photos</Nav.Link>
                            <Nav.Link href="/#/publications">Publications</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Homebar;