

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
}




let graph = new Graph()
graph.addVertex("Paris")
graph.addVertex('Vancouver')
graph.addVertex("Valencia")



// PSEUDO CODES

/* ~ Adding a Vertex ~
Write a method called addVertex, which accepts a name of a vertex 
Add a key to the adjacency list with the name of the vertex and set its value to be an empty array
*/


/* ~ Adding an edge
Function should accept vertices
Should find in the adjacency list the key of vertices and push second vertex to the array
Should find in the adjacency list the key of vertex second and push vertex first to the array
*/

/* ~ Removing an edge
Function must accept 2 vertices
Function should reassign the key of first vertex to be an array that doesn't contain second vertex
Function should reassign the key of second vertex to be an array that doesn't contain first vertex (The same thing but vertex order change)
*/


/* ~ Removing a Vertex
Function accept a vertex to remove
Function should loop as long as there are any other vertices in the adjacency list for that vertex
Inside of the loop, call removeEdge function with the vertex you are removing and any values in the adjacency list for that vertex
Delete the key in the adjacency list for that vertex
*/