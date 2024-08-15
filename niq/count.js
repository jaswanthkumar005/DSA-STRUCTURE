const count = (() => {
    let counter = 0;
     function innerFn(){
        counter++;
       // console.log(counter,"counter");
        return counter;
    }

    innerFn.reset = function(){
        counter = 0;
        return counter;
    }

    return innerFn
})();

console.log(count());
console.log(count());
console.log(count.reset());
console.log(count());
console.log(count());