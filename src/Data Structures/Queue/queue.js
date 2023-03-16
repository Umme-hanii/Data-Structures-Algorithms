//Complexities of Queue Operations
// isEmpty	    O(1)
// getFront	    O(1)
// getTail	    O(1)
// size	            O(1)
// enqueue  	O(1)
// dequeue	    O(1)
const DoublyLinkedList = require('../LinkedList/DoublyLinkedList/doublyLinkedList')

 module.exports = class Queue {
    constructor() {
        this.items = new DoublyLinkedList()
    }

    isEmpty() {
        return this.items.length == 0
    }

    getFront() {
        if(this.isEmpty()) return null
        else 
            return this.items.firstNode()
    }

    getBack() {
        if(this.isEmpty()) return null
        else 
            return this.items.tailNode()
    }

    size() {
        return this.items.length
    }

    enqueue(item) {
        return this.items.insertAtTail(item)
    }

    dequeue() {
        return this.items.removeHead()
    }
}