import React, {useState, useEffect, useContext} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Badge from 'react-bootstrap/Badge';

import { useMediaQuery } from '../../effects/useMediaQuery.effect';
import CountDownContext from '../../contexts/countDown/countDown.context';

const CountDown = () => {

    const dimensions = useMediaQuery();
    const {eventDateMillisec} = useContext(CountDownContext);
    console.log(eventDateMillisec);

    const calculateTimeLeft = () => {
        let remainingTime = eventDateMillisec - +new Date();
        let timeLeft = {days: 0, hours: 0, minutes: 0, seconds: 0};

        if (remainingTime > 0) {
            timeLeft = {
                days: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
                hours: Math.floor((remainingTime / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((remainingTime / 1000 / 60) % 60),
                seconds: Math.floor((remainingTime / 1000) % 60)
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });
    
    return (
        <Row>
            <Col>
                <Row className='justify-content-center mt-2'>
                    <Col xs='auto'>
                        <p className='text-light h4'>
                            {timeLeft.days} 
                            {
                                dimensions.width < 500 ?
                                    <span className='ml-2 font-weight-bold'>D</span> :
                                    <Badge className='ml-2' variant="light">Days</Badge>
                            }
                        </p>
                    </Col>
                    <Col xs='auto'>
                        <p className='text-light h4'>
                            {timeLeft.hours} 
                            {
                                dimensions.width < 500 ?
                                    <span className='ml-2 font-weight-bold'>H</span> :
                                    <Badge className='ml-2' variant="light">Hours</Badge>
                            }
                        </p>
                    </Col>
                    <Col xs='auto'>
                        <p className='text-light h4'>
                            {timeLeft.minutes} 
                            {
                                dimensions.width < 500 ?
                                    <span className='ml-2 font-weight-bold'>M</span> :
                                    <Badge className='ml-2' variant="light">Min</Badge>
                            }

                        </p>
                    </Col>
                    <Col xs='auto'>
                        <p className='text-light h4'>
                            {timeLeft.seconds} 
                            {
                                dimensions.width < 500 ?
                                    <span className='ml-2 font-weight-bold'>S</span> :
                                    <Badge className='ml-2' variant="light">Sec</Badge>
                            }

                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default CountDown;