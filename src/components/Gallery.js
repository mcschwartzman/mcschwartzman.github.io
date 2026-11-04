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
import upsidedown_breathhold from './img/upsidedown_breathhold.jpg';
import piloting_for_jaina from './img/piloting_for_jaina.jpg';
import holding_squashboat from './img/holding_squashboat.jpg';
import deploying_rov_nh from './img/deploying_rov_nh.JPG';
import loading_kayak from './img/loading_kayak.jpg';
import mathew_as_coastx from './img/mathew_as_coastx.jpeg';
import thruster_buster from './img/thruster_buster.jpg';
import rc_from_behind from './img/rc_from_behind.jpg';

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
            "source": holding_squashboat,
            "description": "My friend Ariane and I built an Unmanned Surface Vehicle (USV) out of a pumpkin for halloween!"
        },
        {
            "source": oceans_friends,
            "description": "Research conferences are always great places to meet new friends"
        },
        {
            "source": mathew_clayton_thinking,
            "description": "A fellow WPI alum and I working on autonomous search-and-rescue software"
        },
        {
            "source": upsidedown_breathhold,
            "description": "Here I am practicing my breathhold in a local pool!"
        },
        {
            "source": piloting_for_jaina,
            "description": "Jaina Cipriano, a local filmmaker, directs me to get some underwater footage of a local pond."
        },
        {
            "source": loading_kayak,
            "description": "The nice thing about building a USV out of a children's kayak is it fits in an old prius!"
        },
        {
            "source": rc_from_behind,
            "description": "Some control checks before deploying my Kayak USV on an autonomous mission!"
        },
        {
            "source": mathew_as_coastx,
            "description": "I volunteer with CoastX for ROV piloting, sonar education, and engineering services!"
        },
        {
            "source": simroom_remote_ops,
            "description": "Building out remote-operation software for OECI"
        },
        {
            "source": thruster_buster,
            "description": "Never let a busted thruster mount ruin your day!"
        },
        {
            "source": deploying_rov_nh,
            "description": "Diving in New Hampshire to demonstrate how multibeam sonar works!"
        },
        {
            "source": mathew_on_computer,
            "description": "Nothing like debugging ESCs at 1am."
        }
        
    ]

    render() {
        console.log(this.photos);
        return (
            <Container>
                <br></br>
                <Title name="Photos"/>
                <br></br>
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