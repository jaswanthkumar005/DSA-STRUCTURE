function lis(num){
// [1,4,0,7]
//[1,1,1,1]
let max = 1;
let dpArr = new Array(num.length).fill(1);
   for(let j=1;j<num.length;j++){
      for(let i=0;i<j;i++){
         if(num[j] > num[i]){
            dpArr[j]=Math.max(dpArr[j-1]+1,dpArr[j]);
         }
      }
      max = Math.max( dpArr[j],max);
   }
   return max;
}
console.log(lis([1,4,0,7]))