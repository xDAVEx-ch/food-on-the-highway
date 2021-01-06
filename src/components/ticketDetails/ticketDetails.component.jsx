import React from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import ticketData from '../../tickets.data';

const TicketDetails = ({ type: ticketType, buttonText, setWarning, setTicketType }) => {

    return (
        <div>
            <Table bordered responsive style={{ width: '700px' }}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Details</th>
                        <th>Expiration</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ticketData[ticketType].title}</td>
                        <td>{ticketData[ticketType].price}</td>
                        <td>{ticketData[ticketType].details}</td>
                        <td>21th March</td>
                        <td>
                            <Button
                                variant='primary'
                                onClick={() => {
                                    if (setTicketType) {
                                        setTicketType([ticketType]);
                                    }
                                    setWarning(true);
                                }}
                            >
                                {buttonText}
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default TicketDetails;