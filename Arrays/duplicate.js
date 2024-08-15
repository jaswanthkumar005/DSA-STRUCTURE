function duplicate(arr){
    let charMap = {};
    for(let char of arr){
        charMap[char] = charMap[char]+1||1;
    }

    console.log(Object.keys(Object.fromEntries(Object.entries(charMap).sort(([,a],[,b]) => {
     return b-a;
    }))))

}

console.log(duplicate(["a","a","a","b","c","a","b"]));


//["a","a","a","b","c","a","b"]

let z = {"a":2};

function findSecondObj(z){
    let maxChar;
    let max=0;
    let prevChar;


    for(let x in z){
         if(z[x] > max){
            prevChar = maxChar
            maxChar = x;
            max=z[x];
         }
    }
  return prevChar?prevChar:maxChar;
}

console.log(findSecondObj(z))