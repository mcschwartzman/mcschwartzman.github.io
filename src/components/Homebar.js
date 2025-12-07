import React, { Component } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';


class Homebar extends Component {
    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Projects">Projects</Nav.Link>
                            <Nav.Link href="/gallery">Gallery</Nav.Link>
                            <Nav.Link href="/publications">Publications</Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            Mathew Schwartzman
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Homebar;