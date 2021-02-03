import React, { Component } from 'react'

import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

import FormInput from '../../components/formInput/formInput.component';
import RedirectButton from '../../components/enterButton/enterButton.component';

import { logInStart } from '../../redux/user/user.actions';

class LogInForm extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            errorCodeEmail: 'no-error',
            errorCodePassword: 'no-error',
            validated: false
        }
    }

    componentDidUpdate(prevProps) {

        const { errorCodeFirebase } = this.props;
        console.log(errorCodeFirebase);

        if(prevProps !== this.props){
            if(errorCodeFirebase.includes('password')){
                this.setState({ errorCodePassword: errorCodeFirebase });
            } else {
                this.setState({ errorCodeEmail: errorCodeFirebase });
            }
        }
        
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        let errors = this.handleValidation(e);

        if (errors.email || errors.password) {
            return;
        }

        const { email, password } = this.state;
        const { logInStart } = this.props;

        console.log('before');
        logInStart({email, password});
        console.log('after');

        this.setState({ validated: false });
    }

    handleValidation = () =>{
        let errors = {};

        if(!this.state.email){
            this.setState({ errorCodeEmail: 'blank-space' });
            errors.email = true
        } else {
            this.setState({ errorCodeEmail: 'no-error' });
            errors.email = false;
        }

        if(!this.state.password){
            this.setState({ errorCodePassword: 'blank-space' });
            errors.password = true
        } else {
            this.setState({ errorCodePassword: 'no-error' });
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

const mapDispatchToProps = (dispatch) =>({
    logInStart: (email, password) => dispatch(logInStart(email, password))
});

const mapStateToProps = ({user: {error}}) =>({
    errorCodeFirebase: error
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm)