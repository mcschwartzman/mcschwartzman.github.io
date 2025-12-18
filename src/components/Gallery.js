import React, { Component } from 'react';
import { useState } from 'react';
import Workspace from './img/workspace.jpg'
import jason_pose from './img/jason_pose.jpg'
import Photo from './Photo'
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Title from './Title';


class Gallery extends Component {

    photos = [
        {
            "source": jason_pose,
            "description": "This is me posing with Jason"
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
                            <Photo source={photo.source} description={photo.description} key={photo.description} />
                        )
                    })
                    }
                </Row>
            </Container>
        )
    }
    
}

export default Gallery;