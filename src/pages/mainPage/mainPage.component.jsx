import React from 'react';

import Sidebar from '../../components/sidebar/sidebar.component';
import MyTicket from '../../pages/myTicket/myTicket.component';
import BuyTicket from '../../pages/buyTicket/buyTicket.component';
import Participants from '../../pages/participants/participants.component';

const MainPage = () => {
    return(
        <div className='d-flex' id='wrapper'>
            <Sidebar />
            <Participants />
        </div>
    );
}

export default MainPage;