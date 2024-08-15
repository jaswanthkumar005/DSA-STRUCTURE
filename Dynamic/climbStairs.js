function climbStairs(n){
    if(n < 4){
        return n;
    }
     let steps = [0,1,2,3];
     for(let i=4;i<=n;i++){
        steps[i] = steps.push(steps[i-1]+steps[i-2]);
     }
 return steps[steps.length-1]
}
console.log(climbStairs(4))