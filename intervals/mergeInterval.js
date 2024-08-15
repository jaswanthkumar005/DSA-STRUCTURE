//[[1,3],[2,6],[8,10],[15,18]]

function mergeInterval(arr){
    arr.sort((a,b) => a[0]-b[0])
    let initial = arr[0];
    const res = [arr[0]];
    for(let i=0; i<arr.length;i++){
        let currentInterval = arr[i];
        last = res[res.length-1];
        if(currentInterval[0] <= last[1]){
            last[1]=Math.max(currentInterval[1],last[1])
        } else {
            res.push(currentInterval);
        }
    }
    return res;
}

console.log(mergeInterval([[1,3],[2,6],[8,10],[15,18]]))