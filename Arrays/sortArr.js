function sortArr(left,right){
    let result = [];
    while((left.length)  ){
      if(left[0] < right[0]){
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
    return [...result,...left,...right];
}

console.log(sortArr([1,5,7],[2,6,8]))