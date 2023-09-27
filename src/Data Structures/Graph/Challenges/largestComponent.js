//Largest component in an undirected graph

//Write a function 'largestComponent' that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

const largestComponent = (graph) => {
  let largest = 0
  const visited = new Set()
  for (let node in graph) {
    if (!visited.has(node)) {
      const size = explore(node, graph, visited)
      if (size > largest) largest = size
    }
  }
  return largest
}

const explore = (node, graph, visited) => {
  if (visited.has(node)) return 0
  visited.add(node)
  let size = 1
  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) size += explore(neighbor, graph, visited)
  }
  console.log(`size ${size}`)
  return size
}

console.log(
  largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2'],
  })
)
