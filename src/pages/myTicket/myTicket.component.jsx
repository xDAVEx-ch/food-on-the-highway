import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UserTicket from '../../components/userTicket/userTicket.component';

const userTicket = true;

const MyTicket = () => (
    <>
        {
            userTicket
                ? (
                    <Container
                        className='d-flex'
                        style={{ minHeight: 'calc(100vh - 87px)', padding: '20px 20px 50px 50px' }}
                    >
                        <UserTicket />
                    </Container>
                )
                : (
                    <Container
                        fluid
                        className='d-flex align-items-center justify-content-center'
                        style={{ minHeight: 'calc(100vh - 87px)' }}
                    >
                        <Row className='flex-column'>
                            <Col>
                                <h2 className='text-center'>There's no tickets here ¯\_(⊙.☉)_/¯</h2>
                                <p className='text-center'>Go. Buy one. Enjoy the pleasure of Food on The Highway</p>
                            </Col>
                        </Row>
                    </Container>
                )
        }

    </>
);

export default MyTicket;

/**userTicket
            ? (
                <Container
                    fluid
                    className='d-flex'
                    style={{ minHeight: 'calc(100vh - 87px)' }}
                >
                    <UserTicket />
                </Container>
            )
            : (
                <Container
                    fluid
                    className='d-flex align-items-center justify-content-center'
                    style={{ minHeight: 'calc(100vh - 87px)' }}
                >
                    <Row className='flex-column'>
                        <Col>
                            <h2 className='text-center'>There's no tickets here ¯\_(⊙.☉)_/¯</h2>
                            <p className='text-center'>Go. Buy one. Enjoy the pleasure of Food on The Highway</p>
                        </Col>
                    </Row>
                </Container>
            )
    } */