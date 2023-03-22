"use strict";
const Stack = require('../stack');

//This solution uses two temporary stacks to sort values
function sortStack1(stack) {
  let tempStack = new Stack()
  let finalStack = new Stack()
  while(stack.isEmpty() == false) {
    let currVal = stack.pop()   
      while(finalStack.isEmpty() == false && (finalStack.getTop() <= currVal)) {
        tempStack.push(finalStack.pop())
      }
    finalStack.push(currVal)
    while(tempStack.isEmpty() == false) {
      finalStack.push(tempStack.pop())
    }
   }
   console.log(finalStack)
   return finalStack;
}


//This solution uses only one temporary stack to sort values
function sortStack2(stack) {
  let tempStack = new Stack()
  while(!stack.isEmpty()) {
    let currVal = stack.pop()
      while(tempStack.isEmpty() == false && tempStack.getTop() >= currVal) {
        stack.push(tempStack.pop())
      }
      tempStack.push(currVal)
  }
  while(!tempStack.isEmpty()) {
    stack.push(tempStack.pop())
  }
  return stack
}

const stack = new Stack()
stack.push(2)
stack.push(97)
stack.push(4)
stack.push(42)
stack.push(12)
stack.push(60)
stack.push(23)

stack.print()

sortStack2(stack)

stack.print()