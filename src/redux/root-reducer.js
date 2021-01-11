import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import sidebarReducer from './sidebar/sidebar.reducer';
import positionsReducer from './positions/positions.reducer';

export default combineReducers({
    user: userReducer,
    sidebar: sidebarReducer,
    positions: positionsReducer
});