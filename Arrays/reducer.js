Array.prototype.reducer = function(callback,intialValue){
    let acc = intialValue;
    for(let i=0;i<this.length;i++){
        if(acc){
            acc = callback.call(undefined,acc,this[i]);
      
        } else {
            acc = this[i];
        }
    }
    
 return acc;
}

let red = [1,2,3].reducer(((acc,curr) => acc + curr),0);
console.log(red,"red >>>")

Array.prototype.reducer = function(fn,intialValue){
    let acc = intialValue;
    for(let i=0; i<this.length;i++){
        if(acc){
            acc = fn.call(undefined,acc,this[i]);
        } else {
            acc = this[i];
        }
    }
    

}