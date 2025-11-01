class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}


class BinarySearchTree {
  constructor(){
    this.root = null
  }
  insert(value){
    var newNode = new Node(value)
    if(this.root === null){
      this.root = newNode
      return this
    } else {
      var current = this.root;
      while(true){
        if(value < current.value){
          // Is going to left somewhere
          if(current.left === null){
              // Setup a place
              current.left = newNode
              return this
          } else {
            current = current.left
          } 
        }
      }
      find(value){
        if(this.root === null) return false
        var current = this.root, found = false
        while(current && !found){
          if(value < current.value){
          current = current.left
        } else if(value > current.value){
          current = current.right
        } else {
          found = true
        }
      }
    }
      return current 
    }
  }
}


var tree = BinarySearchTree()
// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = newNode(7)
// tree.root.left.right = newNode(9)

tree.insert(10)
