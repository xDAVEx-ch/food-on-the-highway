import positionsActionTypes from './positions.types';

const INITIAL_STATE = {
    1: 'available'
};

const positionsReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case positionsActionTypes.SET_POSITIONS_STATE:
            return {
                ...state,
                ...action.payload
            }
    
        default:
            return state;
    }
};

export default positionsReducer;