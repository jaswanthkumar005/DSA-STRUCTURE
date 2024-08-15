//[1,4,0,7]
//[t,f,f,f]

function JumpGame(arr){
    let dpArr = new Array(arr.length).fill(false);
    dpArr[0]=true;
    for(let j=1;j<dpArr.length;j++){
        for(let i=0;i<j;i++){
            if(dpArr[i] && ((i+arr[i]) >= j) ){
                dpArr[j] = true;
                break;
            }
        }

    }
 console.log(dpArr,"dp")

 return dpArr[dpArr.length-1];
}

console.log(JumpGame([1,4,0,7]));
// [true,false,false,false]
// [true,true,false,false]