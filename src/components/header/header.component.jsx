import React from 'react';

import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleSidebarHidden } from '../../redux/sidebar/sidebar.actions';

import logo from '../../assets/main-logo.png';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

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
                            ? `Welcome ${user.currentUser.userName}!!`
                            : (
                                <>
                                    <Link className='nav-link' to='/login'>Log in</Link>
                                    <Link to='/signup'><Button variant="info">Sign up</Button></Link>
                                </>
                            )
                    }
                </div>

            </Navbar>
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