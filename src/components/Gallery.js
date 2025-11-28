import React, { Component } from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Workspace from './img/workspace.jpg'
import jason_pose from './img/jason_pose.jpg'


class Gallery extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img src={Workspace} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>This is the text for the first slide</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={jason_pose} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>This is the text for the first slide</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
    
}

export default Gallery;