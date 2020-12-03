import React from 'react';

import { withRouter } from "react-router";

import logo from '../../assets/main-logo.png';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Header = ({ location }) => {

    const pathName = location.pathname;

    return (
        <header>
            <Navbar expand='md' variant='light'>

                <Navbar.Brand
                    href={pathName === '/main' ? '#' : 'home'}
                    className={pathName === '/main' ? 'd-none d-md-block' : ''}
                >
                    <img
                        src={logo}
                        width="80"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Food on the Highway logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='toggle-sidebar' />
               
                <div className='ml-auto d-flex flex-row'>
                    <Nav.Link href="#home">Log in</Nav.Link>
                    <Button href="#" variant="info">Sign up</Button>
                </div>

            </Navbar>
        </header>
    )
}

export default withRouter(Header);