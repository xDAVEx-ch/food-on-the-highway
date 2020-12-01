import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Sidebar from '../../components/sidebar/sidebar.component';

const MainPage = () => {
    return(
        <Row className='no-gutters'>
            <Col md={3}><Sidebar /></Col>
            <Col md={9} className='bg-dark'></Col>
        </Row>
    );
}

export default MainPage;