import React from 'react';

import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';

import PositionsMap from '../../components/positionsMap/positionsMap.component';

const MyPositions = () => (
    <Container
        fluid
        className='d-flex flex-column align-items-center justify-content-center'
        style={{ minHeight: 'calc(100vh - 87px)' }}
    >
        <h3 className='mb-4 text-center'>See your foodtrucks' positions</h3>
        <PositionsMap />
        <Button variant='primary' className='mt-4'>New locations</Button>
    </Container>
);

export default MyPositions;