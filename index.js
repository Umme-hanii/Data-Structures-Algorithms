"use strict";
const LinkedList = require('./src/Data Structures/LinkedList/linkedList');

let l1 = new LinkedList();
l1.insertAtHead(23);
l1.insertAtHead(76);
l1.insertAtHead(49);
l1.insertAtHead(54);
l1.insertAtHead(22);

for (var i = 1; i < 5; i++) {
  console.log(l1.findNthNode(i).data);
}
console.log(l1.findNthNode(100));
