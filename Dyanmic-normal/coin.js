function coinChangeDP(arr,value){
 arr = arr.sort((a,b)=> b-a);
 coinCount = 0;
 remaining = value;
 for(let x of arr){
    if(remaining >= x){
         //coin change
         coinCount += Math.floor(remaining/x);
         remaining = remaining % x;
    }
 }
 console.log(coinCount,"coinCount");
 return coinCount;
}

console.log(coinChangeDP([1,2,5],11));