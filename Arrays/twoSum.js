function twoSum(nums,target){
//[2,7,11,15],9
let numVisited = {};
let output = [];
let alreadyVisit = {}; 
let duplicate = [];

for(let i=0; i<nums.length;i++){
   const num = nums[i];
   const secondNum = target - num; 
   //secondNum --> target-num
   if(numVisited[secondNum] !== undefined ){
      //output.push([num,secondNum]);
      output.push(i);
      output.push(numVisited[secondNum]);
      alreadyVisit[num] = true;
      duplicate.push([nums[i],secondNum])
   }
   numVisited[num]=i;
}
console.log(duplicate,"duplicate");
return output;
 
}

console.log(twoSum([2,7,11,15,-2,5],5));
console.log(twoSum([2,7,11,15],9));