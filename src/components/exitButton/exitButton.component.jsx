import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import { logOutStart } from '../../redux/user/user.actions';

import ListGroup from 'react-bootstrap/ListGroup';

const ExitButton = ({ logOutStart }) => {

    const [loggedOut, setLoggedOut] = useState(false);

    const logOut = () => {
        logOutStart();
        setLoggedOut(true);
    };

    if(loggedOut){
        return <Redirect to='/' />
    }

    return (
        <ListGroup.Item
            id='exit-button'
            className='bg-secondary'
            action
            onClick={logOut}
        >
            Exit
        </ListGroup.Item>
    );
};

const mapDispatchToProps = (dispatch) =>({
    logOutStart: () => dispatch(logOutStart())
});

export default connect(null, mapDispatchToProps)(ExitButton);