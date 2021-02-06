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

    error = authErrors[errorCodeMsg];

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