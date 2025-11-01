// Create node
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree
class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    // Breadth First Search
    BFS(){
        var node = this.root,
            data = [], // Empty data array
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.value); // Add to list to return - Value to make it more readable
           if(node.left) queue.push(node.left); 
           if(node.right) queue.push(node.right); 
        }
        return data; // Return data array with nodes
    }

    // Depth First PreOrder”
    DFSPreOrder(){
      var data = []
      function traverse(node){
        data.push(node); // Store node 

        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
      }
      traverse(this.root) // Store the node
      return node // Order to visit the nodes 
    }

    // Depth First PostOrder”
    DFSPostOrder(){
      var data = [] // Data Array
      function traverse(node){
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
        data.push(node); // This only change to store last instead of first
      }
      traverse(this.root) // Store the node
      return node // Order to visit the nodes 
    }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();
tree.DFSPreOrder()
tree.DFSPostOrder()