import React, { Component } from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import pool_blue_rov from './img/pool_blue_rov.jpeg';
import jason_pose from './img/jason_pose.jpg';
import welding_nap from './img/welding_nap.jpeg';
import freedive_group from './img/freedive_group.jpeg';
import maverick_laptop from './img/maverick_laptop.jpeg';


class Slideshow extends Component {
    render() {
        return (
            <Carousel data-bs-theme="light">
                <Carousel.Item>
                    <Image src={maverick_laptop} fluid/>
                    <Carousel.Caption>
                        <h3>Software Engineer</h3>
                        <p>Coding autonomous behaviors and ocean AI</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={pool_blue_rov} fluid/>
                    <Carousel.Caption>
                        <h3>ROV Pilot</h3>
                        <p>Beats coding in an office</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={jason_pose} fluid/>
                    <Carousel.Caption>
                        <h3>At-Sea Crewmember</h3>
                        <p>Deep-sea operations add unique complexities</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={welding_nap} fluid/>
                    <Carousel.Caption>
                        <h3>Mechanical Engineer</h3>
                        <p>Always learning new skills, like welding</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={freedive_group} fluid/>
                    <Carousel.Caption>
                        <h3>Free Diver</h3>
                        <p>I'll get in the water, one way or the other</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
    
}

export default Slideshow;