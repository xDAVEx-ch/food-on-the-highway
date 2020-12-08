import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Sidebar from '../../components/sidebar/sidebar.component';
import MyTicket from '../../pages/myTicket/myTicket.component';

import './mainPage.styles.scss';

const MainPage = () => {
    return(
        <Row className='no-gutters'>
            <Col md={3} sm='auto' xs='auto'><Sidebar /></Col>
            <Col xs={true}><MyTicket id='page-content-wrapper'/></Col>
        </Row>
    );
}

export default MainPage;