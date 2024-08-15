// head --> only linked list connection
// Node[data,next]

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    insertFirst(data){
        this.head = new Node(data,this.head);
    }
    getLast(){
        if(!this.head){
            return null;
        }
       let node = this.head;
       while(node){
        if(!node.next){
         return node;
        }
        node = node.next;
       }
    }

    insertAtLast(data) {
        let node = this.getLast();
        if (node) {
            node.next = new Node(data, null);
        } else {
            this.head = new Node(data, null);
        }
    }
    size(){
        if(!this.head){
            return 0;
        }
        let node = this.head;
        let count=0;
        while(node){
            count++;
            node = node.next;
        }
      return count;
    }
    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }
    removeLast(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head=null;
            return;
        }
        let prev = this.head;
        let node = this.head.next;
        while(node.next){
            prev = node;
            node = node.next;
        }
        prev.next = null;
    }

    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }
    getAt(index){
        let node = this.head;
        let counter=0;
        while(node){
            if(counter == index){
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;

    }
    removeAtIndex(index){
        if(!this.head){
            return
        }
        if(index == 0){
            this.head = this.head.next;
        }
        let prev = this.getAt(index);
        if(!prev && !prev.next){
            return;
        }
        prev.next = prev.next.next;
    }
    insertDataAtIndex(data,index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        if(index == 0){
            this.head = new Node(data,this.head.next);
            return;
        }

        let prev = this.getAt(index-1) || this.getLast();
        let node = new Node(data,prev.next);  
        prev.next = node;  

    }
    forEach(fn){
        let node = this.head;
        let counter = 0;
        while(node){
            fn(node);
            counter++;
            node = node.next;
        }

    }
    getFirst(){
        return this.head;
    }
}

const link = new LinkedList();
link.insertAtLast(1);
link.insertAtLast(2);
link.insertAtLast(3,2);
link.insertAtLast(4);
console.log(JSON.stringify(link),"link>>>")
console.log(link.size())
//link.forEach((node)=> node.data +=2);
//console.log(JSON.stringify(link),"link>>>1>>")

function fromLastList(link,n){
    let slow = link.getFirst();
    let fast = link.getFirst();

    while(n > 0){
        fast = fast.next;
        n--;
    }

    while(fast.next){
        slow = slow.next;
        fast=fast.next;
    }

    return slow;

}

console.log(fromLastList(link,2),">>>;p")


function forMidList(link){
    let slow = link.getFirst();
    let fast=link.getFirst();

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast=fast.next.next;
    }

    return slow;

}
console.log(forMidList(link),"mid")
function forCircularList(link,n){
    let slow = link.getFirst();
    let fast=link.getFirst();

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast=fast.next.next;
        if(slow == fast){
            return true;
        }
    }

    return true;

}

