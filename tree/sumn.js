function add(...args){
    let sum = args.reduce((acc,curr)=> acc+curr,0);

    function innerFn(...args2){
       if(args.length == 0){
         return sum;
       }
       return add(sum,...args2);
    }

    innerFn.toString = function(){
        return sum;
    }



    return innerFn;

}

console.log(add(2,3)+"<<>>"+add(2)(3)+">>"+add(2)(3)(6)())