import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TicketDetails from '../../components/ticketDetails/ticketDetails.component';

const BuyTicket = () =>(
    <Container style={{ padding: '15px 30px' }}>
        <Row className='mb-3'>
            <Col><h2 className='mb-4'>Choose your ticket</h2></Col>
        </Row>
        <Row className='mb-3'>
            <Col><TicketDetails type='basic' buttonText='Buy'/></Col>
        </Row>
        <Row className='mb-3'>
            <Col><TicketDetails type='platinum' buttonText='Buy'/></Col>
        </Row>
        <Row className='mb-3'>
            <Col><TicketDetails type='golden' buttonText='Buy'/></Col>
        </Row>
    </Container>
);

export default BuyTicket;