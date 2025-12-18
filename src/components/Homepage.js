import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Homebar from './Homebar';
import Slideshow from './Slideshow';
import Title from './Title';
import Description from './Description';

function Homepage() {
    const [data, setData] = React.useState(null);

    return (
        <div>
            <Row>
                <Col md={8}>
                    <Container className="p-0">
                        <Row>
                            <Col md={12}>
                                <Slideshow />
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