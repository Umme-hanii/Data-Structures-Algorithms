const LinkedList = require('./LinkedList');

describe('Linked List', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test('should insert new node at head', () => {
    linkedList.insertAtHead(3);
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(1);
    expect(linkedList.getHead().data).toEqual(1);
  });

  test('should insert new node at tail', () => {
    linkedList.insertAtTail(1);
    linkedList.insertAtTail(2);
    linkedList.insertAtTail(3);
    expect(linkedList.getHead().data).toEqual(1);
  });

  test('should return true if value is found', () => {
    linkedList.insertAtHead(3);
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(1);
    expect(linkedList.search(2)).toEqual(true);
  });

  test('should return false if value is not found', () => {
    linkedList.insertAtHead(3);
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(1);
    expect(linkedList.search(4)).toEqual(false);
  });

  test('should delete the first node', () => {
    linkedList.insertAtHead(3);
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(1);
    linkedList.deleteAtHead();
    expect(linkedList.getHead().data).toEqual(2);
  });

  test('should delete the node with given value', () => {
    linkedList.insertAtHead(3);
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(1);
    linkedList.deleteVal(2);
    expect(linkedList.getListStr()).toEqual("1 -> 3 -> null");
  });

  test('should return false if node with given value not found', () => {
    linkedList.insertAtHead(3);
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(1);
    expect(linkedList.deleteVal(4)).toEqual(false);
  });

  test('should return true if list is empty', () => {
    expect(linkedList.isEmpty()).toEqual(true);
  });

  test('should return false if list is not empty', () => {
    linkedList.insertAtHead(1);
    expect(linkedList.isEmpty()).toEqual(false);
  });
});
