import React, { Component } from 'react'

import { auth } from '../../firebase/firebase.utils';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

import FormInput from '../../components/formInput/formInput.component';
import RedirectButton from '../../components/enterButton/enterButton.component';

export default class LogInForm extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            validated: false
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        let band = this.handleValidation(e);

        if (band) {
            const { email, password } = this.state;
            await auth.signInWithEmailAndPassword(email, password);
            
            this.setState({ validated: false });
            this.setState({ email: '', password: ''});
        } else {
            this.setState({ validated: true });
            return;
        }
    }

    handleValidation = (e) => {
        const form = e.currentTarget;

        if (form.checkValidity()) {

            return true;
        } else {
            e.stopPropagation();
            return false;
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div
                className='bg-secondary d-flex align-items-center'
                style={{ height: 'calc(100vh - 87px)' }}  //Header height == 87px
            >
                <Container>
                    <h1 className='text-center mb-3 pt-3 text-primary h5'>GET IN YOUR ACCOUNT</h1>
                    <Row className='justify-content-center'>
                        <Col md={6}>
                            <Form
                                className='border rounded p-3 bg-light'
                                noValidate
                                validated={this.state.validated}
                                onSubmit={this.handleSubmit}
                            >

                                <FormInput
                                    label='Email Address'
                                    required
                                    type='email'
                                    name='email'
                                    placeholder='Enter your email'
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />

                                <FormInput
                                    label='Password'
                                    required
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />

                                <RedirectButton text={'Log In'} validation={this.state.validated}/>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}