import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import './sidebar.styles.scss';

const Sidebar = () => (
    <>
        <div className='bg-secondary border-right' id='sidebar-wrapper'>
            <p className='sidebar-heading lead'>Food On the Highway Event</p>
            <ListGroup variant='flush'>
                <ListGroup.Item className='bg-secondary' action>My ticket</ListGroup.Item>
                <ListGroup.Item className='bg-secondary' action>Buy ticket</ListGroup.Item>
                <ListGroup.Item className='bg-secondary' action>Participants</ListGroup.Item>
                <ListGroup.Item className='bg-secondary' action>Exit</ListGroup.Item>
            </ListGroup>
        </div>
    </>
);

export default Sidebar;