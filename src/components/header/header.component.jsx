import React from 'react';

import logo from '../../assets/main-logo.png';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Header = () => (
    <header className='container'>
        <Navbar bg="light">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="90"
                    height="70"
                    className="d-inline-block align-top"
                    alt="Food on the Highway logo"
                />
            </Navbar.Brand>
            <div className='ml-auto d-flex flex-row'>
                <Nav.Link href="#home">Log in</Nav.Link>
                <Button href="#" variant="info">Sign up</Button>
            </div>
        </Navbar>
    </header>
)

export default Header;