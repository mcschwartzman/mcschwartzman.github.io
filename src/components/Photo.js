import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from "react-bootstrap/Modal";
import { useState } from 'react';

function Photo({source, description}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Container>
            <Col xs={6} md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={source} onClick={handleShow} />
                </Card>
            </Col>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={source} rounded fluid/>
                </Modal.Body>
                <Modal.Footer>
                    <p>{description}</p>
                </Modal.Footer>

            </Modal>

        </Container>

    )
}

export default Photo;