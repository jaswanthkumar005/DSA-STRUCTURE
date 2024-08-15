function debounce(fn,delay){
    let timeOut;

    return function(...args){
        if(timeOut){
            clearTimeout(timeOut);
        }

        let timeOut = setTimeout(() => {
            fn(...args);
            timeOut=null;
        },delay);

    }
}

function throttle(fn,delay){
    let lastCall = 0;

    return function(...args){
        let curr = new Date().getTime();
        if(curr-delay < delay){
            return;
        }
        lastCall = curr;

        return fn(...args)

    }
}