import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Title from './Title';
import {render} from 'react-dom';
import { useState } from 'react';

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

    function parseRSS(rssText) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(rssText, 'text/xml');
        
        const items = xmlDoc.getElementsByTagName('item');
        const feedItems = [];

        for (let i = 0; i < items.length; i++) {
            const title = items[i].getElementsByTagName('title')[0].textContent;
            const link = items[i].getElementsByTagName('link')[0].textContent;
            const pubDate = items[i].getElementsByTagName('pubDate')[0]?.textContent;

            const contentEncoded = parser.parseFromString(items[i].getElementsByTagName('content:encoded')[0]?.textContent, 'text/html').documentElement.textContent;
            const image = items[i].getElementsByTagName('enclosure')[0].getAttribute('url');
            console.log(image);
            feedItems.push({ title, link, pubDate, contentEncoded, image});
        }

        return feedItems;
    }

    fetchRSSFeed(CORS_PROXY, FEED_URL);

    return (
        <Container>
            <br></br>
            <Title name="Substack Blog" />
            <br></br>
            <Row>
                {
                    feed.map(function(item){
                        return(
                            <Card>
                                <Card.Img src={item.image} variant="bottom" />
                                <Card.Body>
                                    <Card.Title>
                                        {item.title}
                                    </Card.Title>
                                    <Card.Text>
                                        {item.contentEncoded}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </Row>
        </Container>
    );
}

export default Blog;