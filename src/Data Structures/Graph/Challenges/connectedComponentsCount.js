//connected components count

// Write a function, 'connectedComponentsCount' , that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph

const connectedComponentsCount = (graph) => {
  let count = 0
  const visited = new Set()
  for (let node in graph) {
    if (!visited.has(String(node))) {
      // visited.add(node)
      explore(node, graph, visited)
      count++
    }
  }
  console.log(visited)
  return count
}

const explore = (node, graph, visited) => {
  visited.add(String(node))
  for (let neighbour of graph[node]) {
    if (!visited.has(String(neighbour))) {
      explore(neighbour, graph, visited)
    }
  }
}

console.log(
  connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
)
