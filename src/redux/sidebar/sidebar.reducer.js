import sidebarActionTypes from './sidebar.types';

const INITIAL_STATE = {
    hidden: true
}

const sidebarReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case sidebarActionTypes.TOGGLE_SIDEBAR_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case sidebarActionTypes.RESET_TOGGLE_HIDDEN:
            return {
                ...state,
                hidden: action.payload
            }
        default:
            return state;
    }
}

export default sidebarReducer;