import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import FormInput from '../../components/formInput/formInput.component';

class SignUpPage extends React.Component {

    constructor() {
        super();

        this.state = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            validated: false
        };
    }

    handleSubmit = (e) => {

        const form = e.currentTarget;

        if (this.state.password !== this.state.confirmPassword) {
            alert("Passwords don't match");
            e.stopPropagation();
            e.preventDefault();
            this.setState({confirmPassword: ''});
            
        } else if(form.checkValidity() === false){
            e.stopPropagation();
            e.preventDefault();
        
        }else {
            this.setState({validated: false});
            return;
        }

        this.setState({validated: true});
    }

    handleChange = (event) =>{
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div
                className='bg-secondary d-flex align-items-center'
                style={{ height: 'calc(100vh - 86px)' }}  //Header height == 86px
            >
                <Container>
                    <h1 className='text-center mb-3 pt-3 text-primary h5'>SIGN UP FOR FREE</h1>
                    <Row className='justify-content-center'>
                        <Col md={6}>
                            <Form
                                className='border rounded p-3 bg-light'
                                noValidate
                                validated={this.state.validated}
                                onSubmit={this.handleSubmit}
                            >
                                <FormInput
                                    label='User Name'
                                    required
                                    type='text'
                                    name='userName'
                                    placeholder='Enter your name'
                                    value={this.state.userName}
                                    onChange={this.handleChange}
                                />

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

                                <FormInput
                                    label='Confirm your Password'
                                    required
                                    type='password'
                                    name='confirmPassword'
                                    placeholder='Password'
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                                    passCoincide={this.state.confirmPassword !== this.state.password}
                                />

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SignUpPage;