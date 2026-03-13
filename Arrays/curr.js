function sum(a){

    return function(b){
        
       return b ? sum(a+b):a;
    }

}

console.log(sum(1)(2)(4)(),"sum");

Array.prototype.reducer = function(callback,initialvalue){
    let initial = initialvalue;
    let startIndex = 0;
    let acc;

    if(initial == undefined){
        initial = this[0];
        startIndex = 1;

    }else{
        startIndex = 0;
    }
    acc = initial;
    for(let i=startIndex;i<this.length;i++){
        console.log(callback(acc,initial));
        initial = this[i];
        acc = callback(acc,initial);
        

    }
  return acc;

}
console.log([1,2,3,4].reducer((acc,curr) => acc+curr,0),"reducer");


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

function add(...args1){
    let sum = args1.reduce((acc,curr) => acc+curr,0);
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