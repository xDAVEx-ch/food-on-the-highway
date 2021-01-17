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