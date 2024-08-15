// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
//[0,1,1,2,2,3]

function coinChange(arr,amount){
    let dpArr = new Array(amount + 1).fill(Infinity);
    dpArr[0] = 0;

    for(let j=1;j<dpArr.length;j++){
        console.log(j,"\n");
        for(let i=0; i<arr.length;i++){
            let coinValue = arr[i];
            if(coinValue <= j){
                dpArr[j] = Math.min(dpArr[j - coinValue]+1,dpArr[j]);
              console.log(dpArr)
            }
        }
    }
    return dpArr[dpArr.length-1];
}

console.log(coinChange([1,2,5],11))