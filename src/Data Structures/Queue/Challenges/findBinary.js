"use strict"

const Queue = require("../queue")
function findBinary(number) {
    let result = []
    const myQueue = new Queue()
    if(number < 1) return "Not a valid Number"
    myQueue.enqueue(1)
    let count = 0

    while(count < number) {
        let front = myQueue.dequeue().toString()
        result.push(front)
        myQueue.enqueue(front + "0")
        myQueue.enqueue(front + "1")
        count++
    }
    return result
}

//ToExecute cd to "Data-Structures-Algorithms/src/Data Structures/Queue/Challenges" then run "node findBinary.js"
console.log(findBinary(0))
console.log(findBinary(1))
console.log(findBinary(3))
console.log(findBinary(5))
console.log(findBinary(10))