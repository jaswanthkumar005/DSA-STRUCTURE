let a = [1,2,3];
let b = ["a","b","c"];

function alternative(a,b){
    let res = [];

    while(a.length > 0 || b.length > 0){
        if(a.length > 0){
            res.push(a.shift());
        }

        if(b.length > 0){
            res.push(b.shift());
        }
       
       
    }

    return res;

}

console.log(alternative([1,2,3],["a","b","c"]))