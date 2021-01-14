import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button'

import PositionsMap from '../../components/positionsMap/positionsMap.container';
import ColorPanel from '../../components/colorPanel/colorPanel.component';

const SelectPositions = () =>(
    <Container
        fluid
        className='d-flex flex-column justify-content-center'
        style={{ minHeight: 'calc(100vh - 87px)' }}
    >
        <h2 className='text-center my-3'>Choose your positions</h2>
        <Row className='justify-content-center'>
            <Col xl='7' className='d-flex justify-content-center'>
                <PositionsMap />
            </Col>
            <Col xl='3' className='d-flex flex-column align-items-center'>
                <ColorPanel />
            </Col>
        </Row>
        <Row className='my-4'>
            <Col className='d-flex justify-content-center'>
                <Button variant='primary'>Save</Button>
            </Col>
        </Row>
    </Container>
);

export default SelectPositions;