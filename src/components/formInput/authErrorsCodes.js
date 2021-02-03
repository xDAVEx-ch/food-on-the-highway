const authErrors = {
    'auth/user-not-found': {
        msg: 'No matching user',
        isValidationError: true
    },
    'auth/email-already-in-use': {
        msg: 'Email already in use',
        isValidationError: true
    },
    'auth/weak-password': {
        msg: 'The password must be at least 6 characters long',
        isValidationError: true
    },
    'auth/wrong-password': {
        msg: 'The password is invalid for the given email',
        isValidationError: true
    },
    'password-mismatch': {
        msg: "Passwords don't match",
        isValidationError: true
    },
    'blank-space': {
        msg: 'Please, fill this space',
        isValidationError: true
    },
    'auth/too-many-requests': {
        msg: 'Too many attempts. Access to this email account has been temporarily disabled',
        isValidationError: true
    },
    'no-error': {
        msg: '',
        isValidationError: false
    }
};

export default authErrors;