import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ParticipantsDetails from '../../components/participantsDetails/participantsDetails.component';

const Participants = () =>(
    <Container style={{ padding: '15px 30px' }}>
        <Row>
            <Col><h2 className='mb-4'>See the participants list</h2></Col>
        </Row>
        <Row>
            <Col><ParticipantsDetails /></Col>
        </Row>
    </Container>
);

export default Participants;