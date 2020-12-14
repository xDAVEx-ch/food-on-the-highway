import React from 'react';

import './positionsMap.styles.scss';

const PositionsMap = () => (
    <div>

        <div className='map'>
            <div className='d-flex'>
                <div className='position invisible'></div>
                <div className='position border border-dark'></div>
                <div className='position border border-dark border-left-0'></div>
                <div className='position border border-dark border-left-0'></div>
                <div className='position border border-dark border-left-0'></div>
                <div className='position border border-dark border-left-0'></div>
                <div className='position invisible'></div>
            </div>
            <div className='d-flex'>
                <div>
                    <div className='position border border-dark border-bottom-0'></div>
                    <div className='position border border-dark'></div>
                </div>
                <div className='ml-auto'>
                    <div className='position border border-dark border-bottom-0'></div>
                    <div className='position border border-dark'></div>
                </div>
            </div>
            <div className='d-flex'>
                <div className='position invisible'></div>
                <div className='position border border-dark'></div>
                <div className='position border border-dark border-left-0'></div>
                <div className='position border border-dark border-left-0'></div>
                <div className='position border border-dark border-left-0'></div>
                <div className='position border border-dark border-left-0'></div>
                <div className='position invisible'></div>
            </div>
        </div>

    </div>
);

export default PositionsMap;