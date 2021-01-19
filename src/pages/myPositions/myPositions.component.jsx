import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import UserPositionsList from '../../components/userPositionsList/userPositionsList.component';
import EmptyMessage from '../../components/emptyMessage/emptyMessage.component';

const MyPositions = ({ positionsList }) => {

    let history = useHistory();
    const onePosition = positionsList[0];

    const handleClick = () =>{
        history.push('/main/select-positions');
    };

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
                            <Button variant='primary' className='mt-4' onClick={handleClick}>New locations</Button>
                        </Container>
                    )
                    : (
                        <EmptyMessage message='Go. Choose some positions for your foodtrucks!' />
                    )
            }
        </>
    )
};

const mapStateToProps = ({ user: { positionsList } }) => ({
    positionsList
});

export default connect(mapStateToProps)(MyPositions);