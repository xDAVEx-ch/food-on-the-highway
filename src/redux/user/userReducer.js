import userActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    positionsList: []
};

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };

        case userActionTypes.UPDATE_TICKET_LIST:
            return {
                ...state,
                ticketList: action.payload
            };

        case userActionTypes.UPDATE_POSITIONS_LIST:
            return {
                ...state,
                positionsList: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;