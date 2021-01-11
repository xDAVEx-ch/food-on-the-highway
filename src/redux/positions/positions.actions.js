import positionsActionTypes from './positions.types';

export const setPositionsState = (newPositionState) =>({
    type: positionsActionTypes.SET_POSITIONS_STATE,
    payload: newPositionState
});