// [1,4,0,8];
// [1,1,1,1]
// [1,2,1,3] Dynamic\longestIncreasingSubsquence.js

function lis(arr){ 
    let dpArr = new Array(arr.length).fill(1);
    for(let j=1;j<arr.length;j++){
        for(let i=0;i<j;i++){
            if(arr[j] > arr[i]){
                dpArr[j] = Math.max(dpArr[j],dpArr[i]+1)
            }
        }
    }

    return dpArr;

}

console.log(lis([1,4,0,8]))