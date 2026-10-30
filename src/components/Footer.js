import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Title from './Title';
import Description from './Description';
import { List, Stack } from "react-bootstrap-icons";

function Footer() {
    const [data, setData] = React.useState(null);

    return (
        <Container>
            <Row>
                <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div class="col mb-5">
                    <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                        <svg class="bi me-2" width="40" height="32"></svg>
                    </a>
                    <p class="text-muted">© Mathew Schwartzman 2026</p>
                    </div>

                    <div class="col mb-5">

                    </div>

                    <div class="col mb-5">
                    <h5>Portfolio</h5>
                    <ul class="nav flex-column">
                                                <li class="nav-item mb-2"><a href="https://www.linkedin.com/in/mathew-schwartzman-a37a0670/" class="nav-link p-0 text-muted">LinkedIn</a></li>
                        <li class="nav-item mb-2"><a href="https://www.instagram.com/brineybuilds/" class="nav-link p-0 text-muted">Instagram</a></li>
                        <li class="nav-item mb-2"><a href="https://github.com/mcschwartzman" class="nav-link p-0 text-muted">Github</a></li>
                        <li class="nav-item mb-2"><a href="https://nereid-ocean.com/" class="nav-link p-0 text-muted">NEREID</a></li>
                    </ul>
                    </div>

                    <div class="col mb-5">
                    <h5>Contact</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="mailto:mcschwartzman@outlook.com" class="nav-link p-0 text-muted">mcschwartzman@outlook.com</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">(774) 314-7436</a></li>

                    </ul>
                    </div>
                </footer>
            </Row>
        </Container>
    )
} 

export default Footer;