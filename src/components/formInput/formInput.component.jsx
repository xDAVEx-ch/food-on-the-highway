import React from 'react';

import Form from 'react-bootstrap/Form';

const FormInput = (props) => {

    let errorMsg = '';
    let isValidationError = false;

    const { 
        errorCodeMsg,
        firebaseErrorMsg,
        label,
        handleChange,
        extraInfo,
        ...otherProps 
    } = props;

    switch(errorCodeMsg){
        case 'password-mismatch':
            errorMsg = "Passwords don't match";
            isValidationError = true;
            break;
        case 'blank-space':
            errorMsg = 'Please, fill this space';
            isValidationError = true;
            break;
        case '':
            isValidationError = false;
            break;
        default:
            errorMsg = firebaseErrorMsg;
            isValidationError = true;
            
    }

    console.log(errorMsg);
    return (
        <Form.Group controlId="formGroup">
            <Form.Label>
                {label}
                <small className='text-info pl-2'>{extraInfo}</small>
            </Form.Label>
            <Form.Control onChange={handleChange} {...otherProps} isInvalid={isValidationError} />
                <Form.Control.Feedback type="invalid">
                    {errorMsg}
                </Form.Control.Feedback>
        </Form.Group>
    )
}

export default FormInput;