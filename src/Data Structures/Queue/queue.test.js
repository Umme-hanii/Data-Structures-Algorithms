const Queue = require('./Queue')

describe('Queue', () => {
    // Test case for checking if Queue is empty or not
    test('isEmpty function should return true for an empty queue', () => {
        const queue = new Queue()
        expect(queue.isEmpty()).toBe(true)
    })
  
    // Test case for adding items to Queue
    test('enqueue function should add items to the back of the queue', () => {
        const queue = new Queue()
        queue.enqueue(1)
        queue.enqueue(2)
        expect(queue.getFront()).toBe(1)
        expect(queue.getBack()).toBe(2)
    })
  
    // Test case for removing items from Queue
    test('dequeue function should remove and return the item from the front of the queue', () => {
        const queue = new Queue()
        queue.enqueue(1)
        queue.enqueue(2)
        expect(queue.dequeue()).toBe(1)
        expect(queue.getFront()).toBe(2)
        expect(queue.getBack()).toBe(2)
    })

    //Test case for getting the front node
    test('getFront and getBack functions should return null if queue is empty', () => {
        const queue = new Queue()
        expect(queue.getFront()).toBeNull()
        expect(queue.getBack()).toBeNull()
    })
  
    // Test case for getting the size of Queue
    test('size function should return the number of items in the queue', () => {
        const queue = new Queue()
        expect(queue.size()).toBe(0)
        queue.enqueue(1)
        expect(queue.size()).toBe(1)
        queue.enqueue(2)
        expect(queue.size()).toBe(2)
        queue.dequeue()
        expect(queue.size()).toBe(1)
    })
})
