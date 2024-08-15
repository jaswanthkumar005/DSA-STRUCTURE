class Node{
    constructor(data){
        this.data = data;
        this.children = [];
    }
    add(data){
        this.children.push(new Node(data))
    }
    remove(data){
        this.children.filter((node) => {
             return node.data != data;
        });
    }
}

class Tree{
    constructor(){
        this.root = null;
    }
    traverseBF(fn){
         let arr = [this.root];
         while(arr.length){
            let node = arr.shift();
            arr.push(...node.children);
            fn(node)
         }
    }
    traverseDF(fn){
        let arr = [this.root];
        while(arr.length){
           let node = arr.shift();
           arr.unshift(...node.children);
           fn(node)
        }
   }
}


const t = new Tree();
t.root = new Node("A");
t.root.add("B");
t.root.add("C");
t.root.children[0].add("D");
console.log(JSON.stringify(t),"t>>")
let bf = [];
let df=[];
t.traverseBF((node)=> {
  //console.log(node.data);
  bf.push(node.data)
});
t.traverseDF((node)=> {
    //console.log(node.data);
    df.push(node.data)
  })
  console.log(bf,"bf>>")

function levelWidth(root){
    let main = root.root;

    let arr = [main,{data:"J"}];
    let res = [0];
    let counter=0;
    while(arr.length > 1){
        let node = arr.shift();
        counter++;
       
        if(node.data == "J"){
            res.push(0);
            arr.push({data:"J"})
            counter=0;
        } else {
            arr.push(...node.children);
            res[res.length-1]++;
        }

    }
    return res;

}
console.log(levelWidth(t))