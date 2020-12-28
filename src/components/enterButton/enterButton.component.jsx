import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const RedirectButton = ({ text, currentUser }) => {

    const [redirection, setRedirection] = useState(false);

    useEffect(() =>{
        if(currentUser){
            setRedirection(true);
        }
    }, [currentUser]);

    if(redirection){
        return <Redirect to='/main' />
    }
    
    return (
        <Button className='mt-2' variant='primary' type='submit'>
            {text}
        </Button>
    );
};

const mapStateToProps = ({ user }) =>({
    currentUser: user.currentUser
});

export default connect(mapStateToProps)(RedirectButton);