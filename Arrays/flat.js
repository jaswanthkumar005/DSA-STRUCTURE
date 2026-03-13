//[1,2,[3,4],5,[7,78,[100]]]

function flatten(arr){
    return arr.reduce((acc,curr) => {
        if(Array.isArray(curr)){
             acc.push(...flatten(curr));
            
        } else {
            acc.push(curr)
            
        }
        return acc;
    },[])
}

console.log(flatten([1,2,[3,4],5,[7,78]]))

function flattener(arr){
    return arr.reduce((acc,curr) => {
        if(Array.isArray(curr)){
            acc.push(...flattener(curr))
        } else {
            acc.push(curr)
        }
        return acc;

    },[])
}

console.log(flattener([1,2,[3,4],5,[7,78]]))