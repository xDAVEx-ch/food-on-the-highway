import React from 'react'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

import FormInput from '../formInput/formInput.component';
import EnterButton from '../enterButton/enterButton.component';

class SignUpPage extends React.Component {

    constructor() {
        super();

        this.state = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            type: 'consumer',
            errorCodeUserName: '',
            errorCodeEmail: '',
            errorCodePassword: '',
            errorCodeConfirmPass: '',
            firebaseErrorMsg: '',
            validated: false
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let errors = await this.handleValidation(e);

        if (errors.userName || errors.email || errors.password || errors.confirmPassword) {
            return;
        }

        const { userName, email, password, type } = this.state;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { userName, type });

            //Clear form inputs
            this.setState({
                userName: '',
                email: '',
                password: '',
                confirmPassword: '',
                type: 'consumer',
                errorCodeUserName: '',
                errorCodeEmail: '',
                errorCodePassword: '',
                errorCodeConfirmPass: '',
                firebaseErrorMsg: '',
                validated: false
            });

        } catch (error) {

            if( error.code === 'auth/weak-password' ){
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

    handleValidation = async (e) => {

        let errors = {};

        if(!this.state.userName){
            this.setState({ errorCodeUserName: 'blank-space' });
            errors.userName = true;
        } else {
            this.setState({ errorCodeUserName: '' });
            errors.userName = false;
        }

        if(!this.state.email){
            this.setState({ errorCodeEmail: 'blank-space' });
            errors.email = true;
        } else {
            this.setState({ errorCodeEmail: '' });
            errors.email = false;
        }

        if(!this.state.password){
            this.setState({ errorCodePassword: 'blank-space' });
            errors.password = true;
        } else {
            this.setState({ errorCodePassword: '' });
            errors.password = false;
        }

        if(!this.state.confirmPassword){
            this.setState({ errorCodeConfirmPass: 'blank-space' });
            errors.confirmPassword = true;

        } else if(this.state.confirmPassword !== this.state.password){

            this.setState({ errorCodeConfirmPass: 'password-mismatch'});
            errors.confirmPassword = true;
        } else {
            this.setState({ errorCodeConfirmPass: '' });
            errors.confirmPassword = false;
        }

        return errors;

        /*if(this.state.userName === ''){
            e.stopPropagation();
            this.setState({ errorCodeUserName: 'blank-space', validated: true });
        } else {
            this.setState({ errorCodeUserName: '', validated: false });
        }

        if(this.state.email === ''){
            e.stopPropagation();
            this.setState({ errorCodeEmail: 'blank-space', validated: true });
        } else {
            this.setState({ errorCodeEmail: '', validated: false });
        }

        if (this.state.password !== this.state.confirmPassword) {
            e.stopPropagation();
            this.setState({ confirmPassword: '', errorCodeConfirmPass: 'password-mismatch', validated: true });
        } else {
            this.setState({ errorCodeConfirmPass: '', validated: false });
        }

        if(this.state.password === '' ){
            e.stopPropagation();
            this.setState({ errorCodePassword: 'blank-space', validated: true });
        } else {
            this.setState({ errorCodePassword: '', validated: false });
        }*/
    }

    handleChange = (event) => {
        const { name, value, checked } = event.target;

        if (checked) {
            this.setState({ type: 'participant' });
        } else {
            this.setState({ type: 'consumer' });
        }

        this.setState({ [name]: value });
    }

    capitalizeFirstLetter() {
        const text = this.state.type;

        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    render() {
        return (
            <div
                className='bg-secondary d-flex align-items-center'
            >
                <Container>
                    <h1 className='text-center mb-3 mt-2 text-primary h5'>SIGN UP FOR FREE</h1>
                    <Row className='justify-content-center'>
                        <Col md={6}>
                            <Form
                                className='border rounded p-3 mb-3 bg-light'
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
                                    errorCodeMsg={this.state.errorCodeUserName}
                                />

                                <FormInput
                                    label='Email Address'
                                    extraInfo={'Email must be unique to identify the user'}
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
                                    extraInfo={'Password must be at least 6 characters'}
                                    required
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    errorCodeMsg={this.state.errorCodePassword}
                                    firebaseErrorMsg={this.state.firebaseErrorMsg}
                                />

                                <FormInput
                                    label='Confirm your Password'
                                    required
                                    type='password'
                                    name='confirmPassword'
                                    placeholder='Password'
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                                    errorCodeMsg={this.state.errorCodeConfirmPass}
                                />
                                <FormInput
                                    label='User type'
                                    required
                                    type='text'
                                    name='type'
                                    value={this.capitalizeFirstLetter()}
                                    readOnly
                                    errorCodeMsg={''}
                                />
                                <Form.Check
                                    type='switch'
                                    id='type-switch'
                                    label='Are you a participant?'
                                    onChange={this.handleChange}
                                />

                                <EnterButton text={'Sign up'}/>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SignUpPage;