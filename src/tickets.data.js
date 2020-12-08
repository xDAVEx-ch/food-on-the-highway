import basicTicketUrl from './assets/base-ticket.jpg';
import platinumTicketUrl from './assets/platinum-ticket.jpg';
import goldenTicketUrl from './assets/golden-ticket.jpg';

const TICKETS_DATA = {
    basic: {
        ticketUrl: basicTicketUrl,
        title: 'Basic Ticket',
        altText: 'Basic white ticket',
        details: 'Participate in the activity',
        price: 25
    },
    platinum: {
        ticketUrl: platinumTicketUrl,
        title: 'Platinum Ticket',
        altText: 'Platinum gray ticket',
        details: 'Participate in the activity. In addition, 25% discount in food',
        price: 30
    },
    golden: {
        ticketUrl: goldenTicketUrl,
        title: 'Golden Ticket',
        altText: 'Golden yellow ticket',
        details: 'Participate in the activity. In addition, 35% discount in food',
        price: 40
    }
};

export default TICKETS_DATA;