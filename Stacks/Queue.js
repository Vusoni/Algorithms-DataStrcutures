class Node {
  constructor(value){

  }
}


class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size
  } 
  
  enqueue(val){
      var newNode = new Node(val)
      if(!this.first){
        this.first = newNode
        this.last = newNode
      } else {
        this.last.next = newNode
        this.last = newNode
      } 
      return ++this.size
    }

    
    dequeue(){
      if(!this.first) return null

      var temp = this.first 
      if(this.first === this.last){
        this.last = null  
      }
      this.first = this.first.next
      this.size--
      return temp.value
    }
}


/* ~ Enqueue Pseudocode
1. Function accepts some value
2. Create a new node using that value passed to the function
4. If there are no nodes in the queue, set this node to be the first and last property of the queue
*/


