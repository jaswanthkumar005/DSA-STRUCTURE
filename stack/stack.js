class Stack{
    constructor(){
        this.data = [];
    }
    push(data){
        this.data.push(data)
    }
    pop(){
       let node = this.data.pop();
       return node;
    }
    peek(){
        return this.data[this.data.length-1]
    }
}

const s = new Stack();
s.push("A");
s.push("B");
s.push("C");
console.log(s);
console.log(s.peek()) ;
// s.pop();
// console.log(s);

// 

module.exports = Stack;