const Stack = require('./stack');

class QForm{
    constructor(){
        this.first = new Stack();
        this.last=new Stack();
    }
    add(data){
        this.first.push(data);
    }

    remove(){
        while(this.first.peek()){
            this.last.push(this.first.pop());
        }
        const record = this.last.pop();
        while(this.last.peek()){
            this.first.push(this.last.pop())
        }
        return record;
    }
    peek(){
        while(this.first.peek()){
            this.last.push(this.first.pop());
        }
        const record = this.last.peek();
        while(this.last.peek()){
            this.first.push(this.last.pop())
        }
        return record
    }

}

const q = new QForm();

q.add("A");
q.add("B");
q.add("C");
console.log(q.peek());
console.log(q,"q>>");
q.remove();
console.log(q,"q>>");
