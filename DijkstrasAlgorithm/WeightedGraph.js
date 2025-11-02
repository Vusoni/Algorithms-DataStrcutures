



class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  // Weight
  addEdge(firstVertex, secondVertex, weight){
    this.adjacencyList[firstVertex].push({node: secondVertex, weight})
    this.adjacencyList[secondVertex].push({node: firstVertex, weight})
  }
}







