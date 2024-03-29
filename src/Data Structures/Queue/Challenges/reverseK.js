//Using extra space
// const Stack = require("../../Stack/stack")
// const Queue = require("../queue")
// function reverseK(queue, k) {
//     let count = 0
//     let resultQueue = new Queue()
//     let myStack = new Stack()

//     if(!queue.isEmpty()) {
//         while(count < k) {
//             myStack.push(queue.dequeue())
//             count++
//         }

//         while(!myStack.isEmpty()) {
//             resultQueue.enqueue(myStack.pop())
//         }

//         while(!queue.isEmpty()) {
//             resultQueue.enqueue(queue.dequeue())
//         }
//     }
//     return resultQueue
// }

// var queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(5)
// queue.enqueue(6)
// queue.enqueue(7)
// queue.enqueue(8)
// queue.enqueue(9)
// queue.enqueue(10)

// let result = new Queue()
// result = reverseK(queue, 5) 
// let queueSize=result.size();
// for(var i=0;i<queueSize;i++)
//   console.log(result.dequeue());

//Without using extra space
const Queue = require("../queue")
const Stack = require("../../Stack/stack")
function reverseK(queue, k) {
    if(!queue.isEmpty()) {
        let myStack = new Stack()
        for(let i = 0; i < k; i++) {
            myStack.push(queue.dequeue())
        }

        while(!myStack.isEmpty()) {
            queue.enqueue(myStack.pop())
        }

        for(let i = 0; i < queue.size() - k; i++) {
            queue.enqueue(queue.dequeue())
        }
    }

    return queue
}

var queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(8)
queue.enqueue(9)
queue.enqueue(10)

reverseK(queue, 5) 
let queueSize=queue.size();
for(var i=0;i<queueSize;i++)
  console.log(queue.dequeue());