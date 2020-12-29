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
            errorCodeEmail: '',
            errorCodePassword: '',
            firebaseErrorMsg: '',
            validated: false
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        let errors = this.handleValidation(e);

        if (errors.email || errors.password) {
            return;
        }

        try {
            const { email, password } = this.state;
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({ validated: false });
            this.setState({ email: '', password: '' });
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                this.setState({
                    errorCodePassword: error.code,
                    firebaseErrorMsg: error.message
                });
            } else {
                this.setState({
                    errorCodeEmail: error.code,
                    firebaseErrorMsg: error.message
                });
            }
        }

    }

    handleValidation = () =>{
        let errors = {};

        if(!this.state.email){
            this.setState({ errorCodeEmail: 'blank-space' });
            errors.email = true
        } else {
            this.setState({ errorCodeEmail: '' });
            errors.email = false;
        }

        if(!this.state.password){
            this.setState({ errorCodePassword: 'blank-space' });
            errors.password = true
        } else {
            this.setState({ errorCodePassword: '' });
            errors.password = false;
        }

        return errors;
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
                                    errorCodeMsg={this.state.errorCodeEmail}
                                    firebaseErrorMsg={this.state.firebaseErrorMsg}
                                />

                                <FormInput
                                    label='Password'
                                    required
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    errorCodeMsg={this.state.errorCodePassword}
                                    firebaseErrorMsg={this.state.firebaseErrorMsg}
                                />

                                <RedirectButton text={'Log In'} validation={this.state.validated} />
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}