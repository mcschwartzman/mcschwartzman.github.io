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
        },
        {
            "title": "A modular interface for multi-agent Marine Autonomy Simulation",
            "abstract": "Marine autonomy is a rapidly-growing field, with wide-ranging applications in climate health monitoring, ocean exploration, and naval security. As the technologies mature, scaling is typically limited by the rate at which engineers can evaluate configuration parameters and autonomy logic in the field and in simulation. With field time already a scarce commodity, there exists a need for rapidly-repeatable tests in a reliable and flexible digital ocean twin. Such simulated tests need to be executable with a reasonable balance of fidelity, mutability, and speed. This paper presents a simulation framework that focuses on meeting these criteria within a modular, robust, and accessible software package using MIT’s MOOS-IvP middleware. MOOS is a lightweight middleware designed to support interprocess communication in large, multi-application robotic platforms like AUVs (Autonomous Underwater Vehicles) and ASVs (Autonomous Surface Vehicles). Its extension, MOOS-IvP (Interval Programming), was developed around the paradigm of behavior-based autonomy, using high-level objective functions to rapidly and adaptively control speed, heading, and depth. MOOS-IvP also provides a very simple simulator and User-Interface to test these behaviors in faster-than-realtime environments. This empowers users to rapidly spin up test missions with entire fleets of autonomous agents for the purposes of fine-tuning configurations and vehicle dynamics. This paper presents a framework of thin tools along this paradigm which provides a more standard interface to the MOOS-IvP simulator and middleware. This framework, WebMOOS, aims to use modern industry standards in microservice and web architecture, along with common devops techniques like containerization to streamline the sim-to-real pipeline with science users in mind.",
            "published": "Published in IEEE Oceans 2025 Great Lakes",
            "buttons": [
                {
                    "icon": "bi-link",
                    "link": "https://ieeexplore.ieee.org/document/11245128",
                    "description": "Access publication "
                }
            ]
        },
        {
            "title": "An Objective Behavior approach to Tethered Vehicle Coordination",
            "abstract": "When sub-sea field work requires tight synchronization with human operators, such as in deep-sea sampling or offshore inspection, large ROVs are deployed from topside support vessels with long steel tether cables. These tethers not only serve as the ROV’s chief recovery mechanism and power source, but also provide topside human operators with high-speed video and control. The cable’s length necessitates seamless coordination with the vessel crew to ensure surface motion does not affect the ROV’s movement. If the tether is stretched too tight, the heave of the vessel can affect the ROV; if the tether is too slack, the cable may tangle or “hockle”. Applying proactive autonomous control to this multi-vehicle system will reduce human error, improve adaptability, and scale for more complex mission profiles. In this project we present a new autonomous tether behavior along with two simulation environments for evaluating vehicle movement and at-sea dynamics of vehicle pairs. While designing multi-vehicle systems is well-studied in the literature, in heterogeneous contexts, the development of human- robot collaboration at this level requires strict and methodical care.",
            "published": "Published in IEEE Oceans 2026 Monterey",
            "buttons": [
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