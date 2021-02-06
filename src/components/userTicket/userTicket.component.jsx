import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TicketDetails from '../ticketDetails/ticketDetails.component';
import WarningModal from '../modal/modal.component';

import ticketData from '../../tickets.data';
import { updateTicketList } from '../../redux/user/user.actions';
import { updateUserProfileDocument } from '../../firebase/firebase.utils';

import './userTicket.styles.scss';

const UserTicket = ({ user, ticketType, updateTicketList }) => {

    const [ modalVisibility, setModalVisibility ] = useState(false);
    const [ agreeUpdate, setAgreeUpdate ] = useState(false);

    const handleCancel = () => setModalVisibility(false);
    const handleAccept = () => {
        setAgreeUpdate(true);
        setModalVisibility(false);
    }

    const modalText = {
        body: 'If you delete your ticket, your money will be refund to your account. However, you will lost the oportunity to enjoy our event.',
        title: 'Keep in mind!'
    };

    useEffect(() =>{
        if(agreeUpdate){
            updateTicketList({...user, list: []});
            updateUserProfileDocument(user, 'list', []);
            setAgreeUpdate(false);
        }
    },[agreeUpdate, ticketType, updateTicketList, user]);

    return (
        <>
            <Row className='mb-3'>
                <Col>
                    <h3 className='mb-4'>My ticket</h3>
                    <div className='ticket-container'>
                        <img
                            src={ticketData[ticketType].ticketUrl}
                            alt={ticketData[ticketType].altText}
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className='mb-4'>Details of my ticket</h2>
                    <TicketDetails 
                        type={ticketType} 
                        buttonText='Delete' 
                        setWarning={setModalVisibility} />
                    <WarningModal
                        title={modalText.title}
                        body={modalText.body}
                        show={modalVisibility}
                        acceptFunc={handleAccept}
                        cancelFunc={handleCancel}
                    />
                </Col>
            </Row>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    updateTicketList: (newTicket) => dispatch(updateTicketList(newTicket))
});

const mapStateToProps = ({ user: {currentUser} }) => ({
    user: currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTicket);