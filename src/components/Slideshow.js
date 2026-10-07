import React, { Component } from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Workspace from './img/workspace.jpg';
import jason_pose from './img/jason_pose.jpg';
import Image from 'react-bootstrap/Image';


class Slideshow extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <Image src={Workspace} fluid/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>This is the text for the first slide</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={jason_pose} fluid/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>This is the text for the first slide</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
    
}

export default Slideshow;