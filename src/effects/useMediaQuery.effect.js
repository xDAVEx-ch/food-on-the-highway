import { useState, useEffect } from 'react';

export const useMediaQuery = () => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth
    });
    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                width: window.innerWidth
            })
        }, 1000)

        window.addEventListener('resize', debouncedHandleResize);

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize);

        }
    });

    return dimensions;
}

/* Debounce: Practice of diminishing the number of calls to an event for performance*/
function debounce(fn, ms){
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}