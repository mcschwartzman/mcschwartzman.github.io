import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Title from './Title';
import {render} from 'react-dom';
import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CORS_PROXY = "https://stormy-mesa-81663-12647a6a2855.herokuapp.com/";
const FEED_URL = "brineybuilds.substack.com/feed";

function Blog() {
    const [feed, setFeed] = useState([]);

    async function fetchRSSFeed(proxyUrl, rssUrl) {
        try {
            const response = await fetch(
                `${proxyUrl}${rssUrl}`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const rssText = await response.text();
            const xmlDoc = parseRSS(rssText);
            setFeed(xmlDoc);
        } catch (error) {
            console.error('Error fetching RSS feed:', error);
        }
    }

    useEffect(() => {
        fetchRSSFeed(CORS_PROXY, FEED_URL);
    }, []);
    

function parseRSS(rssText) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rssText, 'text/xml');
    console.log(xmlDoc);
    
    const items = xmlDoc.getElementsByTagName('item');
    const feedItems = [];
    console.log(items.length);

    for (let i = 0; i < items.length; i++) {
        const title = items[i].getElementsByTagName('title')[0].textContent;
        const link = items[i].getElementsByTagName('link')[0].textContent;
        const pubDate = items[i].getElementsByTagName('pubDate')[0]?.textContent;
        const description = parser.parseFromString(items[i].getElementsByTagName('description')[0]?.textContent, 'text/html').documentElement.textContent;
        const contentEncoded = parser.parseFromString(items[i].getElementsByTagName('content:encoded')[0]?.textContent, 'text/html').documentElement.textContent;
        const image = items[i].getElementsByTagName('enclosure')[0].getAttribute('url');
        feedItems.push({ title, link, pubDate, description, contentEncoded, image});
    }

    return feedItems;
}

    return (
        <Container>
            <br></br>
            <Title name="Blog" />
            <br></br>
            <Row>
                {
                    feed.map(function(item){
                        return(
                            <Row>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            {item.pubDate.substring(0, item.pubDate.length - 12)} - {item.title}
                                        </Card.Title>
                                        <Card.Subtitle>
                                            {item.description}
                                        </Card.Subtitle>
                                        <br></br>
                                        <Card.Text>
                                            {item.contentEncoded}
                                        </Card.Text>
                                        <Button variant="primary" href={item.link}>Read on Substack</Button>
                                    </Card.Body>
                                    <Container style={{width:'100%', marginBottom:20, height:200, overflow:'hidden', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                                        <Card.Img src={item.image} style={{position: 'relative', margin: '-50% auto', verticalAlign:'middle', height:'auto', width: '100%'}} variant="bottom" />
                                    </Container>
                                </Card>
                            </Row>
                        )
                    })
                }
            </Row>
        </Container>
    );
}

export default Blog;