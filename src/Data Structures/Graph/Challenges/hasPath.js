//Write a function hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dist). The function should return a boolean indicating whether or not there exists a directed path between the source and the destination nodes.

//hasPath using DFS
const hasPath = (graph, src, dst) => {
  const stack = [src]
  while (stack.length > 0) {
    const current = stack.pop()
    for (let neighbour of graph[current]) {
      if (neighbour === dst) {
        return true
      }
      stack.push(neighbour)
    }
  }
  return false
}

const hasPathRecursive = (graph, src, dst) => {
  if (src === dst) {
    return true
  }
  for (let neighbour of graph[src]) {
    if (hasPathRecursive(graph, neighbour, dst)) {
      return true
    }
  }
  return false
}

//hasPath using BFS
const hasPathBfs = (graph, src, dst) => {
  const queue = [src]
  while (queue.length > 0) {
    const current = queue.pop()
    if (current === dst) {
      return true
    }
    for (let neighbour of graph[current]) {
      queue.unshift(neighbour)
    }
  }
  return false
}

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
}

console.log(hasPath(graph, 'f', 'k'))
console.log(hasPathRecursive(graph, 'f', 'j'))
console.log(hasPathBfs(graph, 'f', 'h'))
