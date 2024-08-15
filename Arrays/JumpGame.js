function JumpGame(nums){
    let dpValue = new Array(nums.length).fill(false);
    dpValue[0]=true;

    for(let j=1;j<nums.length;j++){
        for(let i=0;i<j;i++){
             if(dpValue[i] && (i+nums[i])>=j){
                dpValue[j]=true;
                break;
             }
        }
    }
 return dpValue[dpValue.length-1];
}

console.log(JumpGame([1,4,0,7]))
//[1,4,0,7]
//[t,t,f,f]
