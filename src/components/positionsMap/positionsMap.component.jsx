import React from 'react';

import Position from '../position/position.component';

import './positionsMap.styles.scss';

const PositionsMap = ({ getColorState, handlerClick }) => (

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
);

export default PositionsMap;