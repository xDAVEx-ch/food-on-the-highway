import React, {useEffect} from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { resetToggleHidden } from '../../redux/sidebar/sidebar.actions';

import { useMediaQuery } from '../../effects/useMediaQuery.effect';

import Sidebar from '../../components/sidebar/sidebar.component';
import MyTicket from '../myTicket/myTicket.component';
import BuyTicket from '../buyTicket/buyTicket.component';
import Participants from '../participants/participants.component';
import MyPositions from '../myPositions/myPositions.component';
import SelectPositions from '../selectPositions/selectPositions.component';
import SeePositions from '../seePositions/seePositions.component';

const MainPage = ({ match, user, hidden, resetToggleHidden }) => {

    const dimensions = useMediaQuery();

    useEffect(() =>{
        console.log('useEffect');
        if(dimensions.width > 768){
            resetToggleHidden(true);
            console.log('after reset');
        }
    }, [dimensions, resetToggleHidden]);

    return(
        <div className={`d-flex ${hidden ? '' : 'toggled'}`} id='wrapper'>
            <Sidebar />
            {
                user.type === 'participant'
                ?(
                    <>
                        <Route exact path={`${match.path}`} component={MyPositions} />
                        <Route path={`${match.path}/select-positions`} component={SelectPositions} />
                        <Route path={`${match.path}/list-positions`} component={SeePositions} />
                    </>
                ):(
                    <>
                        <Route exact path={`${match.path}`} component={MyTicket} />
                        <Route path={`${match.path}/buy-ticket`} component={BuyTicket} />
                        <Route path={`${match.path}/participants`} component={Participants} />
                    </>
                )
            }
        </div>
    );
}

const mapStateToProps = ({ user: {currentUser}, sidebar: {hidden} }) =>({
    user: currentUser, hidden
});

const mapDispatchToProps = (dispatch) =>({
    resetToggleHidden: (hidden) => dispatch(resetToggleHidden(hidden))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);