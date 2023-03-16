const DoublyLinkedList = require('./doublyLinkedList')

describe('DoublyLinkedList', () => {
  let list

  beforeEach(() => {
    list = new DoublyLinkedList()
  })

  test('insertAtTail should add nodes to the end of the list', () => {
    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)

    expect(list.length).toBe(3)
    expect(list.head.data).toBe(1)
    expect(list.tail.data).toBe(3)
  })

  test('removeHead should remove the first node of the list', () => {
    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)

    const removedNode = list.removeHead()

    expect(removedNode).toBe(1)
    expect(list.length).toBe(2)
    expect(list.head.data).toBe(2)
    expect(list.tail.data).toBe(3)
  })

  test('removeHead should should set head and tail to null if there was only one node in the list', () => {
    list.insertAtTail(3)

    const removedNode = list.removeHead()

    expect(removedNode).toBe(3)
    expect(list.length).toBe(0)
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
    expect(list.removeHead()).toBeNull()
  })

  test('firstNode should return the data of the first node of the list', () => {
    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)

    expect(list.firstNode()).toBe(1)
  })

  test('firstNode should return null if list is empty', () => {
    expect(list.firstNode()).toBeNull()
  })

  test('toString should return a string representation of the list', () => {
    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)

    expect(list.toString()).toBe('1,2,3')
  })
})
