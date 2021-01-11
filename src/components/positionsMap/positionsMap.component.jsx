import React from 'react';
import { connect } from 'react-redux';

import Position from '../position/position.component';

import { setPositionsState } from '../../redux/positions/positions.actions';
import './positionsMap.styles.scss';

const PositionsMap = ({ positions, setPositionsState }) => {

    const handlerClick = (e) => {
        const position = e.target.dataset.position;
        const selected = e.target.dataset.selected;

        if (position) {

            if (selected === 'true') {
                /* User chose to release its space, it becomes available*/

                const newPlaceState = 'available';
                setPositionsState({ ...positions, [position]: newPlaceState });

                /* User clicked on space selected by itself. data-selected changes to false*/
                e.target.dataset.selected = 'false';
            } else {
                /* User chose to select a new space, it becomes a user space*/

                const newPlaceState = 'user-space';
                setPositionsState({ ...positions, [position]: newPlaceState });

                /*User clicked on space available. data-selected changes to true */
                e.target.dataset.selected = 'true';
            }
        }
    }

    const getColorState = (number) => {

        let color = '';
        
        console.log(positions[number]);

        if (positions[number] === 'user-space') {
            color = 'color-user-space';
        } else if (positions[number] === 'occupied') {
            color = 'color-occupied';
        } else {
            color = 'color-available';
        }

        return color;
    }

    return (
        <div>

            <div className='map' onClick={(e) => handlerClick(e)}>
                <div className='d-flex'>
                    <div className='position invisible'></div>

                    <Position
                        getColorState={getColorState}
                        number='1'
                        cleanBorderClass=''
                    />

                    <Position
                        getColorState={getColorState}
                        number='2'
                        cleanBorderClass='border-left-0'
                    />

                    <Position
                        getColorState={getColorState}
                        number='3'
                        cleanBorderClass='border-left-0'
                    />

                    <Position
                        getColorState={getColorState}
                        number='4'
                        cleanBorderClass='border-left-0'
                    />

                    <Position
                        getColorState={getColorState}
                        number='5'
                        cleanBorderClass='border-left-0'
                    />

                    <div className='position invisible'></div>
                </div>
                <div className='d-flex'>
                    <div>

                        <Position
                            getColorState={getColorState}
                            number='14'
                            cleanBorderClass='border-bottom-0'
                        />

                        <Position
                            getColorState={getColorState}
                            number='13'
                            cleanBorderClass=''
                        />

                    </div>
                    <div className='ml-auto'>

                        <Position
                            getColorState={getColorState}
                            number='6'
                            cleanBorderClass='border-bottom-0'
                        />

                        <Position
                            getColorState={getColorState}
                            number='7'
                            cleanBorderClass=''
                        />

                    </div>
                </div>
                <div className='d-flex'>
                    <div className='position invisible'></div>

                    <Position
                        getColorState={getColorState}
                        number='12'
                        cleanBorderClass=''
                    />

                    <Position
                        getColorState={getColorState}
                        number='11'
                        cleanBorderClass='border-left-0'
                    />

                    <Position
                        getColorState={getColorState}
                        number='10'
                        cleanBorderClass='border-left-0'
                    />

                    <Position
                        getColorState={getColorState}
                        number='9'
                        cleanBorderClass='border-left-0'
                    />

                    <Position
                        getColorState={getColorState}
                        number='8'
                        cleanBorderClass='border-left-0'
                    />

                    <div className='position invisible'></div>
                </div>
            </div>

        </div>
    )
};

const mapStateToProps = ({ positions }) => ({
    positions
});

const mapDispatchToProps = (dispatch) => ({
    setPositionsState: (newPositionState) => dispatch(setPositionsState(newPositionState))
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionsMap);