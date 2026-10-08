import React, { Component } from 'react';
import { useState } from 'react';
import Photo from './Photo'
import { Row, Col, Container } from 'react-bootstrap';
import Title from './Title';

import resume_pdf from './files/resume_professional_first.pdf';


class Gallery extends Component {

    render() {
        return (
        <Container>
            <Row>
                <Title name="Resume"/>
            </Row>
            <Row>
                <Col>
                    <object data={resume_pdf} type="application/pdf" width="100%" height="1000px">
                        <p>Looks a little murky here, here's the resume <a href={resume_pdf}>link!</a></p>
                    </object>
                </Col>
            </Row>
        </Container>
            
        )
    }
    
}

export default Gallery;