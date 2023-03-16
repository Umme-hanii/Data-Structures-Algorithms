class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

module.exports = class DoublyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    // Add node to the end of the list
    insertAtTail(data) {
        const newNode = new Node(data)
        if(this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return newNode
    }

    // Remove node from the beginning of the list
    removeHead() {
        if(this.length == 0) return null

        const nodeToRemove = this.head
        if(this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
        }
        this.length--
        return nodeToRemove.data
    }

    // Return first node of doubly linked list
    firstNode() {
        if(this.head) return this.head.data
        else return null
    }

    //Return list items
    toString() {
        const list = []
        let currentNode = this.head

        while(currentNode != null) {
            list.push(JSON.stringify(currentNode.data))
            currentNode = currentNode.next
        }
        console.log(list.toString())
        return list.toString()
    }
}