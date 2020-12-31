import sidebarActionTypes from './sidebar.types';

export const toggleSidebarHidden = () => ({
    type: sidebarActionTypes.TOGGLE_SIDEBAR_HIDDEN
});

export const resetToggleHidden = (hidden) =>({
    type: sidebarActionTypes.RESET_TOGGLE_HIDDEN,
    payload: hidden
});