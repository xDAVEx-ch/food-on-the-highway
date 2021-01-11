import React from 'react';

const Position = ({ getColorState, number, cleanBorderClass }) => (
    <div
        data-position={number} /* Gives number of position which is used as key for state */
        data-selected='false' /* False: position is available. True: position was selected by current user*/
        className={`
            position
            border border-dark ${cleanBorderClass}
            font-weight-bold lead
            d-flex justify-content-center align-items-center
            ${getColorState(number)}
        `}>
        {number}
    </div>
);

export default Position;