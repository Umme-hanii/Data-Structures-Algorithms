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

describe('LinkedList', () => {
  describe('removeDuplicates', () => {
    test('should remove duplicates from a list', () => {
      const linkedList = new LinkedList();
      linkedList.insertAtTail(1);
      linkedList.insertAtTail(2);
      linkedList.insertAtTail(3);
      linkedList.insertAtTail(2);
      linkedList.insertAtTail(4);
      linkedList.insertAtTail(3);
      linkedList.insertAtTail(5);
      
      const expectedList = new LinkedList();
      expectedList.insertAtTail(1);
      expectedList.insertAtTail(2);
      expectedList.insertAtTail(3);
      expectedList.insertAtTail(4);
      expectedList.insertAtTail(5);
      
      linkedList.removeDuplicates();
      
      expect(linkedList.getListStr()).toBe(expectedList.getListStr());
    });
    
    test('should return null if list is empty', () => {
      const linkedList = new LinkedList();
      
      expect(linkedList.removeDuplicates()).toBeNull();
    });
    
    test('should return the same list if it has only one node', () => {
      const linkedList = new LinkedList();
      linkedList.insertAtTail(1);
      
      const expectedList = new LinkedList();
      expectedList.insertAtTail(1);
      
      expect(linkedList.removeDuplicates().getListStr()).toBe(expectedList.getListStr());
    });
  });
});

describe('findNthNode', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
    list.insertAtHead(3);
    list.insertAtHead(2);
    list.insertAtHead(1);
    list.insertAtHead(0);
  });

  it('returns null if the list is empty', () => {
    list.deleteAtHead();
    list.deleteAtHead();
    list.deleteAtHead();
    list.deleteAtHead();
    expect(list.findNthNode(3)).toBeNull();
  });

  it('returns null if the provided n is out of bounds', () => {
    expect(list.findNthNode(5)).toBeNull();
  });

  it('returns the nth node from the end', () => {
    expect(list.findNthNode(2).data).toBe(2);
  });

  // it('returns the head node when n is 0', () => {
  //   expect(list.findNthNode(0).data).toBe(0);
  // });
});
