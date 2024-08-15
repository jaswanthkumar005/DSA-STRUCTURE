class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    inserData(data){
        if( data < this.data && this.left){
             this.left.inserData(data);
        } else if(data < this.data){
             this.left = new Node(data)
        } else if( data > this.data && this.right){
            this.right.inserData(data);
        } else if(data > this.data){
            this.right = new Node(data);
        }

    }
    containsData(data){
       if(this.data == data){
          return this;
       }
       if( data < this.data && this.left){
          return this.left.containsData(data)
       }else if( data > this.data && this.right){
        return this.right.containsData(data)
     }
     return null;
    }
}

const bst = new Node(10);
bst.inserData(8);
bst.inserData(11);
bst.inserData(12);
console.log(bst,"bst");
console.log(bst.containsData(15));