import React from 'react';

import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';

import SIDEBAR_DATA from './sidebarData';
import './sidebar.styles.scss';

const Sidebar = ({ match }) => (
    <>
        <div className='bg-secondary border-right' id='sidebar-wrapper'>
            <p className='sidebar-heading lead'>Food On the Highway Event</p>
            <ListGroup variant='flush'>
                {
                    SIDEBAR_DATA.consumer.map((opt) =>{
                        return (
                            <ListGroup.Item key={opt.id} className='bg-secondary' action>
                                <Link to={`${match.url}${opt.path}`}>{opt.text}</Link>
                            </ListGroup.Item>
                        )
                    })
                }
                <ListGroup.Item className='bg-secondary' action>Exit</ListGroup.Item>
            </ListGroup>
        </div>
    </>
);

export default withRouter(Sidebar);