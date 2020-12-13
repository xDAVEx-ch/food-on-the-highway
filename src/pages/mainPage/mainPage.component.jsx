import React from 'react';

import { Route } from 'react-router-dom';

import Sidebar from '../../components/sidebar/sidebar.component';
import MyTicket from '../myTicket/myTicket.component';
import BuyTicket from '../buyTicket/buyTicket.component';
import Participants from '../participants/participants.component';
import MyPositions from '../myPositions/myPositions.component';

const participant = true;

const MainPage = ({ match }) => {
    return(
        <div className='d-flex' id='wrapper'>
            <Sidebar />
            {
                participant == true
                ?(
                    <>
                        <Route path={`${match.path}/my-positions`} component={MyPositions} />
                        <Route path={`${match.path}/buy-ticket`} component={BuyTicket} />
                        <Route path={`${match.path}/participants`} component={Participants} />
                    </>
                ):(
                    <>
                        <Route path={`${match.path}/my-ticket`} component={MyTicket} />
                        <Route path={`${match.path}/buy-ticket`} component={BuyTicket} />
                        <Route path={`${match.path}/participants`} component={Participants} />
                    </>
                )
            }
        </div>
    );
}

export default MainPage;