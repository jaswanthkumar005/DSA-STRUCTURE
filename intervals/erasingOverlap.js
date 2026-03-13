//[[1,2],[2,3],[3,4],[1,3]]
//[[1,2],[1,3],[2,3],[3,4]].
[[1,3],[2,3],[2,5],[3,6],[7,8]]
function eraseOverlap(arr){
    arr.sort((a,b) => a[0]-b[0]);
    let res = [arr[0]];
   let count = 0;
    for(let i=1;i<arr.length;i++){
        let curr = arr[i];
        let last = res[res.length-1];
        if(curr[0] < last[1]){
            //intersection happened
           // console.log(curr,"curr");
            count++;
            console.log(curr,"curr",last)
            last = differenceInterval(curr,last);
            res[res.length-1] = last;
            
           // last[1] = Math.min(last[1],curr[1]);
            console.log(last,"last",res)

        }else {
            res.push(curr);
        }
    }
    console.log(res,"res>>");
    console.log(count,"<<count")
  return res;
}

console.log(eraseOverlap([[1,3],[2,3],[2,5],[3,6],[1,6]]));

function differenceInterval(a,b){
    if((a[1]-a[0]) < (b[1] -b[0])){
        return a;
    } else {
        return b;
    }
}