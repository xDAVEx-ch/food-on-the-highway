import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Badge from 'react-bootstrap/Badge';

import { useMediaQuery } from '../../effects/useMediaQuery.effect';

const CountDown = () => {

    const dimensions = useMediaQuery();
    
    return (
        <Row>
            <Col>
                <Row className='justify-content-center mt-2'>
                    <Col xs='auto'>
                        <p className='text-light h4'>
                            30 {
                                dimensions.width < 500 ?
                                    <span className='font-weight-bold'>D</span> :
                                    <Badge variant="light">Days</Badge>
                            }
                        </p>
                    </Col>
                    <Col xs='auto'>
                        <p className='text-light h4'>
                            02 {
                                dimensions.width < 500 ?
                                    <span className='font-weight-bold'>H</span> :
                                    <Badge variant="light">Hours</Badge>
                            }
                        </p>
                    </Col>
                    <Col xs='auto'>
                        <p className='text-light h4'>
                            18 {
                                dimensions.width < 500 ?
                                    <span className='font-weight-bold'>M</span> :
                                    <Badge variant="light">Min</Badge>
                            }

                        </p>
                    </Col>
                    <Col xs='auto'>
                        <p className='text-light h4'>
                            11 {
                                dimensions.width < 500 ?
                                    <span className='font-weight-bold'>S</span> :
                                    <Badge variant="light">Sec</Badge>
                            }

                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default CountDown;