"use strict";
const Stack = require('./src/Data Structures/Stack/stack');

const myStack = new Stack()

for (var i = 0; i < 5; i++) {
  myStack.push(i);
}

console.log("Is stack empty? " + myStack.isEmpty());
console.log("top: " + myStack.getTop());

for (var i = 0; i < 5; i++) {
  console.log("Element popped: " + myStack.pop());
  console.log("top: " + myStack.getTop());
}

console.log("Is stack empty?: " + myStack.isEmpty());
console.log("top: " + myStack.getTop());
