
function productSelfArr(arr){
    let product = 1;
    let output = arr.map(val => 1);
    console.log(output,"output");
    for(let i=0;i<arr.length;i++){
        output[i] = product * output[i];
        product = product * arr[i];
    }
    product=1;
    for(let i=(arr.length-1);i>=0;i--){
        output[i] = product * output[i];
        product = product * arr[i];
    }
    return output;
}
console.log(productSelfArr([1,2,3,4]));