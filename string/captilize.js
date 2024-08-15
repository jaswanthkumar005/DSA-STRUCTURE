function captilize(str){
    let word = [];

    for(let x of str.split(" ")){
        word.push(x[0].toUpperCase()+x.slice(1));
       
    }
   console.log("block".slice(1))

    return word.join(" ");

}

console.log(captilize("the test for dun"));