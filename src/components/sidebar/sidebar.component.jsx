import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';

class Sidebar extends Component {

    constructor() {
        super();

        this.state = {
            toggle: false
        }
    }

    render() {
        return (
            <div className={this.state.toggle ? 'collapse' : ''}>
                <Nav
                    style={{ height: 'calc(100vh - 86px)' }}
                    className='flex-column align-items-center bg-secondary'
                >
                    <Nav.Item className='mt-3'>
                        <Nav.Link className='text-dark h5'>My ticket</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-dark h5'>Buy ticket</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-dark h5'>Participants</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mt-auto'>
                        <Nav.Link className='text-dark h5'>Exit</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default Sidebar;