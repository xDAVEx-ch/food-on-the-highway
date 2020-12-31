import React from 'react';

import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ListGroup from 'react-bootstrap/ListGroup';

import ExitButton from '../exitButton/exitButton.component';

import SIDEBAR_DATA from './sidebarData';
import './sidebar.styles.scss';

const Sidebar = ({ match, user }) => {

    return (
        <>
            <div 
                className='bg-secondary border-right'
                id='sidebar-wrapper'
            >
                <p className='sidebar-heading lead'>Food On the Highway Event</p>
                <ListGroup variant='flush'>
                    {
                        SIDEBAR_DATA[user.currentUser.type].map((opt) => {
                            return (
                                <ListGroup.Item key={opt.id} className='bg-secondary' action>
                                    <Link to={`${match.url}${opt.path}`}>{opt.text}</Link>
                                </ListGroup.Item>
                            )
                        })
                    }
                    
                <ExitButton />
                </ListGroup>
            </div>
        </>
    );
};

const mapStateToProps = ({ user: {currentUser} }) =>({
    user: currentUser
});

export default connect(mapStateToProps)(withRouter(Sidebar));