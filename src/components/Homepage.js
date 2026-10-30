import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Homebar from './Homebar';
import Slideshow from './Slideshow';
import Title from './Title';
import Description from './Description';

function Homepage() {
    const [data, setData] = React.useState(null);

    return (
        <Container>
            <br></br>
            <Title name="Engineer | Explorer | Educator"/>
            <br></br>
            <Row>
                <Col md={1}></Col>
                <Col>
                    <Slideshow />
                </Col>
                <Col md={1}></Col>
            </Row>
        </Container>
    )
} 

export default Homepage;