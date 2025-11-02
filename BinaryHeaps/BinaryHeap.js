class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(element){ 
        this.values.push(element); // Add to the end of array new node
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.values.length - 1; // keep track of newly inserted index
        const element = this.values[index];
        // Keep looping as long as the values element at the parentIndex is < values element at the child index
        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2); // Find Parent index (n - 1) / 2 
            let parent = this.values[parentIndex];

            // Compare new element with parent (root node)
            if(element <= parent) break;

            this.values[parentIndex] = element; // swap
            this.values[index] = parent;
            index = parentIndex; // Change old parent index
        }
    }

    removeExtractMax(){
      // Swap the first value in the values property with the last one
      const max = this.values[0]; // first value
      const end = this.values.pop()

      if(this.values.length > 0){
        this.values[0] = end;
        // Trickle Down
        this.sinkDown()
      }
      
      return max;
    }


    sinkDown(){
      let index = 0 
      const length = this.values.length
      const element = this.values[0]
      while(true){
        let leftChildIndex = 2 * index + 1
        let rightChildIndex = 2 * index + 2

        let leftChild, rightChild;
        let swap = null
        
        if(swap === null) break 

        if(leftChild < length){
          // Access the value
          leftChild = this.values(leftChildIndex)
          if(leftChild > element){
            swap = leftChildIndex
          }
        }
        if(rightChildIndex < length){
          rightChild = this.values(rightChildIndex)
          // Compare
          if( 
            (swap === null && rightChild > element) || 
            (swap !== null && rightChild > leftChild)
          ){
            swap = rightChildIndex
          }
        }
        if(swap === null) break
        this.values[index] = this.values[swap]
        this.values[swap] = element
        index = swap 
      }
    }
}



let heap = new MaxBinaryHeap();
heap.insert(62);
heap.insert(82);
heap.insert(13);
heap.insert(35);
heap.insert(21);
heap.insert(34);
heap.insert(16);




