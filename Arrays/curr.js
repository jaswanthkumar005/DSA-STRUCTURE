function sum(a){

    return function(b){
        
       return b ? sum(a+b):a;
    }

}

console.log(sum(1)(2)(4)(),"sum");

function add(...args1){
    let sum = args1.reduce((acc,curr)=> acc+curr,0);

     function innerFn(...args2){
        if(args2.length == 0){
            return sum;
        }
        return add(sum,...args2);
    }
 innerFn.toString = function(){
    return sum;
 }
 return innerFn;
}




//console.log(add(2,3)+"<<>>"+">>"+add(2)(3)());
console.log(typeof add(2,5).toTest());