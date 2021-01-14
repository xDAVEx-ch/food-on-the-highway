import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { compose } from 'redux';

import PositionsMap from './positionsMap.component';

import { setPositionsState } from '../../redux/positions/positions.actions';

const PositionsMapContainer = ({ positions, setPositionsState, location }) => {

    const pathName = location.pathname;

    const handlerClick = (e) => {
        if(pathName !== '/main/select-positions') return;

        const position = e.target.dataset.position;

        if (position) {

            const selectedByUser = positions[position].selectedByUser;

            if (selectedByUser) {
                /* User chose to release its space, it becomes available*/

                const newPlaceState = 'available';
                setPositionsState({ [position]: {state: newPlaceState, selectedByUser: !selectedByUser} });

                /* User clicked on space selected by itself. selectedByUser changes to false*/
            } else {
                /* User chose to select a new space, it becomes a user space*/

                const newPlaceState = 'user-space';
                setPositionsState({ [position]: {state: newPlaceState, selectedByUser: !selectedByUser} });

                /*User clicked on space available. selectedByUser changes to true */
            }
        }
    }

    const getColorState = (number) => {

        let color = '';

        if (positions[number].state === 'user-space') {
            color = 'color-user-space';
        } else if (positions[number].state === 'occupied') {
            color = 'color-occupied';
        } else {
            color = 'color-available';
        }

        return color;
    }

    return <PositionsMap getColorState={getColorState} handlerClick={handlerClick} />;
};

const mapStateToProps = ({ positions }) => ({
    positions
});

const mapDispatchToProps = (dispatch) => ({
    setPositionsState: (newPositionState) => dispatch(setPositionsState(newPositionState))
});

const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhancer(PositionsMapContainer);