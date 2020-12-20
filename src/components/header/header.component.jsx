import React from 'react';

import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

import logo from '../../assets/main-logo.png';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Header = ({ location, user }) => {

    const pathName = location.pathname;

    return (
        <header className='border-bottom'>
            <Navbar expand='md' variant='light'>

                <Link to={pathName.includes('/main') ? '#' : '/'}>
                    <Navbar.Brand
                        className={pathName.includes('/main') ? 'd-none d-md-block' : ''}
                    >
                        <img
                            src={logo}
                            width="80"
                            height="60"
                            className="d-inline-block align-top"
                            alt="Food on the Highway logo"
                        />
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls='toggle-sidebar' />

                <div className='ml-auto d-flex flex-row'>
                    {
                        user
                            ? `Welcome ${user.userName}!!`
                            : (
                                <>
                                    <Link className='nav-link' to='login'>Log in</Link>
                                    <Link to='/signup'><Button variant="info">Sign up</Button></Link>
                                </>
                            )
                    }
                </div>

            </Navbar>
        </header>
    )
}

export default withRouter(Header);