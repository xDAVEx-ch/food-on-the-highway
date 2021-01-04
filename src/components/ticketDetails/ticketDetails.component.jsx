import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import WarningModal from '../modal/modal.component';

import ticketData from '../../tickets.data';
import { updateTicketList } from '../../redux/user/user.actions';
import { updateUserProfileDocument } from '../../firebase/firebase.utils';

const TicketDetails = ({ user, type: ticketType, updateTicketList, buttonText }) => {

    const [ modalVisibility, setModalVisibility ] = useState(false);
    const [ agreeUpdate, setAgreeUpdate ] = useState(false);

    const handleClose = () => setModalVisibility(false);
    const handlePermission = () => {
        setAgreeUpdate(true);
        setModalVisibility(false);
    }

    const bodyText = 'You can only own one ticket in your account. If you buy this one, any old ticket will be changed by the new one.';
    const titleText = 'Important!'

    useEffect(() =>{
        if(agreeUpdate){
            updateTicketList([ticketType]);
            console.log(user.currentUser);
            updateUserProfileDocument(user.currentUser, 'ticketList', [ticketType]);
            setAgreeUpdate(false);
        }
    },[agreeUpdate, ticketType, updateTicketList, user]);

    return (
        <div>
            <Table bordered responsive style={{ width: '700px' }}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Details</th>
                        <th>Expiration</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ticketData[ticketType].title}</td>
                        <td>{ticketData[ticketType].price}</td>
                        <td>{ticketData[ticketType].details}</td>
                        <td>21th March</td>
                        <td>
                            <Button 
                                variant='primary' 
                                onClick={() => setModalVisibility(true)}
                            >
                                {buttonText}
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <WarningModal 
                title={titleText} 
                body={bodyText} 
                show={modalVisibility}
                acceptFunc={handlePermission}
                cancelFunc={handleClose}
            />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    updateTicketList: (newTicket) => dispatch(updateTicketList(newTicket))
});

const mapStateToProps = ({ user: {currentUser} }) => ({
    user: currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetails);