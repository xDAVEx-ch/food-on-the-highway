import React from 'react';

import Form from 'react-bootstrap/Form';

const FormInput = ({ label, handleChange, passCoincide, ...otherProps }) => {
    return (
        <Form.Group controlId="formGroup">
            <Form.Label>{label}</Form.Label>
            <Form.Control onChange={handleChange} {...otherProps} />

            {
                passCoincide
                    ? (<Form.Control.Feedback type="invalid">
                        Passwords don't match
                    </Form.Control.Feedback>)

                    : (<Form.Control.Feedback type="invalid">
                        Please fill this space
                    </Form.Control.Feedback>)
            }

        </Form.Group>
    )
}

export default FormInput;