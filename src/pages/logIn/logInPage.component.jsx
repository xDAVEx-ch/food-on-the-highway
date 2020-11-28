import React, { Component } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import FormInput from '../../components/formInput/formInput.component';

export default class LogInPage extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            validated: false
        }
    }

    handleSubmit = (e) =>{
        const form = e.currentTarget;

        if(form.checkValidity() === false){
            e.preventDefault();
            e.stopPropagation();
        } else {
            this.setState({validated: false});
            return;
        }

        this.setState({validated: true});
    }

    handleChange = (e) =>{
        const { name, value } = e.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div
                className='bg-secondary d-flex align-items-center'
                style={{ height: 'calc(100vh - 86px)' }}  //Header height == 86px
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

                                <Button variant="primary" type="submit">
                                    Log In
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
