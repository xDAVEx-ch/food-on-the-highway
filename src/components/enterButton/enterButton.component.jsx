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
    
    /*const [redirection, setRedirection] = useState(false);

    useEffect(() => {
        if (validation) {
            console.log(validation);
            setRedirection(false);
        } else {
            setRedirection(true);
        }
    }, [validation]);

    const redirect = () =>{
        if(redirection){
            return <Redirect to='/main' />
        }
    }*/
    
    return (
        <Button variant='primary' type='submit'>
            {text}
        </Button>
    );
};

const mapStateToProps = ({ user }) =>({
    currentUser: user.currentUser
});

export default connect(mapStateToProps)(RedirectButton);