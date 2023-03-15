"use strict";
const LinkedList = require('./linkedList.js');

//Access HeadNode => list.getHead()
//Acess Length => list.length;
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data ; Node nextElement;}
module.exports = function removeDuplicates() {
  if (this.isEmpty()) {
    return null;
  }

  //If list only has one node, leave it unchanged
  if (this.getHead().nextElement == null) {
    return this;
  }

  let outerNode = this.getHead();
  while (outerNode != null) {
    let innerNode = outerNode; // Iterator for the inner loop
    while (innerNode != null) {
      if (innerNode.nextElement != null && outerNode.data == innerNode.nextElement.data) { //Duplicate found ahead
        innerNode.nextElement = innerNode.nextElement.nextElement; // Remove duplicate
      } else {
        innerNode = innerNode.nextElement; // Otherwise simply iterate ahead
      }
    }
    outerNode = outerNode.nextElement;
  }

  return this;
}

// let list = new LinkedList();
// list.insertAtHead(7);
// list.insertAtHead(7);
// list.insertAtHead(7);
// list.insertAtHead(22);
// list.insertAtHead(14);
// list.insertAtHead(21);
// list.insertAtHead(14);
// list.insertAtHead(7);


// list.printList();
// removeDuplicates(list);
// list.printList();