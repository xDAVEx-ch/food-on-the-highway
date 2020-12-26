import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import ListGroup from 'react-bootstrap/ListGroup';

const ExitButton = () => {

    const [loggedOut, setLoggedOut] = useState(false);

    const logOut = () => {
        auth.signOut();
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

export default ExitButton;