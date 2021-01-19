import React from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UserTicket from '../../components/userTicket/userTicket.component';
import EmptyMessage from '../../components/emptyMessage/emptyMessage.component';

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
                        <EmptyMessage message='Go. Buy one. Enjoy the pleasure of Food on The Highway' />
                    )
            }

        </>
    )
};

const mapStateToProps = ({ user: { currentUser } }) => ({
    user: currentUser
});

export default connect(mapStateToProps)(MyTicket);