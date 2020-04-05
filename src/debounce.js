
export const debounce = (fn,delay) => {
    let timeId;
    return function(...args){
        if(timeId){
            clearTimeout(timeId);
        }

        timeId = setTimeout(()=>{
            fn(...args);
        }, delay);
    }
};