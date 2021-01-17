import React from 'react';
import { connect } from 'react-redux';

import './userPositionsList.styles.scss';

const UserPositionsList = ({ positionsList }) => {
    
    return (
        <div className='position-num'>
            {
                positionsList
                    .sort((firstValue, secondValue) => firstValue - secondValue)
                    .map((positionNum) => {
                        return (
                            <span 
                                key={positionNum}
                                className='
                                    bg-success 
                                    lead 
                                    text-light 
                                    rounded 
                                    d-flex justify-content-center align-items-center'
                            >
                                {positionNum}
                            </span>
                        )
                    })
            }
        </div>
    )
};

const mapStateToProps = ({ user: { positionsList } }) => ({
    positionsList
});

export default connect(mapStateToProps)(UserPositionsList);