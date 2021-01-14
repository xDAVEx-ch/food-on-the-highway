import React from 'react';

const Position = ({ getColorState, number, cleanBorderClass }) => {

    const colorState = getColorState(number);

    return (
        <div
            data-position={number} /* Gives number of position which is used as key for state */
            className={`
            position
            border border-dark ${cleanBorderClass}
            font-weight-bold lead
            d-flex justify-content-center align-items-center
            ${colorState === 'color-occupied'
                ? colorState + ' not-allowed'
                : colorState
            }
        `}>
            {number}
        </div>
    )
};

export default Position;