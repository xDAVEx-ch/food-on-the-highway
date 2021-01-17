import React from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import UserPositionsList from '../../components/userPositionsList/userPositionsList.component';

const MyPositions = ({ positionsList }) => {

    const onePosition = positionsList[0];
    return (
        <>
            {
                onePosition
                    ? (
                        <Container
                            fluid
                            className='d-flex flex-column align-items-center justify-content-center'
                            style={{ minHeight: 'calc(100vh - 87px)' }}
                        >
                            <h3 className='mb-4 text-center'>See your foodtrucks' positions</h3>
                            <UserPositionsList />
                            <Button variant='primary' className='mt-4'>New locations</Button>
                        </Container>
                    )
                    : (
                        <Container
                            fluid
                            className='d-flex align-items-center justify-content-center'
                            style={{ minHeight: 'calc(100vh - 87px)' }}
                        >
                            <Row className='flex-column'>
                                <Col>
                                    <h2 className='text-center'>There's nothing here ¯\_(⊙.☉)_/¯</h2>
                                    <p className='text-center'>Go. Choose some positions for your foodtrucks!</p>
                                </Col>
                            </Row>
                        </Container>
                    )
            }
        </>
    )
};

const mapStateToProps = ({ user: { positionsList } }) => ({
    positionsList
});

export default connect(mapStateToProps)(MyPositions);