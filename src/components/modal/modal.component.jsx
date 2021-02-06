import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const WarningModal = ({ title, body, show, ...buttonFunc }) => {

    const {acceptFunc: accept, cancelFunc: cancel} = buttonFunc;

    return (
        <Modal
            show={show}
            onHide={cancel}
            backdrop='static'
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={cancel}>Close</Button>
                <Button variant='primary' onClick={accept}>Understood</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default WarningModal;