import React, { Component } from 'react';
import { useState } from 'react';
import Photo from './Photo'
import { Row, Col, Container } from 'react-bootstrap';
import Title from './Title';

import jason_pose from './img/jason_pose.jpg';
import jason_closeup from './img/jason_closeup.jpg';
import aiff2025_panel from './img/aiff2025_panel.jpg';




class Gallery extends Component {

    photos = [
        {
            "source": aiff2025_panel,
            "description": "Participating in the Oceans Panel at AIFF 2025"
        },
        {
            "source": jason_closeup,
            "description": "Posing with ROV Jason after my 4am-8am watch"
        },
        {
            "source": jason_pose,
            "description": "Posing with ROV Jason out at the Juan de Fuca ridge"
        }
    ]

    render() {
        console.log(this.photos);
        return (
            <Container>
                <Row>
                    <Title name="Gallery"/>
                </Row>
                <Row>
                    {
                    this.photos.map(function(photo){
                        return(
                            <Col>
                                <Photo source={photo.source} description={photo.description} key={photo.description} />
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container>
        )
    }
    
}

export default Gallery;