/* ~ DepthFirstTraversal - Recursive
1. Recursively (Function call itself again)
2. Function accept a starting node 
3. List to store the end result, to be returned at the very end
4. Add visited vertices

5. Helper function (RECURSIVE FUNCTION)
        - Helper function should return early if the vertex is empty
        _ Should place the vertex it accepts into the visited object and push that vertex into the result array
        _ Loop over all of the values in the adjacency list for that vertex
        _ If any of those values haven't been visited, RECURSIVELY invoke the helper function with that vertex

6. Invoke the helper function with the starting vertex
7. Return result array
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
  // Recursive Function
  depthFirstRecursive(startingNode){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyVertex

    (function dfs(vertex){
      if(!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      console.log(adjacencyVertex[vertex]).forEach(neighbor => {
        if(!visited[neighbor]){
          return dfs(neighbor)
        }
      })

    })(startingNode)
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
