import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TicketDetails from '../../components/ticketDetails/ticketDetails.component';
import WarningModal from '../../components/modal/modal.component';

import { updateTicketList } from '../../redux/user/user.actions';
import { updateUserProfileDocument } from '../../firebase/firebase.utils';

const BuyTicket = ({ user, updateTicketList }) => {

    const [ modalVisibility, setModalVisibility ] = useState(false);
    const [ agreeUpdate, setAgreeUpdate ] = useState(false);
    const [ ticketType, setTicketType ] = useState([]);

    const handleCancel = () => setModalVisibility(false);
    const handleAccept = () => {
        setAgreeUpdate(true);
        setModalVisibility(false);
    }

    const modalText = {
        body: 'You can only own one ticket in your account. If you buy a new one, any old ticket will be replaced.',
        title: 'Important!'
    };

    useEffect(() =>{
        if(agreeUpdate){
            updateTicketList(ticketType);
            updateUserProfileDocument(user.currentUser, 'ticketList', ticketType);
            setAgreeUpdate(false);
        }
    },[agreeUpdate, ticketType, updateTicketList, user]);

    return (
        <Container style={{ padding: '15px 30px' }}>
            <Row className='mb-3'>
                <Col><h2 className='mb-4'>Choose your ticket</h2></Col>
            </Row>
            <Row className='mb-3'>
                <Col>
                    <TicketDetails 
                        type='basic'
                        buttonText='Buy' 
                        setWarning={setModalVisibility} 
                        setTicketType={setTicketType}/>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col>
                    <TicketDetails 
                        type='platinum'
                        buttonText='Buy' 
                        setWarning={setModalVisibility} 
                        setTicketType={setTicketType}/>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col>
                    <TicketDetails 
                        type='golden'
                        buttonText='Buy' 
                        setWarning={setModalVisibility} 
                        setTicketType={setTicketType}/>
                </Col>
            </Row>

            <WarningModal
                title={modalText.title}
                body={modalText.body}
                show={modalVisibility}
                acceptFunc={handleAccept}
                cancelFunc={handleCancel}
            />
        </Container>
        
    )
};

const mapDispatchToProps = (dispatch) => ({
    updateTicketList: (newTicket) => dispatch(updateTicketList(newTicket))
});

const mapStateToProps = ({ user: {currentUser} }) => ({
    user: currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyTicket);