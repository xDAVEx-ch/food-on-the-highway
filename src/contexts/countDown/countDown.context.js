import { createContext } from 'react';

const CountDownContext = createContext({
    defaultTime: 864000000,
    setTimer: () =>{}
});

export default CountDownContext;