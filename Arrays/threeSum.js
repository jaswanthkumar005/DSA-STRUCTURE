function threeSum(arr,tar){

    arr.sort((a,b) => a-b);
    const res = [];
    
    for(let i=0; i<arr.length;i++){
        let target = tar-arr[i];
        let left = i+1;
        let right = arr.length-1;
        if( i > 0 && (arr[i-1] == arr[i])){
            continue;
        }

        while(left < right){
            if((arr[left]+arr[right])== target){
                 res.push([arr[left],arr[right],arr[i]]);
                 left++;
                 while(arr[left] == arr[left-1]){
                    left++;;
                 }
            } else if((arr[left]+arr[right]) < target) {
                left++;
            } else {
                right--;
            }
        }

    }

  return res;
}

console.log(threeSum([-1,0,1,2,-1,-4],0),"test")