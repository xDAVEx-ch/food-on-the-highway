import React from 'react';

import { withRouter } from "react-router";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import ticketData from '../../tickets.data';

const TicketDetails = ({ type: ticketType, buttonText }) => {

    return (
        <Table bordered responsive>
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
                    <td><Button variant="primary">{buttonText}</Button></td>
                </tr>
            </tbody>
        </Table>
    );
}

export default withRouter(TicketDetails);