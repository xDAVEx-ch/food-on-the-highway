import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EmptyMessage = ({ message }) => (
    <Container
        fluid
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: 'calc(100vh - 87px)' }}
    >
        <Row className='flex-column'>
            <Col>
                <h2 className='text-center'>There's nothing here ¯\_(⊙.☉)_/¯</h2>
                <p className='text-center'>{message}</p>
            </Col>
        </Row>
    </Container>
);

export default EmptyMessage;