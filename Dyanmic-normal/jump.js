
function jump(arr){
    let maxReach = 0;
    for(let i=0;i<arr.length;i++){
          if(i > maxReach){
            return false;
          }

        maxReach = Math.max(maxReach,i+arr[i]);
        console.log(maxReach,">>",i)
    }
    return true;
}

console.log(jump([2,3,1,1,4]))
console.log(jump([2,0,1,0,4]))

function JumpGame(arr){
 let n = arr.length;
 let dpArr = new Array(n).fill(false);
 dpArr[0]=true;
 for(let i=1;i<arr.length;i++){
    for(let j=0;j<=i;j++){
        if(dpArr[j] && (j+arr[j]) >= i){
            dpArr[i] = true;
            break;
        }
    }
 }
 console.log(dpArr,"dpArr")
}
console.log(JumpGame([2,3,1,1,4]));
console.log(jump([2,0,1,0,4]))