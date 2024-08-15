class Queue{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.unshift(data);
    }
    remove(){
        let node = this.data.pop();
        return node;
    }
    peek(){
        return this.data[this.data.length-1];
    }
}

const q = new Queue();
q.add("A");
q.add("B");
q.add("C");
console.log(q,"q>>>");
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());