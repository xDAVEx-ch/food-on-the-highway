import React from 'react';

import './colorPanel.styles.scss';

const ColorPanel = () => (
    <>
        <h4 className='mt-3'>Color Schema</h4>
        <div className='d-flex'>
            <div className='d-flex flex-column justify-content-around mt-2'>
                <div className='border color-sample color-available'></div>
                <div className='border color-sample color-occupied'></div>
                <div className='border color-sample color-user-space'></div>
            </div>
        
            <div className='d-flex flex-column justify-content-around mt-2'>
                <p className='pl-2 mb-0'>Available space(s)</p>
                <p className='pl-2 mb-0'>Occupied space(s)</p>
                <p className='pl-2 mb-0'>Your space(s)</p>
            </div>
        </div>
    </>
);

export default ColorPanel;