"use strict"
const Stack = require('../../Stack/stack')

//Time Complexity
//enqueue  - O(n)
//dequeue  - O(1)

class queueUsingStack {
    constructor() {
        this.mainStack = new Stack()
        this.tempStack = new Stack()
    }

    enqueue(value) {
        while(!this.mainStack.isEmpty()) {
            this.tempStack.push(this.mainStack.pop())
        }
        this.mainStack.push(value)
        while(!this.tempStack.isEmpty()) {
            this.mainStack.push(this.tempStack.pop())
        }
    }

    dequeue() {
        if(this.mainStack.isEmpty()) return null
        return this.mainStack.pop()
    }

    print() {
        this.mainStack.print()
    }
}

const queue = new queueUsingStack()

for(var i=0;i<5;i++)
    queue.enqueue(i+1)

queue.print()

console.log("----------");

console.log(queue.dequeue())
queue.print()
console.log(queue.dequeue())
queue.print()
queue.enqueue(10)
queue.print()
console.log(queue.dequeue())
queue.print()


// Sample Input
// value = 5 
// //[1, 2, 3, 4] existing queue front:1 back:4
// enqueue(value)
// dequeue()

// Sample Output
//[1, 2, 3, 4, 5]
// 1 //[2, 3, 4, 5]

