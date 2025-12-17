import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

function Photo({source, description}) {

    return(
        <Container>
            <Col xs={6} md={4}>
                <Image src={source} rounded />
            </Col>
        </Container>
    )
}

export default Photo;