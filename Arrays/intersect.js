// [
//     [2,2,1,4,5],
//     [2,2,1,7,8]
// ]

//[2,2,1]


// function intersection(arr){
//     let charMap = {};
//     let counter = {};
//     let count = 0;
//    console.log(arr,"Arr")
//     return arr.reduce((acc,curr) => {
//         if(Array.isArray(curr)){
//             counter[count] = {};
//             count = parseInt(count+1);
//              acc.push(...intersection(curr))
//         } else {
//             charMap[curr] = charMap[curr] + 1 || 1;
//             counter[count] = Array.isArray(counter[count]) ? (counter[count].concat({ [curr]:charMap[curr]})):[];
//             console.log(counter,"counter"); 
//             acc.push(curr);
//         }
//         return acc;

//     },[]);

// }

// console.log(intersection( [[2,2,1,4,5],[2,2,1,7,8]]))

function inter(arr){
    let charMap={};
    let temp = [];

    for(let i = 0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            for(let y of arr[i]){
                if(i > 0 && charMap[y] ){
                    temp.push(y);
                    charMap[y] = charMap[y]-1;
                    console.log(charMap,i,">>>>")
                }
                charMap[y] = charMap[y] + 1 || 1;
                
            }
        }

    }
    return temp.sort((a,b) => a-b);

}
console.log(inter( [[2,2,1,4,5],[2,2,1,7,8],[2,5,8]]))