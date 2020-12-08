import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TicketDetails from '../ticketDetails/ticketDetails.component';

import ticketData from '../../tickets.data';

const UserTicket = () => (
    <Row className='flex-column'>
        <Col>
            <h3 className='mb-4'>My ticket</h3>
            <img
                src={ticketData.basic.ticketUrl}
                alt={ticketData.basic.altText}
                style={{ width: '450px'}}
            />
        </Col>
        <Col>
            <h2 className='mb-4'>Details of my ticket</h2>
            <TicketDetails type='basic' buttonText='Change'/>
        </Col>
    </Row>
)

export default UserTicket;