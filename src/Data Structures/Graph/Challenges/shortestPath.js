//Shortest Path in an undirected graph

// Write a function 'shortestPath' , that takes in an array of edges for an undirected graph and two nodes (nodeA and nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, return -1.

const shortestPath = (edges, src, dst) => {
  const graph = buildGraph(edges)
  const visited = new Set([src])
  const queue = []
  queue.push([src, 0])
  while (queue.length > 0) {
    // console.log(queue)
    const [current, distance] = queue.pop()
    // console.log(`current ${current}`)
    if (current === dst) return distance
    for (let neighbour of graph[current]) {
      if (!visited.has(neighbour)) {
        console.log(`neighbours ${neighbour}`)
        visited.add(neighbour)
        queue.unshift([neighbour, distance + 1])
      }
    }
  }
  return -1
}

const buildGraph = (edges) => {
  const graph = {}
  for (let edge of edges) {
    const [a, b] = edge
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
]

console.log(shortestPath(edges, 'w', 'z'))
