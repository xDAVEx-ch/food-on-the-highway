import React from 'react';

import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleSidebarHidden } from '../../redux/sidebar/sidebar.actions';

import logo from '../../assets/main-logo.png';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import './header.styles.scss';

const Header = ({ location, user, toggleSidebar }) => {

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

                {
                    pathName.includes('/main') 
                        ? <Navbar.Toggle aria-controls='toggle-sidebar' onClick={toggleSidebar} />
                        : ''
                }

                <div className='ml-auto d-flex flex-row'>
                    {
                        user
                            ? `Welcome ${user.userName}!!`
                            : (
                                <>
                                    <Link className='nav-link' to='/login'>Log in</Link>
                                    <Link to='/signup'><Button variant="info">Sign up</Button></Link>
                                </>
                            )
                    }
                </div>

            </Navbar>
            {
                pathName === '/' || pathName === '/login'
                ? (
                    <Alert variant={'success'} className='position-absolute w-100'>
                        <small className='mb-0 d-block'>
                            Hey...here you have two accounts to start right now
                        </small>
                        <small className='display-accounts-info pr-3'>
                            consumer: loco_J@hotmail.com / @rroz911
                        </small>
                        <small className='display-accounts-info'>
                            participant: dom_AA@gmail.com / dom!ks55
                        </small>
                    </Alert>
                )
                : ''
            }
        </header>
    )
}

const mapStateToProps = ({ user: {currentUser} }) => ({
    user: currentUser
});

const mapDispatchToProps = (dispatch) =>({
    toggleSidebar: () => dispatch(toggleSidebarHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));