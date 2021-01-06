import React from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UserTicket from '../../components/userTicket/userTicket.component';

import './myTicket.styles.scss';

const MyTicket = ({ user }) => {

    const userTicket = user.currentUser.ticketList[0];

    return (
        <>
            {
                userTicket
                    ? (
                        <Container id='page-content-wrapper'
                            style={{ minHeight: 'calc(100vh - 87px)' }}
                        >
                            <UserTicket ticketType={userTicket} />
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
    )
};

const mapStateToProps = ({ user: { currentUser } }) => ({
    user: currentUser
});

export default connect(mapStateToProps)(MyTicket);