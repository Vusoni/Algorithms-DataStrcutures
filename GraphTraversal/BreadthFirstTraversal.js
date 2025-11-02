/* ~ Breadth First
1. Should accept a starting vertex
2. Create a queue
3. Create and array to store the node visited
4. Create an object to store nodes visited
5. Mark the starting vertex as visited
6. Loop as long as there is anything in the queue
7. Remove the first vertex from the queue and push it into the array that stores node visited
8. Loop over each vertex from the queue and push it into the array that stores nodes visited 
9. Loop over each vertex in the adjacency list for the vertex you are visiting.
10. If it isn't inside the object that stores nodes visited, mark it as visited and enqueue that vertex
11. Once I have finished looping, return the array of visited nodes
*/


class Graph {
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(firstVertex, secondVertex){
    this.adjacencyList[firstVertex].push[secondVertex]
    this.adjacencyList[secondVertex].push[firstVertex]
  }

  removeEdge(firstVertex, secondVertex){
    // Reassign values and filter it 
    this.adjacencyList[firstVertex] = this.adjacencyList[firstVertex].filter(
      v => v !== secondVertex
    );
    this.adjacencyList[secondVertex] = this.adjacencyList[secondVertex].filter(
      v => v !== firstVertex
    );
  }

  removeVertex(vertex){
    if(vertex) {

      while(this.adjacencyList[vertex].length){
        const adjacencyVertex = this.adjacencyList[vertex].pop()
        this.removeEdge(vertex, adjacencyVertex)
      }
      delete this.adjacencyList[vertex]
    } else {
      console.log(error); 
    }
  }
  // Breadth First
  breadthFirst(startingNode){
    let currentVertex

    // Mark start as visited 
    visited[startingNode] = true


    const queue = [startingNode]
    const result = []
    const visited = {}


    while(queue.length){
      currentVertex = queue.shift()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }
    return result
  }
}


// Graph Setup
let g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addVertex("A", "B")
g.addVertex("A", "C")
g.addVertex("B", "D")
g.addVertex("C", "E")
g.addVertex("D", "E")
g.addVertex("D", "F")
g.addVertex("E", "F")
