const breadthFirst = (graph, source) => {
  const queue = [source]
  while (queue.length > 0) {
    const current = queue.pop()
    console.log(current)
    for (let neighbour of graph[current]) {
      queue.unshift(neighbour)
    }
  }
}

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

breadthFirst(graph, 'a')
