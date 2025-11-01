// Construct Node
class Node{
  constructor(val){
    this.val = val
    this.next = null
    this.prev = null
  }
}



class DoublyLinkedList {
  constructor(){
    this.head = null
    this.tail - null
    this.length = 0
  }
  push(val){
    var  newNode = new Node(val)
    if(this.length === 0){
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop(val){
    if(!this.head) return undefined
    var poppedNode = this.tail
    if(this.length === 1){
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev // 4. 
      this.tail.next = null // 5.
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  } 
  shift(val){
    if(this.length === 0) return undefined
    var oldHead = this.head
    if(this.length === 1){
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next // Set head to oldHead next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }

/* Unshift Pseudocode
1. Create a new node with the value passed to the function
2. If the length = 0(Set the head and tail to be a new node )
3. Otherwise (Set the prev property on the head to new node, set the next property on a new node to be the head property, Update the head to be a new node )
4. Increment the length
5. Return new list
*/
  unshift(val){
    var newNode = new Node(val) // Create new node with that passed value
    if(this.length === 0){
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    } this.length++
    return this
  }
  
  get(index){
    if(index < 0 || index >= this.length) return undefined
    var count = current

    if(index <= this.length / 2){
       //Left part (head)
      count = 0
      current = this.head
      while(count != index){
        current = current.next
        count++
    }   
    } else {
      // Right Part (tail)
      count = this.length -1 // Last item and subtract each time
      current = this.tail
      while(count !== index){
        current = current.prev
        count--
      }
    }
    return current
  }


  set(index, val){
    var foundNode = this.get(index)
    if(foundNode != null){
      foundNode.val = val
      return true
    }
    return false 
  }


  insert(index, val){
    if(index < 0 || index >= this.length) return false
    if(index === 0) return !!this.unshift(val) // Turn Into boolean "!!"
    if(index === this.length) return !!this.push(val) // Turn into boolean "!!"

    var newNode = new Node(val)
    var beforeNode = this.get(index-1)
    var afterNode = beforeNode.next
    
    beforeNode.next = newNode, newNode.prev = beforeNode
    newNode.next = afterNode, afterNode.prev = newNode

    this.length++
    return true
  }

  remove(index){
    if(index < 0 | index >= this.length) return undefined
    if(index === 0) return this.shift()
    if(index === this.length -1) return this.pop()

    var removedNode = this.get(index)
    var beforeNode = removedNode.prev
    var afterNode = removedNode.next

    beforeNode.next = afterNode
    afterNode.prev = beforeNode
    
    removedNode.next = null
    removedNode.prev = null

    this.length--
    return removedNode
  }
}







/* ~ Push Pseudocode 
1. Create a new node with the value passed to the function
2. If the head property is null set the head and tail to be the newly created node
3. If not, set the next property on the tail to be that node
4. Set the tail to be the newly created node
5. Increment the length (this.length++)
6. Return the Doubly Linked List
*/


/* Pop Pseudocode
1. If there is no head, return undefined
2. Store the current tail in a variable to return later
3. If the length is 1, set the head and tail to be null
4. Update the tail to be the previous node
5. Set the newTail's next to pull
6. Decrement the length, (Because i popped
7. Return the valued list)
*/


/* Shift Pseudocode
1. If length is 0, return undefined
2. Store the current head property in a variable ("Old head")
3. If the length is one (Set the head to null and tail)
4. Update the head to be the next of the old head
5. Set the head's prev property to null
6. Set the "old head's" next to null
7. Decrement the length
8. return old head 
*/


/* Unshift Pseudocode
1. Create a new node with the value passed to the function
2. If the length = 0(Set the head and tail to be a new node )
3. Otherwise (Set the prev property on the head to new node, set the next property on a new node to be the head property, Update the head to be a new node )
4. Increment the length
5. Return new list
*/

/* Get Pseudocode
1. If the index < 0 or >= this.length - return null
2. If the index < half this.length (Loop through the list starting from the head and loop towards the middle. Return the node once it's found)
3. If the index > half this.length (Loop and start from tail and loop towards the middle, Return the node once it's found) 
*/


/* ~ Remove Pseudocode 
1. If the index < 0 or >= this.length return undefined
2. If the index is 0, shift
3. if the index is the same as the length-1, pop
4. Use get to retrieve item to be removed
5. Update the next and prev properties to remove the found node from the list
6. Set next and prev to null on the found node
7. Decrement the length
8. Return the removed node
*/