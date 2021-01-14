import positionsActionTypes from './positions.types';

const INITIAL_STATE = {
    1: {},
    2: {state: 'occupied', selectedByUser: false},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {state: 'occupied', selectedByUser: false},
    13: {state: 'occupied', selectedByUser: false},
    14: {}
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