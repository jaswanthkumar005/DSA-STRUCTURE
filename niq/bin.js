function bin(b){
    //1001
    let len = b.toString().length;
    console.log(len,"len");
    let arr = b.toString().split("");
    //8421
    let product = 0;
    for(let i=0;i<len;i++){
        let n = len-i-1;
        if((arr[i] == 1) && (n >= 0) ){
            product = (product ) + Math.pow(2,n);
        }
        
        
    }
    return product;
}
console.log(bin(1111));