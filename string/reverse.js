function reverse(str){
    let temp = '';

    for(let x of str){
        temp = x + temp;
    }
    return temp;
}

console.log(reverse("testeee"))