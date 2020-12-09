import React from 'react';

import Sidebar from '../../components/sidebar/sidebar.component';
import MyTicket from '../../pages/myTicket/myTicket.component';

const MainPage = () => {
    return(
        <div className='d-flex' id='wrapper'>
            <Sidebar />
            <MyTicket />
        </div>
    );
}

export default MainPage;