import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TicketDetails from '../ticketDetails/ticketDetails.component';

import ticketData from '../../tickets.data';

const UserTicket = () => (
    <>
        <Row className='mb-3'>
            <Col>
                <h3 className='mb-4'>My ticket</h3>
                <div style={{ width: '400px'}}>
                    <img
                        src={ticketData.basic.ticketUrl}
                        alt={ticketData.basic.altText}
                        style={{ width: '100%'}}
                    />
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <h2 className='mb-4'>Details of my ticket</h2>
                <TicketDetails type='basic' buttonText='Change'/>
            </Col>
        </Row>
    </>
)

export default UserTicket;