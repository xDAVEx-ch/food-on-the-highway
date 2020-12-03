import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import './sidebar.styles.scss';

const Sidebar = () => (
    <>
        <div class='bg-light border-right' id='sidebar-wrapper'>
            <p className='sidebar-heading lead'>Food On the Highway Event</p>
            <ListGroup variant='flush'>
                <ListGroup.Item action>My ticket</ListGroup.Item>
                <ListGroup.Item action>Buy ticket</ListGroup.Item>
                <ListGroup.Item action>Participants</ListGroup.Item>
                <ListGroup.Item action>Exit</ListGroup.Item>
            </ListGroup>
        </div>
    </>
);

export default Sidebar;