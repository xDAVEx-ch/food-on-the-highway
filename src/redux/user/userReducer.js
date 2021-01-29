import userActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    positionsList: [],
    error: null
};

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case userActionTypes.LOG_IN_SUCCESS:
        case userActionTypes.SIGN_UP_SUCCESS:
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };

        case userActionTypes.LOG_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                positionsList: [],
                error: null
            }

        case userActionTypes.LOG_IN_FAILURE:
        case userActionTypes.LOG_OUT_FAILURE:
        case userActionTypes.SIGN_UP_FAILURE:
        case userActionTypes.SET_USER_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case userActionTypes.UPDATE_TICKET_LIST:
            return {
                ...state,
                currentUser: action.payload
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