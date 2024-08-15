/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findMin(nums) {
    
    let left = 0;
    let right = nums.length-1;
    if(nums.length == 1){
        return 0;
    }
    if(nums[left] < nums[right]){
        return 0;
    }

    while(left < right){
   const mid = Math.floor((left+right)/2);
   const midVal = nums[mid];
   const leftVal = nums[left];
   const leftMid = nums[mid-1];
   const rightMid = nums[mid+1];
   if(midVal > rightMid){
    return mid+1;
   } else if(midVal < leftMid){
    return mid;
    
   }

   if(midVal > leftVal){
    left = mid+1;
   } else {
     right = mid-1;
   }
   
    }
};

var search = function(nums, target) {
    let minIndex = findMin(nums);
    console.log(minIndex,"minIndex")
    const left = binarySearch(nums,target,0,minIndex-1);
    console.log(left,"left")
    const right = binarySearch(nums,target,minIndex,nums.length-1);
     console.log(right,"right")
    return Math.max(left,right);
};

function binarySearch(nums,target,left,right){
    while(left <=right){  
        let mid = Math.floor((left+right)/2)
        if(nums[mid] == target){
            return mid
        } else if(nums[mid] < target){
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
 return -1;
}

console.log(search([4,5,6,7,0,1,2],0));
//console.log(binarySearch([4,5,6,7,0,1,2],0))