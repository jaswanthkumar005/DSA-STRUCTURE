function spiral(arr){
    // right --> bottom --> left --> top
    let top = 0;
    let bottom = arr.length-1;
    let right = arr[0].length-1;
    let left = 0;
    let dir = "right";
    let spiralArray = [];
    while((top <= bottom) && (left <= right)){
        if(dir == "right"){
            for(let i=left;i<=right;i++){
                spiralArray.push(arr[top][i]);
            }
            dir ="bottom";
            top++;
        } else if(dir =="bottom"){
           for(let i=top;i<=bottom;i++){
            spiralArray.push(arr[i][right]);
           }
           dir ="left";
           right--;
        } else if(dir == "left"){
            for(let i=right;i>=left;i--){
                spiralArray.push(arr[bottom][i]); 
            }
            dir = "top";
            bottom--;
        } else if(dir == "top"){
            for(let i=bottom;i>=top;i--){
                spiralArray.push(arr[i][left]); 
            }
            left++;
            dir = "right"
        }


    }

  return spiralArray;
}


console.log(spiral([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));