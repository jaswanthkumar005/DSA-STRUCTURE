//Input: coins = [1,2,5], amount = 11

function coinChange(nums,target){
    let coins = new Array(target+1).fill(Infinity);
    coins[0] = 0;

    for(let j=1;j<coins.length;j++){
        for(let i=0;i<nums.length;i++){
            let coinValue = nums[i];
            if(coinValue <= j){
                coins[j] = Math.min(coins[j],coins[j-coinValue]+1)
            }
            
        }
    }
   return coins[coins.length-1];
}

console.log(coinChange([1,2,5],11))