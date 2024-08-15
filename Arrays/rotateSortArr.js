function rotateSortArr(arr){
  let left = 0;
  let right = arr.length-1;
  if(arr[left] < arr[right]){
    return arr[left];
  }
  while(left <=right){
    const mid = Math.floor((left+right)/2);
    const leftVal = arr[left];
    const leftMid = arr[mid-1];
    const rightMid = arr[mid+1];
    const midVal = arr[mid];
    console.log(midVal,"midVal-outer");
    console.log(leftVal,"leftVal-outer");
    console.log(rightMid,"rightMid");
    console.log(leftMid,"leftMid");
    console.log(">>>><<<<<");
    if(midVal > rightMid){
        return rightMid;
    } else if(midVal < leftMid){
        return midVal;
    }
    //console.log(midVal,"midVal");
    //console.log(leftVal,"leftVal");

    if(midVal > leftVal){
        left = mid+1;
    } else {
        right = mid-1;
    }
  }
}
console.log(rotateSortArr([3,5,6,7,10,1,2]),"etst");

/* 
left=0;
right=arr.length-1;
base1: if(arr[left]< arr[right]) return arr[left]

while(left <= right){  
let mid = Math.floor((left+right)/2);
let midVal = arr[mid];
let leftMidVal = arr[mid-1];
let rightMidVal= arr[mid+1];
let leftValue = arr[left];
if(midVal > rightMidVal){
  return midVal;
} else if( midVal < leftMidVal){
   return leftMidVal;
}
 if(midVal > leftValue){
   left = mid+1;
 } else {
  right=mid-1;
}
}

*/