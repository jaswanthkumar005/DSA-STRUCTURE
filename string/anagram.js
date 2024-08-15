function anagaram(str,str1){
    const node = str.replace(/[\W_]/g,"").toLowerCase().split("").sort().join("");
    const node1 = str1.replace(/[\W_]/g,"").toLowerCase().split("").sort().join("");
    console.log(node == node1);

}

console.log(anagaram('rail safety','fairy taless'));