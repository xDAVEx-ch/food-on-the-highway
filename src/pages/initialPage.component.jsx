import React from 'react';

import initialPageBanner from '../assets/initial-page-banner.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from '../components/header/header.component';
import CountDown from '../components/countdown/countDown.component';

/*
TODO: There's a little scroll in reduce sizes due to height changes
    - Create an external scss file and add media queries to eliminate
*/
const backgroundStyles = {
    background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
                url(${initialPageBanner}) center / cover`,
    height: '85vh',
    overflow: 'hidden'
};

const InitialPage = () => {
    return (
        <>
            <Header />
            <Container
                className='d-flex flex-column justify-content-center'
                fluid
                style={backgroundStyles}
            >
                <Row>
                    <Col>
                        <h1 className='text-light text-center'>Food on the Highway Event</h1>
                        <p className='text-light lead text-center'>San Pedro, Costa Rica</p>
                    </Col>
                </Row>
                <CountDown />
            </Container>
        </>
    )
}

export default InitialPage;