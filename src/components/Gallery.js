import React, { Component } from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Workspace from './img/workspace.jpg'
import jason_pose from './img/jason_pose.jpg'
import Photo from './Photo'


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
            <div>
                {
                this.photos.map(function(photo){
                    return(
                        <Photo source={photo.source} description={photo.description} />
                    )
                })
                }
            </div>
        )
    }
    
}

export default Gallery;