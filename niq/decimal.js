function decimal(n){
    let arr = [];

    while(n >0){
        let val = n;
        n = Math.floor(val/2);
        console.log(n);
        arr.push( Math.floor(val%2));

    }
    return arr.reverse().join("");
}
console.log(decimal(56));