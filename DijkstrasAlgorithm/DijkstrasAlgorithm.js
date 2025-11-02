/* Dijkstra's Pseudocode
1. This function should accept a starting and ending vertex
2. Create an object (distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
3. After setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where you begin
4. Create another object called "previous" and set each key to be every vertex in the adjacency list with a value of null
5. Start looping as long as there is anything in the priority queue
      ~ Dequeue a vertex from the priority queue
      ~ If that vertex is the same as the ending vertex - You are done!
      ~ Otherwise loop through each value in the adjacency list at that vertex
                | Calculate the distance to that vertex from the starting vertex
                | If the distance is less than what is currently stored in your distance object
                        < Update the distances object with new lower distance
                        < Update the previous object to contain that vertex
                        < enqueue the vertex with the total distance from the start node */




class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(firstVertex, secondVertex, weight){
    this.adjacencyList[firstVertex].push({node: secondVertex, weight})
    this.adjacencyList[secondVertex].push({node: firstVertex, weight})
  }


  //Dijkstra's Algorithm
  Dijkstra(start, finish){
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    let smallest;

    // Build up initial State
    for(let vertex in this.adjacencyList){
      if(vertex === start){
        distances[vertex] = 0;
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null // That gives you initial state
    }
    // If there is anything to visit
    while(nodes.values.length){
      smallest = nodes.dequeue().val()
      if(smallest === finish){
        // You are done at this stage ->  Build up path to return at the end

        while(previous[smallest]){
          // Update what smallest is
          path.push(smallest)
          smallest = previous(smallest)
        }
        break; // Stop Loop
      }
      if(smallest || distances[smallest] !== Infinity){
        // Find Neighbor node / vertex
        for(let neighbor in this.adjacencyList[smallest]){
          let nextNode = this.adjacencyList[smallest][neighbor]
          
          // Calculate the Distance
          let candidateNode = distances[smallest] + nextNode.weight
          let nextNeighborNode = nextNode.node

          // Update smallest distance to neighbor node 
          if(candidateNode < distances[nextNeighborNode]){
            distances[nextNeighborNode] = candidateNode
            // Data structure - "How you got to the neighbor node"
            previous[nextNeighborNode] = smallest
            // Enqueue in priority queue with enw priority
            nodes.enqueue(nextNeighborNode, candidateNode)
          }
        }
      }
    }
    // Reverse
    return path.concat(smallest).reverse()
  }
}

// Improved Priority Queue (Faster)
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();

        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}
// Part of Priority Queue
class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}




// Graph Setup
var graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")


graph.addEdge("A", "B", 5)
graph.addEdge("A", "C", 1)
graph.addEdge("B", "D", 2)
graph.addEdge("C", "E", 5)
graph.addEdge("C", "F", 2)
graph.addEdge("D", "E", 2)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 7)


graph.Dijkstra("A", "D");




// `Vertex - A node

// `Edge - connection between nodes

// `Weighted/Unweighted - values assigned to distances between vertices

// `Directed/Undirected - directions assigned to distanced between vertices