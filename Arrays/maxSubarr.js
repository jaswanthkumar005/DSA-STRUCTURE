function maxSubArr(arr){
    let max = arr[0];
    let dpValue = [arr[0]];
    for(let i=1;i<arr.length;i++){
        dpValue[i] = Math.max(dpValue[i-1]+arr[i],arr[i]);
       max = Math.max(dpValue[i],max)
    }
  return max;
}
console.log(maxSubArr([5,4,-1,7,8]))

//[5,4,-1,7,8]]
//[5]
//[5+4,4]-->[5,9]
//[9-1,-1]--> [5,9,8]
//[8+7,7] --> [5,9,8,15]
//[15+8,8]--> [5,9,8,15,23]