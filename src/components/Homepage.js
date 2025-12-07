import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Homebar from './Homebar';
import Gallery from './Gallery';
import Title from './Title';
import Description from './Description';
import Module1 from './Module1';

function Homepage() {
    const [data, setData] = React.useState(null);

    return (
        <div>
            <Row>
                <Col md={8}>
                    <Container className="p-0">
                        <Row>
                            <Title name="Gallery"/>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Gallery />
                            </Col>
                        </Row>
                        </Container>
                    </Col>
                    <Col>

                    </Col>
                    </Row>
        </div>
    )
} 

export default Homepage;