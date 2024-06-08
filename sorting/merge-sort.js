// [100, -40, 500, -124, 0, 21, 7];
console.log(mergeSort([100, -40, 500, -124, 0, 21, 7]))
function mergeSort(arr){
    if(arr.length == 1){
        return arr;
    }
    const center = Math.floor(arr.length/2);
    const left = arr.slice(0,center);
    const right = arr.slice(center);

    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let result = [];
      if(left[0] < right[0]){
        result.push(left.shift());
      } else if(left[0] > right[0]){
        result.push(right.shift());
      }

      return [...result,...left,...right]
}

