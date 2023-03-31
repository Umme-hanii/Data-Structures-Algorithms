"use strict"
const Stack = require('../../Stack/stack')

//Time Complexity
//enqueue  - O(n)
//dequeue  - O(1)

class queueUsingStacks3 {
    constructor() {
        this.mainStack = new Stack()
        this.tempStack = new Stack()
    }

    enqueue(value) {
        this.mainStack.push(value)        
    }

    dequeue() {
        if(this.mainStack.isEmpty() && this.tempStack.isEmpty()) {
            return null
        } else if(this.tempStack.isEmpty()) {
            while(this.mainStack.isEmpty() == false) {
                this.tempStack.push(this.mainStack.pop())
            }
            return this.tempStack.pop()
        }
        return this.tempStack.pop()
    }

    print() {
        this.mainStack.print()
    }
}

var queue = new queueUsingStacks3()
for (var i = 0; i < 5; i++)
	queue.enqueue(i + 1)

console.log("----------");

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
queue.enqueue(55)
console.log(queue.dequeue())


// Sample Input
// value = 5 
// //[1, 2, 3, 4] existing queue front:1 back:4
// enqueue(value)
// dequeue()

// Sample Output
//[1, 2, 3, 4, 5]
// 1 //[2, 3, 4, 5]

