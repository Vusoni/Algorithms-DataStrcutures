class Node {
  constructor(val) {
    this.val = val
    this. next = null
  }
}

class SinglyLinkedList{
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val){

    /* ~ PUSHING ~ 
    1) This function should accept a value,
    2) Create a new node using the value passed to the function
    3) If there is no head property on the list, set the head and tail to be the newly created node
    4) Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    5) Increment the length by one
    6) Return the linked list. */

    var newNode = new Node(val); // 2.
    if(!this.head){ // 3.
      this.head = newNode 
      this.tail = this.head
    } else { // 4.
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++ // 5.
    return this // 6.
  }
  
  /* POPPING 
  1) If there are no nodes in the list, return undefined
  2) Loop through the list until I reach the tail
  3) Set the next property of the 2nd to last node to be null
  4) Set the tail to be the 2nd to last node
  5} Decrement the length of the list by 1
  6) Return the value of the node removed */

  pop(){
    if(!this.head) return undefined // 1.
    var current = this.head
    var newTail = current
    while(current.next){ // 2.
      newTail = current
      current = current.next
    }
    this.tail = newTail // 3.
    this.tail.next = null 
    this.length--; // 4.

    // If there will be 0 item then remove head and tail
    if(this.length === 0){
      this.head = null
      this.tail = null
    }
    return current; // 5.
  }

  /* ~ SHIFTING
  1) If there are no nodes, return undefined
  2) Store the current head property in a variable
  3) Set the head property to be the current head's next property
  4) Decrement the length by 1
  5) Return the value of the node removed */

  shift(){
    if(!this.head) return undefined // 1.
    var currentHead = this.head // 2.
    this.head = currentHead.next // 3.
    this.length-- // 4.
    // Clean after 0 value
    if(this.length === 0){
      this.tail = null
    }
    return currentHead // 5.
  }
  /* ~ UNSHIFTING
  1) The function should accept a value
  2) Create a new node using the value passed to the function
  3) If there is no head property on the list, set the head and tail to be the newly created node
  4) Otherwise set the newly created node's next property to be the current head property on the list
  5) Set the head property on the list to be that newly created node
  6) Increment the length of the list by one
  7) Return the linked list
  */
 unshift(val){ // 1.
  var newNode = new Node(val) // 2.
  if(!this.head){ // 3.
    this.head = newNode // 4.
    this.tail - this.head 
  } else { // Prevent error
    newNode.next = this.head // 5.
    this.head = newNode
  }
 this.length++; // 6.
 return this // 7.
 }

 /* ~ Get
 1) This function should Accept an index
 2) If the index is < 0 or >= to the length of the list, return undefined / null 
 3) Loop through the list until I reach the index and return a node at that specific index */
 get(index){
  if(index < 0 || index >= this.length) return undefined
  var counter = 0
  var current = this.head
  while(counter !== index){
    current = current.next
    counter++
  }
  return current
 }

 /* ~ Set
 1) This function should Accept a value and an index
 2) Use my get function to find specific node
 3) If the node is not found return false
 4) If the node is found, set the value of that node to be the value passed to the function and return true
 */
 set(val, index){ // 1.
  var foundNode = this.get(index) // 2. 
  if(foundNode){ // 3.
    foundNode.val = val // 4.
    return true
  } 
  return false
 }
/* ~ Insert
 1) Takes index and value
 2) If index is < 0 or > this.length, return false
 3) If the index is the same as the length, push a new node to the end of the list
 4) If the index is 0, unshift a new node to the start of the list
 5) Otherwise, using the get method, access the node at the index -1
 6) Set the next property on the node to be new node
 7) Set the next property on the new node to be the previous next
 8) Increment the length
 9) Return true 
*/
insert(val, index){
  if(index < 0 || index > this.length) return false // 2. 
  if(index === this.length) return !!this.push(val) // 3.
  if(index === 0) return !!this.unshift(val) // 4. - converting into boolean "!!"
  var newNode = new Node(val) // 6.
  var prev = this.get(index - 1) // 5. 
  // Temporary variable
  var temp = prev.next
  prev.next = newNode // 7. 
  newNode.next = temp
  this.length++ // 8.
  return true // 9.
  }

  /* ~ Remove
  1) If the index is s< 0 or > this.length return undefined
  2) If the index is the same as this.length-1, pop
  3) If the index === 0, shift
  4) Otherwise, using the "get" method, access the node at the index -1
  5) Set the next property on that node to be the next of the next node
  6) Decrement the length
  7) Return the value of the removed value
  */
 remove(index){
  if(index < 0 || index >= index.length) return undefined
  if(index === 0) return this.shift()
  if(index === this.length - 1) return this.pop()
    var previousNode = this.get(index-1)
  var removed = previousNode.next
  previousNode.next = removed.next
  this.length--
  return removed
 }
 /* ~ Reverse
  1) Swap the head and tail
  2) Create variable called next, prev
  3) Create variable node and initialize it to the head property
  4) Loop through the list and make elements swap to next 
  */
 reverse(index){
   var node = this.head
  this.head = this.tail // 1.
  this.tail = this.head
  
  var prev = null // 3.
  var next
  // Start Looping
  for(var i = 0; i < this.length; i++){
    next = node.next
    node.next = prev
    prev = node
    node = next
  }
  return this
 }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("World")
list.push("!")



// traverse(){
  //   var current = this.head 
  //   while(current){
  //     console.log(current.val);
  //     current = current.next
   
  //   }
  // }
