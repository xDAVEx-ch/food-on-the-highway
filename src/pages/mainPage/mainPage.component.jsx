import React from 'react';

import { Route } from 'react-router-dom';

import Sidebar from '../../components/sidebar/sidebar.component';
import MyTicket from '../../pages/myTicket/myTicket.component';
import BuyTicket from '../../pages/buyTicket/buyTicket.component';
import Participants from '../../pages/participants/participants.component';

const MainPage = ({ match }) => {
    return(
        <div className='d-flex' id='wrapper'>
            <Sidebar />
            <Route path={`${match.path}/my-ticket`} component={MyTicket} />
            <Route path={`${match.path}/buy-ticket`} component={BuyTicket} />
            <Route path={`${match.path}/participants`} component={Participants} />
        </div>
    );
}

export default MainPage;