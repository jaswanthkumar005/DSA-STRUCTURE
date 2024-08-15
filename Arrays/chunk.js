//[1, 2, 3, 4, 5], 2 --> [1,2] [3,4] [5]

function chunk(arr,len){
    let temp = [];

    for(let i=0;i<arr.length;i++){
        last = temp[temp.length-1];
        if(!last || last.length ==2){
            temp.push([arr[i]]);
        } else{
            last.push(arr[i])
        }
    }
    return temp;
}
console.log(chunk([1, 2, 3, 4, 5],2))

//chunk([1, 2, 3, 4], 2) 

function chuncked(arr,size){
    let res = [];
    let index = 0;
    while(index < arr.length){
        res.push(arr.slice(index,index+size));
        index += size;
    }
   return res;
}
console.log(chuncked([1, 2, 3, 4, 5],2),"chuncked")