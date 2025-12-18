import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
import brestPresentation from './files/brestPresentation.pdf';
import Title from './Title'

function Publications() {

    let my_publications = [
        {
            "title": "Toward Crowd-Sourced Technologies for Global Citizen-Science Water Analysis",
            "abstract": "Marine sensing technologies are often prohibitively expensive to all but the most well-funded organizations, including established oceanographic institutions and defense organizations. These groups are typically only able to dedicate these unique tools to high-profile projects affiliated with their funding sources, leaving a significant gap between young, underfunded scientists and research projects of potentially high community value. Many of these individuals lack the opportunity to work with the aforementioned organizations due to a variety of reasons. Distance from coastal areas, isolation due to cost of living, or simply the complex nuances of marine science and politics can discourage budding researchers, resulting in countless missed opportunities for new research in the looming issues of climate monitoring ocean conservation. This paper highlights the potential impact of these researchers, and proposes the solicitation of their support through a citizen-science initiative, powered by open-source technologies available (and in some cases, free) to average consumers. The accessibility of software libraries like ROS (Robot Operating System) and hardware solutions like Arduino empower the design of ultra-low-cost sensors that can be deployed independently or easily networked into larger systems like AUVs, ROVs, moorings, or even cloud-based databases. As a case study of these principles, we present designs for a simple low-cost CTD (Conductivity, Temperature, and Depth) sensor to be used for coastal and inland water monitoring, along with a toolset to empower citizen scientists to monitor the health of their local bodies of water.",
            "published": "Published in IEEE Oceans 2025 Brest, France",
            "buttons": [
                {
                    "icon": "bi-link",
                    "link": "https://ieeexplore.ieee.org/document/11104355",
                    "description": "Access publication "
                },
                {
                    "icon": "bi-download",
                    "link": brestPresentation,
                    "description": "Download presentation "
                }
            ]
        }
    ]

    return (
        <Container>
            <Row>
                <Title name="Publications"/>
            </Row>
            <Row>
                {my_publications.map((publication) =>(
                    <Col md={5} key={publication.title}>
                        <Card>
                        <Card.Header>{publication.published}</Card.Header>
                            <Card.Body>
                                <Card.Title>{publication.title}</Card.Title>
                                <br></br>
                                <Card.Subtitle>Abstract</Card.Subtitle>
                                <Card.Text>
                                    {publication.abstract}
                                </Card.Text>
                                {publication.buttons.map((button) =>(
                                    <Button variant="dark" href={button.link} key={button.description}>
                                        {button.description}
                                        <i className={button.icon}></i>
                                    </Button>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Publications;