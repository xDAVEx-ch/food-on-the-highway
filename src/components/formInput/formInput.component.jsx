import React from 'react';

import Form from 'react-bootstrap/Form';

import authErrors from './authErrorsCodes';

const FormInput = (props) => {

    let error = null;

    const {
        label,
        errorCodeMsg,
        handleChange,
        extraInfo,
        ...otherProps
    } = props;

    /*if(errorCodeMsg === 'no-error'){
        if(errorCodeFirebase){ // null if no errors
            error = authErrors[errorCodeFirebase];
        } else {
            error = authErrors[errorCodeMsg];
        }
    } else {
        error = authErrors[errorCodeMsg];
    }*/

    error = authErrors[errorCodeMsg];

    console.log(error);
    return (
        <Form.Group controlId="formGroup">
            <Form.Label>
                {label}
                <small className='text-info pl-2'>{extraInfo}</small>
            </Form.Label>
            <Form.Control onChange={handleChange} {...otherProps} isInvalid={error.isValidationError} />
                <Form.Control.Feedback type="invalid">
                    {error.msg}
                </Form.Control.Feedback>
        </Form.Group>
    )
}

export default FormInput;