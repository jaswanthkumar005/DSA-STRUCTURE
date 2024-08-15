function pairWise(n,arr){
    let maxValue = Math.max(...arr);
    let count = 0;
    console.log(maxValue,"product");
    let pairs= [];
    for(let i=1;i<=maxValue;i++){
        for(let j=1;j<=maxValue;j++){

            let x = i;
            let y = j;
            let product = GCD(x,y)* lcm(x,y);
           // console.log(product,"product");
            if(arr.includes(product)){
                pairs.push([x,y]);
                count +=1;
            }

        }
    }
  console.log(pairs);
  return count;
}


function GCD(a,b){
    while(b != 0){
        [a,b] = [b,a%b];
    }

    return a;
}

function lcm(a,b){
    return (a*b)/GCD(a,b);
}

console.log(pairWise(5,[2,10]));
console.log(pairWise(5,[1,2,3,4,5]));
// [1,2,3,4,5]
//[1,2]  --> LCM 2 HCF 1 = 2* 1 =2
//[1,2]
//
//[2,10]

//[1,5] ==> LCM 
