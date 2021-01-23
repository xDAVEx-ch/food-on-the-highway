import userActionTypes from './user.types';

export const setCurrentUser = (user) =>({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
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