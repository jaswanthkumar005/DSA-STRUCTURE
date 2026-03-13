// [[1,2,3],
// [4,5,6],
// [7,8,9]]

// [[1,4,7],[2,5,8][3,6,9]]
//[[1,7,4],[2,8,5],[3,9,6]]
function trans(arr){
   let out = arr.map((x)=>[]);
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++){
            out[j][i] = arr[i][j]
        }
    }
return out;
}

console.log(trans([[1,2,3],
    [4,5,6],
    [7,8,9]]))

function transfer(arr){
    let top = 0;
    let bottom=arr.length-1;
    let left=0;
    let right=arr[0].length-1;
    let dir = "left";
    let out = arr.map(x => []);
    while((top <= bottom) && (left <= right)){
        if(dir == "left"){
            console.log(top,"curr top")
            for(let i=0;i<=(arr[0].length-1);i++){
                out[i][left] = arr[top][i]
            }
            console.log(out,"left")
            top++;
            left++;
            dir = "right";
        }else if(dir == "right"){
            for(let i=0;i<=(arr[0].length-1);i++){
                out[i][right] = arr[top][i]
            }
            console.log(out,"right")
            top++;
           right--;
            
            dir = "left";
        }
    }

 return out;
}
console.log(transfer([[1,2,3],
    [4,5,6],
    [7,8,9]]))

