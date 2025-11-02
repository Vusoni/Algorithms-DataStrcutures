/* ~ Depth First Traversal (Iterative)
~ Function should accept a starting node
~ Make a stack to help keep track of vertices (use a list/array)
~ Create a list to store the end result, to be returned at the very end
~ Create an object to store visited vertices
~ Add the starting vertex to the stack, and make it visited
~ While the stack has something in it:
            _ Pop the next vertex from the stack
            _ If that vertex hasn't been visited yet:
                    Add it to the result list
                    Push all of its neighbors into the stack
                    Mark it as visited */

 

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
  // Recursive Function
  depthFirstIterative(startingNode){
    let currentVertex 

    const result = []
    const stack = [startingNode] // Add stack
    const visited = {}
    

    visited[startingNode] = true // Manage what has been visited

    while(stack.length){
      currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true
          stack.push(neighbor)
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
