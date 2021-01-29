import userActionTypes from './user.types';

export const setCurrentUser = (user) =>({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
});

export const setUserError = (error) =>({
    type: userActionTypes.SET_USER_ERROR,
    payload: error
});

export const updateTicketList = (newTicket) =>({
    type: userActionTypes.UPDATE_TICKET_LIST,
    payload: newTicket
});

export const updatePositionsList = (newPosition) =>({
    type: userActionTypes.UPDATE_POSITIONS_LIST,
    payload: newPosition
});

export const logInStart = (emailAndPass) =>({
    type: userActionTypes.LOG_IN_START,
    payload: emailAndPass
});

export const logInSuccess = (user) =>({
    type: userActionTypes.LOG_IN_SUCCESS,
    payload: user
});

export const logInFailure = (error) =>({
    type: userActionTypes.LOG_IN_FAILURE,
    payload: error
});

export const logOutStart = () =>({
    type: userActionTypes.LOG_OUT_START
});

export const logOutSuccess = () =>({
    type: userActionTypes.LOG_OUT_SUCCESS
});

export const logOutFailure = (error) =>({
    type: userActionTypes.LOG_OUT_FAILURE,
    error: error
});

export const signUpStart = (userInfo) =>({
    type: userActionTypes.SIGN_UP_START,
    payload: userInfo
});

export const signUpSuccess = (user) => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: user
});

export const signUpFailure = (error) =>({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error
});