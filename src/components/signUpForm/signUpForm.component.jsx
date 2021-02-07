import React from 'react'
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

import FormInput from '../formInput/formInput.component';
import EnterButton from '../enterButton/enterButton.component';

import { signUpStart } from '../../redux/user/user.actions';

class SignUpPage extends React.Component {

    constructor() {
        super();

        this.state = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            type: 'consumer',
            errorCodeUserName: 'no-error',
            errorCodeEmail: 'no-error',
            errorCodePassword: 'no-error',
            errorCodeConfirmPass: 'no-error',
            validated: false
        };
    }

    componentDidUpdate(prevProps) {

        const { errorCodeFirebase } = this.props;

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
        let errors = await this.handleValidation(e);

        if (errors.userName || errors.email || errors.password || errors.confirmPassword) {
            return;
        }

        const { email, password, userName, type } = this.state;
        const {signUpStart} = this.props;
        signUpStart({email, password, userName, type});

        this.setState({validated: false});
    }

    handleValidation = async (e) => {

        let errors = {};

        if(!this.state.userName){
            this.setState({ errorCodeUserName: 'blank-space' });
            errors.userName = true;
        } else {
            this.setState({ errorCodeUserName: 'no-error' });
            errors.userName = false;
        }

        if(!this.state.email){
            this.setState({ errorCodeEmail: 'blank-space' });
            errors.email = true;
        } else {
            this.setState({ errorCodeEmail: 'no-error' });
            errors.email = false;
        }

        if(!this.state.password){
            this.setState({ errorCodePassword: 'blank-space' });
            errors.password = true;
        } else {
            this.setState({ errorCodePassword: 'no-error' });
            errors.password = false;
        }

        if(!this.state.confirmPassword){
            this.setState({ errorCodeConfirmPass: 'blank-space' });
            errors.confirmPassword = true;

        } else if(this.state.confirmPassword !== this.state.password){

            this.setState({ errorCodeConfirmPass: 'password-mismatch'});
            errors.confirmPassword = true;
        } else {
            this.setState({ errorCodeConfirmPass: 'no-error' });
            errors.confirmPassword = false;
        }

        return errors;
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            if(checked){
                this.setState({ type: 'participant' });
            } else {
                this.setState({ type: 'consumer' });
            }
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
                                    errorCodeMsg={'no-error'}
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

const mapDispatchToProps = (dispatch) =>({
    signUpStart: (emailAndPass) => dispatch(signUpStart(emailAndPass))
});

const mapStateToProps = ({ user: {error} }) =>({
    errorCodeFirebase: error
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);