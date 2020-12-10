import React from 'react';

import Table from 'react-bootstrap/Table';

const ParticipantsDetails = () => (
    <Table bordered responsive style={{ width: '700px' }}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Food type</th>
                <th>Owner</th>
                <th>Contact</th>
                <th>Website</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Taco Tire</td>
                <td>Mexican food</td>
                <td>Bryan Gómez</td>
                <td>thisIsOneFake-email@gmail.com</td>
                <td><a href='#'>dummyWebsite.net</a></td>
            </tr>
            <tr>
                <td>Burger Factory</td>
                <td>Fast food</td>
                <td>Mark Poppking</td>
                <td>thisIsOneFake-email@gmail.com</td>
                <td><a href='#'>dummyWebsite.net</a></td>
            </tr>
            <tr>
                <td>Nacho on Wheels</td>
                <td>Mexican food</td>
                <td>Pedro Rodriguez</td>
                <td>thisIsOneFake-email@gmail.com</td>
                <td><a href='#'>dummyWebsite.net</a></td>
            </tr>
            <tr>
                <td>Green plate</td>
                <td>Vegetarian food</td>
                <td>Steve Mainkra</td>
                <td>thisIsOneFake-email@gmail.com</td>
                <td><a href='#'>dummyWebsite.net</a></td>
            </tr>
        </tbody>
    </Table>
);

export default ParticipantsDetails;