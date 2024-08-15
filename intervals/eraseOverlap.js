
//[[1,100],[1,2],[3,4]]
function eraseOverlap(arr){

    arr.sort((a,b) => a[0]-b[0]);
    let intial = arr[0];
    let temp = [];
    let count=0;
    for(let i=1;i<arr.length;i++){
        let interval = arr[i];
        if(interval[0] < intial[1]){
            // intersection of two 
            let arr1 = intial;
            let arr2 = interval;
            console.log(arr1,">>>",arr2);
            
            
            if(intial[1] < interval[1]){
                count++
                intial =intial;
                temp.push(interval);
            } else {
                intial = arr[i];
                temp.push(intial);
            }
           
          
           console.log(intial,"intial");
        } else {
            intial = arr[i]
        }
       
       
    }
    console.log(temp,"temp>>>")
  return count;
}

console.log(eraseOverlap([ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ], [ 3, 4 ] ]))

// [ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ], [ 3, 4 ] ] intervals
// [ [ 1, 2 ], [ 1, 3 ] ] temp>>>