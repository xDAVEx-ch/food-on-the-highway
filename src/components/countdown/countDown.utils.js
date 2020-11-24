/* Debounce: Practice of diminishing the number of calls to an event for performance*/
export const debounce = (fn, ms) => {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}