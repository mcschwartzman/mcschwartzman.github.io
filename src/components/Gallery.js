import React, { Component } from 'react';
import { useState } from 'react';
import Photo from './Photo'
import { Row, Col, Container } from 'react-bootstrap';
import Title from './Title';

import jason_pose from './img/jason_pose.jpg';
import jason_closeup from './img/jason_closeup.jpg';
import aiff2025_panel from './img/aiff2025_panel.jpg';
import pool_blue_rov from './img/pool_blue_rov.jpeg';
import welding_nap from './img/welding_nap.jpeg';
import freedive_group from './img/freedive_group.jpeg';
import maverick_laptop from './img/maverick_laptop.jpeg';
import mathew_charlie_presentation from './img/mathew_charlie_presentation.png';
import mathew_on_computer from './img/mathew_on_computer.jpg';
import laptop_heart_pond from './img/laptop_heart_pond.jpeg';
import simroom_remote_ops from './img/simroom_remote_ops.png';
import walden_ice_dive from './img/walden_ice_dive.jpeg';
import oceans_friends from './img/oceans_friends.jpg';
import mathew_clayton_thinking from './img/mathew_clayton_thinking.png';



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
        },
        {
            "source": pool_blue_rov,
            "description": "Poolside testing of my new Cerulean Multibeam"
        },
        {
            "source": welding_nap,
            "description": "A hard-earned break after learning to weld"
        },
        {
            "source": freedive_group,
            "description": "After diving with some friends down on Cape Cod"
        },
        {
            "source": maverick_laptop,
            "description": "Testing out my new rendezvous behavior in Boston harbor"
        },
        {
            "source": mathew_charlie_presentation,
            "description": "After presenting my new simulation framework at Oceans 2025 in chicago"
        },
        {
            "source": laptop_heart_pond,
            "description": "Shoreside testing beats coding in an office, but you can't see your screen as well"
        },
        {
            "source": simroom_remote_ops,
            "description": "Building out remote-operation software for OECI"
        },
        {
            "source": oceans_friends,
            "description": "Research conferences are always great places to meet new friends"
        },
        {
            "source": mathew_clayton_thinking,
            "description": "A fellow WPI alum and I working on autonomous search-and-rescue software"
        }

    ]

    render() {
        console.log(this.photos);
        return (
            <Container>
                <Row>
                    <Title name="Photos"/>
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